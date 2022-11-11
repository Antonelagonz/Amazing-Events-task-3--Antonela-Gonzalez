const events = events_data.events

const currentDate = events_data.currentDate

let cards = document.getElementById('cards');
let fragment = document.createDocumentFragment();
for(let event of events){
    if(event.date>currentDate){
        let div = document.createElement(`div`);
        div.classList.add(`card`);
        div.innerHTML+= `<img src="${event.image}" class="card-img-top" alt="Image of ${event.createDocumentFragment}"/>
        <div class="card-body d-flex flex-column align-items-center">
        <h3 class="card-title">${event.name}</h3>
        <p class="card-text"> ${event.description} </p>
        <h5 class="mt-auto"> ${event.price} </h5>
        <a href="./details.html" class="btn btn-primary align-self-strech">More info...</a>
        </div>`;
    fragment.appendChild(div);
    }
}
cards.appendChild(fragment);