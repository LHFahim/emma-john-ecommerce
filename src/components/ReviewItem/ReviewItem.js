import React from 'react';

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-item flex space-x-10 space-y-10  bg-yellow-300">
      <div>
        <img className="w-28 h-28" src={img} alt="" />
      </div>

      <div className="flex items-center justify-between w-5/12">
        <div>
          <p>{name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity} </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(id)}
            className="py-2 px-3 rounded text-white bg-green-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
