import styled from 'styled-components'

import { Link } from "react-router-dom";

const H1 = styled.h1`
color: black;
font-size: 4rem;
`

const StyledLink = styled(Link)`
text-decoration:none!important;
`


export default function Logo() {
    return (
        <StyledLink to="/"><H1>Desi Vikings</H1></StyledLink>
    )
  }