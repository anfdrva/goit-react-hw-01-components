import PropTypes from "prop-types";
import { List, ListItem, Status } from "./FriendList.styled";

export const FriendList = ({ friend }) => {
    return (
        <List className="friend-list">
            {friend.map(item => {
                return (
                    <ListItem className="item" key={item.id}>
                        <Status $isonline = {item.isOnline}></Status>
                        <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
                        <p className="name">{item.name}</p>
                    </ListItem>
                )
            })}
        </List>
    )
}


FriendList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.number,
            isOnline: PropTypes.bool,
        })
    ),
}