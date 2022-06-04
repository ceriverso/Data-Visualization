import NavBar from "./NavBar";
import Footer from "./Footer";
import Image from "next/image";


const layoutStyle = {
    display: "flex",
    position:"relative",
    flexFlow: "column",
    height: "100vh",
    width: "100%",
};

const contentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    zIndex:"0"
};

function Layout({ children }) {

    return (

        <div className="Layout" style={layoutStyle}>
            <Image
                className={"background"}
                src="/images/background-image.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="fill"
                objectPosition="center"
                priority="true"
                quality="100"
            />
            <NavBar />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout