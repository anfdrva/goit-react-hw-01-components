import { UserProfile, UserAvatar, UserDescription, UserName, UserTextDescription, UserStatsList, UserStatsQuantity } from "./Profile.styled";
import PropTypes from "prop-types";

export const Profile = ({ item: { username, tag, location, avatar, stats } }) => {
    return (
        <UserProfile>
            <UserDescription>
                <UserAvatar
                    src={avatar}
                    alt="User avatar"
                />
                <UserName>{username}</UserName>
                <UserTextDescription>@{tag}</UserTextDescription>
                <UserTextDescription>{location}</UserTextDescription>
            </UserDescription>

            <UserStatsList>
                <li>
                    <span>Followers</span><br/>
                    <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
                </li>
                <li>
                    <span>Views</span><br/>
                    <UserStatsQuantity>{stats.views}</UserStatsQuantity>
                </li>
                <li>
                    <span>Likes</span><br/>
                    <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
                </li>
            </UserStatsList>
        </UserProfile>
    );
};

Profile.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired,
};