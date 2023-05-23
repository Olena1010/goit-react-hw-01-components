import { FriendListItem } from "./Friend"
import PropTypes from 'prop-types';



export const FriendList = ({ friends }) => {
    return <ul class="friend-list">
        {friends.map(item => (
            <FriendListItem key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
 ))}
</ul>
}
FriendList.propTypes = {
    id:PropTypes.number.isRequired
}