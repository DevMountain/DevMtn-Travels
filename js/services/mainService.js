angular.module('devmtnTravel').service('mainSrv', function(){
    this.travelInfo = [{
        country: 'United States',
        image: "../img/US.jpg",
        desc: 'The U.S. is a country of 50 states covering a vast swath of North America. Major Atlantic Coast cities are New York, and capital Washington, DC',
        price: 1345
    }, {
        country: 'France',
        image: "../img/France.jpg",
        desc: "France, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
        price: 909
    },{
        country: 'Australia',
        image: "../img/Australia.jpg",
        desc: "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal. Its capital, Canberra, is inland. ",
        price: 1112
    }];
		this.packageInfo = [{
				city: "Bordeaux",
				country: "France",
				image: "../img/Borduaex.jpg",
				desc: "Bordeaux, is a port city on the Garonne River in France. It’s known for its Gothic Cathédrale Saint-André, 18th- to 19th-century mansions and notable art museums such as the Musée des Beaux-Arts de Bordeaux.",
				id: 2664,
				price: 3049.63
			},{
				city: "Paris",
				country: "France",
				image: "../img/Paris.jpg",
				desc: "Paris, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Sein",
				id: 2430,
				price: 909
			},{
				city: "Marseille",
				country: "France",
				image: "../img/Marseille.jpg",
				desc: "Marseille has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. Notre-Dame is a Romanesque-Byzantine church.",
				id: 3959,
				price: 3398.83
			},{
				city: "New York",
				country: "United States",
				image: "../img/NYC.jpg",
				desc: "Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture, fashion and finance",
				id: 9309,
				price: 1345.35
			},{
				city: "San Fransisco",
				country: "United States",
				image: "../img/SFBridge.jpg",
				desc: "San Francisco is known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. In the bay sits Alcatraz Island, site of the notorious former prison.",
				id: 4420,
				price: 3648.85
			},{
				city: "Miami",
				country: "United States",
				image: "../img/Miami.jpg",
				desc: "Miami is an international city at Florida's southeastern tip. Its Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana.",
				id: 7101,
				price: 4234.05
			},{
				city: "Sydney",
				country: "Australia",
				image: "../img/Sydney.jpg",
				desc: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and Circular Qua",
				id: 7557,
				price: 1112
			},{
				city: "Perth",
				country: "Australia",
				image: "../img/Perth.jpg",
				desc: "Perth, capital of Western Australia, sits where the Swan River meets the southwest coast. Sandy beaches line its suburbs, and the huge, riverside Kings Park and Botanic Garden on Mt. Eliza offer sweeping views of the city.",
				id: 5010,
				price: 2488.92
			},{
				city: "Melbourne",
				country: "Australia",
				image: "../img/melbourne.jpg",
				desc: "Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River.",
				id: 3544,
				price: 1722.12
			},
		]
})
