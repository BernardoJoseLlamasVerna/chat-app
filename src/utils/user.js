const users = [];

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    });

    // Validate username
    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

/*addUser({
    id: 22,
    username: 'Bernie',
    room: 'Bornuard room'
});

addUser({
    id: 44,
    username: 'Bernie2',
    room: 'Bornuard room '
});

addUser({
    id: 66,
    username: 'Bernie3',
    room: 'Bornuard room 2'
});

const user = getUser(44);
console.log(user);

const userList = getUsersInRoom('Baxter room 2');
console.log(userList);*/
/*
console.log(users);
const removedUser = removeUser(22);
console.log(removedUser);
console.log(users);
*/

