import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 530px;
    height: 100%;
    border: 2px solid gray;
    margin: 50px auto;
    border-radius: 3px;
    text-align: center;
`;

export const Title = styled.h2`
    margin: 25px auto;
`;

export const StatisticsList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc((100% - 0px) / 5);
    padding: 20px;
    border-right: 0.1px solid grey;
    border-top: 0.1px solid grey;
`;

export const StatisticsLabel = styled.span`
    font-size: 20px;
    margin-bottom:10px;
`;

export const StatisticsPercentage = styled.span`
    font-size:26px;
`;