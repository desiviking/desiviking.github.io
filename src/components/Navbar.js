import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Container } from "../theme/globalStyles";

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
            <Container>
                  <StyledLink to="/">Home</StyledLink>
                  <StyledLink to="/about">About</StyledLink>
                  <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </Container>
      )
}

export default Navbar;