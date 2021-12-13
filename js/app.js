//Model
const model = {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Cafe Ailen : 60k',
            imgSrc: 'img/anhcafe.jpg',
        },
        {
            clickCount: 0,
            name: 'Cafe Đen : 70k',
            imgSrc: 'img/cafecohoa.jpg',
        },
        {
            clickCount: 0,
            name: 'Cafe Đặc Biệt : 80k',
            imgSrc: 'img/cafecoitbanh.jpg',
        },
        {
            clickCount: 0,
            name: 'Cafe Americano : 90k',
            imgSrc: 'img/cafecokhoi.jpg',

        },
        {
            clickCount: 0,
            name: 'Cafe Trứng : 50k ',
            imgSrc: 'img/cafetrung.png',
        },
        {
            clickCount: 0,
            name: 'Cafe Chất : 45k',
            imgSrc: 'img/cafesocola.jpg',
        },
        {
            clickCount: 0,
            name: 'Cafe Sữa : 75k',
            imgSrc: 'img/cafesua.jpg',
        },
        {
            clickCount: 0,
            name: 'Cafe Nhỏ Giọt : 99k',
            imgSrc: 'img/loccaffe.jpg',
        },
    ],
};

// Controller
const controller = {
    init() {

        model.currentCar = model.cars[0];
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
        return model.currentCar;
    },

    getCars() {
        return model.cars;
    },
    setCurrentCar(car) {
        model.currentCar = car;
    },
    incrementCounter() {
        model.currentCar.clickCount++;
        carView.render();
    },
};

// Views
const carView = {
    init() {

        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');


        this.carImageElem.addEventListener('click', this.clickHandler);


        this.render();
    },

    clickHandler() {
        return controller.incrementCounter();
    },

    render() {

        const currentCar = controller.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};

const carListView = {
    init() {
        this.carListElem = document.getElementById('car-list');
        this.render();
    },

    render() {
        let car;
        let elem;
        let i;
        const cars = controller.getCars();


        this.carListElem.innerHTML = '';
        for(let i = 0; i < cars.length; i++) {
            car = cars[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener(
                'click',
                (function(carCopy) {
                    return function() {
                        controller.setCurrentCar(carCopy);
                        carView.render();
                    };
                })(car)
            );
            this.carListElem.appendChild(elem);
        }
    },
};

// Let's goo!
controller.init();