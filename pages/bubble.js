import React, { useState, useEffect } from 'react';
import Layout from "../src/components/Layout";
import Method from './method';

function Bubble() {

    const [newArray, setNewArray] = useState([]);

    useEffect(() => {
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
    console.log("newArray", newArray)




    // let checked;
    // do {
    //     checked = false
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             //Swap the elements in the array since element is less than the next element
    //             let tmp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = tmp;
    //             //Is only changed to true when there is a swap made
    //             checked = true
    //         }
    //     }
    //     //If a swap is not made checked will not be true thus terminating the loop
    //     //Ensuring loop will not run on a sorted array more than once
    // } while (checked)

    
    const codeString = `{let checked;
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
}`
    return (
        <Layout>
            <Method method={codeString} />
            Bubble Sort
            {newArray}
        </Layout>
    )
}

export default Bubble