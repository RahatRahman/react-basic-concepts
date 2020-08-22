import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const players = ["Saliba", "Ceballos", "Bukayo", "Luiz", "Chambers"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Adobe XD", price: "$15.99" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>

        <ul>
          {players.map((player) => (
            <li>{player}</li>
          ))}
          {products.map((product) => (
            <li>
              {product.name}: {product.price}
            </li>
          ))}
        </ul>
        {products.map((pdct) => (
          <Product product={pdct}></Product>
        ))}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Person name={players[0]} nationality="France"></Person>
        <Person name={players[1]} nationality="Spain"></Person>
        <Person name={players[2]} nationality="England"></Person>
        <Person name={players[3]} nationality="Brazil"></Person> */}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>
            {user.name}: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/* <button onClick={handleIncrease}>Increase</button> */}
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "5px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px 20px",
  };
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Nationality: {props.nationality}</h3>
    </div>
  );
}

export default App;
