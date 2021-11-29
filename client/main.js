const recentlyCaughtSection = document.querySelector('#recentlyCaught')
const form = document.querySelector('form')

const baseURL = `http://localhost:3333/api/trout/`

const dataCallback = ({ data: fish }) => displayCatchCards(fish)
const errCallback = err => console.log(err.response.data)

const getAllCatchCards = () => axios.get(baseURL)
    .then(dataCallback)
    .catch(errCallback)

const updateCard = (id, type) => axios.put(`${baseURL}${id}`, {type})
    .then(dataCallback)
    .catch(errCallback)

function createCatchCard(data) {
    const catchCard = document.createElement('div');
    
    catchCard.innerHTML = `      
    <div class="catchCard">
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
      </div>`

  recentlyCaughtSection.appendChild(catchCard);
}

function displayCatchCards(arr) {
    recentlyCaughtSection.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCatchCard(arr[i]);
    }
}

getAllCatchCards();