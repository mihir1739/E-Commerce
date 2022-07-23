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
            <span className="textside">Shop</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link sidesix" href="service.php">
            <span className="textside">Logout</span>
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
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-S2ALf5T3rmydyQRGdjs4sBDQlgPudyb9ZQ&usqp=CAU"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Wishlist</h4>
                                  <h2>120</h2>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACRkZHS0tIwMDAfHx/r6+u4uLj4+PjW1tYUFBT7+/vZ2dnMzMzw8PDm5ubFxcVmZmaZmZlFRUWkpKQpKSk5OTltbW1ycnKHh4cqKirg4OC1tbVOTk4NDQ2YmJhZWVl6enqjo6NRUVFISEhhYWE4ODgiIiJ/f38TExOKiop6nVwhAAAEv0lEQVR4nO2d6XaiQBBGCRBxYRMZkYBxj07e/wEHtwEXZLGaajjf/TVjsOEe6a7eKBQFAAAAAAAAAAAAAAAAAAAAAAAAAAB0moHhqQvfsrmvQwSO5c0+P658eT3uCyKkH8Xq/PvjnsDhvjAKbMufTR/criy4L+8tRo6hLr9y5c5sW1ofR1q8mhe4XfgbcV9sVRxXDT6LxTK0R7E/iMNJJbcLbbhRkzhQ8YfLonNf/kvsKP7dDmvLnQm5LXJI4kCQHwcqYXK7PBAZv8t9LZd9sLYcu6fNbj6dcAtl6Fv+qlZzkmiEsZk2KtFP9m8uo1JK5Krjem7DYOE+dtCWEv2I9sAPa9a4+SrWRjnFZu8Ftpo4clxvXK/G6TvVeN2z7mWO5mhO+2YcbusFucms3PjPT7/yJdznBtv1x/Xuys+5Gkf90ifKfLOxgZRphMt6AXw/S+JAxbOp6ddjITp3uPW6lUlzksSB8j9cBjMtQ6W2ecCtFQm+As99ZzIiLWlHZvKU0br6nbl5EQdKk9b2KYVHLvHjFMor9N3C6L0td2KX3g0k5T3HKV/7vqcrX6MczqVV4w9hqXfEJeU2qlEhDpSkCcNDsdx+tdYEzW02YFjQgi5DQ2iPUbzhLNdtGqxd8RMowg29Z27DzSEe0DSVhYg2NO/lfsZrlygOlGMn2DA7IT1Jmsrmp/Vsp9frOWasTvYiik8HL6FFHgeqIuQCLj2ZyWWSpGdqPJii7p1zqN+f/CKv5DKDIOaeiLn9k9Ph+C+DaNrzLaYGtaB9LPY47rR0brkLukVraCRlHotcMXtlOZAaqqd5WFuGGzRlStnoLD/8RPDdRRVqhoSK+jgJQrIJJqM0ui6V3r+ddZaFLZlhUgkX3DZP8cgUFYfbJQe6yeGaK0nCGVMJRtwmuVD14ErM0DBBtRBVf/OEaD5pBB8G+BJBM/vlF5+IjTWJYf40Gz8rEkMZ+zNXaDYuyDIqfAbNxJvMhjSNKQw5gSEMYcgPDGEIQ35gCEMY8gNDGMKQHxjCEIYS0HrD/cIdvKTthj6JgMSGp61PvVK00/C4jaf0Avs7DwtxGf5JBCs8wbJpn+FCUYIqx9evtFyGrtKvdHz9lTYuQ+3m6dhi6mdcgKEoYHhP9wz1UF3e/L9rhqcQr2U+6JrhZdeelX7SNcPrbqg0j0PXDK997XQ/U9cMr7tnt/8/6ZrhZSyROaRrhufB4yizJa1zhh8HV/OzW1+7Z3gPDGHYPN03tM5PPpbmp3WGfjacl+C3dYab26FDEd/1H9djmy/VFMUtfbD+xkNQbIZ/j4/eW0Yp3lrA4JvV3zeUdZZz7Wk1sPsvab1hwvAF3zRJo2ReIe3+GjAMYQhDfmAIQxjyA0MYwpAfGMIQhvzAEIYw5Kf7hjQpd+VKCXkLzWsEdsUnYoMmY9vTXN6SQJNYsPwKV/PQJKOttp+8WYhSX8uaNpEucaJVfComyDImyxov6F7CJuuPSJj0Ws6aSJa+VJG1OSV9h4CM+S+J3/oiX9gnzjwvX2tDLqgokUyjKF3MTptfbq//1N+kV4BT6ZlOYQQiX/Jo+9z5Wie+8Nf4jAbGWuXBM5p6vRQAAAAAAAAAAAAAAAAAAAAAAAAAAHjBP2bAeIxL/dV7AAAAAElFTkSuQmCC"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Wallet</h4>
                                  <h2>50</h2>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="col-lg-5 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                          <div className="inforide">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                                  <img src="data:image/png;base64,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"/>
                              </div>
                              <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                  <h4>Orders</h4>
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