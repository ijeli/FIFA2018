var queryURL4 = "https://worldcup.sfg.io/teams/"

$.ajax({
    url: queryURL4,
    method: "GET"
})
.then(function(response) {
    var results = response;
    console.log("Team List");
    console.log(results);
});