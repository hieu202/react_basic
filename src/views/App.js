import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import Nav from './Nav/Nav';
import Home from './Nav/Home';
import 'react-toastify/dist/ReactToastify.css';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          {/* <MyComponent/> */}
          <Switch>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
          {/* <ListTodo /> */}
          {/* <Home /> */}
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
