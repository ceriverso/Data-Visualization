import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Array from "./array";


function Selection(props) {

    const [arr, setArr] = useState([]);
    const [sorted, setSorted] = useState([]);


    const childToParent = (newArray) => {
        setArr(newArray)
    }

     const handleClick = () => {   
         
        console.log("the array im looking for",arr)
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
        console.log("setting state",arr)
            setSorted(arr)
        //If a swap is not made checked will not be true thus terminating the loop
        //Ensuring loop will not run on a sorted array more than once
    } while (checked)
    
}


    return (
        <Layout>
            Selection
            <Array childToParent={childToParent} />
            {arr}
            <button onClick={handleClick}>Sort Me</button>
            {sorted}
        </Layout>
    )
}

export default Selection