import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OptionsContainer = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OptionsHeader() {    
    const options = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

    return (
        <OptionsContainer>
            {options.map((text, index) => (
                <Link to={`/${text.toLowerCase()}`}><Option key={index}><p>{text}</p></Option></Link>
            ))}
        </OptionsContainer>
    );
}

export default OptionsHeader;
