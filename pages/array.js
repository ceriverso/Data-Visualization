import { useEffect } from 'react';



function Array({ setArr, refresh }) {

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
            setArr(arr)
        }
        getArray()
    }, [refresh])
}

export default Array