import React, { useState } from 'react';
import Method from './method';
import randomArray from "./randomArray";
import style from '../src/css/bubble.module.css';
import Slider from 'react-input-slider';

function Bubble() {
    const [speed, setSpeed] = useState({ x: 1000 });
    const [text, setText] = useState([]);
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])
    const { newRandomArray, setNewRandomArray, refresh, setRefresh, max, setMax } = randomArray();

    //Updates the refresh state causing randomArray component to render a new array
    const refreshDisplay = () => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
    };

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
            // <div className={style.row} key={index}>
            
                <div className={style.bar} key={index} id={`${index}`} style={{ width: `${bar * 4}%`, height: `${bar * 8}%` }}>
                    {bar}
                </div>
                // <span id={`caption${index}`}></span>
                
            //</div>
        )
    });


    return (
        <div>

            <Method method={"bubble"} />
            <div className={style.topContainer}>
            <strong>Size</strong>
            <label className="dropdown">
                <select className="form-control theme"
                    value={max}
                    onChange={(event) => {
                        setMax(parseInt(event.target.value))
                    }}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
            </label>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={refreshDisplay}>Refresh</button>
            {speed.x}
      
      <Slider
      styles={{
        track: {
          backgroundColor: '#89DDff'
        },
        active: {
          backgroundColor: 'white'
        },
        thumb: {
          width: 20,
          height: 20
        },
        disabled: {
          opacity: 0.5
        }
      }}
        axis="x"
        xmax={10000}
        x={speed.x}
        onChange={({ x }) => setSpeed(speed => ({ ...speed, x }))}
      />
      </div>
            <div className={style.newArray}>Arr = [{newRandomArray.toString()}]</div>
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
                {/* <div className={style.rightDisplay}>
                    <p className={style.text}>{text}</p>
                    <p className={style.textTwo}>{textTwo}</p>
                    <p className={style.bottomText}>{bottomText}</p>
                    <p className={style.bottomTextTwo}>{bottomTextTwo}</p>
                </div> */}
            </div>
           

        </div>
    )
}

export default Bubble
