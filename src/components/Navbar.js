import icon from '../iconQ.svg';
export default function Navbar() {
 return (
                <nav className="navbar" id='navbar'>
                    <div className="logo">
                      
                        <img  height ={45} src={icon} alt=''/>
                        ShortU
                    </div>
                    <div className="nav-links">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#about" className="nav-link">About</a>
                         
                    </div>
                </nav>
            );
}
