import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom"
import React, { Component } from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Shop from './components/Shop';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}></Route> 
            <Route exact path="/dashboard" element={<Dashboard/>}></Route> 
            <Route exact path="/shop" element={<Shop/>}></Route> 
          </Routes>
        </Router>
      </div>
    )}}
