import { users } from './index';

function fetchUsers(userId) {
  return users.get(userId);
}

export { fetchUsers };