import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDIIHPoVShlmfkQ3LJVkd9DbcEu6toGsd4",
  authDomain: "reactchatapp-40b87.firebaseapp.com",
  databaseURL: "https://reactchatapp-40b87-default-rtdb.firebaseio.com",
  projectId: "reactchatapp-40b87",
  storageBucket: "reactchatapp-40b87.appspot.com",
  messagingSenderId: "156073413271",
  appId: "1:156073413271:web:b2e76005431dcef7f8b7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 