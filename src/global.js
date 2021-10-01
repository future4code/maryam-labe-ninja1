import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

    :root {
        --purple: #7967C0;
        --background: #F5F4FC;
        --black: #4a4a4a;
        --secPurple: #978ACE;
    }

    body {
        color: var(--black);
        background-color: #F5F4FC;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`