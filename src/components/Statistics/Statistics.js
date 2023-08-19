import PropTypes from "prop-types";
import { Wrapper, StatisticsList, StatisticsItem, Title, StatisticsPercentage, StatisticsLabel } from "./Statistics.styled";

export const Statistics = ({ data }) => {
    return (
        <Wrapper className="statistics">
            <Title className="title">Upload stats</Title>
            <StatisticsList className="stat-list">
                {data.map(item => {
                    return (
                        <StatisticsItem className="item" key={item.id}>
                            <StatisticsLabel className="label">{item.label}</StatisticsLabel>
                            <StatisticsPercentage className="percentage">{item.percentage}%</StatisticsPercentage>
                        </StatisticsItem>
                    )   
                })}
            </StatisticsList>
        </Wrapper>
    );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ),
}