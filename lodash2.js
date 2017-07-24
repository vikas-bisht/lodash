var users = [{
        'firstname': 'vikas',
        'lastname': 'bisht',
        'Message': 'Hello',
        'Dob': '1994-08-26'
    },
    {
        'firstname': 'sumit',
        'lastname': 'rawat',
        'Message': 'Hi',
        'Dob': '1994-08-26'
    },
    {
        'firstname': 'shailendra',
        'lastname': 'singh',
        'Message': 'yo',
        'Dob': '1993-05-23'
    },
    {
        'firstname': 'vineet',
        'lastname': 'bansal',
        'Message': 'Hello',
        'Dob': '1995-10-2'
    },
    {
        'firstname': 'gurpreet',
        'lastname': 'singh',
        'Message': 'whay',
        'Dob': '1995-05-25'
    },
    {
        'firstname': 'rahim',
        'lastname': 'khan',
        'Message': 'Hey',
        'Dob': '1993-07-28'
    },
    {
       'firstname': 'kanika',
        'lastname': 'cjander',
        'Message': 'Hello',
        'Dob': '1994-05-23'
    },
    {
        'firstname': 'dipesh',
        'lastname': 'bhardwaj',
        'Message': 'Hell',
        'Dob': '1995-01-7'
    },
    {
        'firstname': 'sahil',
        'lastname': 'gupta',
        'Message': 'Hello',
        'Dob': '1994-09-28'
    },
    {
        'firstname': 'ankit',
        'lastname': 'dalmia',
        'Message': 'humbe',
        'Dob': '1995-07-26'
    },
    {
       'firstname': 'manikant',
        'lastname': 'shah',
        'Message': 'Hello',
        'Dob': '1993-08-5'
    },
    {
        'firstname': 'vikas',
        'lastname': 'bisht',
        'Message': 'Hello',
        'Dob': '1994-08-26'
    },
    {
        'firstname': 'vikas',
        'lastname': 'bisht',
        'Message': 'Hello',
        'Dob': '1994-08-26'
    },
    {
        'firstname': 'sumit',
        'lastname': 'rawat',
        'Message': 'Hi',
        'Dob': '1994-08-26'
    },
    {
        'firstname': 'shailendra',
        'lastname': 'singh',
        'Message': 'yo',
        'Dob': '1993-05-23'
    },
    {
        'firstname': 'gurpreet',
        'lastname': 'singh',
        'Message': 'whay',
        'Dob': '1995-05-25'
    },
    {
        'firstname': 'chanpreet',
        'lastname': 'singh',
        'Message': 'Hello',
        'Dob': '1994-08-22'
    },
    {
        'firstname': 'ashish',
        'lastname': 'kumar',
        'Message': 'Hello',
        'Dob': '1993-08-2'
    }
];


var initial_index = 1;
var offset = 5;
var limiter = 1;

function displayTable(elements_to_display) {
    console.log(elements_to_display);

    var heading = ("<div class='main' id='output'> <div class='table-responsive'> <table class='table' border=1><thead><tr> <th>First Name </th><th> Last Name</th><th>Message</th><th>Date of Birth </th></tr></thead>");
    var tablecontent = (elements_to_display.map(function(obj) {      
        return " <tbody><tr><td>" + obj.firstname + "</td><td>" + obj.lastname + "</td><td>" + obj.Message + "</td><td>" + obj.Dob;
    })
    .join('</td></tr>') + " </tbody></table></div></div>");

    $("#output").html(heading + tablecontent);
};


function pagination(array_to_paginate){
    window.array_to_paginate=array_to_paginate;
    var elements_to_display = _.slice(array_to_paginate, 0, 5);
    displayTable(elements_to_display);
};
 
    
function dynamicbuttons(array_to_paginate){
    var n = 1;
    var leng = array_to_paginate.length;
    if (leng % 5 == 0){
        var btn = leng / 5;
    }
    else {
        var btn1 = (leng / 5) + 1;
        var no_of_pages = _.floor(btn1);
    }
    $('#indexbuttons').html("");
    _.times(no_of_pages, function() {
        var buttonsindex =  "&nbsp;"+"<button class='pagebuttons' value=" + n + " >" + n + "</button>" + "&nbsp;";
        n++;
        $('#indexbuttons').append(buttonsindex);
    });
 };

$(document).ready(function() {
    pagination(users);
    var page = array_to_paginate.length / offset;
    if(page){
        page++;
    }
    $("#next").click(function() {
        if (initial_index < array_to_paginate.length && limiter < page - 1) {
           initial_index = initial_index + offset;
            limiter++;
            var elements_to_display = _.slice(array_to_paginate, initial_index, initial_index + offset);
            displayTable(elements_to_display);
        }
    });
    $("#previous").click(function() {
        if (initial_index > offset && limiter > 0) {
            initial_index = initial_index - offset;
            limiter--;
            var elements_to_display = _.slice(array_to_paginate, initial_index, initial_index + offset);
            displayTable(elements_to_display);
        }
    });
    dynamicbuttons(users);
    $(document).on("click",".pagebuttons",function() {
        var x = ($(this).attr('value'));
        var elements_to_display = _.slice(array_to_paginate, (5 * (x - 1)), (5 * x));
        displayTable(elements_to_display);
    });
});