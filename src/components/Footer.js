import Image from 'next/image';
import style from '../css/footer.module.css';


function Footer() {
    return (
        <div className={style.footer}>    
                <Image src="/images/black-logo.png" alt="logo" width={80} height={50}/>
                <Image src="/icons/github.svg" alt="github-logo" width={25} height={10}/>
                <p>&copy;2022 Brandon Taft</p>
        </div>
    )
}

export default Footer