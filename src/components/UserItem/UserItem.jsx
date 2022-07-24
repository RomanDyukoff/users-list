import './styles.scss';
import { Link } from 'react-router-dom';

export const UserItem = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/${user.id}`}>
                        {user.name} {user.lastname}
                    </Link>
                </li>
            ))}
        </>
    );
}
