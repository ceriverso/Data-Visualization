import { useState, useEffect } from "react";

function randomArray() {
    const [newRandomArray, setNewRandomArray] = useState([]);
    const [max, setMax] = useState(5);
    const [refresh, setRefresh] = useState("false");
    useEffect(() => {
        const getArray = () => {
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
    }, [refresh, max])
    return { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax }
}

export default randomArray