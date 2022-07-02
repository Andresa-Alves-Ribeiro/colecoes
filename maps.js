function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Andresa', 'Admin');
usuarios.set('Paulo', 'Admin');
usuarios.set('Miguel', 'Admin');

console.log(getAdmins(usuarios));