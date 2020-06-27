import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './component/Welcome';
import About from './component/about/About';
import UserList from './component/user/UserList';
import Counter from './component/counter/Counter';
import ProductLIst from './component/product/ProductLIst';
import Event from './component/event/Event';
import MyForm from './component/event/MyForm';
import StateLess from './component/stateLess/StateLess';
import MyBook from './component/books/MyBook';
import Post from './component/post/Post';
import PostForm from './component/form/PostForm';
import Nav from './component/nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/about' component={About} />
            <Route path='/counter' component={Counter} />
            <Route path='/myform' component={MyForm} />
            <Route path='/postform' component={PostForm} />
            <Route path='/post' component={Post} />
            <Route path='/event' component={Event} />
            <Route path='/userlist' component={UserList} />
            <Route path='/stateless' component={StateLess} />
            <Route path='/productList' component={ProductLIst} />
            <Route path='/mybook' component={MyBook} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
