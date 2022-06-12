import React, { useState } from 'react';
import Method from './method';
import randomArray from "./randomArray";
import { ButtonBox, SortButton, RefreshButton, ArraySizeButton } from '../src/components/MyButtons.js';
import Box from '@mui/material/Box';
import styles from '../src/css/bubble.module.css';


function Bubble() {
    const [speed, setSpeed] = useState(1000);
    const [text, setText] = useState([]);
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])
    const { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax } = randomArray();



    // style={{ height: `${bar * 10}%`}}
    async function bubbleSort() {

        const arr = newRandomArray;
        let checked;

        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                await new Promise(resolve => setTimeout(resolve, speed));
                console.log(speed)
                //The element we are testing turns red
                //document.getElementById(i).style.backgroundColor = "red";
                // document.getElementById(`caption${i}`).innerText = "<<<=== arr[i]"
                if (document.getElementById(i + 1) !== null) {
                    //document.getElementById(i + 1).style.backgroundColor = "white";
                    // document.getElementById(`caption${i + 1}`).innerText = "<<<=== arr[i + 1]";
                }
                if (arr[i] > arr[i + 1]) {
                    setText("If arr[i] is greater than arr[i + 1]")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setBottomText("They swap positions and the loop moves to the next element")
                    await new Promise(resolve => setTimeout(resolve, speed));
                    await new Promise(resolve => setTimeout(resolve, speed));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;

                    //Is only changed to true when there is a swap made

                    checked = true

                } else {
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setText("");
                    setTextTwo("If arr[i] is less than arr[i + 1]");
                    await new Promise(resolve => setTimeout(resolve, speed));
                    setBottomTextTwo("They stay where they are and the loop continues to next element");
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
                // document.getElementById(i).style.backgroundColor = "#89DDff";
                // document.getElementById(`caption${i}`).innerText = "";

                if (document.getElementById(i + 1) !== null) {
                    // document.getElementById(i + 1).style.backgroundColor = "red";
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

    // const display = newRandomArray.map((bar, index) => {
    //     return (
    //         <div className={styles.bar} key={index} id={`${index}`} >
    //             <i className={styles.cap}></i>

    //             <span className={styles.test} style={newRandomArray.length < 10 && bar > 3 ? {height: `${bar * 15}%`} : {height: `${(bar + 7) * 5}%`} }></span>
    //             <i className={styles.fill} ></i>

    //             <div className={`${styles.cap} ${styles.capBottom}`}><div>{bar}</div></div>
    //         </div>
    //         // <span id={`caption${index}`}></span>
    //     )
    // });

    const display = newRandomArray.map((bar, index) => {
        return (
            <div className="tube" data-percent="50" key={index} id={`${index}`} >
        <i className="cap"></i><i className="fill"></i>
        <div className="base">
            <div className="text">{bar}</div>
            <div className="icon">Base</div>
        </div>
    </div>
        )
    });
    
    return (
        <div>

            <Box sx={{ display: "flex" }}>
                <ButtonBox sortMethod={bubbleSort} refresh={refresh} setRefresh={setRefresh} setMax={setMax} speed={speed} setSpeed={setSpeed} />
                <Method method={"bubble"} />
            </Box>
            <Box className={styles.newArray}>
                        [{newRandomArray.toString()}]
                    </Box>
            <div className={styles.row}>
                {display}
            </div>
            
  
       
        </div>
    )
}

export default Bubble
