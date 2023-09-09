import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Orders.scss";
import usersData from "../../../userData";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = {
    id: 1,
    username: "Silas",
    isSeller: true,
  };

  const delay = (ms) => new Promise((resolve)=>{ setTimeout(resolve, ms)})
  useEffect(()=> {
    try {
      delay(2000).then(()=>{
        setOrders(usersData[0].orders)
        setIsLoading(false)
        console.log(orders)
      })
    } catch (err) {
      console.log("An Error Occured while fetching orders:", err)
    }
  })

  if(isLoading === true) {
    return <h1 style={{height: "20rem", display: "flex", justifyContent: "center", alignItems: "center"}}>LOADING......</h1>
 }

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          { orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>
                  <img 
                      src= {order.image}
                      alt={order.title}
                      />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>{order.buyer}</td>
                <td>
                <img className="message" src="./img/message.png" alt="" />
                {order.contact}
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;