import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to ='/menu'>Menu</Link>
                <Link to ='/cart'>Cart</Link>
                <Link to ='/featured'>Featured</Link>
            </div>
        </nav>
    );
}

export default Navbar;