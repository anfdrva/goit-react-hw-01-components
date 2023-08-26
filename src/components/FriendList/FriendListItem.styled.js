import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
border: 1px solid black;
width: calc((100% - 10px) / 3);
gap:10px;
padding: 10px;
`;

export const Status = styled.span`
border-radius: 50%;
height: 15px;
width: 15px;
background: ${props => {
     if (props.$isonline) {
         return 'green'
     } else {
         return 'red'
     }
}}
`; 