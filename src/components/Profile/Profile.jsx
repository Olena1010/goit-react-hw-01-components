import PropTypes from 'prop-types';
import { Card, Description, Img, Name, Tag, Location, StatsList, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <Card>
  <Description>
    <Img
      src={avatar}
      alt={username}
      className="avatar"
    />
            <Name>{username}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
  </Description>

  <StatsList>
    <StatsItem>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </StatsItem>
  </StatsList>
</Card>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};