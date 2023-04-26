import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: none;
        outline: none;
    }

    body {
        font-family: "Poppins";
        background-color: #000;
        color: ${(props) => props.theme.day_theme.colors.text};
    }

    button {
        cursor: pointer;
    }
`;
