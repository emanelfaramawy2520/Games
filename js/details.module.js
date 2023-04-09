import {Ui} from "./ui.module.js";


export class Details
{

    constructor(idOfGame)
    {
        this.getDetails(idOfGame);

        let btnClose = document.querySelector("#btnClose");

        btnClose.addEventListener("click" , function(){

            document.querySelector(".game").classList.remove("d-none");
            document.querySelector(".game-details").classList.add("d-none");


        })

        this.ui = new Ui();
    }

    async getDetails(gameId){
    
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        loading.classList.add("d-flex");
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '96bb1a8dfcmsh4093c00a3f1ee2bp169c66jsn039fc6723b4a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
    
        let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        let finalResponse = await apiResponse.json();
        // console.log(finalResponse);
        this.ui.displayDetails(finalResponse);
    
        loading.classList.add("d-none");
        loading.classList.remove("d-flex");
        
    }
    
}