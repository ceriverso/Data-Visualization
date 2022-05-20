import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Method from "./method";
import randomArray from "./randomArray";


function Quicksort() {

    //Tells the method component whatcode to display 
    const codeString = `function swap(newRandomArray, leftIndex, rightIndex){
        var temp = newRandomArray[leftIndex];
        newRandomArray[leftIndex] = newRandomArray[rightIndex];
        newRandomArray[rightIndex] = temp;
    }
    function partition(newRandomArray, left, right) {
        var pivot   = newRandomArray[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (newRandomArray[i] < pivot) {
                i++;
            }
            while (newRandomArray[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(newRandomArray, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(newRandomArray, left, right) {
        var index;
        if (newRandomArray.length > 1) {
            index = partition(newRandomArray, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(newRandomArray, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(newRandomArray, index, right);
            }
        }
        return newRandomArray;
    }
    // first call to quick sort
    var sortedArray = quickSort(newRandomArray, 0, newRandomArray.length - 1);
`;

    
    const { newRandomArray } = randomArray();

    function swap(newRandomArray, leftIndex, rightIndex){
        var temp = newRandomArray[leftIndex];
        newRandomArray[leftIndex] = newRandomArray[rightIndex];
        newRandomArray[rightIndex] = temp;
    }
    function partition(newRandomArray, left, right) {
        var pivot   = newRandomArray[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (newRandomArray[i] < pivot) {
                i++;
            }
            while (newRandomArray[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(newRandomArray, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(newRandomArray, left, right) {
        var index;
        if (newRandomArray.length > 1) {
            index = partition(newRandomArray, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(newRandomArray, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(newRandomArray, index, right);
            }
        }
        return newRandomArray;
    }
    // first call to quick sort
    var sortedArray = quickSort(newRandomArray, 0, newRandomArray.length - 1);
    


    const display = sortedArray.map((bar, index) => {
        return (
            <div key={index}>{bar}</div>
        )
    })


    return (
        <Layout>
            <h1>Quick Sort</h1>
            <Method method={codeString} />
            {display}
        </Layout>
    )
}

export default Quicksort