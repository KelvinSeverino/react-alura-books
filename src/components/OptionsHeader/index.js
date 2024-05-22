import styled from 'styled-components';

const OptionsContainer = styled.ul`
    display: flex;
`

const Option = styled.li`
    ont-size: 16px;
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
    const options = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <OptionsContainer>
            { options.map ( (text) => (
                <Option><p>{text}</p></Option>
            ) ) }
        </OptionsContainer>
    );
}

export default OptionsHeader