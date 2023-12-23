import GameSaving from './GameSaving';
import json from './parser'
import read from './reader'

export default class GameSavingLoader {
    static load() {
        return read()
        .then(data => json(data))
        .then(data => {
            return new GameSaving(JSON.parse(data));
        })
    }
  }