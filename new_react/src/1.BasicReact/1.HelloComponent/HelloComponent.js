import React from "react";
import App from "../../App";

function HelloComponent(props){
    console.log(props, "props");
    
    // const {name} = props; 
    const name = props.name;

    return (
        <>
        <div style={{height: "100px", backgroundColor:"cyan"}}>
            Hey there hello to {name}!!!
        </div>
        
        </>
    );
   
}

export default HelloComponent;

// JSX -> JavaScript XML
// It look like it is HTML but it is not HTML
// Behind the scenes the above code (look like HTML) is converted to below code. 

// document.createElement()
// React.createElement("div", {},"Hey there hello to all of you FUNCTIONAL!!!")

//Component => HelloComponent

// props => Are nothing but Extra information that we can provide a component.

// state => 
