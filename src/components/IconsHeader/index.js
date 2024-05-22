import styled from 'styled-components';

import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const Icons =  styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

function IconsHeader() {   
    const icons = [perfil, sacola]

    return (
        <Icons>
            {icons.map((icon, index) => (
                <Icon key={index}><img src={icon} alt='icon' /></Icon>
            ))}
        </Icons>
    );
}

export default IconsHeader