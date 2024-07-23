import style from './navbar.module.scss'
import { Icon } from '@iconify/react';
import Input from "../../atoms/input"
import { useState } from 'react';

function Navbar() {
    const [searchText, setSearchText] = useState("")
    return (
        <header className={style.header}>
            <article className={style['search-bar']}>
                <Icon icon="material-symbols:search" />
                <Input type="text" placeholder="Search Notes"
                    value={searchText}
                    className={style.field} onChange={e => setSearchText(e.target.value)} />
                {/* Search bar */}
            </article>
            <div className={style.theme}>
                <Icon icon={"vaadin:sun-down"} />
                
            </div>
        </header>

    )
}

export default Navbar
