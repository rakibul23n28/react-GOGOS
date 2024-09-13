import { useState,useEffect } from "react";
import image from './assets/a.jpg'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <img src={image} alt=""/>
      <h1 className="text-3xl font-bold bg-slate-500">{message}</h1>
    </div>
  );
}

export default App;
