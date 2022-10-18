import styled from "styled-components";

export const Button1 = styled.button`
    border:none;
    background:var(--black);
    color:var(--white);
    font-size:0.85rem;
    padding:1rem 1.5rem;
    text-transform:uppercase;
    transition:0.1s ease;
    font-family: 'Josefin Sans',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight:500; 

    :hover {
        cursor:pointer;
        background:var(--red);
    }

`