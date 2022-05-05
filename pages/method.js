import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import style from '../src/css/method.module.css';



function Method({method}) {
    
    return (
        <div className={style.method}>
           
            <SyntaxHighlighter language="javascript" style={dark}>
                {method}
              </SyntaxHighlighter>

        </div>
    )
}

export default Method