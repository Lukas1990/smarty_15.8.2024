import ListTodo from "./ListTodo"
import AddTodo from "./AddTodo"

import {useState, useEffect} from "react"

function TodoApp(props) {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)

  function handleItemSubmit(item) {
    setItems([...items, item])
  }
  function handleItemDelete(id) {
    setItems( items.filter((item, index) => index != id) )
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items]);

  return (
   <div className="kontajner" id="zoznam_uloh">
      <ListTodo phrase={props.phrase} items={items} onItemDelete={handleItemDelete}/>
      <AddTodo phrase={props.phrase} onItemSubmit={handleItemSubmit} />
    </div>
  );
}

export default TodoApp;
