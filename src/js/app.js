import read from "./reader.js";
import json from "./parser.js";


export default class GameSavingLoader {
    static load() {
        return read()
        .then(data => json(data))
        .then(value => JSON.parse(value))
        .catch(error => {
            throw new Error("Error game saving!")
        })
    }
}

GameSavingLoader.load()
    .then((saving) => {
        // saving объект класса GameSaving
        return saving;
    }), (error) => {
        error;
    };
