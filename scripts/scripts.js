let user = {
    'first name': 'Arina',
    last_name: 'Gavr',
    age: 44,
    active: true
}

let key_age = 'age';

console.log(user[key_age]);

// console.log(`Hello ${user['first name']}. Your age is${user.age}`)

// if(user.active === true){
//     console.log(`Hello ${user['first name']}. Your are active`)
// } else {
//     console.log(`Hello ${user['first name']}. Your are not active`)
// }

let users1 = [
{   first_name: 'Arina',
    last_name: 'Gavr',
    age: 44,
    active: true
},

{   first_name: 'Sergei',
    last_name: 'Petrov',
    age: 15,
    active: true
},

{   
    first_name: 'Alex',
    last_name: 'Ivanov',
    age: 25,
    active: true
}
]


// console.log(users[0].first_name);
// console.log(users[1].first_name);
// console.log(users[2].first_name);


// users.forEach(el => console.log(el.age));

// Получить из всех объектов в массиве информацию по ключам 
// first_name и last_name и сформировать из этих значений новый массив

//let users_names = users.map(el => `${el.first_name} ${el.last_name}`);

// console.log(users_names);

// Создать новый массив, в который войдут только совершеннолетние пользователи

//let users_adults = users.filter(el => el.age >= 18);

//console.log(users_adults);


