import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
      return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav">

            <a className="nav-link navlogo text-center" href="index.php">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
            </a>

        <li className="nav-item">
          <a className="nav-link sidefrst" href="index.php">
            <span className="textside">Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link sidesecnd" href="employee.php">
            <span className="textside"> Employee</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link sidesthrd" href="clients.php">
            <span className="textside"> Clients</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link sidesforth" href="job.php">
            <span className="textside">Jobs</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link sidesfifth" href="quotation.php">
            <span className="textside">Quotation</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link sidesix" href="service.php">
            <span className="textside">Services</span>
          </a>
        </li>
      </ul>      
    </div>
  </nav>

                <div className="content-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
                                  <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Cart</h4>
                                  <h2>20</h2>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                                  <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Clients</h4>
                                  <h2>120</h2>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                                  <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Jobs</h4>
                                  <h2>50</h2>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                                  <img src="https://vignette.wikia.nocookie.net/nationstates/images/2/29/WS_Logo.png/revision/latest?cb=20080507063620"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>ABC</h4>
                                  <h2>50</h2>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </>
      )
    }
  }