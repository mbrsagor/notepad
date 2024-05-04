import time, requests

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from redis_om import get_redis_connection, HashModel
from starlette.requests import Request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)

redis = get_redis_connection(
    host='redis-14084.c300.eu-central-1-1.ec2.cloud.redislabs.com',
    port=14084,
    password='IUNCCBlIQkl2BQMj8QkKJr6csKCNJR9H',
    decode_responses=True

)


class Order(HashModel):
    product_id = str
    price = float
    fee = float
    total = float
    quantity: int
    status = str  # pending #completed #refunded

    class Meta:
        database = redis


@app.get("/orders/{pk}")
def order_detail(pk: str):
    return Order.get(pk)


@app.post("/orders")
# async def create(request: Request, background_tasks=BackgroundTasks):  # id, quantity
async def create(request: Request):  # id, quantity
    body = await request.json()

    req = requests.get('http://localhost:8000/products/%s' % body['id'])
    product = req.json()

    order = Order(
        product_id=body['id'],
        price=product['price'],
        fee=0.2 * product['price'],
        total=0.2 * product['price'],
        quantity=body['quantity'],
        status='pending'
    )
    order.save()

    # background_tasks.add_task(complete_order, order)

    complete_order(order)
    return order


def complete_order(order: Order):
    time.sleep(5)
    order.status = 'completed'
    order.save()
    redis.xadd('complete_order', order.dict(), '*')
