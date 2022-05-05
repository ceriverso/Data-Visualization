
import Link from 'next/link';
import style from '../css/navbar.module.css';


function NavBar() {

    return (
    
            <div className={style.navBar} >

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