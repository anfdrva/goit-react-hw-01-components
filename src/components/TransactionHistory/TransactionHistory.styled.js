import styled from 'styled-components';

export const Wrapper = styled.table`
    margin: 0 auto 50px;
    table-layout: fixed;
    width: 700px;
    border-collapse: collapse;
    border: 2px solid blue;
    text-align: center;
`;

export const TableTitle = styled.th`
    border: 1px solid blue;
    padding: 12px;
    background-color: lightskyblue;
    text-transform: uppercase;
`;

export const TableSection = styled.td`
    border: 1px solid gray;
    padding: 5px;
`