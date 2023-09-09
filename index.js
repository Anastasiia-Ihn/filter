const arr= [
    { name: 'Antoni'},
    { name:'Alisa'},
   { name: 'Victor'}
]

const listEl = document.querySelector('.js-list');
const inputEl = document.querySelector('[name="input-filter"]');

inputEl.addEventListener('input', onFilterChange);

function onFilterChange(evt) {

    const filterWord = evt.target.value.toLowerCase();//слово яке вводить клієнт в нижньому регістрі
    const filteredItems= arr.filter(elem=> elem.name.toLowerCase().includes(filterWord)) // відфільтрований масив
    createListMarkup(filteredItems)  //запушена відфільтрована розмітка
    
}

function createListMarkup(elems) {//ств розмітки
    const markup = elems.map(elem => `<li>${elem.name}</li>`).join('');
    listEl.innerHTML=markup;
}
createListMarkup(arr)