import Image from 'next/image';
import style from '../css/footer.module.css';
import logo from "../img/logo.png";


function Footer() {
    return (
        <div className={style.footer}>
            
                
                <Image src={logo} alt="logo" width={150} height={150}/>
               
                <p>&copy;2022 Brandon Taft</p>
            
        </div>
    )
}

export default Footer