var R = 6371; // km
let pi = Math.PI;
let lat1 = 52.3786111;
let lat2 = 47.4369444;
let lon2 = 13.5205556;
let lon1 = 19.2555556;
var φ1 = lat1 / (180/pi);
var φ2 = lat2 / (180/pi);
var Δφ = (lat2-lat1) / (180/pi);
var Δλ = (lon2-lon1) / (180/pi);
var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
var d = R * c;
console.log(d.toFixed(2))