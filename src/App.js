// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import WooCommerceService from './services/woocommerceService';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const ordersData = await WooCommerceService.getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Orders from WooCommerce - potrebno unijeti prave endpointe </h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.order_number} - {order.total}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
