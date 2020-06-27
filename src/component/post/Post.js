import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="list-group text-left">
                            {this.state.posts.map((post, index) => {
                                return <a key={index} href={post.id} className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h4>{post.title}</h4>
                                        <small>1 days ago</small>
                                    </div>
                                    <p>{post.body}</p>
                                </a>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
