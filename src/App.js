import React ,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {
    HomePage,
    CounterButtonPage,
    PeopleListPage,
    NotFoundPage,
    ProtectedPage,
    ControlledFormPage,
    UncontrolledFormPage,
    UserProfilePage
} from "./pages";
import {NavBar} from "./NavBar";
import {FormsNavBar} from "./FormsNavBar";
import {UserDataLoader} from './UserDataLoader'
import {ThemeContext} from "./ThemeContext";
import {Button} from "./Button";


function App() {

    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <Router>
                    <NavBar/>
                    <div className='App-header'>
                        <Button onClick={() => setTheme('dark')}>Dark</Button>
                        <Button onClick={() => setTheme('light')}>White</Button>
                        <Switch>

                            <Route path="/" exact><HomePage/> </Route>
                            <Route path="/counter"><CounterButtonPage/> </Route>
                            <Route path="/people-list"><PeopleListPage/> </Route>
                            <Route path="/protected"><ProtectedPage/></Route>
                            <Route path="/user">
                                {/*<UserDataLoader>*/}
                                    <UserProfilePage/>
                                {/*</UserDataLoader>*/}
                            </Route>
                            <Route path="/forms">
                                <Router>
                                    <FormsNavBar/>
                                    <Switch>
                                        <Route path="/forms/controlled"><ControlledFormPage/></Route>
                                        <Route path="/forms/uncontrolled"><UncontrolledFormPage/></Route>
                                    </Switch>
                                </Router>
                            </Route>
                            <Route><NotFoundPage/></Route>
                        </Switch>
                    </div>
                </Router>

                {/*<header className="App-header">*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                {/*    <p>This is so cool.</p>*/}
                {/*    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn*/}
                {/*        React</a>*/}
                {/*</header>*/}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
