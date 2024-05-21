import './style.css'

import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader'
import IconsHeader from '../IconsHeader'

function Header(){
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OptionsHeader></OptionsHeader>
            <IconsHeader></IconsHeader>
        </header>
    );
}

export default Header