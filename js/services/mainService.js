angular.module('devmtnTravel').service('mainSrv', function(){



    this.travelInfo = [{
        city: 'New York',
        country: 'United States',
        image: "../img/NewYork.jpg",
        desc: 'Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance',
        id: 112233,
        price: 1345

    }, {
        city: 'Paris',
        country: 'France',
        image: "../img/Paris.jpg",
        desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Sein",
        id: 1122343,
        price: 909
    },{
        city: 'Sydney',
        country: 'Australia',
        image: "../img/Sydney.jpg",
        desc: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and Circular Qua",
        id: 11223489,
        price: 1112


    }]
})
