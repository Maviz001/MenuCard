var biryani;
var muttonKarahi;
var bbq;
var Bill;
function get_biryani(){
    var plates;
    plates = document.getElementById("item1").value;
    biryani = plates*60;
    return biryani;
}
function get_mutton(){
    var plates;
    plates = document.getElementById("item2").value;
    muttonKarahi = plates*130;
    return muttonKarahi;
}
function get_bbq(){
    var plates;
    plates = document.getElementById("item3").value;
    bbq = plates*90;
    return bbq;
}
function printValue(){
//var biryaniPrice = document.getElementById("item1").value;
var biryaniPrice =get_biryani();

// var muttonKarahiPrice =document.getElementById("item2").value;
var muttonKarahiPrice =get_mutton();
// var bbqPrice = document.getElementById("item3").value;
var bbqPrice = get_bbq();
Bill = parseInt(biryaniPrice)+parseInt(muttonKarahiPrice)+parseInt(bbqPrice);
console.log(Bill,biryaniPrice,muttonKarahiPrice,bbqPrice);
document.getElementById("bill").innerHTML= Bill ;

}