import { Link } from "react-router-dom";

const Navbar = () =>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/settling-in">Settling In</Link>
                  <Link to="/food-and-lifestyle">Food and Lifestyle</Link>
                  <Link to="/legalities">Legalities</Link>
                  <Link to="/community">Community</Link>
                  <Link to="/resources">Resources</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
      )
}

export default Navbar;