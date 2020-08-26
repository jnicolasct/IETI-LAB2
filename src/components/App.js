import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from "./TodoApp";
import {Login} from "./Login";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, ruta:''};
        this.clickHandler = this.clickHandler.bind(this);
    }



    render() {
            const LoginView = () => (
                <Login clickHandler={this.clickHandler}/>
            );
            const TodoAppView = () => (
                <TodoApp/>
            );
            if (this.state.isLoggedIn){
                        this.state.ruta = TodoApp;
                    }
                    else{
                        this.state.ruta = LoginView;
                    }




            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="Aepp-title">TODO React App</h1>
                            <br/>
                        </header>
                        <br/>
                        <br/>
                        <div>
                            <Route exact path="/" component={this.state.ruta}/>
                        </div>
                    </div>
                </Router>
            );
        }

        clickHandler (e) {
        this.setState({isLoggedIn:true}) ;
        }
    }

export default App;

