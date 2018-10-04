//Team Score
function getTeamStuff() {
    var queryURL = "https://worldcup.sfg.io/matches/country?fifa_code=";
    var queryStringValue = getQueryVariable("TeamName");
    console.log("Query String Is:")
    console.log(queryStringValue);
    
    //get API with Team
    $.ajax({
        url: queryURL + queryStringValue,
        method: "GET"
        }).then(function(response) {
        var results = response;
       
        var fifaCodes = ["KOR", "GER", "SRB", "CRC", "POL", "SEN", "PAN", "TUN", "FRA", "ARG", "URU", "POR", "BRA", "MEX", "BEL", "JPN", "COL",
                        "ENG", "SWE", "SUI", "ESP", "RUS", "CRO", "KSA", "EGY", "MAR", "IRN", "AUS", "PER", "ISL", "NGA", "DEN"];

        var fifateams = ["Korea Republic", "Germany", "Serbia", "Costa Rica", "Poland", "Senegal", "Panama", "Tunisia", "France", "Argentina", "Uruguay", 
                        "Portugal", "Brazil", "Mexico", "Belgium", "Japan", "Colombia", "England", "Sweden", "Switzerland", "Spain", "Russia", "Croatia", 
                        "Saudi Arabia", "Egypt", "Morocco", "Iran", "Australia", "Peru", "Iceland", "Migeria", "Denmark"];                

        for (i=0; i<fifaCodes.length; i++) {
            if(fifaCodes[i] === queryStringValue) {
                var yourTeam = fifateams [i];
                console.log("Your Team Is:");
                console.log(yourTeam);
            }
        };
//////////////////////build out the page//////////////////////////
        $("body").css("background-image", "url('assets/images/flags/" + yourTeam + ".gif')");
        $(".header").append("<div>" + yourTeam + "</div>");
        
        //push out the api information (PAMP IT)
        for (i=0; i<results.length; i++) {
            //create proper time
            var date = results[i].datetime;         //2018-06-28T14:00:00Z
            var sliced = date.slice(0,10);          //2018-06-28
            var slicedFormat = "YYYY-MM-DD";
            var convertSliced = moment(sliced, slicedFormat);
            //creates div for game information
            var gameCount = i + 1;
            var teamInfo = $(".team-info");
            var gameDiv = $("<div class='game-header' id=game-" + gameCount +">Game " + gameCount + ": " + results[i].away_team_country + 
                " vs. " + results[i].home_team_country + "</div></br>");
            $(gameDiv).append("<p class='game-text'><span>Winner: " + results[i].winner +"</span><span>"+"Final Score : "+ ""+results[i].home_team_country +"  "+ results[i].home_team.goals+" || " +results[i].away_team_country+"   " +results[i].away_team.goals+ "</span><span> Venue: " + results[i].venue + "</span><span> Attendance: " + results[i].attendance + 
            "<br></span><span> Date: " + moment(convertSliced).format("YYYY-MM-DD") + "</span></p>")
            //away team stats
            $(gameDiv).append("<p class='game-text'><u>" + results[i].away_team_country + " Stats:</u><br><span>Attempts on goal: " + results[i].away_team_statistics.attempts_on_goal + 
            "</span><span>Blocked: " + results[i].away_team_statistics.blocked + "</span><span>Corners: " + results[i].away_team_statistics.corners + "</span>" +
            "<span>Ball Possession: " + results[i].away_team_statistics.ball_possession+"%"  + "</span><span>Distance Covered: " + results[i].away_team_statistics.distance_covered+"km" + "</span></p>");
            $(gameDiv).append("<p class='game-text'>Starting 11: " + results[i].away_team_statistics.starting_eleven[0].name + " (" + results[i].away_team_statistics.starting_eleven[0].shirt_number + "),  "
            + results[i].away_team_statistics.starting_eleven[1].name + " (" + results[i].away_team_statistics.starting_eleven[1].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[2].name + " (" + results[i].away_team_statistics.starting_eleven[2].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[3].name + " (" + results[i].away_team_statistics.starting_eleven[3].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[4].name + " (" + results[i].away_team_statistics.starting_eleven[4].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[5].name + " (" + results[i].away_team_statistics.starting_eleven[5].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[6].name + " (" + results[i].away_team_statistics.starting_eleven[6].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[7].name + " (" + results[i].away_team_statistics.starting_eleven[7].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[8].name + " (" + results[i].away_team_statistics.starting_eleven[8].shirt_number + "),  " 
            + results[i].away_team_statistics.starting_eleven[9].name + " (" + results[i].away_team_statistics.starting_eleven[9].shirt_number + "),  "
            + results[i].away_team_statistics.starting_eleven[10].name + " (" + results[i].away_team_statistics.starting_eleven[10].shirt_number +")"+ "</p>");
            //home team stats
            $(gameDiv).append("<p class='game-text'><u>" + results[i].home_team_country + " Stats:</u><br><span>Attempts on goal: " + results[i].home_team_statistics.attempts_on_goal + 
            "</span><span>Blocked: " + results[i].home_team_statistics.blocked + "</span><span>Corners: " + results[i].home_team_statistics.corners + "</span>" +
            "<span>Ball Possession: " + results[i].home_team_statistics.ball_possession+"%" + "</span><span>Distance Covered: " + results[i].home_team_statistics.distance_covered+"km" + "</span></p>");
            $(gameDiv).append("<p class='game-text'>Starting 11: " + results[i].home_team_statistics.starting_eleven[0].name + " (" + results[i].home_team_statistics.starting_eleven[0].shirt_number + "),  "
            + results[i].home_team_statistics.starting_eleven[1].name + " (" + results[i].home_team_statistics.starting_eleven[1].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[2].name + " (" + results[i].home_team_statistics.starting_eleven[2].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[3].name + " (" + results[i].home_team_statistics.starting_eleven[3].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[4].name + " (" + results[i].home_team_statistics.starting_eleven[4].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[5].name + " (" + results[i].home_team_statistics.starting_eleven[5].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[6].name + " (" + results[i].home_team_statistics.starting_eleven[6].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[7].name + " (" + results[i].home_team_statistics.starting_eleven[7].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[8].name + " (" + results[i].home_team_statistics.starting_eleven[8].shirt_number + "),  " 
            + results[i].home_team_statistics.starting_eleven[9].name + " (" + results[i].home_team_statistics.starting_eleven[9].shirt_number + "),  "
            + results[i].home_team_statistics.starting_eleven[10].name + " (" + results[i].home_team_statistics.starting_eleven[10].shirt_number +")" +"</p>");
                       
            
            $(teamInfo).append(gameDiv);
            console.log("Results Loop");
            console.log(results[i]);
        }      
    });
}

//Grabbing our Team Name from the URL
function getQueryVariable(varName) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == varName) {
        return decodeURIComponent(pair[1]);
        }
    }
return "";
}

//if our call fails
function gotFailure(data){
	console.log(JSON.stringify(data));
}

//after the page has loaded
$(document).ready(function(){
    getTeamStuff();
});