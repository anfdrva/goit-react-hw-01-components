import PropTypes from "prop-types";
import { Wrapper, TableTitle, TableSection } from "./TransactionHistory.styled";

export const TransactionHistory = ({ transaction }) => {
    return (
        <Wrapper>
            <thead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </thead>
            <tbody>
                {transaction.map(item => {
                return (
                        <tr key={item.id}>
                        <TableSection>{item.type}</TableSection>
                        <TableSection>{item.amount}</TableSection>
                        <TableSection>{item.currency}</TableSection>
                        </tr>
                )
            })}
            </tbody>
        </Wrapper>
    );
};

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};