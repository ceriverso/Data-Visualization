import React, { useState, useEffect } from 'react';
import Layout from "../src/components/Layout";
import Method from './method';
import randomArray from "./randomArray";
import style from '../src/css/array.module.css';

function Bubble() {

    //Tells the method component whatcode to display 
    const codeString = `let checked;
    do {
        checked = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                //Swap the elements in the array since element is less than the next element
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                //Is only changed to true when there is a swap made
                checked = true
            }
        }
        //If a swap is not made checked will not be true thus terminating the loop
        //Ensuring loop will not run on a sorted array more than once
    } while (checked)
`;

const { newRandomArray } = randomArray();
    
    const [refresh, setRefresh] = useState("false");    
    const [sorted, setSorted] = useState([]);
    //Updates the refresh state causing useEffect in array component to render a new array
    //Then clears the rendered sorted array by setting state to empty array
    const refreshDisplay = () => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
    };

    const test = (checked) => {
        checked = false;
            for (let i = 0; i < newRandomArray.length; i++) {
                
                if (newRandomArray[i] > newRandomArray[i + 1]) {
                    //Swap the elements in the array since element is less than the next element
                    let tmp = newRandomArray[i];
                    newRandomArray[i] = newRandomArray[i + 1];
                    newRandomArray[i + 1] = tmp;
                    //Is only changed to true when there is a swap made
                    checked = true
                }
                
                
            }
    }
      const sortMe = (checked) =>{
        
        let checked;
        do {
          setTimeout( test ,1000)
            console.log(newRandomArray)
             setTimeout(setSorted(newRandomArray), 1000)   
            
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
      }
    
const display = newRandomArray.map((bar, index) => {
    return(
        <div className={style.bar} key={index} style={{width:`${bar * 8}%`}}>
            {bar}
        </div>
    )
})



    return (
        <Layout>
            <h1>Bubble Sort</h1>
            <Method method={codeString} />
            {display}
            {sorted}
            <button onClick={sortMe}>Sort Me</button>
            <button onClick={refreshDisplay}>Refresh</button>

        </Layout>
    )
}

export default Bubble