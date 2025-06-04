export const getUsers = () => {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const deleteUser = (index) => {
  const users = getUsers();
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
};