

// var container = document.querySelector('#container');
// var msnry = new Masonry( container, {
//   // options
//   columnWidth: 200,
//   itemSelector: '.icon'
// });

$(document).ready(function() {
    $('#github')
        .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
        .delay(200)           // Wait for a bit so the user notices it fade in
        .animate({"opacity":1});  // Fade it back in. Swap css for animate in legacy browsers if required.
        console.log('yo')

    $('#linkedin')
        .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
        .delay(300)           // Wait for a bit so the user notices it fade in
        .animate({"opacity":1}); 

    $('#twitter')
        .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
        .delay(400)           // Wait for a bit so the user notices it fade in
        .animate({"opacity":1}); 

    $('#instagram')
        .css({"opacity":0})   // Set to 0 as soon as possible – may result in flicker, but it's not hidden for users with no JS (Googlebot for instance!)
        .delay(500)           // Wait for a bit so the user notices it fade in
        .animate({"opacity":1}); 

});