// $(document).ready(function(){
//     $('button').click(function(){
//         $('#myParagraph').text('see how I .text() works as a setter!');
//     })
// })

$(document).ready(function(){
    $('.classbutton').click(function(){
        $('#classP').addClass('green');
    })
})

$('#slidebutton').click(function(){
    $('#slidep').slideToggle("slow");
    console.log('show')
});

$('#appendbutton').click(function(){
    $('#appendP').append("<p>appending this new text</p>");
})
