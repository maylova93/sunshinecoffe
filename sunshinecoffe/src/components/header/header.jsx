import styles from './header.module.scss';
import headerImage from '../../assets/images/header1.jpg';

export const Header = () => {
    return (
        <header 
            className={styles.header} 
            style={{ 
                backgroundImage: `url(${headerImage})`, 
                backgroundAttachment: 'fixed' // Для фиксации изображения при прокрутке
            }}
        >
            <h1>We Love Coffee</h1>
            <h4>And all the people who make it</h4>
        </header>
    );
}


