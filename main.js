// fetch('https://corsed.herokuapp.com')
//     .then(response => response.json())
//     .then(element => { console.log(element) });

document.getElementById("submit").addEventListener("click", priceValutaion);

let _data = {};

function priceValutaion() {

    let property = document.getElementById('propertyType').value;
    let area = parseInt(document.getElementById('area').value);
    let roomNumber = parseInt(document.getElementById('roomNumber').value);
    let zipCode = parseInt(document.getElementById('zipCode').value);
    // let garden = document.getElementById('garden').value;
    let gardenArea = parseInt(document.getElementById('gardenArea').value);
    // let terrace = document.getElementById('terrace').value;
    let terraceArea = parseInt(document.getElementById('terraceArea').value);
    let facadesNumbers = parseInt(document.getElementById('facadesNumbers').value);
    let buildingState = document.getElementById('buildingState').value;

    let _data = {
        data: {
            "property-type": property,
            "area": area,
            "rooms-number": roomNumber,
            "zip-code": zipCode,
            // "garden": garden,
            "garden-area": gardenArea,
            // "terrace": terrace,
            "terrace-area": terraceArea,
            "facades-number": facadesNumbers,
            "building-state": buildingState
        }

    };

    fetch('https://corsed.herokuapp.com/predict', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    console.log(_data);
    return _data

}