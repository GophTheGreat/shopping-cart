import "./App.css";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { items } from "./data";

function App() {
  //do stuff with promises 
  //
  return (
  <>
    <Navbar></Navbar>
    <div className="itemWrapper">
      {items.map(item => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  </>
  )
}

export default App;
