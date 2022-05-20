import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Method from "./method";
import randomArray from "./randomArray";


function Quicksort() {

    //Tells the method component whatcode to display 
    const codeString = `function swap(arr, leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }
    function partition(arr, left, right) {
        var pivot   = arr[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(arr, left, right) {
        var index;
        if (arr.length > 1) {
            index = partition(arr, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(arr, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(arr, index, right);
            }
        }
        return arr;
    }
    // first call to quick sort
    var sortedArray = quickSort(arr, 0, arr.length - 1);
`;

    
    const { arr } = randomArray();

    function swap(arr, leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }
    function partition(arr, left, right) {
        var pivot   = arr[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(arr, left, right) {
        var index;
        if (arr.length > 1) {
            index = partition(arr, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(arr, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(arr, index, right);
            }
        }
        return arr;
    }
    // first call to quick sort
    var sortedArray = quickSort(arr, 0, arr.length - 1);
    


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