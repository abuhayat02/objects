let prodact = [
    { name: "iPhone 14", brand: "Apple", price: 999, storage: "128GB" },
    { name: "Samsung Galaxy S22", brand: "Samsung", price: 799, storage: "128GB" },
    { name: "Google Pixel 6", brand: "Google", price: 599, storage: "128GB" },
    { name: "OnePlus 10 Pro", brand: "OnePlus", price: 899, storage: "256GB" },
    { name: "Xiaomi Mi 11", brand: "Xiaomi", price: 749, storage: "128GB" },
    { name: "Sony Xperia 1", brand: "Sony", price: 999, storage: "256GB" },
    { name: "Oppo Find X5", brand: "Oppo", price: 999, storage: "256GB" },
    { name: "Huawei P40", brand: "Huawei", price: 699, storage: "128GB" },
    { name: "Motorola Edge 20", brand: "Motorola", price: 599, storage: "128GB" },
    { name: "Nokia G50", brand: "Nokia", price: 299, storage: "64GB" },
    { name: "Realme GT", brand: "Realme", price: 499, storage: "128GB" },
    { name: "Vivo X70 Pro", brand: "Vivo", price: 899, storage: "256GB" },
    { name: "ASUS ROG Phone 5", brand: "ASUS", price: 999, storage: "256GB" },
    { name: "LG Velvet", brand: "LG", price: 599, storage: "128GB" },
    { name: "HTC U20", brand: "HTC", price: 499, storage: "256GB" },
    { name: "ZTE Axon 20", brand: "ZTE", price: 399, storage: "128GB" },
    { name: "Google Pixel 5a", brand: "Google", price: 449, storage: "128GB" },
    { name: "Samsung Galaxy A53", brand: "Samsung", price: 349, storage: "128GB" },
    { name: "Xiaomi Redmi Note 11", brand: "Xiaomi", price: 199, storage: "64GB" },
    { name: "OnePlus Nord 2", brand: "OnePlus", price: 399, storage: "128GB" },
    { name: "Sony Xperia 10 III", brand: "Sony", price: 399, storage: "128GB" },
    { name: "Nokia X20", brand: "Nokia", price: 349, storage: "128GB" },
    { name: "Motorola Moto G Power", brand: "Motorola", price: 249, storage: "64GB" },
    { name: "Oppo A54", brand: "Oppo", price: 199, storage: "64GB" },
    { name: "Realme 8", brand: "Realme", price: 249, storage: "128GB" },
    { name: "Vivo Y20", brand: "Vivo", price: 199, storage: "64GB" },
    { name: "Huawei Nova 9", brand: "Huawei", price: 499, storage: "128GB" },
    { name: "LG K42", brand: "LG", price: 199, storage: "64GB" },
    { name: "HTC Desire 21 Pro", brand: "HTC", price: 299, storage: "128GB" },
    { name: "ZTE Blade 20", brand: "ZTE", price: 199, storage: "64GB" },
    { name: "Google Pixel 4a", brand: "Google", price: 349, storage: "128GB" },
    { name: "Samsung Galaxy M32", brand: "Samsung", price: 279, storage: "128GB" },
    { name: "Xiaomi Poco X3", brand: "Xiaomi", price: 249, storage: "128GB" },
    { name: "OnePlus 9", brand: "OnePlus", price: 729, storage: "256GB" },
    { name: "Sony Xperia L4", brand: "Sony", price: 199, storage: "64GB" },
    { name: "Nokia 5.4", brand: "Nokia", price: 249, storage: "128GB" },
    { name: "Motorola Moto G Stylus", brand: "Motorola", price: 299, storage: "128GB" },
    { name: "Oppo Reno 5", brand: "Oppo", price: 399, storage: "128GB" },
    { name: "Realme Narzo 30", brand: "Realme", price: 199, storage: "64GB" },
    { name: "Vivo V21", brand: "Vivo", price: 399, storage: "128GB" },
    { name: "Huawei P30 Lite", brand: "Huawei", price: 299, storage: "128GB" },
    { name: "LG Q52", brand: "LG", price: 249, storage: "64GB" },
    { name: "HTC Wildfire E3", brand: "HTC", price: 159, storage: "64GB" },
    { name: "ZTE Axon 11", brand: "ZTE", price: 399, storage: "128GB" },
    // Add more products here if needed
];

let counter = 0;

for (let prdacts of prodact) {
    ourInformations(prdacts.name, prdacts.price, prdacts.storage, prodact.brand);
}

function ourInformations(prodactName, prodactPrice, prodactStorage, prodactBrand) {
    let div = document.createElement('div');
    div.innerHTML = `
  <div class="max-w-sm mx-auto bg-blue-100 rounded-sm shadow-md overflow-hidden">
        <div class="p-4">
        <img src = 'https://th.bing.com/th/id/R.2cb9816f51588e3c3674b28a1cd2b8ae?rik=cmYiWYeEcXLGGg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-LZ6bY3ThIx4%2fUXfNCQWVRJI%2fAAAAAAAADNo%2fVafk6qr01-g%2fs1600%2fmobile%2bphones.jpeg&ehk=vl0dI3E%2fk5kyXaQLEupH5q49Aq%2fPBHTLNtm%2fPvjk9%2fM%3d&risl=&pid=ImgRaw&r=0'>
            <p class="text-gray-600 font-bold text-center text-xl py-3 ">Brand: ${prodactName}</p>
            <p class="text-gray-600">Price: ${prodactPrice}</p>
            <p class="text-gray-600">Price: ${prodactBrand}</p>
            <p class="text-gray-600">Storage: ${prodactStorage}</p>
            <button onclick = "myInfo(${prodactPrice})" class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cat</button>
        </div>
    </div>
  `;
    document.getElementById('all-contant').appendChild(div)
}

function myInfo(price) {
    counter++
    document.getElementById('counter-items').innerText = counter;
    let total = parseFloat(document.getElementById('total-amount').innerText || 0);
    console.log(total)
    document.getElementById('total-amount').innerText = total + price;
}

