import React, { Component } from 'react'
import { articles } from './items'
import ShopItem from './ShopItem'
export default class Shop extends Component {
    render() {
      return (
        <div className="container">
        <h1>Cart</h1>
        <div className="row my-2">
        {articles.map((element)=>{
          return <div className="col-md-6"><ShopItem title={element.Name} price={element.Price} quantity={element.Quantity}/></div>
        })}
        </div>
        </div>
      )}}