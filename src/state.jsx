//user из бд
const user = {
    name: "Иван",
    lastname:"Иванов",
    email: "ivanov@mail.ru",
    id:1,
    about:"Тут я рассказываю о себе...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}

const users = {
    0: {name: "Марина", lastname: "Крутелева",id:2},
    1: {name: "Марина", lastname: "Солдатова",id:5},
    2: {name: "Ева", lastname: "Жолдина",id:15},
    3: {name: "Нона", lastname: "Мандрыкина",id:16},
    4: {name: "Ева", lastname: "Мандрыкина",id:8},
    5: {name: "Венедикт", lastname: "Солдатов",id:4},
    6: {name: "Нона", lastname: "Язина",id:3},
    7: {name: "Сигизмунд", lastname: "Моряев",id:26},
    8: {name: "Ульяна", lastname: "Иньшова",id:7},
    9: {name: "Юнона", lastname: "Крутелева",id:19},
    10:{name: "Самсон", lastname: "Мандрыкин",id:24}
}
export function getUser(userId) {
    for (let i = 0; i < Object.keys(users).length; i++) {
        if (users[i].id == userId)
            return users[i];
    }

    return user;
}
export function getUsers(){
    return users;
}