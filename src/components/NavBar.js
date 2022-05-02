
import Link from 'next/link';


const navBarStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "2em",
    backgroundColor: "red",
    color: "white",
    width: "100%",
    height: "60px"
};

function NavBar() {

    return (
    
            <div className="NavBar" style={navBarStyle}>

                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href="/bubble">
                        <a>Bubble Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/merge">
                        <a>Merge Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/quicksort">
                        <a>Quick Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/selection">
                        <a>Selection Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/insertion">
                        <a>Insertion Sort</a>
                    </Link>
                </div>
            </div>
    )
};

export default NavBar