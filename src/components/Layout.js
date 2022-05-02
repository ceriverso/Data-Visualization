import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";


const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

function Layout({ children }) {
    
    return (
        
        <div className="Layout" style={layoutStyle}>
            <Header />
            <NavBar />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout