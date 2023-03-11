const express = require('express')
const api = express()
const cors = require("cors");
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
api.use(cors());
api.use(express.json())

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


api.get("/", (req, res) => {
    console.log("this")
    res.send({msg: "this is the json api"})
})

api.post("/summarize", async (req, res) => {
    console.log(req.body)

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Summarize the following text:\n${req.body.text}`,
        temperature: 0,
        max_tokens: 2048
    });

    res.send({ text: response?.data?.choices[0]?.text })
})

module.exports = api