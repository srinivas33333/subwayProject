// jshint esversion:6
const country = document.getElementById('country');
const form = document.getElementsByClassName('form')[0];

const countryToIso = {
    'arab':'ae',
    'argentina':'ar',
     'austria':'at'

};

form.addEventListener('submit', getNews);

function getNews(e) {


    e.preventDefault();
    
    const select = String(country.value);
        getIsocode = countryToIso[select];
        console.log(select, getIsocode);

}

