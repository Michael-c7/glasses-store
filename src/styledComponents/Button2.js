import styled from "styled-components";

export const Button2 = styled.button`
    border:none;
    background:var(--white);
    color:var(--black);
    font-size:0.85rem;
    padding:1rem 2rem;
    text-transform:uppercase;
    transition:0.1s ease;
    font-family: 'Josefin Sans',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight:400;

    :hover {
        cursor:pointer;
        color:var(--white);
        background:var(--black);
    }

`