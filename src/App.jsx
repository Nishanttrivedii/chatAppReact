import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { getDatabase } from "firebase/database";
import {  ref, push, set } from "firebase/database";
import { useEffect } from "react";
import { onChildAdded  } from "firebase/database";

import "./App.css";


function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([
    // { name: "user1", message: "message1" },
    // { name: "dummyUser", message: "message2" },
  ]);
  const db = getDatabase();
const chatListRef = ref(db, 'chats');
useEffect(()=>{
  onChildAdded(chatListRef,(data)=>{
    setChats(chats=>[...chats,data.val()])
     
  });
},[])

  const [msg, setMsg] = useState("");
  
  const sendChat = () => {
    
const chatRef = push(chatListRef);
set(chatRef, {
    // ...
    name,message:msg
});
    // const c = [...chats];
    // c.push({ name, message: msg });
    // setChats(c);
     setMsg('');
   

  };
  return (
    <>
      <div>
        {name? null :<div>
          <input
            type="text"
            placeholder="Enter name to start"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>}
        <h1>User:{name}</h1>
        <div className="chat-container">
          {chats.map((c) => (
            <div className={`container ${c.name === name ? "me" : ""}`}>
              <p className="chatbox">
                <strong>{c.name}   </strong> 
                <span>{c.message}</span>
              </p>
            </div>
          ))}
          
          <div className="btm">
            <input
              type="text"
              placeholder="enter your chat"
              onInput={(e) => setMsg(e.target.value)}
            />
            <button onClick={(e) => sendChat()}>send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
