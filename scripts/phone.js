const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones =data.data;
    displayPhone(phones)
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
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
}


loadPhone()