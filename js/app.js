/*==================================================
                  Phone api loading
  ==================================================*/
const phoneApiLoad = async (searchText) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
   const res = await fetch(url);
   const phoneData = await res.json();
   displayPhone(phoneData.data)
}

/*==================================================
                  print display elements
  ==================================================*/
const displayPhone = data => {
   const phonesContainer = document.getElementById("phones-container");
   data.map(phones => {
      const parentDiv = document.createElement("div");
      parentDiv.innerHTML = `
      <div class="card py-5 bg-base-100 shadow-xl">
      <figure>
         <img src="${phones.image}" alt="Shoes" />
      </figure>
      <div class="card-body">
         <h2 class="card-title">${phones.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
         </div>
      </div>
   </div>
   `
      phonesContainer.appendChild(parentDiv)
      console.log(phones)
   })
}
/*==================================================
                  print display elements
  ==================================================*/
document.getElementById("search-btn").addEventListener("click", function () {
   const searchField = document.getElementById("search-field");
   const searchFieldText = searchField.value;
   searchField.value = "";
   phoneApiLoad(searchFieldText);
})

phoneApiLoad();