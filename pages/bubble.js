import React, { useState, useEffect } from 'react';
import Layout from "../src/components/Layout";
import Method from './method';
import Array from './array';

function Bubble() {

    //Tells the method component what code to display 
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

    const [arr, setArr] = useState([]);
    const [sorted, setSorted] = useState([]);
    const [refresh, setRefresh] = useState("false");

    
    

    //Updates the refresh state causing useEffect in array component to render a new array
    //Then clears the rendered sorted array by setting state to empty array
    const refreshDisplay = () => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
    };

    const handleClick = async() => {
        let checked;
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
            setSorted(arr)
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    };

const display = arr.map((bar, index) => {
    return(
        <div key={index}>
            {bar}
        </div>
    )
})



    return (
        <Layout>
            <Method method={codeString} />
            Bubble Sort
            <Array setArr={setArr} refresh={refresh} />
            {display}
            <button onClick={handleClick}>Sort Me</button>
            <button onClick={refreshDisplay}>Refresh</button>

        </Layout>
    )
}

export default Bubble