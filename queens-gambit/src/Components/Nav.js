import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className="d-flex align-items-center">
            <ul className="nav my-4">
                <li className="nav-item">
                    {/* Use Link component to navigate to the "/" route */}
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    {/* Use Link component to navigate to the "/" route */}
                    <Link to="/beth" className="nav-link">Beth Harmon</Link>
                </li>
                <li className="nav-item">
                    {/* Use Link component to navigate to the "/" route */}
                    <Link to="/borgov" className="nav-link">Vasily Borgov</Link>
                </li>
                <li className="nav-item">
                    {/* Use Link component to navigate to the "/" route */}
                    <Link to="/benny" className="nav-link">Benny Watts</Link>
                </li>
                <li className="nav-item">
                    {/* Use Link component to navigate to the "/" route */}
                    <Link to="/harry" className="nav-link">Harry Beltik</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;