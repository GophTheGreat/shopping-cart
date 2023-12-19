import "./App.css";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {

  async function getItems(quantity){
    console.log("quantity is " + quantity)
    if(quantity > 20){quantity = 20};
      
    const fetchedItems = await fetch('https://fakestoreapi.com/products?limit=5')
                            .then(res=>res.json())

    console.log(fetchedItems);
  
    return fetchedItems;
  }

  const [fetchedItems, setFetchedItems] = useState([]);
  useEffect(() => {
    getItems(2)
      .then((result) => {
        setFetchedItems(result);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount


  return (
  <>
    <Navbar></Navbar>
    <div className="itemWrapper">
      {fetchedItems.map(item => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  </>
  )
}

export default App;
