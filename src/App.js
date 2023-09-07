import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  let [advice, setAdvice] = useState("");
  let [count, setCount] = useState(0);
  async function getAdive() {
    let result = await fetch("https://api.adviceslip.com/advice");
    let data = await result.json();
    console.log(result);
    console.log(data);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdive();
  }, []);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={getAdive}>Advice of day</button>
      <p>{advice}</p>
      <p>
        you have read <strong>{count}</strong> pices of advice today
      </p>
    </div>
  );
}
