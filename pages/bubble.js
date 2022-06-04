import React, { useState } from 'react';
import Method from './method';
import randomArray from "./randomArray";
import {  SortButton, RefreshButton } from '../src/components/MyButtons.js';
import MySlider from '../src/components/MySlider';
import DropDown from '../src/components/DropDown';
import style from '../src/css/bubble.module.css';


function Bubble() {
    const [speed, setSpeed] = useState({ x: 1000 });
    const [text, setText] = useState([]);
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])
    const { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax } = randomArray();

    async function bubbleSort() {
        await new Promise(resolve => setTimeout(resolve, speed.x));
        const arr = newRandomArray;
        let checked;

        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                await new Promise(resolve => setTimeout(resolve, speed.x));
                console.log(speed.x)
                //The element we are testing turns red
                document.getElementById(i).style.backgroundColor = "red";
                // document.getElementById(`caption${i}`).innerText = "<<<=== arr[i]"
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "white";
                    // document.getElementById(`caption${i + 1}`).innerText = "<<<=== arr[i + 1]";
                }
                if (arr[i] > arr[i + 1]) {
                    setText("If arr[i] is greater than arr[i + 1]")
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                    setBottomText("They swap positions and the loop moves to the next element")
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    //Is only changed to true when there is a swap made
                    checked = true
                } else {
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                    setText("");
                    setTextTwo("If arr[i] is less than arr[i + 1]");
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                    setBottomTextTwo("They stay where they are and the loop continues to next element");
                    await new Promise(resolve => setTimeout(resolve, speed.x));
                }
                document.getElementById(i).style.backgroundColor = "#89DDff";
                // document.getElementById(`caption${i}`).innerText = "";

                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "red";
                    //document.getElementById(`caption${i + 1}`).innerText = "<<<=== arr[i]";
                }
                setText("");
                setTextTwo("");
                setBottomText("");
                setBottomTextTwo("");
                setNewRandomArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }

    const display = newRandomArray.map((bar, index) => {
        return (
            <div className={style.bar} key={index} id={`${index}`} style={{ width: `${bar * 4}%`, height: `${bar * 8}%` }}>
                {bar}
            </div>
            // <span id={`caption${index}`}></span>
        )
    });


    return (
        <div>
            <Method method={"bubble"} />
            <div className={style.topContainer}>
                <DropDown max={max} setMax={setMax} />
                <SortButton sortMethod={bubbleSort} />
                <RefreshButton refresh={refresh} setRefresh={setRefresh} />
                <MySlider speed={speed} setSpeed={setSpeed} />
            </div>
            <div className={style.newArray}>
                Arr = [{newRandomArray.toString()}]
            </div>
            <div className={style.bubbleContainer}>
                <div className={style.leftDisplay}>
                    <div className={style.new}>
                        <div>
                        </div>
                    </div>
                    <div className={style.row}>
                        {display}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bubble
