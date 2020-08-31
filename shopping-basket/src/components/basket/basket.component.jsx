import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BasketItem from '../basket-item/basket-item.component';
import './basket.styles.scss';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';


const Basket = ({ cartItems, total }) => (
  <div className='basket'>
    <h4>Your shopping Basket</h4>
    <div className='basket-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Total Price</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <BasketItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: {total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Basket);
