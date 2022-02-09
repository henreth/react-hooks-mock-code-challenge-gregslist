import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items,gurl,onFavoriteItem, onDeleteItem}) {
  let itemsToDisplay=items.map((item)=>(
    <ListingCard
      key={item.id}
      item={item}
      gurl={gurl}
      onFavoriteItem={onFavoriteItem}
      onDeleteItem={onDeleteItem}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {itemsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
