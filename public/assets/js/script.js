$('#loginbutton').on('click', function(event) {
    event.preventDefault();
    $('#loginprompt').removeClass("hidden");
    $('#openingprompt').addClass("hidden");
});

$('#newuserbutton').on('click', function(event) {
    event.preventDefault();
    $('#newuserprompt').removeClass("hidden");
    $('#openingprompt').addClass("hidden");
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
    });
});

