// WORK IN PROGRESS

// const storySection = document.querySelector('#storySection')

// const baseURL = `http://localhost:3333/api/trout/`

// const dataCallback = ({ data: fish }) => displayCatchCards(fish)
// const errCallback = err => console.log(err.response.data)

// const getStory = () => axios.get(baseURL)
//     .then(dataCallback)
//     .catch(errCallback)

// function createStory(data) {
//     const storyCard = document.createElement('div');

//     storyCard.innerHTML = `
//     <div id="storyWrapper">
//           <div id="returnButton">
//             <a href="file:///Users/trevormedley/Desktop/Bright%20Paths/TroutTally/client/index.html"><button><i class="fas fa-chevron-left"></i>Back to Previous Page</button></a>
//           </div>
//           <div id="storyContent">
//               <aside>
//                   <img id="imgAside" src=${data.imageURL} alt="photo">
//                   <div id="asideData">
//                     <div class="nameDiv">
//                         <h3>${data.name}</h3>
//                     </div>
//                     <div class="catchText">
//                         <h4>Date Caught: <span class="textAnswer">${data.date}</span></h4>
//                     </div>
//                     <div class="catchText">
//                         <h4>Fly Used: <span class="textAnswer">${data.flyUsed}</span></h4>
//                     </div>
//                     <div class="catchText">
//                         <h4>River: <span class="textAnswer">${data.river}</span></h4>
//                     </div>
//                     <div class="catchText">
//                         <h4>Property: <span class="textAnswer">${data.property}</span></h4>
//                     </div>
//                   </div>
//               </aside>
//               <div id="storyText">
//                   <h3 id="storyTitle">The Story</h3>
//                   <p>${data.story}</p>
//               </div>
//           </div>
//     </div>
//     `

//     storySection.appendChild(storyCard);
// }