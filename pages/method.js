import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import style from '../src/css/method.module.css';



function Method({method}) {
    let display;
    if(method == "bubble"){
        display= `let checked;
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
    `;
    
    }
    return (
        <div className={style.method}>
           
            <SyntaxHighlighter language="javascript" style={dark}>
                {display}
              </SyntaxHighlighter>

        </div>
    )
}

export default Method