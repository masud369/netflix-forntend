import React from 'react';
import ItemList from '../Components/ItemList';


const ItemCard = ({ item }) => {
  if (!item) {
    return null; 
  }
  const { imageUrl, description } = item;

  const handleImageError = (e) => {
    e.target.src = 'fallback-image-url.jpg'; 
  };

  const itemCard = {
    width: "300px",
  border: "1px solid #ccc",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "16px",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#fff",
  }
  const itemImage = {
    maxWidth: "100%",
  height: "auto",
  border: "1px solid #eee",
  marginBottom: "12px",
  }
const itemDiscription = {
  fontSize: "16px",
  color: "#333",
}
  return (
    <div style={itemCard}>
      <img
        src={imageUrl}
        alt={description}
        onError={handleImageError}
        style={itemImage}
      />
      <p style={itemDiscription}>{description}</p>
    </div>
  );
};

export default ItemCard;