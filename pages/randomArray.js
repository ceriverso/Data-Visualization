import { useState, useEffect } from "react";

function randomArray(){

    const [newRandomArray, setNewRandomArray] = useState([]);

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
        
       setNewRandomArray(arr)
       
    }
    getArray()
    }, [])
    
    
    return { newRandomArray, setNewRandomArray}

}

export default randomArray