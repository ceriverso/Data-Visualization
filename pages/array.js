import { useState, useEffect } from 'react';


function Array({childToParent}) {
    
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
            childToParent(arr)
        }
        getArray()
        
    }, [])
    console.log("newArray", newArray)

    // return (
    //     <div>
    //         {/* <button primary onClick={() => childToParent(newArray)}>Click Child</button> */}
          
    //     </div>
    // )

}

export default Array