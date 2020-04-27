import React, { useState } from "react";
import classes from "./ToDo.module.css";
import Items from "../../components/Items/Items";

export default () => {
  const [items, setItems] = useState({
    "todo-1": {
      text: "Hello world",
      completed: false,
    },
    "todo-2": {
      text: "Bye world",
      completed: true,
    },
  });

  function deleteItem(id) {
    const newItems = { ...items };
    delete newItems[id];
    setItems(newItems);
  }

  return (
    <div className={classes.ToDo}>
      <Items items={items} deleteItem={deleteItem} />
    </div>
  );
};
