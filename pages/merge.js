import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Method from "./method";
import randomArray from "./randomArray";

function Merge(props){

    randomArray();
    
       const codeString=`CODE STRING`    

    return(
        <Layout>
            <Method method={codeString} />
            merge sort
           {newRandomArray}
        </Layout>
    )
}

export default Merge