import React from "react"
import "../App.css";



function Button() {

    const myFirstSubscriber = () => {
        console.log("Hello, I am Vasia!")
    }


    return (
        <div className="Button">

            <button onClick={(event) => { console.log("Hello!") }}>MyLessons_1</button>
            <button onClick={(event) => { }}>MyLessons_2</button>

        </div>
    );
}

export default Button;