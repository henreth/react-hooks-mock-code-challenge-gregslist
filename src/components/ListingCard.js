import React from "react";

function ListingCard({item,gurl,onFavoriteItem,onDeleteItem}) {

  function handleFavoriteClick(){
    fetch(`${gurl}/${item.id}`,{
      method:'PATCH',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        isFavorited:!item.isFavorited
      })
    })
    .then(r=>r.json())
    .then(updatedItem=>onFavoriteItem(updatedItem))
  }

  function handleDeleteClick(){
    fetch(`${gurl}/${item.id}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(itemX=>{
      console.log(item);
      onDeleteItem(item)})
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {item.isFavorited ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
