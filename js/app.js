/*==================================================
                  Phone api loading
  ==================================================*/
const phoneApiLoad = async (searchText) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
   const res = await fetch(url);
   const phoneData = await res.json();
   displayPhone(phoneData.data)
}

phoneApiLoad("apple");
/*==================================================
                  print display elements
  ==================================================*/
const displayPhone = phone => {
   const phonesContainer = document.getElementById("phones-container");
   phonesContainer.innerHTML = "";
   // display only 20 phones print
   phone = phone.slice(0, 20);
   // display not phones found
   const notPhoneMessage = document.getElementById("no-phones-message");
   if (phone.length === 0) {
      notPhoneMessage.classList.remove("hidden")
   } else {
      notPhoneMessage.classList.add("hidden")
   }

   phone.map(phones => {
      // create a new HTML element and display it
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
   })
   // stop
   toggleLoader(false)
}
/*==================================================
            search text and call api
  ==================================================*/
document.getElementById("search-btn").addEventListener("click", function () {
   toggleLoader(true)
   const searchField = document.getElementById("search-field");
   const searchFieldText = searchField.value;
   searchField.value = "";
   phoneApiLoad(searchFieldText);
})

/*==================================================
            loader loading 
  ==================================================*/

const toggleLoader = (isLoading) => {
   const loaderSection = document.getElementById("loader");
   if (isLoading) {
      loaderSection.classList.remove("hidden")
   } else {
      loaderSection.classList.add("hidden")
   }
}








