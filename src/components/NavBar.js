import Link from '../components/Link';
import style from '../css/navbar.module.css';



function NavBar() {

    return (
    
            <div className={style.navBar} >

                <div>
                    <Link  href="/" >
                        <a className={style.links}>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href="/bubble">
                        <a className={style.links}>Bubble Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/merge">
                        <a className={style.links}>Merge Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/quicksort">
                        <a className={style.links}>Quick Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/selection">
                        <a className={style.links}>Selection Sort</a>
                    </Link>
                </div>
                <div>
                    <Link href="/insertion">
                        <a className={style.links}>Insertion Sort</a>
                    </Link>
                </div>
            </div>
    )
};

export default NavBar