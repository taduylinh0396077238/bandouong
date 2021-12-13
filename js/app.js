//Model
const model = {
    currentCoffee: null,
    coffees: [
        {
            clickCount: 0,
            name: 'Cafe Ailen',
            imgSrc: 'img/anhcafe.jpg',
            price: 45,
            code: 1,

        },
        {
            clickCount: 0,
            name: 'Cafe Đen ',
            imgSrc: 'img/cafecohoa.jpg',
            price: 50,
            code: 2,
        },
        {
            clickCount: 0,
            name: 'Cafe Đặc Biệt ',
            imgSrc: 'img/cafecoitbanh.jpg',
            price: 60,
            code: 3,
        },
        {
            clickCount: 0,
            name: 'Cafe Americano ',
            imgSrc: 'img/cafecokhoi.jpg',
            price: 70,
            code: 4,

        },
        {
            clickCount: 0,
            name: 'Cafe Trứng ',
            imgSrc: 'img/cafetrung.png',
            price: 80,
            code: 5,
        },
        {
            clickCount: 0,
            name: 'Cafe Chất',
            imgSrc: 'img/cafesocola.jpg',
            price: 85,
            code: 6,
        },
        {
            clickCount: 0,
            name: 'Cafe Sữa ',
            imgSrc: 'img/cafesua.jpg',
            price: 99,
            code: 7,
        },
        {
            clickCount: 0,
            name: 'Cafe Nhỏ Giọt ',
            imgSrc: 'img/loccaffe.jpg',
            price: 99.99,
            code: 8,
        },
    ],
};

// Controller
const controller = {
    init() {

        model.currentCoffee = model.coffees[0];
        coffeeListView.init();
        coffeeView.init();
    },

    getCurrentCoffee() {
        return model.currentCoffee;
    },

    getcoffees() {
        return model.coffees;
    },
    setCurrentCoffee(coffee) {
        model.currentCoffee = coffee;
    },
    incrementCounter() {
        model.currentCoffee.clickCount++;
        coffeeView.render();
    },
};

// Views
const coffeeView = {
    init() {

        this.coffeeElem = document.getElementById('coffee');
        this.coffeeNameElem = document.getElementById('coffee-name');
        this.coffeePriceElem = document.getElementById('coffee-price');
        this.coffeeCodeElem = document.getElementById('coffee-code');
        this.coffeeImageElem = document.getElementById('coffee-img');
        this.countElem = document.getElementById('coffee-count');


        this.coffeeImageElem.addEventListener('click', this.clickHandler);


        this.render();

    },

    clickHandler() {
        return controller.incrementCounter();
    },

    render() {

        const currentCoffee = controller.getCurrentCoffee();
        this.countElem.textContent = currentCoffee.clickCount;
        this.coffeeNameElem.textContent = currentCoffee.name;
        this.coffeePriceElem.textContent = 'price: ' + currentCoffee.price;
        this.coffeeCodeElem.textContent = 'code: ' + currentCoffee.code;
        this.coffeeImageElem.src = currentCoffee.imgSrc;
        this.coffeeImageElem.style.cursor = 'pointer';
    },
};

const coffeeListView = {
    init() {
        this.coffeeListElem = document.getElementById('coffee-list');
        this.render();
    },

    render() {
        let coffee;
        let elem;
        let i;
        const coffees = controller.getcoffees();


        this.coffeeListElem.innerHTML = '';
        for(let i = 0; i < coffees.length; i++) {
            coffee = coffees[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = coffee.name;
            elem.addEventListener(
                'click',
                (function(coffeeCopy) {
                    return function() {
                        controller.setCurrentCoffee(coffeeCopy);
                        coffeeView.render();
                    };
                })(coffee)
            );
            this.coffeeListElem.appendChild(elem);
        }
    },
};

// Let's goo!
controller.init();