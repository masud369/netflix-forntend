import React from 'react';
import ItemCard from '../Components/ItemCard.jsx';
import imageOne from '../media/card.jpg';
import imageTow from '../media/home.jpg';

const items = [
  {
    imageUrl: imageOne,
    description: 'Item 1 Description',
  },
  {
    imageUrl: imageTow,
    description: 'Item 2 Description',
  },
];

const ItemList = () => {
  return (
    <div className="item-list" style={{display:"flex"}}>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;