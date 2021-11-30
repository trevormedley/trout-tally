const data = require('./db.json');

module.exports = {
    getCatchCards: (req, res) => {
        res.status(200).send(data);
    },
    getStory: (req, res) => {
        let {id} = req.params
        let cardIndex = data.findIndex((card) => {
            return card.id === +id
        })
        res.status(200).send(data[cardIndex]);
    },
    createNewCard: (req, res) => {
        let newCard = {
            id: data.length +1,
            name: req.body.name,
            email: req.body.email,
            river: req.body.river,
            flyUsed: req.body.flyUsed,
            date: req.body.date,
            property: req.body.property,
            imageURL: req.body.imageURL,
            story: req.body.story,
            likes: req.body.likes,
            claps: req.body.claps,
            wows: req.body.wows,
        };
        data.push(newCard)
        res.status(200).send(data);
    },
    updateCard: (req, res) => {
        let {id} = req.params
        let cardIndex = data.findIndex((card) => {
            return card.id === +id
        })

        if (req.body.type === 'like') {
            data[cardIndex].likes++
        } else if (req.body.type === 'clap') {
            data[cardIndex].claps++
        } else if (req.body.type === 'wow') {
            data[cardIndex].wows++
        }
        res.status(200).send(data);
    },
}