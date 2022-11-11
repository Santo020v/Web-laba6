const cards = document.getElementById('info');
const randomButton = document.getElementById('random-button');

function getDataFromApi(){
    const url = 'https://randomuser.me/api';
    fetch(url)
    .then(response => response.ok ? response.json() : alert('User not found'))
    .then((data) => {
        makeCard(data.results[0]);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function makeCard(data){
    let card = document.createElement('div');
    card.className = 'card';
    cards.prepend(card);

    let img = document.createElement('img');        
    img.src = data.picture.large;
    img.className = 'photo-users';
    card.appendChild(img);

    let text = document.createElement('div');
    text.className = 'text';
    card.appendChild(text);

    let name = document.createElement('p');        
    name.innerHTML = `<span>Name: </span>${data.name.title + ' '+ data.name.first + ' ' + data.name.last}`;
    name.className = 'name';
    text.appendChild(name);

    let city = document.createElement('p');        
    city.innerHTML = `<span>City: </span>${data.location.city}`;
    city.className = 'city';
    text.appendChild(city);

    let country = document.createElement('p');        
    country.innerHTML = `<span>Country: </span>${data.location.country}`;
    country.className = 'country';
    text.appendChild(country);

    let postcode = document.createElement('p');        
    postcode.innerHTML = `<span>Postcode: </span>${data.location.postcode}`;
    postcode.className = 'postcode';
    text.appendChild(postcode);  
}
randomButton.addEventListener('click', ()=>{
    getDataFromApi();
})