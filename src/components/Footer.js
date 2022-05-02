
const footerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: "1em",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    height: "50px"
}

function Footer() {
    return (
        <div style={footerStyle}>
            <h1>Footer</h1>
        </div>
    )
}

export default Footer