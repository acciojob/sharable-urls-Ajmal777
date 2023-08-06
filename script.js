// your code here
const form = document.getElementById('form');
const baseUrl = 'https://localhost:8080/';
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    let tempUrl = baseUrl + '?';

    if(name && year){
        tempUrl += `name=${name}&year=${year}`;
    }
    else if(name){
        tempUrl += `name=${name}`;
    }
    else tempUrl += `year=${year}`;

    document.getElementById('url').innerText = tempUrl;
})