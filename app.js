//jshint esversion:6
const formaction = document.getElementsByClassName('form')[0];
const country = document.getElementById('country');
let newsSection = document.getElementById('newsflexdiv');
const bodyload = document.getElementById('bodyload');
const header = document.getElementById('logo');
let url = '';
const countryToIso = {
    'arab':'ae',
    'argentina':'ar',
    'austria':'at',
    'australia': 'au',
    'belgium': 'be',
    'Bulgaria': 'bg',
    'brazil': 'br',
    'canada':'ca',
    'switzerland': 'ch',
    'china': 'cn',
    'Colombia': 'co',
    'cuba': 'cu',
    'czechia':'cz',
    'germany': 'de',
    'egypt': 'eg',
    'france': 'fr',
    'united kingdom': 'gb',
    'greece': 'gr',
    'hong kong': 'hk',
    'hungary': 'hu',
    'indonesia': 'id',
    'ireland': 'ie',
    'israel': 'il',
    'india': 'in',
    'italy': 'it',
    'japan': 'jp',
    'south korea': 'kr'
    // '': 'lt',
    // '': 'lv',
    // '': 'ma',
    // '': 'mx',
    // '': 'my',
    
};

let output = '';
userVisit();

// console.log(country);
function userVisit() {  //used to display news without user search
        
    
    // const = 
      url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=21c095742acd4aa491658210230952f8' ;
    fetch(url).then( res => {
            return res.json();
        }).then(data => {  //accessing apinews from here
           
            const articles = data.articles;
          let   togetdate = (articles[0].publishedAt).split('T');
             console.log(togetdate[1].substr(0,8));
        articles.map((article,index) => {
            
            output += `.
                <article>
               <div id="imgid"> <img id="imgid" src="${articles[index].urlToImage}" class="img1" alt=""></div>
            <div id="actual-content">
            <div id="one">

            <p id="from">SOURCE:&nbsp; ${articles[index].source.name}</p>
            <p id="title">${articles[index].title}</p>
             <p id="describe">${articles[index].description}</p>

            </div>
            <div id="two">
            <div>
            <p id="date">${articles[index].publishedAt.split("T")[0]}</p>
            <p id='time'>${articles[index].publishedAt.split('T')[1].substr(0,8)}</p>
            </div>
             <p id="more"><a href=${articles[0].url}>more</a></p>
            </div>

            </div>
               </article>
                                
                `;
        });
       
        document.getElementById('news-container').innerHTML = output;
    } );
}



    
formaction.addEventListener('submit', getNews);//fetch news when user search

function getNews(e) {  //used to display news without user search
    e.preventDefault();
    output = '';   //delet previous articles
        // document.getElementById('news-container').innerHTML = 'sri';
    
    const api_key = '21c095742acd4aa491658210230952f8';
    const selectedcountry = country.value;

     
    const select = String(country.value).toLowerCase();//get iso code of country from countrytoIso object
    console.log(select,'-:selected country by user');
    
    for (let checkcountryIso in countryToIso) {
          console.log( checkcountryIso == select);
        
        if (checkcountryIso == select) {

       getIsocode = countryToIso[select];
        }
        else{
            document.getElementById('news-container').innerHTML = 'please check your search';
            output = '';
             console.log(output);
        }
    }
        // console.log(select, getIsocode);

      url =`https://newsapi.org/v2/top-headlines?country=${getIsocode}&apiKey=${api_key}` ;
    fetch(url).then( res => {
            return res.json();
        }).then(data => {  //accessing apinews from here
           
            const articles = data.articles;
        articles.map((article,index) => {
            
            output += `
                <article>
               <div id="imgid"> <img id="imgid" src="${articles[index].urlToImage}" class="img1" alt=""></div>
            <div id="actual-content">
            <div id="one">

            <p id="from">SOURCE:&nbsp; ${articles[index].source.name}</p>
            <p id="title">${articles[index].title}</p>
             <p id="describe">${articles[index].description}</p>

            </div>
            <div id="two">
            <div>
            <p id="date">${articles[index].publishedAt.split("T")[0]}</p>
            
            <p id='time'>&nbsp;&nbsp;${articles[index].publishedAt.split('T')[1].substr(0,8)}</p>
            </div>
             <p id="more"><a href=${articles[0].url}>more</a></p>
            </div>

            </div>
               </article>
                                
                `;
        });
       
        document.getElementById('news-container').innerHTML = output;
    } );
}
