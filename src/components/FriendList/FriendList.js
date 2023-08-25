import PropTypes from "prop-types";
import { List} from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friend }) => {
    return (
        <List>
            {friend.map(item => (
                <FriendListItem key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </List>
    )
}


FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};