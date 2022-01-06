//Creating variables for areas on the DOM
const recentlyCaughtSection = document.querySelector('#recentlyCaught')
const form = document.querySelector('form')
const weatherSection = document.querySelector('#weatherWrapper')

const baseURL = `http://localhost:3333/api/trout/`


//Need a little insight on what these lines of code are doing
const dataCallback = ({ data: fish }) => displayCatchCards(fish)
const errCallback = err => console.log(err.response.data)

const getAllCatchCards = () => axios.get(baseURL)
    .then(dataCallback)
    .catch(errCallback)

const updateCard = (id, type) => axios.put(`${baseURL}${id}`, {type})
    .then(dataCallback)
    .catch(errCallback)

//This funciton is creating the DIV element that houses each post    
function createCatchCard(data) {
    const catchCard = document.createElement('div');
    
    catchCard.innerHTML = `      
    <article class="catchCard">
            <div id="imgDiv">
                <img id="catchImg" src=${data.imageURL}>
            </div>
            <div id="textDiv">
                <div class="nameDiv">
                    <h3>${data.name}</h3>
                </div>
                <div class="catchText">
                    <h4>Date Caught: <span class="textAnswer">${data.date}</span></h4>
                </div>
                <div class="catchText">
                    <h4>Fly Used: <span class="textAnswer">${data.flyUsed}</span></h4>
                </div>
                <div class="catchText">
                    <h4>River: <span class="textAnswer">${data.river}</span></h4>
                </div>
                <div class="catchText">
                    <h4>Property: <span class="textAnswer">${data.property}</span></h4>
                </div>
            </div>
            <div id="bottomRow">
            <div id="likesDiv">
              <div id="emojiBar">
                  <div class="emojiLike" onclick="updateCard(${data.id}, 'like')">
                      <img class="emoji" src="assets/like.svg" alt="like">
                      <h6 id="like">${data.likes}</h6>
                  </div>
                  <div class="emojiLike" onclick="updateCard(${data.id}, 'clap')">
                      <img class="emoji" src="assets/clap.svg" alt="clap">
                      <h6 id="clap">${data.claps}</h6>
                  </div>
                  <div class="emojiLike" onclick="updateCard(${data.id}, 'wow')">
                      <img class="emoji" src="assets/wow.svg" alt="wow">
                      <h6 id="wow">${data.wows}</h6>
                  </div>
              </div>
          </div>
          <div id="storyLinkDiv">
              <p id="storyLink">View Story <i id="chevronRight" class="fas fa-chevron-right"></i></p>
          </div>
          </div>
      </article>`

  recentlyCaughtSection.appendChild(catchCard);
}
//This function is running a for loop to display the 'CatchCard' for each object.
function displayCatchCards(arr) {
    recentlyCaughtSection.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCatchCard(arr[i]);
    }
}


// This funciton is gathering weather data from 4 of the prominent fly fishing areas in the state of Michigan using the OpenWeatherMap API. Once the information is gathered, a DIV is created to house the information, and then those DIVS are appended to the weatherSection DIV.

function gatherWeather() {
    let cities = ['Grayling', 'Manistee', 'Muskegon', 'Ludington']
    for (let i = 0; i < cities.length; i++) {
        const getWeatherData = () => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&units=imperial&APPID=fccf3dfaa48624bebf4c1d12c38aa8e4`)
        .then(function (res) {
            let name = res.data.name
            let temp = Math.round(res.data.main.temp)
            let description = res.data.weather[0].description
            let humidity = res.data.main.humidity
            let windSpeed = res.data.wind.speed
            let icon = res.data.weather[0].icon
            let pressure = res.data.main.pressure

            let weatherCard = document.createElement('div')
            
            weatherCard.innerHTML = `
            <div class="weatherCard">
                <div id="topWeatherCard">
                    <h4>${name}</h4>
                    <img class="weatherIcon" src="./assets/WeatherIcons/${icon}.svg" alt="Weather Icon">
                </div>  
                <div id="middleWeatherCard">
                    <div id="tempDescription">
                    <div id="temp">
                        <h2 id="tempText">${temp}<sup>&#176;</sup></h2>
                        <p class="weatherP">${description}</p>
                    </div>
                    </div>
                </div>
                <div id="bottomWeatherCard">
                    <div class="weatherAttributes">
                    <p>Wind</p>
                    <h2>${windSpeed}<span> km</span></h2>
                    </div>
                    <div class="weatherAttributes">
                    <p>RH</p>
                    <h2>${humidity}<span>%</span></h2>
                    </div>
                    <div class="weatherAttributes">
                    <p>atm</p>
                    <h2>${pressure}</h2>
                    </div>
                </div>
                </div>
                `
            
            weatherSection.appendChild(weatherCard);
        });
        getWeatherData();
    }
}

gatherWeather();

getAllCatchCards();