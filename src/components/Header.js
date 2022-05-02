const headerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    paddingBottom: "1em",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
    height: "50px"
  };
  
  const Header = () => (
    <div className="Header" style={headerStyle}>
      <h1>Sorting Methods - Data Visualizer</h1>
    </div>
  );
  
  export default Header;