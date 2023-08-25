import PropTypes from "prop-types";
import { Wrapper, StatisticsList, StatisticsItem, Title, StatisticsPercentage, StatisticsLabel } from "./Statistics.styled";

export const Statistics = ({ data, title }) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            <StatisticsList>
                {data.map(item => {
                    return (
                        <StatisticsItem key={item.id}>
                            <StatisticsLabel>{item.label}</StatisticsLabel>
                            <StatisticsPercentage>{item.percentage}%</StatisticsPercentage>
                        </StatisticsItem>
                    )   
                })}
            </StatisticsList>
        </Wrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};