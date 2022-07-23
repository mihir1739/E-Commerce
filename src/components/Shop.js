import React, { Component } from 'react'
import { articles } from './items'
import ShopItem from './ShopItem'
let h = 0;
export default class Shop extends Component {
    render() {
      return (
        <div className="container">
        <h1>Shop</h1>
        <div className="row my-2">
        {articles.map((element)=>{
          h++;
          return <div className="col-md-6"><ShopItem title={element.Name} key={h}price={element.Price} quantity={element.Quantity}/></div>
        })}
        </div>
        </div>
      )}}