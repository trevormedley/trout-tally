const form = document.querySelector('form')

const baseURL = `http://localhost:3333/api/trout/`

// In this function, I first created variabels for all the input fields in the form. Then I created a BodyObj that will house the values of each the inputs. We then call the createCard function with the new BodyObj passed in.

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