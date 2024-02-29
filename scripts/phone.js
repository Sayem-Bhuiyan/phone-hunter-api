const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones =data.data;
    displayPhone(phones)
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container')

    // clear phoneContainer before adding phoneCard
    phoneContainer.textContent = '';

    // display show all btn if there are more than 12 phone
    const showAllBtn = document.getElementById('show-all-btn');
    if(phones.length > 12){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }
    
    // show first 12 phone 
    phones = phones.slice(0, 12)


    phones.forEach((phone) => {
        const {brand, phone_name, slug, image} = phone;
        console.log(phone)
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img src=${image} alt="Phone" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard)
    })
    // hide loading spinner
    toggleLoadingSpinner(false)
}

// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    toggleLoadingSpinner(true);
    loadPhone(searchText);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

// loadPhone()