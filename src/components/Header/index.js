import styled from "styled-components";

const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:serif;
    font-size:3rem;
    text-transform:uppercase;
    letter-spacing:1.5rem;
    padding: 2rem;
    text-align:center;
    background:#000;
    color:#fff;

    @media(max-width: 780px) {
        font-size:2rem;

    }
`;


export default function () {
    return (<Header>PWA News</Header>)
}
