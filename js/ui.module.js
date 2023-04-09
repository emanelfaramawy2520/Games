

export class Ui 
{
    displayGames(categoryGames){

        let cartona = ``;
        for(let i=0 ; i<categoryGames.length ; i++)
        {
            cartona += `<div class="col-xl-3 col-lg-4 col-md-6">
    
                <div class="card card-item item h-100" id="${categoryGames[i].id}">
    
                    <div class="card-body">
                        <div class="card-image">
                            <img class="w-100" src="${categoryGames[i].thumbnail}" alt="image">
                        </div>
                        <div class="card-body-caption pt-3">
                            <div class="sub-title d-flex justify-content-between">
                                <h3>${categoryGames[i].title}</h3>
                                <span class="p-2">Free</span>
                            </div>
                        </div>
                        <p class="text-center m-0">${categoryGames[i].short_description.split(" ",8)}</p>
                    </div>
                    <footer class="d-flex justify-content-between">
                        <span>${categoryGames[i].genre}</span>
                        <span>${categoryGames[i].platform}</span>
                    </footer>
    
                </div>
    
            </div>`
        }
    
        let rowGames = document.querySelector("#rowGames");
        rowGames.innerHTML = cartona ;
    
    }


    displayDetails(details){

        let detailsInfo = document.querySelector("#detailsInfo");
    
        let cartoona = `<div class="col-md-4">
    
                <div class="item">
    
                    <img class="w-100" src="${details.thumbnail}" alt="image">
    
                </div>
    
            </div>
    
            <div class="col-md-8">
    
                <div class="item details-content">
    
                    <h3>Title: ${details.title}</h3>
                    <p>Category: <span class="text-bg-info">${details.genre}</span></p>
                    <p>Platform: <span class="text-bg-info">${details.platform}</span></p>
                    <p>Status: <span class="text-bg-info">${details.status}</span></p>
                    <p class="details-paragraph">${details.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${details.game_url}">Show Game</a>
                    
                </div>
    
            </div>`;
        
        detailsInfo.innerHTML=cartoona;
    
    }
    
}