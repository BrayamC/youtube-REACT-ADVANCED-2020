import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  return <article className='product'>
    <img src = {image?.url || defaultImage} alt = {name}/>
    <h4>{name}</h4>
    <h4>{price ? "$" + price : "Call for Price"}</h4>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

/*
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage
}
*/
export default Product;
