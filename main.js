const houses = [{   
    id: "1",
    image: "./img/image1.jpg",
    price: "$559,000",
    beds: "4",
    baths: "3",
    length: "4,250 sqft.",
    address: "3292 E. Avalon St. Los Angeles, CA"
}, {   
    id: "2",
    image: "./img/image2.jpg",
    price: "$690,000",
    beds: "3",
    baths: "2",
    length: "2,634 sqft.",
    address: "1215 Claire Dr. Palo Alto, CA"
}, {   
    id: "3",
    image: "./img/image3.jpg",
    price: "$519,000",
    beds: "5",
    baths: "4",
    length: "5,389 sqft.",
    address: "1734 Roe St. San Diego, CA"
}, {   
    id: "4",
    image: "./img/image4.jpg",
    price: "$610,000",
    beds: "4",
    baths: "3",
    length: "4,823 sqft.",
    address: "2392 Orange St. San Jose, CA"
}, {   
    id: "5",
    image: "./img/image5.jpg",
    price: "$530,000",
    beds: "2",
    baths: "2",
    length: "2,250 sqft.",
    address: "1922 Freemont St. San Fransisco, CA"
}, {   
    id: "6",
    image: "./img/image6.jpg",
    price: "$523,000",
    beds: "2",
    baths: "2",
    length: "2,250 sqft.",
    address: "1920 Freemont St. San Fransisco, CA"
}, {   
    id: "7",
    image: "./img/image7.jpg",
    price: "$670,000",
    beds: "5",
    baths: "4",
    length: "5,352 sqft.",
    address: "3092 Second St. Los Angeles, CA"
}];

document.getElementById('properties-slider').innerHTML = `${houses.map(getTemplate).join('')}`;

function getTemplate(house) {
    return `
    <div class="properties-item">
        <a data-model-target="#modal"  href="">
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
            <button id="btn" class="rounded">See More</button>
        </div>
    </div>`;
}


/* New Popup */

document.getElementById('btn').addEventListener('click', function() {
    document.querySelector('.popup').style.display = "block";
});

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = "none";
});

/* JQUERY */

$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });

   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });

   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });

   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();

       if (scrollTop > 0) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', '#fff');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', 'transparent');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }

       headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
   });

   $(document).trigger('scroll');
});