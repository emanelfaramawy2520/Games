import {Ui} from "./ui.module.js";
import {obj} from "./index.js";
import { Details} from "./details.module.js";

export class Games
{
    constructor()
    {
        this.getGames("MMORPG");

        let gamesCategory = document.querySelectorAll(".nav-link");
        for(let i = 0 ; i<gamesCategory.length ; i++)
        {
            gamesCategory[i].addEventListener('click' , function(event){

                document.querySelector(".nav-item .active").classList.remove("active");
                event.target.classList.add("active");
                obj.getGames(event.target.getAttribute("id"));

            })
        }

        this.ui = new Ui();
        
    }
    
    async getGames(category){
    
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
    
        let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let finalResponse = await apiResponse.json();
        // console.log(finalResponse);
        this.ui.displayGames(finalResponse);
        this.detailsEvent();
        loading.classList.add("d-none");
        loading.classList.remove("d-flex");
        
    }

    detailsEvent(){

        let cardItem = document.querySelectorAll(".card-item");
        for(let i=0 ; i<cardItem.length ; i++)
        {
            cardItem[i].addEventListener("click" , function(){
    
                new Details(cardItem[i].getAttribute("id"))
                document.querySelector(".game").classList.add("d-none");
                document.querySelector(".game-details").classList.remove("d-none");
    
            })
        }
        
    
    }

}


