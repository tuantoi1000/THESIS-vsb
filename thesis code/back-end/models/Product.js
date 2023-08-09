const dataProduct = [
    /*HAT*/
    {
        id: 'hat-2',
        nameProduct: 'CAP NEW ERA NEW YORK KNICKS TEAM ARCH 9FIFTY SNAPBACK CAP',
        category: 'HAT'+'BRAND-mlb',
        price: 33.95,
        image: `http://localhost:8000/public/images/hat/product1.jpg `,
        ratting: 3,
        countOfRatting: 2,
        to: '/product/hat-2',
        features: [
            'feature.text'

        ],
    },
    {
        id: 'hat-5',
        nameProduct: 'VANS STEP UP BUCKET HAT',
        category: 'HAT'+"BRAND-vans",
        price: 35.95,
        image: `http://localhost:8000/public/images/hat/product4.jpeg `,
        ratting: 5,
        countOfRatting: 2,
        to: '/product/hat-5',
        features: [
            'feature.text'

        ],
    },

    {
        id: 'new-hat-1',
        nameProduct: 'CAP NEW ERA TORONTO BLUE JAYS WORLD SERIES 59FIFTY UNISEX CAP',
        category: 'HAT'+"BRAND-mlb",
        price: 23.95,
        image: `http://localhost:8000/public/images/hat/product6.jpeg `,
        ratting: 4.8,
        countOfRatting: 10,
        to: '/product/new-hat-1',
        features: [
            'feature.text'

        ],
    },
    {
        id: 'hat-8',
        nameProduct: 'HAT THE NORTH FACE FREEBEENIE',
        category: 'HAT'+"BRAND-thenorthface",
        price:  25.46,
        image: `http://localhost:8000/public/images/hat/product8.jpg`,
        ratting: 5,
        countOfRatting: 2,
        to: '/product/hat-8',
        features: [
            'feature.text'

        ],
    },
    /*------------------------------------------------------------ Giày----------------------------------------------- */
    {
        id: 'vans-1',
        nameProduct: 'VANS X STRANGER THINGS AUTHENTIC',
        category: "SHOES-sneaker"+"BRAND-vans",
        price: 82.95,
        priceOld: 85.95,
        imageHover: 'http://localhost:8000/public/images/shoe/vans/vans1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/vans/vans1.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/vans-1',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'vans-3',
        nameProduct: 'VANS SK8-HI',
        category: "SHOES-hightop"+"BRAND-vans",
        price: 79.95,
        priceOld: 89.95,
        imageHover: 'http://localhost:8000/public/images/shoe/vans/vans3-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/vans/vans3.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/vans-3',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'vans-4',
        nameProduct: 'VANS ULTRARANGE EXO HI MTE-1',
        category: "SHOES-hightop"+"BRAND-vans",
        price: 132.95,
        priceOld: 135.55,
        imageHover: 'http://localhost:8000/public/images/shoe/vans/vans4-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/vans/vans4.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/vans-4',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'nike-1',
        nameProduct: 'NIKE W AIR MAX 95',
        category: "SHOES-sneaker"+"BRAND-nike",
        price: 134.95,
        priceOld: 139.25,
        imageHover: 'http://localhost:8000/public/images/shoe/nike/nike1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/nike/nike1.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/nike-1',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'nike-2',
        nameProduct: 'NIKE AIR FORCE 1 MID 07 LX',
        category: "SHOES-hightop"+"BRAND-nike",
        price: 127.95,
        priceOld: 135.55,
        imageHover: 'http://localhost:8000/public/images/shoe/nike/nike2-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/nike/nike2.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/nike-2',
        features: [
            'NIKE AIR FORCE 1 MID ´07',
            'Named after the personal aircraft of the President of the United States, the Air Force One has been a mainstay on the Nike roster. They are among the longest-produced sneakers of all time and are one of the most popular Nike shoes off all time. The AF 1 Mids come in a variety of different and striking colourways perfect for all tastes.',
        ],
    },
    {
        id: 'nike-3',
        nameProduct: 'NIKE ACG MOUNTAIN FLY LOW GORE-TEX SE',
        category: "SHOES-sneaker"+"BRAND-nike",
        price: 174.95,
        priceOld: 195.55,
        imageHover: 'http://localhost:8000/public/images/shoe/nike/nike3-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/nike/nike3.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/nike-3',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'nike-4',
        nameProduct: 'NIKE ACG AIR ZOOM GAIADOME GORE-TEX',
        category: "SHOES-boots"+"BRAND-nike",
        price: 182.71,
        priceOld: 185.55,
        imageHover: 'http://localhost:8000/public/images/shoe/nike/nike4-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/nike/nike4.jpg`,
        ratting: 1,
        countOfRatting: 2,
        to: '/product/nike-4',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'adidas-1',
        nameProduct: 'ADIDAS HYPERTURF',
        category: "SHOES-running"+"BRAND-adidas",
        price: 84.96,
        imageHover: 'http://localhost:8000/public/images/shoe/adidas/adidas1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/adidas/adidas1.jpg`,
        ratting: 5,
        countOfRatting: 100,
        to: '/product/adidas-1',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'adidas-2',
        nameProduct: 'ADIDAS ADI2000',
        category: "SHOES-sneaker"+"BRAND-adidas",
        price: 72.21,
        imageHover: 'http://localhost:8000/public/images/shoe/adidas/adidas2-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/adidas/adidas2.jpg`,
        ratting: 5,
        countOfRatting: 100,
        to: '/product/adidas-2',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'adidas-3',
        nameProduct: 'ADIDAS SUPERSTAR W',
        category: "SHOES-ADIDAS"+"BRAND-adidas",
        price: 85,
        imageHover: 'http://localhost:8000/public/images/shoe/adidas/adidas3-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/adidas/adidas3.jpg`,
        ratting: 5,
        countOfRatting: 100,
        to: '/product/adidas-3',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'adidas-4',
        nameProduct: 'ADIDAS FORUM MID',
        category: "SHOES-hightop"+"BRAND-adidas",
        price: 109.95,
        imageHover: 'http://localhost:8000/public/images/shoe/adidas/adidas4-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/adidas/adidas4.jpg`,
        ratting: 5,
        countOfRatting: 100,
        to: '/product/adidas-4',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'mlb-1',
        nameProduct: 'Bigball CHUNKY A Gradation Classic Monogram NEW YORK YANKEES',
        category: "SHOES-sneaker"+"BRAND-mlb",
        price: 118,
        imageHover: 'http://localhost:8000/public/images/shoe/mlb/mlb1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/mlb/mlb1.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/mlb-1',
        features: [
            'feature.mlb'
        ],
    },
    {
        id: 'mlb-2',
        nameProduct: 'CHUNKY Runner Boston Red Sox ',
        category: "SHOES-sneaker"+"BRAND-mlb",
        price: 118,
        imageHover: 'http://localhost:8000/public/images/shoe/mlb/mlb2-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/mlb/mlb2.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/mlb-2',
        features: [
            'feature.mlb'
        ],
    },
    {
        id: 'mlb-4',
        nameProduct: 'CHUNKY Liner Mid Classic Monogram Los Angeles Dodgers',
        category: "SHOES-sneaker"+"BRAND-mlb",
        price: 125,
        imageHover: 'http://localhost:8000/public/images/shoe/mlb/mlb4-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/mlb/mlb4.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/mlb-4',
        features: [
            'feature.mlb'
        ],
    },
    {
        id: 'converse-1',
        nameProduct: 'CONVERSE RUN STAR HIKE',
        category: "SHOES-hightop"+"BRAND-converse",
        price: 74.97,
        imageHover: 'http://localhost:8000/public/images/shoe/converse/converse1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/converse/converse1.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/converse-1',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'converse-3',
        nameProduct: 'CONVERSE X PATTA CHUCK 70',
        category: "SHOES-hightop"+"BRAND-converse",
        price: 92.95,
        imageHover: 'http://localhost:8000/public/images/shoe/converse/converse3-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/converse/converse3.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/converse-3',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'converse-4',
        nameProduct: 'CONVERSE X GOLF WANG CHUCK 70 OX "OWL CAMO"',
        category: "SHOES-sneaker"+"BRAND-converse",
        price: 82.95,
        imageHover: 'http://localhost:8000/public/images/shoe/converse/converse4-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/converse/converse4.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/converse-4',
        features: [
            'feature.shoes'
        ],
    },
    {
        id: 'bitis-1',
        nameProduct: 'Bitis Men Hunter X LITEPLEX DSMH09800KEL',
        category: "SHOES-sneaker"+"BRAND-bitis",
        price: 40.99,
        imageHover: 'http://localhost:8000/public/images/shoe/bitis/bitis1-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/bitis/bitis1.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/bitis-1',
        features: [
            'feature.bitis'
            
        ],
    },
    {
        id: 'bitis-2',
        nameProduct: 'Bitis Hunter Orange Tonic Mens Sandals DEMH00400CAM',
        category: "SHOES-sandals"+"BRAND-bitis",
        price: 19.99,
        imageHover: 'http://localhost:8000/public/images/shoe/bitis/bitis2-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/bitis/bitis2.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/bitis-2',
        features: [
            'feature.bitis'
            
        ],
    },
    {
        id: 'bitis-3',
        nameProduct: ' Bitis Hunter Football DSMH09600DOO',
        category: "SHOES-sport"+"BRAND-bitis",
        price: 45.95,
        imageHover: 'http://localhost:8000/public/images/shoe/bitis/bitis3-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/bitis/bitis3.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/bitis-3',
        features: [
            'feature.bitis'
            
        ],
    },
    {
        id: 'bitis-7',
        nameProduct: 'Bitis Hunter X Festive Aurora Black Mens Sneakers DSMH03401XDG',
        category: "SHOES-sneaker"+"BRAND-bitis",
        price: 40.99,
        imageHover: 'http://localhost:8000/public/images/shoe/bitis/bitis7-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/bitis/bitis7.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/bitis-7',
        features: [
            'feature.bitis'
            
        ],
    },
    {
        id: 'bitis-8',
        nameProduct: 'Bitis Mens Sandals DYM009100CAM',
        category: "SHOES-sandals"+"BRAND-bitis",
        price: 18.99,
        imageHover: 'http://localhost:8000/public/images/shoe/bitis/bitis8-hover.jpg',
        image: `http://localhost:8000/public/images/shoe/bitis/bitis8.jpg`,
        ratting: 4.8,
        countOfRatting: 282,
        to: '/product/bitis-8',
        features: [
            'feature.bitis'
            
        ],
    },
    /*------------------------------------------------------------ T-shirt----------------------------------------------- */
    {
        id: 'tshirt-2',
        nameProduct: 'The Silly Swallow',
        category: "SHIRT-tshirt"+"BRAND-coolmate",
        price: 10.55,
        priceOld: 13.55,
        imageHover: 'http://localhost:8000/public/images/t-shirt/product26-hover.jpg',
        image: `http://localhost:8000/public/images/t-shirt/product26.jpg`,
        ratting: 2,
        countOfRatting: 3,
        to: '/product/tshirt-2',
        features: [

            'feature.tshirt'
        ],
    },
    {
        id: 'tshirt-5',
        nameProduct: 'Graphic Avenger - ASSEMBLE',
        category: "SHIRT-tshirt"+"BRAND-coolmate",
        price: 10.55,
        priceOld: 13.55,
        imageHover: 'http://localhost:8000/public/images/t-shirt/product29-hover.jpg',
        image: `http://localhost:8000/public/images/t-shirt/product29.jpg`,
        ratting: 2,
        countOfRatting: 3,
        to: '/product/tshirt-2',
        features: [

            'feature.tshirt'
        ],
    },
    {
        id: 'tshirt-7',
        nameProduct: 'Cotton 200gsm in Coolmate',
        category: "SHIRT-tshirt"+"BRAND-coolmate",
        price: 10.20,
        priceOld: 12.55,
        imageHover: 'http://localhost:8000/public/images/t-shirt/product31-hover.jpg',
        image: `http://localhost:8000/public/images/t-shirt/product31.jpg`,
        ratting: 2,
        countOfRatting: 3,
        to: '/product/tshirt-7',
        features: [

            'feature.tshirt'
        ],
    },
    {
        id: 'tshirt-8',
        nameProduct: 'Heal The World Clean Vietnam',
        category: "SHIRT-tshirt"+"BRAND-coolmate",
        price: 13.55,
        priceOld: 18.10,
        imageHover: 'http://localhost:8000/public/images/t-shirt/product32-hover.jpg',
        image: `http://localhost:8000/public/images/t-shirt/product32.jpg`,
        ratting: 2,
        countOfRatting: 3,
        to: '/product/tshirt-8',
        features: [

            'feature.tshirt'
        ],
    },

    /*------------------------------------------------------------ Shirt----------------------------------------------- */
    /*------------------------------------------------------------ Shirt----------------------------------------------- */
    {
        id: 'shirt-2',
        nameProduct: 'Excool Limited ',
        category: "SHIRT-shirt"+"BRAND-coolmate",
        price: 15.65,
        priceOld: 21.65,
        imageHover: 'http://localhost:8000/public/images/shirt/product30-hover.jpg',
        image: `http://localhost:8000/public/images/shirt/product30.jpg`,
        ratting: 4.5,
        countOfRatting: 17,
        to: '/product/shirt-2',
        features: [

            'feature.tshirt'
        ],
    },
    {
        id: 'shirt-4',
        nameProduct: 'ASM1307 shirt',
        category: "SHIRT-shirt",
        price: 12.22,
        priceOld: 15.50,
        imageHover: 'http://localhost:8000/public/images/shirt/product2-hover.jpg',
        image: `http://localhost:8000/public/images/shirt/product2.jpg`,
        ratting: 4.5,
        countOfRatting: 17,
        to: '/product/shirt-4',
        features: [

            'feature.tshirt'
        ],
    },
        {
        id: 'shirt-5',
        nameProduct: 'ASM011 shirt',
        category: "SHIRT-shirt",
        price: 12.55,
        priceOld: 14.23,
        imageHover: 'http://localhost:8000/public/images/shirt/product3-hover.png',
        image: `http://localhost:8000/public/images/shirt/product3.jpg`,
        ratting: 4.5,
        countOfRatting: 17,
        to: '/product/shirt-5',
        features: [

            'feature.tshirt'
        ],
    },
    {
        id: 'shirt-6',
        nameProduct: 'MONOGRAM SHIRT SGS x CLOWNZ',
        category: "SHIRT-shirt",
        price: 22.55,
        priceOld: 25.23,
        imageHover: 'http://localhost:8000/public/images/shirt/product4-hover.jpg',
        image: `http://localhost:8000/public/images/shirt/product4.jpg`,
        ratting: 4.5,
        countOfRatting: 17,
        to: '/product/shirt-6',
        features: [

            'feature.tshirt'
        ],
    },
    /*------------------------------------------------------------Polo----------------------------------------------- */
    /*------------------------------------------------------------Polo----------------------------------------------- */
    {
        id: 'polo-shirt-2',
        nameProduct: 'Polo Café',
        category: "SHIRT-polo"+"BRAND-coolmate",
        price: 13.20,
        imageHover: 'http://localhost:8000/public/images/polo/product34-hover.jpg',
        image: `http://localhost:8000/public/images/polo/product34.jpg`,
        ratting: 4.9,
        countOfRatting: 95,
        to: '/product/polo-shirt-2',
        features: [
            'feature.polo'
        ],
    },
    {
        id: 'polo-shirt-3',
        nameProduct: 'Polo Excool',
        category: "SHIRT-polo"+"BRAND-coolmate",
        price: 17.50,
        imageHover: 'http://localhost:8000/public/images/polo/product35-hover.jpg',
        image: `http://localhost:8000/public/images/polo/product35.jpg`,
        ratting: 4.9,
        countOfRatting: 95,
        to: '/product/polo-shirt-3',
        features: [
            'feature.polo'
        ],
    },
    {
        id: 'polo-shirt-4',
        nameProduct: '7APCB002TTT Polo',
        category: "SHIRT-polo",
        price: 20.05,
        imageHover: 'http://localhost:8000/public/images/polo/product36-hover.jpg',
        image: `http://localhost:8000/public/images/polo/product36.jpg`,
        ratting: 4.9,
        countOfRatting: 95,
        to: '/product/polo-shirt-4',
        features: [
            'feature.polo'
        ],
    },

    /*------------------------------------------------------------Sport----------------------------------------------- */
    /*------------------------------------------------------------Sport----------------------------------------------- */

    {
        id: 'sport-shirt-2',
        nameProduct: 'T-SHIRT NIKE X NOCTA NRG LU JERSEY HOME',
        category: "SHIRT-sport"+"BRAND-nike",
        price: 69.95,
        imageHover: 'http://localhost:8000/public/images/sport/product2-hover.jpg',
        image: `http://localhost:8000/public/images/sport/product2.jpg`,
        ratting: 4.5,
        countOfRatting: 94,
        to: '/product/sport-shirt-2',
        features: [
            'feature.sport'
        ],
    },
    {
        id: 'sport-shirt-3',
        nameProduct: 'T-SHIRT UNDER ARMOUR PHOTOREAL FIELD GF SS',
        category: "SHIRT-sport"+"BRAND-underarmor",
        price: 24.61,
        imageHover: 'http://localhost:8000/public/images/sport/product3-hover.jpg',
        image: `http://localhost:8000/public/images/sport/product3.jpg`,
        ratting: 4.5,
        countOfRatting: 94,
        to: '/product/sport-shirt-3',
        features: [
            'feature.sport'
        ],
    },
    {
        id: 'sport-shirt-4',
        nameProduct: 'T-SHIRT UNDER ARMOUR HEATGEAR® ARMOUR PRINTED COMPRESION SS',
        category: "SHIRT-sport"+"BRAND-underarmor",
        price: 30.56,
        imageHover: 'http://localhost:8000/public/images/sport//product4-hover.jpg',
        image: `http://localhost:8000/public/images/sport/product4.jpg`,
        ratting: 4.5,
        countOfRatting: 94,
        to: '/product/sport-shirt-4',
        features: [
            'feature.sport'
        ],
    },
    {
        id: 'sport-shirt-6',
        nameProduct: 'TANK TOP NIKE DRI-FIT MEN BASKETBALL JERSEY',
        category: "SHIRT-sport"+"BRAND-nike",
        price: 14.78,
        imageHover: 'http://localhost:8000/public/images/sport/product6-hover.jpg',
        image: `http://localhost:8000/public/images/sport/product6.jpg`,
        ratting: 4.5,
        countOfRatting: 94,
        to: '/product/sport-shirt-6',
        features: [
            'feature.sport'
        ],
    },
    /*------------------------------------------------------------Coat----------------------------------------------- */
    /*------------------------------------------------------------Coat----------------------------------------------- */
    {
        id: 'coat-1',
        nameProduct: 'JACKET THE NORTH FACE M 1996 RETRO NUPTSE JACKET',
        category: "SHIRT-coat"+"BRAND-thenorthface",
        price: 254.96,
        imageHover: 'http://localhost:8000/public/images/coat/product1-hover.jpg',
        image: `http://localhost:8000/public/images/coat/product1.jpg`,
        ratting: 4.8,
        countOfRatting: 340,
        to: '/product/coat-1',
        features: [
            'feature.coat'
        ],
    },
    {
        id: 'coat-2',
        nameProduct: 'JACKET COLUMBIA CHALLENGER™ PULLOVER',
        category: "SHIRT-coat"+"BRAND-columbia",
        price: 137.95,
        imageHover: 'http://localhost:8000/public/images/coat/product2-hover.jpg',
        image: `http://localhost:8000/public/images/coat/product2.jpg`,
        ratting: 4.8,
        countOfRatting: 340,
        to: '/product/coat-2',
        features: [
            'feature.coat'
        ],
    },         
    {
        id: 'coat-5',
        nameProduct: 'JACKET NIKE X OFF-WHITE HOODED JACKET GTX',
        category: "SHIRT-coat"+"BRAND-nike",
        price: 489.95,
        imageHover: 'http://localhost:8000/public/images/coat/product5-hover.jpg',
        image: `http://localhost:8000/public/images/coat/product5.jpg`,
        ratting: 4.8,
        countOfRatting: 340,
        to: '/product/coat-5',
        features: [
            'feature.coat'
        ],
    },       
    {
        id: 'coat-7',
        nameProduct: 'JACKET JORDAN 23 ENGINEERED TRACK JACKET ',
        category: "SHIRT-coat"+"BRAND-nike",
        price: 106.21,
        imageHover: 'http://localhost:8000/public/images/coat/product7-hover.jpg',
        image: `http://localhost:8000/public/images/coat/product7.jpg`,
        ratting: 4.8,
        countOfRatting: 340,
        to: '/product/coat-7',
        features: [
            'feature.coat'
        ],
    },

];


module.exports = dataProduct;
