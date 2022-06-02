import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";


function Insertion(props) {

const handleClick = () => {
    Bubble(newArray)
}

    const [newArray, setNewArray] = useState([]);
    const [data, setData] = useState('');

    useEffect(() =>{
        const getArray = () => {
        const max = 10;
        const arr = [];

        for (let i = 0; i < max;) {
            let num = Math.floor(Math.random() * max + 1)
            while (arr.includes(num) === false) {
                arr.push(num)
                i++
            }
        }
        
       setNewArray(arr)
       
    }
    getArray()
    }, [])
    console.log("newArray",newArray)
    
    
           

    return (
       <>
            {newArray}
        </>
    )
}

export default Insertion