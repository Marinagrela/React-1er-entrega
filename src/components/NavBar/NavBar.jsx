import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
    <h1> Agua Marina Online</h1>

        <nav>
            <ul>
                <li>Trajes de Buceo</li>
                <li>Equipos de Buceo</li>
                <li>Trajes de Serf </li>
            </ul>

        </nav>

        <CardWidget />
    
    </header>
  )
}

export default NavBar