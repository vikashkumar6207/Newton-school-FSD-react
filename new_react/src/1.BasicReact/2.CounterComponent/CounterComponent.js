import { useState } from "react";


function CounterComponent(props) {

    const {heading} = props;
    const [count, setCount] = useState(0);
    // let count = 0;

    // State => its a veriable only with gurantee if State change then
    //  my counterComponent will the executed once again
    const decrement = ()=>{
        // count = count-1;
        setCount(count-1);
        console.log(count, "decrement clicked");
    };
    const increment = ()=>{
        // count = count+1; // WITH STATE VARIABLE DO NOT USE THIS
        setCount(count+1);
        console.log(count, "increment clicked");
    };
    
    return (
        <>
        <h1>{heading}</h1>
        <div style={{display: "flex",flexDirection: "column",gap: "10px", margin: "20px",justifyContent: "center", alignItems: "center"}}>
        <div id="counter">{count}</div>
        <div style={{display: "flex", gap: "10px", margin: "20px"}}>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        </div>
        
        </>
    )
}

export default CounterComponent;