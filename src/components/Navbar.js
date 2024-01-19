import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
color:black;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&:hover,
&:focus{
   color: blue;
};
&:active{
   color: red;
};
@media(max-width: 700px) {
       display: none;
}
`

const Navbar = () =>{
      return (
            <div>
                  <StyledLink to="/">Home</StyledLink>
                  <StyledLink to="/blog">Blog</StyledLink>
                  <StyledLink to="/settling-in">Settling In</StyledLink>
                  <StyledLink to="/food-and-lifestyle">Food and Lifestyle</StyledLink>
                  <StyledLink to="/legalities">Legalities</StyledLink>
                  <StyledLink to="/community">Community</StyledLink>
                  <StyledLink to="/resources">Resources</StyledLink>
                  <StyledLink to="/about">About</StyledLink>
                  <StyledLink to="/contact">Contact</StyledLink>
                  <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </div>
      )
}

export default Navbar;