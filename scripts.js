const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementsByClassName("close-icon")[0].addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JSON data for locations
const locations = [
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DBjQ5yEyghq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "PS": "https://www.instagram.com/p/DAYj_UQNAGY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.9090605,
                19.1193051
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf3",
        "name": "Powai PC & PS",
        "address": "Console gaming, Shop No. 125, Galleria Mall, Hiranandani Gardens, Powai, Mumbai - 400076",
        "contact": "7715907694",
        "timings": "Everyday, 9AM - 11PM",
        "end_time": "23",
        "start_time": "9",
        "x": "19.1193051",
        "y": "72.9090605",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FPOWAI.jpg?alt=media&token=0f4338b7-2847-49be-bda4-7db30e8e8dfb"
    },
    {
        "offers": {
            "PS": "https://www.instagram.com/p/DAzulUVySkn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.978027,
                19.19438
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf6",
        "name": "Thane Station West PS",
        "address": "Console gaming, Shop No. 2, Shreeji Ashish Building, Near Jagdish Book Depot, Thane Station West - 400601",
        "contact": "9136645034",
        "timings": "Everyday, 8AM - 11PM",
        "end_time": "23",
        "start_time": "8",
        "x": "19.194380",
        "y": "72.978027",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FTHANE%20STATION%20.jpg?alt=media&token=ea45c360-ca13-47a1-ae2f-c8acec0fb2ec"
    },
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DAY4eyQNWOU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "PS": "https://www.instagram.com/p/DAY4eyQNWOU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.9396546,
                19.1608229
            ]
        },
        "_id": "6734398c0ab8ca6493eddaef",
        "name": "Mulund Runwal Greens PS",
        "address": "Console gaming, Shop No. F-9, R Galleria, Runwal Greens, Mulund West, Mumbai - 400078",
        "contact": "7400050414",
        "timings": "Everyday, 9AM - 11PM",
        "end_time": "23",
        "start_time": "9",
        "x": "19.1608229",
        "y": "72.9396546",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FMULUND%20RUNWAL%20GREENS.jpg?alt=media"
    },
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DAYcdmBISWo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "PS": "https://www.instagram.com/p/DAYb5q_Nnfz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                73.086776,
                19.075834
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf4",
        "name": "Kharghar PC & PS",
        "address": "Console gaming, Sector No. 04, Bhoomi Towers, Shop No. 38, beside The J, Kharghar, Maharashtra 410210",
        "contact": "8828226595",
        "timings": "Everyday, 10AM - 1AM",
        "end_time": "1",
        "start_time": "10",
        "x": "19.075834",
        "y": "73.086776",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FKHARGHAR.jpg?alt=media"
    },
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DAYzY-nIajQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.8963303,
                19.0774845
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf1",
        "name": "Vidyavihar PC",
        "address": "Console gaming, Shop No. 3, Vasuki Building, Beside Somaiya Gate, Vidyavihar East, Mumbai - 400077",
        "contact": "9967451105",
        "timings": "Everyday, 8AM - 11PM",
        "end_time": "23",
        "start_time": "8",
        "x": "19.0774845",
        "y": "72.8963303",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FVIDHYAVIHAR%20PC%20.jpg?alt=media&token=5e0a79ac-5dbf-4f71-8663-810f0648683c"
    },
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DAYUZowojwa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "PS": "https://www.instagram.com/p/DAYTsJatzq3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.964529,
                19.198886
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf5",
        "name": "Thane Vasant Vihar PC & PS",
        "address": "Console gaming, Office No. 16, Amrapali Arcade, Above Gaurav Sweets, Vasant Vihar, Thane - 400610",
        "contact": "7304907730",
        "timings": "Everyday, 9AM - 11PM",
        "end_time": "23",
        "start_time": "9",
        "x": "19.198886",
        "y": "72.964529",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FTHANE%20VASANT%20VIHAR%20.jpg?alt=media&token=3ce251e6-58fd-42c9-9a22-ad8f97816c94"
    },
    {
        "offers": {
            "PC": "https://www.instagram.com/p/DAYruUDoIHm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            "PS": "https://www.instagram.com/p/DAYrgOUtLWT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.9194719,
                19.1806538
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf0",
        "name": "Mulund Cypress Garden PC & PS",
        "address": "Console gaming, Office No. 9, Golden Willows, Opp. Cypress Garden, Mumbai - 400080",
        "contact": "9136931664",
        "timings": "Everyday, 9AM - 11PM",
        "end_time": "23",
        "start_time": "9",
        "x": "19.1806538",
        "y": "72.9194719",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FMULUND%20CYPRESS.jpg?alt=media&token=72c665f7-a895-460f-816a-72786f18025b"
    },
    {
        "offers": {
            "PS": "https://www.instagram.com/p/DAYy1pUthMl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.8963303,
                19.0774845
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf2",
        "name": "Vidyavihar PS",
        "address": "Console gaming, Shop No. 6, Surya House, Vidyavihar Station East, Near Somaiya College, Mumbai - 400086",
        "contact": "7710076437",
        "timings": "Everyday, 8AM - 11PM",
        "end_time": "23",
        "start_time": "8",
        "x": "19.0774845",
        "y": "72.8963303",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FVIDHYAVIHAR%20PS.jpg?alt=media&token=ae1bc669-1764-4218-9fe7-3f6d848546ec"
    },
    {
        "offers": {
            "PS": "https://www.instagram.com/p/DBX8YJ4o_Cq/",
            "PC": "https://www.instagram.com/p/DBX77WsIsop/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        "location": {
            "type": "Point",
            "coordinates": [
                73.126364,
                19.225861
            ]
        },
        "_id": "6734398c0ab8ca6493eddaf7",
        "name": "Dombivli PC & PS",
        "address": "Console gaming, Shop No. 111-112, Janki Hari CHS, Phadke Rd, Dombivli East - 421201",
        "contact": "9136645034",
        "timings": "Everyday, 8AM - 11PM",
        "end_time": "23",
        "start_time": "8",
        "x": "19.225861",
        "y": "73.126364",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FDOMBIVLI.jpg?alt=media"
    },
    {
        "offers": {
            "PS": "https://www.instagram.com/console.psg/p/DCOJrEUSK_U/"
        },
        "location": {
            "type": "Point",
            "coordinates": [
                72.8308672,
                19.1000659
            ]
        },
        "_id": "6734398c0ab8ca6191eddaf1",
        "name": "Vile Parle PS",
        "address": "Console Gaming, Hemu Plaza, Station Road, near Mcdonalds, opp. Bank of Baroda, LIC Colony, Suresh Colony, Vile Parle West, Mumbai, Maharashtra 400056",
        "contact": "9136135430",
        "timings": "Everyday, 8AM - 11PM",
        "end_time": "23",
        "start_time": "8",
        "x": "19.1000659",
        "y": "72.8308672",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/savepdf-eb6c4.appspot.com/o/console%2Flocations%2FVILE%20PARLE%20.jpg?alt=media&token=5c981b75-a8e6-4a50-9366-ef186b080dd5"
    }
]

// Function to render locations
const renderLocations = () => {
    const container = document.getElementById('locations-list');
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.classList.add('location-card');
        locationCard.innerHTML = `
            <img src="${location.imageUrl}" alt="${location.name}">
            <h3>${location.name}</h3>
            <p>${location.address}</p>
            <p><strong>Contact:</strong> ${location.contact}</p>
            <p><strong>Timings:</strong> ${location.timings}</p>
            <div class="offers">
                ${Object.entries(location.offers).map(([type, link]) => `
                    <a href="${link}" target="_blank">${type} Offers</a>
                `).join('')}
            </div>
            <div class="directions">
                <a href="https://www.google.com/maps/?q=${location.address}" target="_blank">Get Directions</a>
            </div>
        `;
        container.appendChild(locationCard);
    });
};

// Call the function on page load
document.addEventListener('DOMContentLoaded', renderLocations);


