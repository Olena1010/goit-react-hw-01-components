import { FriendListItem } from "./Friend"
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';



export const FriendList = ({ friends }) => {
    return <List>
        {friends.map(item => (
            <FriendListItem key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
 ))}
</List>
}
FriendList.propTypes = {
    id:PropTypes.number,
}