import NavBar from "./NavBar";
import Footer from "./Footer";


const layoutStyle = {
    display: "flex",
    flexFlow: "column",
    height: "100vh",
    width: "100%"
};

const contentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
};

function Layout({ children }) {
    
    return (
        
        <div className="Layout" style={layoutStyle}>
            <NavBar />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout