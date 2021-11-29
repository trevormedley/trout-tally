const express = require("express");
const cors = require("cors");
const controller = require('./controller.js')

const app = express();

//middlewares
app.use(cors());
app.use(express.json());


app.get(`/api/trout/`, controller.getCatchCards);
app.get(`/api/trout/:id`, controller.getStory);
app.post(`/api/trout/`, controller.createNewCard);
app.put(`/api/trout/:id`, controller.updateCard);


app.listen(3333, () => console.log("Server running on 3333"));