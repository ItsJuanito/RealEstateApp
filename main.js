const houses = [{   
    image: "./img/image1.jpg",
    price: "$559,000",
    beds: "4",
    baths: "3",
    length: "4,250 sqft.",
    address: "3292 E. Avalon sSt. Los Angeles, CA"
}, {   
    image: "./img/image2.jpg",
    price: "$690,000",
    beds: "3",
    baths: "2",
    length: "2,634 sqft.",
    address: "1215 Claire Dr. Palo Alto, CA"
}, {   
    image: "./img/image3.jpg",
    price: "$519,000",
    beds: "5",
    baths: "4",
    length: "5,389 sqft.",
    address: "1734 Roe St. San Diego, CA"
}, {   
    image: "./img/image4.jpg",
    price: "$610,000",
    beds: "4",
    baths: "3",
    length: "4,823 sqft.",
    address: "2392 Orange St. San Jose, CA"
}, {   
    image: "./img/image5.jpg",
    price: "$530,000",
    beds: "2",
    baths: "2",
    length: "2,250 sqft.",
    address: "1922 Freemont St. San Fransisco, CA"
}, {   
    image: "./img/image6.jpg",
    price: "$523,000",
    beds: "2",
    baths: "2",
    length: "2,250 sqft.",
    address: "1920 Freemont St. San Fransisco, CA"
}, {   
    image: "./img/image7.jpg",
    price: "$670,000",
    beds: "5",
    baths: "4",
    length: "5,352 sqft.",
    address: "3092 Second St. Los Angeles, CA"
}];


function getTemplate(house) {
    return `
    <div class="properties-item">
        <a href="#">
            <img src="${house.image}" height="350px" width="250px"></img>
        </a>
        <div class="property-details">
        <p class="price">Price: ${house.price}</p>
        <span class="beds">Beds: ${house.beds}</span>
        <span class="baths">Baths: ${house.baths}</span>
        <span class="sqft">${house.length}</span>
        <address class="address">
            ${house.address}
        </address>
    </div>
    </div>`;
}

// JavaScript
document.getElementById('properties-slider').innerHTML = `${houses.map(getTemplate).join('')}`;