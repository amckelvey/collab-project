//DEPENDENCIES


// STATE
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));


//FUNCTIONS
function updateTime() {
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

setInterval(function() {
    updateTime();
}, 1000);



//INTERACTIONS
// user clicks add project

//INITIALIZATION
updateTime();
