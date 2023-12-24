import "./App.css";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {

  async function getItems(quantity){
    console.log("quantity is " + quantity)
    if(quantity > 20){quantity = 20};
      
    const fetchedItems = await fetch(`https://fakestoreapi.com/products?limit=${quantity}`)
                            .then(res=>res.json())

    console.log(fetchedItems);
  
    return fetchedItems;
  }

  const [fetchedItems, setFetchedItems] = useState([]);
  useEffect(() => {
    getItems(20)
      .then((result) => {
        setFetchedItems(result);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  const [cartItems, setCartItems] = useState([]);

  function onAddToCart(id, quantity) {
    console.log("Adding items to cart of id: ", id, "and quantity: ", quantity)
    //find the items corresponding to the ID
    let item = fetchedItems.find(item => item.id === id)
    //loop by the quantity
    let newCartItems = [];
    for(let i = 0; i < quantity; i++){
      //Store items in temp array
      newCartItems.push(item);
    }
    console.log("Items to add to cart: ", newCartItems);
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.concat(newCartItems);
      reportCart(updatedCartItems);
      return updatedCartItems;
     });
  }

  function reportCart(updatedCartItems){
    console.log(updatedCartItems);
  }

  return (
  <>
    <Navbar cartItems={cartItems}></Navbar>
    <div className="itemWrapper">
      {fetchedItems.map(item => (
        <Item key={item.id} item={item} onAddToCart={onAddToCart}></Item>
      ))}
    </div>
  </>
  )
}

export default App;
