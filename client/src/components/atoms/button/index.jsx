/* eslint-disable react/prop-types */
import styles from './button.module.scss';
import { Icon } from '@iconify/react';

function Button(props) {
    const {text,icon,handleClick,className,isDisabled}=props;

    return (

        <button className={`${styles.button} ${className}`} onClick={handleClick} disabled={isDisabled}>
            {icon ? <Icon icon={icon} />:null}
            {text ?<h3>{text}</h3> :null}
        </button>
    )
}

export default Button
