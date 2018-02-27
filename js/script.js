$(document).ready(function () {
    //The function that is called when the page is fully loaded
    getQuote(); //get new Quote
    $('.quoteGETJSON').on('click', getQuote); // add listner
});


function getQuote() {
//The function that is called when user require new quote
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?") //used API from Forismatic - https://forismatic.com/ru/api/
        .done(update) //If the request succeeds, then the function is called - update
        .fail(errors);// else the function is called - errors


}

function update(response) {
    //response is received from API
    {
        var R = getRandomInt(0, 255);
        var G = getRandomInt(0, 255);
        var B = getRandomInt(0, 255);
    } // Color generation

    $("body").css("background", "rgb(" + R + "," + G + "," + B + ")"); //Change background in the body. Smoothness is in css

    $(".newQuote").fadeOut(500, function () {
        $(".newQuote").css("color", "rgb(" + R + "," + G + "," + B + ")");
        $(".newQuote").text(response.quoteText).fadeIn(500);
    }); //Smoothly changes the quote;
    $(".infoAboutQuote").fadeOut(500, function () {
        $(".infoAboutQuote").css("color", "rgb(" + R + "," + G + "," + B + ")");
        $(".infoAboutQuote").text(response.quoteAuthor).fadeIn(500);
    }); //Smoothly changes the quote;

}

function errors(jqxhr, textStatus, err) {
    //Error output to the log
    console.log("Request Failed: " + textStatus + ", " + err);
}

function getRandomInt(min, max)
{
    //The function returns random integer in the range from min to max
    return Math.floor(Math.random() * (max - min + 1)) + min
}