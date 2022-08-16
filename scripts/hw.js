// HW
// Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.
// Пример: ({ 'key': 'property' }, 'key') => 'property'

let user = {
    first_name: 'Alex',
    last_name: 'Mueller',
    age: 59,
    active: true
  }
  
  let key_last_name = 'last_name';
  
  console.log(user[key_last_name]);
  
  // ЗАДАЧА 2
  // Задан массив с объектами:
  const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ];
  // 1. Проверьте, что этот объект не пустой - в нем есть хотя бы один объект с ключом age.
  
  let key_age = 'age' ;
  
  console.log(users[key_age]);
  
  // 2. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
  
  users.forEach(el => console.log(el.age));
  
  // 3. Получите из всех объектов значения last_name и сформируйте из этих имен массив.
  
  let users_names = users.map(el => ` ${el.last_name}`);
  
  console.log(users_names)
  
  // 4. Сформируйте новый массив без объекта, где first_name == "Irina".
  
  let users_Irina = users.filter(el => el.first_name != 'Irina');
  
  console.log(users_Irina)
  
  // 5. Добавьте в конец нового массива объект со значениями:
  // {
  //    first_name: 'Anton',
  //    last_name: 'Gribov',
  //    age: 36,
  //    salary: 1760
  // }
  
  users.push(
    {
         first_name: 'Anton',
         last_name: 'Gribov',
         age: 36,
         salary: 1760
      }
  );
  
  console.log(users)
  