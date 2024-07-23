/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import styles from '../brand/brand.module.scss';

import BrandLightImg from '../../../assets/brand-light.svg';
import BrandDarkImg from '../../../assets/brand-dark.svg';
function BrandLogo(props) {
    const {logoOnly,type="light",className}=props;
    return (
        <article className={`${styles.brand} ${className}`}>
            <img src={type=="light" ? BrandLightImg:BrandDarkImg} alt='brand logo' className={styles.logo}/>
            {(!logoOnly ? (<h1>Note.<span>me</span></h1>) : null)}
            
            
        </article>
        
    )
}

export default BrandLogo;
