import "./App.css";
import Item from "./components/Item";
import { items } from "./data";

function App() {
  return (
  <>
    {items.map(item => (
      <Item key={item.id} item={item}></Item>
    ))}
  </>
  )
}

export default App;
