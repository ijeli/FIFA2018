$('#loginbutton').on('click', function(event) {
    event.preventDefault();
    $('#loginprompt').removeClass("hidden");
    $('#openingprompt').addClass("hidden");
    $('#homebutton').removeClass("hidden");
});

$('#newuserbutton').on('click', function(event) {
    event.preventDefault();
    $('#newuserprompt').removeClass("hidden");
    $('#openingprompt').addClass("hidden");
    $('#homebutton').removeClass("hidden");
});

$('#loginsubmitbutton').on('click', function(event) {
    event.preventDefault();
    var findUser = $('#usernameinput').val().trim();
    $.ajax('/profileAPI', {
        type: 'GET'
    }).then(function(data){
        for(i=0; i<data.length; i++){
            if(data[i].userName===findUser){
                var profiles = data[i];
                console.log(profiles)
                $('#loginprompt').addClass("hidden");
                $('#content').removeClass("hidden");
                $('#usernameplaceholder').text(profiles.userName);
                $('#teamplaceholder').text(profiles.teamName);
            }
            else {
                console.log('no user found by that username')
            };
        }
    });
});

$('#newusersubmitbutton').on('click', function(event) {
    event.preventDefault();
    var profiledata = {
        userName: $('#newusernameinput').val().trim(),
        teamName: $('#newteaminput').val().trim()
    };
    $.ajax("/createprofile", {
        type: "POST",
        data: profiledata
    }).then( function(data) {
        console.log(data);
        $('#newuserprompt').addClass("hidden");
        $('#content').removeClass("hidden");
        $('#usernameplaceholder').text(profiledata.userName);
        $('#teamplaceholder').text(profiledata.teamName);
    });
});

$('#matchsubmit').on('click', function(event) {
    event.preventDefault();
    var queryURL3 = "https://worldcup.sfg.io/matches";
    var month = $('#monthofmatch').val().trim();
    var day = $('#dayofmatch').val().trim();
    var searchq = "2018-" + month + "-" + day; //ex. 2018-07-02
    console.log(searchq);

    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function(response) {
        var results = response;
        for (var i = 0; i < results.length; i++) {
            var date = results[i].datetime;         //2018-06-28T14:00:00Z
            var sliced = date.slice(0,10);          //2018-06-28
            var slicedFormat = "YYYY-MM-DD";
            var convertSliced = moment(sliced, slicedFormat);
            var currentDate = moment();
            var diffconvertSliced = moment(currentDate, "YYYY-MM-DD")
            // .subtract(1, "days");

            tbodymatch = $("#pastmatches");
            // $('tr').empty();
            var newRow = $(
                "<tr><td><strong>" + searchq + "</strong></td><td>" + results[i].home_team.country + " | " + results[i].home_team.goals + "</td><td>"
                + results[i].away_team.country + " | " + results[i].away_team.goals + "</td><td>" + results[i].winner + "</td></tr>"
            );

            if ((moment(convertSliced).format("YYYY-MM-DD")) === searchq) {
                //console.log(this);
                tbodymatch.prepend(newRow);
            }
        }
    });
    $('#tableofMatches').removeClass('hidden');
});