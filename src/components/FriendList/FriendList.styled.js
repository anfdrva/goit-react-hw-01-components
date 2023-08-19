import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
margin: 50px auto;
`;

export const ListItem = styled.li`
display: flex;
border: 1px solid black;
width: calc((100% - 10px) / 3);
gap:10px;
padding: 10px;
`;

const getStatusColor = props => {
    if (props.isOnline) {
        return 'green'
    } else {
        return 'red'
    }
};

export const Status = styled.span`
color: ${getStatusColor};
`; 