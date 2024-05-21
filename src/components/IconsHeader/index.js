import './style.css';

import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

function IconsHeader() {   
    const icons = [perfil, sacola]

    return (
        <ul className='icons'>
            { icons.map( (icon) => (
            <li className='icon'><img src={icon} alt='icon'></img></li>
            )) }
        </ul>
    );
}

export default IconsHeader