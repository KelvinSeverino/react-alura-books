import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components';

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
            { icons.map( (icon) => (
                <Icon><img src={icon} alt='icon'></img></Icon>
            )) }
        </Icons>
    );
}

export default IconsHeader