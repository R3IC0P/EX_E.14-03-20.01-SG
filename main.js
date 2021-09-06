function order(){
    let nrShape = Math.floor(document.getElementById("nr-sp").value);
    let endValue = "Twoje zamówienie to cukierek ";

    switch(nrShape){
        case 1:
            endValue += "cytryna ";
            break;
        case 2:
            endValue += "liść ";
            break;
        case 3:
            endValue += "banan ";
            break;
        default:
            endValue += "inny ";
            break;
    };

    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    document.getElementById("btn-color").style.backgroundColor = `rgb(${r},${g},${b})`;

    document.getElementById("order").innerHTML = endValue;
};