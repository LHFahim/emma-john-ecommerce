import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = props => {
  // console.log('Inside Product:');

  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product relative border border-slate-400 rounded-xl">
      <div className="p-2">
        <img className="rounded-xl " src={img} alt="" />
        <div className="m-4">
          <h3 className="text-xl">{name}</h3>
          <p>{price} USD</p>
          <p>
            <small>{seller}</small>
          </p>
          <p>
            <small>{ratings} stars</small>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full absolute bottom-0 py-3  rounded-xl bg-[#FFE0B3] hover:bg-orange-500 duration-200"
      >
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
