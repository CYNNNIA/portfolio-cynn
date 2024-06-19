import './Header.css'
import data from '../../data/data'

const template = () => {
  return `
  <header class="sidebar"> 
    <div><h1>Cynthia Lorenzo López</h1>
    <img src="8c5eadb0-fcd2-49d6-8805-326515518d51.jpg" />
    </div>
    
    <nav> 
      <ul>
        <li>
          <a href="#aboutme">Acerca de mi      </a>
        </li>
        <li>
          <a href="#education">Formación      </a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
      </ul>
    </nav>
    
    <div>
    <h2>Desarrolladora Frontend</h2>
    <h3>- HTML</h3>
    <h3>- CSS</h3>
    <h3>- JavaScript</h3>
    </div>

  </header>
  `
}

const Header = () => {
  return template()
}

export default Header
