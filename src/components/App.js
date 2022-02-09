import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  let gurl ='http://localhost:6001/listings';
  let [items,setItems] = useState([]);

  useEffect(()=>{
    fetch(gurl)
    .then(r=>r.json())
    .then(gregs=>setItems(gregs))
  },[])

  function handleUpdateItem(updatedItem){
    setItems(items.map((item)=>{
      return(item.id===updatedItem.id ? updatedItem:item)
    }))
  }

  function handleDeleteItem(deletedItem){
    setItems(items.filter((item)=>item.id!==deletedItem.id))
  }

  let [searchText,setSearchText]=useState('');

  function handleSearchChange(text){
    console.log(text)
    setSearchText(text)
  }

  let filteredItems = items.filter((item)=>item.description.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="app">
      <Header
      onSearchChange={handleSearchChange}
      searchText={searchText}
      />
      <ListingsContainer
        items={filteredItems}
        gurl={gurl}
        onFavoriteItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
