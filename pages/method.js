import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import style from '../src/css/method.module.css';

const methodStyle = {
    fontSize:"larger",
    width: "50%"
};

function Method({ method }) {
    let display;
    if (method == "bubble") {
        display = `let checked;
        do {
            checked = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    checked = true
                }
            }
        } while (checked)
    `;

    }
    return (
        <div className={style.method}>
            <SyntaxHighlighter
                language="javascript"
                style={materialDark}
                customStyle={methodStyle}
                wrapLongLines
                >
                {display}
            </SyntaxHighlighter>

        </div>
    )
}

export default Method