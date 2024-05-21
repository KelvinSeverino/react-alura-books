import './App.css';
import Logo from './components/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

const options = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icons = [perfil, sacola]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <ul className='options'>
                    { options.map ( (text) => (
                        <li className='option'><p>{text}</p></li>
                    ) ) }
                </ul>

        <ul className='icons'>
            { icons.map( (icon) => (
              <li className='icon'><img src={icon}></img></li>
            )) }
        </ul>
      </header>
    </div>
  );
}

export default App