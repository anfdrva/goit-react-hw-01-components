import styled from 'styled-components';

export const UserProfile = styled.div`
    //background-color: green;
    width: 370px;
    height: 100%;
    border: 2px solid gray;
    margin: 50px auto;
    border-radius: 3px;
    text-align: center;

`;

export const UserDescription = styled.div`
//padding-top: 20px;
    margin-bottom: 40px;
    padding: 40px 20px 0;
`;

export const UserAvatar = styled.img`
    margin: 0 auto 20px;
    width: 140px;
    display: block;
    height: auto;
    border-radius: 50%;
    border: 0.5px solid grey;
`;

export const UserName = styled.p`
    font-weight: 600;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
`;

export const UserTextDescription = styled.p`
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: gray;
    margin-bottom: 8px;
`;

export const UserStatsList = styled.ul`
display: flex;
flex-wrap: nowrap;
background-color: #f0f0f0;
gap: 60px;
justify-content: center;
padding: 35px 0;
`;

export const UserStatsQuantity = styled.span`
font-weight: 700;
`;