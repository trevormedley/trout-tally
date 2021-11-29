const form = document.querySelector('form')

const baseURL = `http://localhost:3333/api/trout/`


function submitHandler (e) {

    let name = document.querySelector('#fullName')
    let email = document.querySelector('#email')
    let river = document.querySelector('#river')
    let flyUsed = document.querySelector('#flyused')
    let dateCaught = document.querySelector('#date')
    let property = document.querySelector('#property')
    let imageURL = document.querySelector('#imageURL')
    let story = document.querySelector('#story')

    let bodyObj = {
        name: name.value,
        email: email.value,
        river: river.value,
        flyUsed: flyUsed.value,
        date: dateCaught.value,
        property: property.value,
        imageURL: imageURL.value,
        story: story.value,
        likes: 0,
        claps: 0,
        wows: 0,
    }

    createCard(bodyObj)

}

const createCard = body => {
    axios.post(baseURL, body)
    .then(dataCallback)
    .catch(errCallback)
}



form.addEventListener('submit', submitHandler);