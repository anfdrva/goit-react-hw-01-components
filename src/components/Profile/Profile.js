import { UserProfile, UserAvatar, UserDescription, UserName, UserTextDescription, UserStatsList, UserStatsQuantity } from "./Profile.styled";
import PropTypes from "prop-types";

export const Profile = ({ item: { username, tag, location, avatar, stats } }) => {
    return (
        <UserProfile className="profile">
            <UserDescription className="description">
                <UserAvatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <UserName className="name">{username}</UserName>
                <UserTextDescription className="tag">@{tag}</UserTextDescription>
                <UserTextDescription className="location">{location}</UserTextDescription>
            </UserDescription>

            <UserStatsList className="stats">
                <li>
                    <span className="label">Followers</span><br/>
                    <UserStatsQuantity className="quantity">{stats.followers}</UserStatsQuantity>
                </li>
                <li>
                    <span className="label">Views</span><br/>
                    <UserStatsQuantity className="quantity">{stats.views}</UserStatsQuantity>
                </li>
                <li>
                    <span className="label">Likes</span><br/>
                    <UserStatsQuantity className="quantity">{stats.likes}</UserStatsQuantity>
                </li>
            </UserStatsList>
        </UserProfile>
    );
};

Profile.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    }),
};