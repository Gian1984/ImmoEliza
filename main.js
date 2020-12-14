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
    let _data = {
        data: {
            "property-type": property,
            "area": area,
            "rooms-number": roomNumber,
            "zip-code": zipCode,
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