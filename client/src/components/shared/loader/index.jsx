import styles from './loader.module.scss';
import BrandLogo from '../brand';
import ProgressBar from '../../atoms/prograss_bar'; 
function Loader() {
    return (
        <article className={styles.container}>
            <BrandLogo/>
            <ProgressBar percentage={50}/>
        </article>

        
    )

}
export default Loader
