import { Link } from "react-router-dom";

const Navbar = () =>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
      )
}

export default Navbar;