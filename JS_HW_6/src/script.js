// // Задание 2

// // const items = document.querySelectorAll('#list li');

// // items.forEach((item) => {
// //     console.log(item.innerText);
// // });

// // Задание 4

// // const paragraph = document.createElement("p");

// // const text = document.createTextNode("Какой прекрасный сегодня день!");

// // paragraph.appendChild(text);

// // paragraph.style.fontSize = "36px";

// // paragraph.style.fontWeight = "bold";

// // document.body.appendChild(paragraph);

// // Задание 5

// // const currentDate = new Date().toLocaleDateString('kz-KZ');
// // const dateElement = document.getElementById('date');
// // dateElement.innerText = currentDate;

// // Задание 6 

// /* function createStyledTag(tagsName, color, content) {
//   const tag = document.createElement(tagsName);
//   tag.style.color = color;
//   tag.textContent = content;
//   return tag;
// } */

// /* const tags = [
//   createStyledTag('h1', 'red', 'Дауренбек Шамидинов'),
//   createStyledTag('p', 'green', 'Фронтенд разработчик'),
//   createStyledTag('span', 'blue', 'Джуниор'),
// ];

// tags.forEach(tag => console.log(tag)); */

// // const container = document.getElementById('container');
// // tags.forEach(tag => container.appendChild(tag));


// /* const tag = createStyledTag('h1', 'red', 'Дауренбек Шамидинов');
// document.body.appendChild(tag); */

// // Задание 7

// /* const select = document.getElementById('select');

// for (let year = 1960; year <= 2020; year++) {
//   const option = document.createElement('option');
//   option.value = year;
//   option.textContent = year;

//   select.appendChild(option);
// }; */

// // Задание 8

// /* const clients = [
//   { name: "Женя", order: true },
//   { name: "Кристина", order: true },
//   { name: "Павел", order: false },
//   { name: "Виолетта", order: false },
//   { name: "Костя", order: true }
// ];

// const ul = document.getElementById("list");

// clients.forEach(client => {

//   const li = document.createElement("li");
//   const status = client.order ? "оплатил" : "отменил";

//   const text = document.createTextNode(`Клиент ${client.name} ${status} заказ`);

//   li.appendChild(text);
//   ul.appendChild(li);
// }); */

// // Задание 9

// /* const linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// const linksContainer = document.getElementById('links-container');

// const linksDiv = document.createElement('div');

// linksDiv.style.backgroundColor = '#f0f0f0';

// linksDiv.style.padding = '7px';

// for (let i = 0; i < linksArr.length; i++) {
//     const link = document.createElement('a');

//     link.setAttribute('href', linksArr[i]);

//     link.setAttribute('target', '_blank');

//     link.textContent = linksArr[i];
//     linksDiv.appendChild(link);
// }

// linksContainer.appendChild(linksDiv); */

// // Задание 10

// /* const elementsToRemove = document.querySelectorAll('.forRemove');

//       elementsToRemove.forEach(element => {

//         element.remove();
//       }); */

      
// // Задание 11

//       const users = [
//         {name: 'Mark', age: 12},
//         {name: 'Olga', age: 30},
//         {name: 'Tom', age: 25},
//         {name: 'Den', age: 43}
//       ];
      
// const tableBody = document.getElementById('usersTable');

// users.forEach(user => {
//   const row = document.createElement('tr');

//   const nameCell = document.createElement('td');

//   nameCell.textContent = user.name;

//   nameCell.style.color = 'red';

//   row.appendChild(nameCell);

//   const ageCell = document.createElement('td');

//   ageCell.textContent = user.age;

//   ageCell.style.color = 'blue';

//   row.appendChild(ageCell);

//   tableBody.appendChild(row);
// });