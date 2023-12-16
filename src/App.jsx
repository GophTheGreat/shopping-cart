import "./App.css";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { items } from "./data";

function App() {
  return (
  <>
    <Navbar></Navbar>
    {items.map(item => (
      <Item key={item.id} item={item}></Item>
    ))}
  </>
  )
}

export default App;
