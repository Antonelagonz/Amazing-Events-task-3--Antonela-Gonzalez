const events = events_data.events
const currentDate = events_data.currentDate
const info = events
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
console.log(id)

const card = info.find(item => item._id == id)

const div = document.getElementById("cont-cards")
div.innerHTML = `<div class="card card-details">
<img src="${card.image}" class="card-img-details card-img-top p-3 justify-content-center" alt="Picture of ${card.name}">
<h5 class="card-title-details text-align-center">${card.name}</h5>
<div class="card-body-details">
    <ul>
        <li>Date:${card.date}</li>
        <li>Description:${card.description}</li>
        <li>Category:${card.category}</li>
        <li>Place:${card.place}</li>
        <li>Capacity:${card.capacity}</li>
        <li>Assistance:${card.assistance}</li>
      </ul>
      <p class="price-details fw-bold text-center text-decoration-underline">Price:$${card.price}</p>
</div>
</div>`
