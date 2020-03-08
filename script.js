var x = "Hello!";
alert(x);


var R = prompt("Unesite poluprečnik: ");

var H = prompt("Unesite visinu: ");

var V = R * R * Math.PI * H;

//var V = parseInt(R) * parseInt(R) * Math.PI * parseInt(H);

//Ali s obzirom da JS prilikom množenja konvertuje string u number, ne mora parseInt

alert("Zapremina valjka je: " + V);



