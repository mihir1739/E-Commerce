import React, { Component } from 'react'

export default class Login extends Component {
    render() {
      return (
        <div className="container" style={{padding:"25px 175px 25px"}}>
            <h1>Login</h1>
          <form>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">Email address</label>
              <input type="email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">Password</label>
              <input type="password" id="form2Example2" className="form-control" />
              
            </div>
            <div className="col d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
            </div>
            <div className="row mb-2">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked onChange={()=>{console.log('a');}}/>
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <div className="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
            </form>
        </div>
      )
    }
  }