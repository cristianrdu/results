import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';


const CollectionItem = ({item, addItem }) => {
  const {name, price, imageUrl} =item;
  return (
  <div className='collection-item' >
    <img className='image' src={imageUrl} onClick={ () => addItem(item)} />
    <div className='collecton-footer'>
      <span className='name'>{name} </span>
      <span className='price'>${price}</span>
    </div>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);