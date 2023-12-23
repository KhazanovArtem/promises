import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load()
.then(saving => {
    console.log(`Объект ${saving.data} загружен`)
})
.catch(e => new Error(e));