var placesToTravel=["Paris, France", "London, England", "Tokyo, Japan", "New York, USA", "Lima, Peru",
 "Istanbul, Turkey", "Sydney, Australia", "Cairo, Egypt", "Xian, China", "Vancover, Canada", "Moscow, Russia", "Los Angeles, USA", "Boston, USA", "Amsterdam, Netherlands", "Milan, Italy", "Fes, Morocco"]

function pickPlace(){
  var randomDecimal = Math.random();
  var random = randomDecimal * placesToTravel.length
  var final = Math.floor(random);
  var place = placesToTravel[final]
  travelHere.text(`You should travel to ${place}`)

}
console.log(pickPlace);


  var button = $('button');
  var travelHere =$('.travelHere')

  button.on('click', pickPlace);


var whatToDo=["a museum", "a park", "a monument", "a library", "a mall", "a theater", "a resturant", "a cafe", "a festival", "a concert"]

function pickActivate(){
  var randomDecimal = Math.random();
  var randomtwo = randomDecimal * whatToDo.length
  var finaltwo = Math.floor(randomtwo);
  var go = whatToDo[finaltwo]
  goHere.text(`You should go to ${go}`)
}
console.log(pickActivate);

var buttonA = $('.buttontwo');
var goHere =$('.goHere')

buttonA.on('click', pickActivate);



// 
// $(document).ready(function(e) {
//    var width = $(document).width();
//    function goRight() {
//        $("#animate").animate({
//        left: width
//      }, 5000, function() {
//         setTimeout(goLeft, 50);
//      });
//    }
//    function goLeft() {
//        $("#animate").animate({
//        left: 0
//      }, 5000, function() {
//         setTimeout(goRight, 50);
//      });
//    }
//    setTimeout(goRight, 50);
// });
