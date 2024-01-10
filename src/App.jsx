import "./App.css";
import AppRouter from "./Router";
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

  function onAddToCart(item, quantity) {
    if(quantity === 0){
      return;
    }
    console.log("Adding items to cart of id: ", item.id, "and quantity: ", quantity)
    //search cart to see if an item already exists
    //if it does just add quantity
    if(cartItems.some(cartItem => cartItem.item.id === item.id)){
      console.log("Item previously exists in cart")
      //take the previous cart items array
      //copy it
      //sub the quantity of the new items
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        const index = updatedCartItems.findIndex(cartItem => cartItem.item.id === item.id)
        updatedCartItems[index].quantity += quantity;
        reportCart(updatedCartItems);
        return updatedCartItems;
       });
    }

    //if not proceed to add item of quantity
    else {
      const newCartItems = {item, quantity};
      setCartItems(prevCartItems => {
      console.log("Item does not previously exist in cart")
      const updatedCartItems = prevCartItems.concat(newCartItems);
      reportCart(updatedCartItems);
      return updatedCartItems;
     });
    }
  }

  function reportCart(updatedCartItems){
    console.log(updatedCartItems);
  }

  return (
  <>
    <AppRouter fetchedItems={fetchedItems} onAddToCart={onAddToCart} cartItems={cartItems} />
  </>
  )
}

export default App;
