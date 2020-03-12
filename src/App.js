import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import UserList from './components/UserList';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Header></Header>
          < Login />
          <UserList/>
        {/* <p>
          Hello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        < Footer companyName='TED Company' age={50}/>

        <SideBar menus ={[
          {title:'News', url:'https://google.com'},
          {title:'News', url:'https://google.com'}
        ]} />
      </header>
    </div>
  );
}

export default App;
