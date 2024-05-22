import styled from 'styled-components'

import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader'
import IconsHeader from '../IconsHeader'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    );
}

export default Header