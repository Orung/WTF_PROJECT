var cars = [{
    make: 'Toyota',
    model: 'rav 4',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    image: 'https://toyotaassets.scene7.com/is/image/toyota/RAV_MY22_0047_V001?wid=2000&fmt=jpg&fit=crop',
    descript: 'This is the description for Toyota'
}, {
    make: 'Lexus',
    model: 'rs 350',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    image: 'https://www.lexus.com/content/dam/lexus/images/models/rx/2022/visualizer/350/exterior/18in-split-five-spoke-alloy/eminent-white-pearl/large-1.jpg',
    descript: 'This is the description for Lexus'
}, {
    make: 'Ford',
    model: 'Johnson',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    image: 'https://www.drivejohnson.com/inventoryphotos/9329/1ftew1ep3nfa83329/ip/thumbs/1.jpg?width=320&bg-color=FFFFFF',
    descript: 'This is the description for Ford'
}, {
    make: 'Nissan',
    model: 'Altima',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    image: 'https://s1.cdn.autoevolution.com/images/models/NISSAN_Altima-2022_main.jpg',
    descript: 'This is for Nissan.'
}, {
    make: 'Hundia',
    model: 'Elantra',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    image: 'https://cdn.motor1.com/images/mgl/xqgZLP/s4/2022-hyundai-elantra-n-exterior-front-quarter.webp',
    descript: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}]

var output = document.getElementById('output')


function showCars() {
    for (c in cars) {
        //  output.innerHTML = output.innerHTML  + cars[c].make
        output.innerHTML = output.innerHTML + `<div class="col-3">
<div class="card" style="width: 18rem;">
    <img src="${cars[c].image}"
        class="card-img-top" alt="...">
    <div class="card-body">
        <h4>${cars[c].make}</h4>
        <p class="card-text">${cars[c].descript}</p>
    </div>
</div>
</div>`
    }
}
showCars()