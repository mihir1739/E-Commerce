import React, { Component } from 'react'

export default class ShopItem extends Component {
    render() {
        let {title , price , quantity} = this.props;
      return (
        <div className="card" style={{margin:"10px 15px 10px",width: "25rem"}}>
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,30)}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Price - {price}</h6>
            <p className="card-text">only {quantity} remaining!</p>
            <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-primary">Add to Cart</button>
                <button type="button" className="btn btn-success">Wishlist</button>
            </div>
            
          </div>
        </div>
      )}}