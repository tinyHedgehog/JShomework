var exp = /\+375[\s]?\d{2}[\s]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
var str = "+375 44 775-36-10, +375 29 3333333, +375253553535, +375 33 755 25 25"
if(str.match(exp)){console.log("str.match(exp)");}
