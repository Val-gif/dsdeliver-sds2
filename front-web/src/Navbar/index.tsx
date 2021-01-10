import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="main-Navbar">
            <Logo />
            <Link to="/" href="Home"className="logo-text">DS Delivery</Link>


        </nav>
    )
}

export default Navbar