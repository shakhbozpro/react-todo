import "./assets/styles/main.css";
import "./app.css";
import { useState } from "react";

function App() {
  let [value, setValue] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iphone",
      price: 1300,
      isComplete: false,
    },
    {
      id: 2,
      name: "redmi",
      price: 200,
      isComplete: false,
    },
    {
      id: 3,
      name: "A52",
      price: 310,
      isComplete: true,
    },
    {
      id: 4,
      name: "poco x3",
      price: 390,
      isComplete: false,
    }
  ])


  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(value);
    const newProduct = {
      id: products[products.length - 1].id + 1,
      name: value,
      price: 100,
      isComplete: false,
    };
    setProducts([...products, newProduct]);
    setValue("");
  };

  return (
    <>
      <form className="add-todo-form" onSubmit={handleFormSubmit}>
        <input className="add-todo-input" value={value} type="text" onChange={(evt) => setValue(evt.target.value)} />
        <button className="add-todo-btn" type="submit">Enter</button>
      </form>

      <ul className="products-list" style={{color: "white"}}>
        {
          products.map((item) => (
            <li className="todo-item" key={item.id}>
              <input defaultChecked={item.isComplete} type="checkbox" />
              <h2 className="todo-name">{item.name}</h2>
              <div>
              <button className="todo-edit-btn">Edit</button>
              <button className="todo-delete-btn">Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
