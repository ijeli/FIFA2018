
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=09b66003ada9493b9d1e8a9685cbb80e";
// var queryURL = "https://newsapi.org/v2/top-headlines?q=world&cup&russia&sources=bbc-sport&apiKey=09b66003ada9493b9d1e8a9685cbb80e";
var queryURL = "https://newsapi.org/v2/top-headlines?q=world+cup&apiKey=09b66003ada9493b9d1e8a9685cbb80e";
var queryURL2 = "https://newsapi.org/v2/everything?q=world+cup+soccer&sources=buzzfeed&apiKey=09b66003ada9493b9d1e8a9685cbb80e"

function lode() {
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    //alert(response.articles.length);
    //alert(results.length);
    for (var i = 0; i < response.articles.length; i++) {

      console.log(response.articles[i].title);



      //look for the word world cup in the Title

        if(response.articles[i].title)
        { 
            var number = 0;
            var currentCI = $("#CInext");
            var newCI = $("<li data-target='#myCarousel' data-slide-to=" + number++ + "</li>");
            currentCI.append(newCI);
    
            var currentCIt = $("#CItnext");
            var newCIt = $("<div class='carousel-item'> <img src = '" + response.articles[i].urlToImage + "' class = 'img-responsive' width='100%' height='400px'><div class='carousel-caption'><h3 class = 'cantseeme'>" + 
            response.articles[i].title + "</h3><span class = 'cantseeme'>" + response.articles[i].description + "</span> <br> <a class = 'cantseeme itsgonnabemeh' href = '" +
            response.articles[i].url + "'>Read More</a></div></div>"
            );
            currentCIt.append(newCIt);
            // //$("#myCarouselTest").append("<div class='item'><img src='assets/images/WC2018.jpg' alt='' width='460' height='345'><div class='carousel-caption'><h3>WC2018 Pic One</h3><p>The World Cup 2018 Test API Page Test --  Need to parse API Live Entertaibment Data</p>  </div></div>")
            // $("#sexy1").text(response.articles[0].title);
            // $("#sexy2").text(response.articles[1].title);
            // $("#sexy3").text(response.articles[2].title);
            // $("#sexy4").text(response.articles[3].title);

            // $("#hottie1").text(response.articles[0].description);
            // $("#hottie2").text(response.articles[1].description);
            // $("#hottie3").text(response.articles[2].description);
            // $("#hottie4").text(response.articles[3].description);

            // var cutieOne = $("#cutie1");
            // cutieOne.attr("href", response.articles[0].url);
            // var cutieTwo = $("#cutie2");
            // cutieTwo.attr("href", response.articles[1].url);
            // var cutieThree = $("#cutie3");
            // cutieThree.attr("href", response.articles[2].url);
            // var cutieFour = $("#cutie4")
            // cutieFour.attr(response.articles[3].url);

            // var lusciousOne = $("#luscious1");
            // lusciousOne.attr("src", response.articles[0].urlToImage);
            // var lusciousTwo = $("#luscious2");
            // lusciousTwo.attr("src", response.articles[1].urlToImage);
            // var lusciousThree = $("#luscious3");
            // lusciousThree.attr("src", response.articles[2].urlToImage);
            // var lusciousFour = $("#luscious4");
            // lusciousFour.attr("src", response.articles[4].urlToImage);
        }

        //  if(response.articles[i].title.toLowerCase().includes("world"))
        //  {

            //$("#myCarouselTest").append("<div class='item'><img src='assets/images/WC2018.jpg' alt='' width='460' height='345'><div class='carousel-caption'><h3>WC2018 Pic One</h3><p>The World Cup 2018 Test API Page Test --  Need to parse API Live Entertaibment Data</p>  </div></div>")

        //  }

        // if(response.articles[i].title.toLowerCase().includes("world"))
        // {
        //
        //   //$("#myCarouselTest").append("<div class='item'><img src='assets/images/WC2018.jpg' alt='' width='460' height='345'><div class='carousel-caption'><h3>WC2018 Pic One</h3><p>The World Cup 2018 Test API Page Test --  Need to parse API Live Entertaibment Data</p>  </div></div>")
        //   $("#sexy1").text(response.articles[0].urlToImage);
        //   $("#sexy2").text(response.articles[1].urlToImage);
        //   $("#sexy3").text(response.articles[2].urlToImage);
        //   $("#sexy4").text(response.articles[3].urlToImage);
        // }
            //console.log(results[i]);
            //console.log(results[i].venue);

            // console.log(results[i].title);
            // console.log(results[0].winner_code);
            // var tbody = $("tbody");
            // var newRow = $(
            //     "<tr><td>" + results[i].home_team_country + "</td><td>"
            //     + results[i].away_team_country + "</td><td>" +
            //     results[i].home_team.goals + " || " + results[i].away_team.goals
            //     + "</td><td>" + results[i].winner + "</td></tr>"
            // );
            // tbody.append(newRow);
            // $("#carousel").text(results);
            // $(".placeholder").css("background-color", "white");
    }

});

$.ajax({
    url: queryURL2,
    method: "GET"
})
.then(function(response) {
    for (var i = 0; i < response.articles.length; i++) {
        var number = 0;
        var currentCI = $("#CInext2");
        var newCI = $("<li data-target='#myCarousel2' data-slide-to=" + number++ + "</li>");
        currentCI.append(newCI);

        var currentCIt = $("#CItnext2");
        var newCIt = $("<div class='carousel-item'> <img src = '" + response.articles[i].urlToImage + "' class = 'img-responsive' width='100%' height='400px'><div class='carousel-caption'><h3 class = 'cantseeme1'>" + 
        response.articles[i].title + "</h3><span class = 'cantseeme1'>" + response.articles[i].description + "</span> <br> <a class = 'cantseeme1 itsgonnabemeh' href = '" +
        response.articles[i].url + "'>Read More</a></div></div>"
        );
        currentCIt.append(newCIt);
    }


});

};


lode();
