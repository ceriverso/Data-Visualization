import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const descriptionStyle = {
 backgroundColor: "black",
 border: "solid gray",
 color: "antiquewhite",
 minHeight: "100px",
 textAlign: "center"
}
function Method({method}) {
    
    return (
        <div style={descriptionStyle}>
           
            <SyntaxHighlighter language="javascript" style={dark}>
                {method}
              </SyntaxHighlighter>

        </div>
    )
}

export default Method