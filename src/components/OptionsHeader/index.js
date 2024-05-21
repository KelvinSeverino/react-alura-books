import './style.css';

function OptionsHeader() {    
    const options = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <ul className='options'>
            { options.map ( (text) => (
                <li className='option'><p>{text}</p></li>
            ) ) }
        </ul>
    );
}

export default OptionsHeader