import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Array from "./array";


function Selection(props) {

    const [data, setData] = useState('');
    

const childToParent = (newArray) => {
   setData(newArray)
}
           

    return (
        <Layout>
            {/* {`Home`} */}
            Selection
            <Array childToParent={childToParent} />
            {data}
        </Layout>
    )
}

export default Selection