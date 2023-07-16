var swup = new Swup({
    animationSelector: '[class*="swup-transition-"]'
});

(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

function makeTimer() {

    var endTime = new Date("March 3, 2024 00:00:00");			
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span class='span-day'>Days</span>");
    $("#hours").html(hours + "<span class='span-hour'>Hours</span>");
    $("#minutes").html(minutes + "<span class='span-min'>Min</span>");
    $("#seconds").html(seconds + "<span class='span-sec'>Sec</span>");
}


function toggle(button) {
    if ($("#language-button").text() == "हिंदी") {
        $("#language-button").text("English");
      $("h1.arpit").fadeOut(500,function(){
        $("h1.arpit").fadeIn(500).text("अर्पित");
      });
      $("h2.join").fadeOut(500,function(){
        $("h2.join").fadeIn(500).text("संग");
      });
      $("h1.shruti").fadeOut(500,function(){
        $("h1.shruti").fadeIn(500).text("श्रुति");
      });
      $("h3.married").fadeOut(500,function(){
        $("h3.married").fadeIn(500).text("।। शुभ विवाह समारोह ।।");
      });
      $(".date").fadeOut(500,function(){
        $(".date").fadeIn(500).text("2 मार्च 2024, ");
      });
      $(".place").fadeOut(500,function(){
        $(".place").fadeIn(500).text("सेवन सीस, रोहिणी, नई दिल्ली");
      });
      $(".ven1").fadeOut(500,function(){
        $(".ven1").fadeIn(500).text("स्थान");
      });
      $(".ven2").fadeOut(500,function(){
        $(".ven2").fadeIn(500).text("निमंत्रण");
      });
      $(".ven3").fadeOut(500,function(){
        $(".ven3").fadeIn(500).text("कैलेंडर");
      });
      $(".dance-med").fadeOut(500,function(){
        $(".dance-med").fadeIn(500).text("पूरे परिवार सहित आपका हार्दिक अभिनन्दन है");
      });
      $(".email-groom").fadeOut(500,function(){
        $(".email-groom").fadeIn(500).html("ईमेल: <a style='color: inherit' href='mailto: guptarpit1997@gmail.com' target='_blank'>guptarpit1997@gmail.com</a>");
      });
      $(".email-bride").fadeOut(500,function(){
        $(".email-bride").fadeIn(500).html("ईमेल: <a style='color: inherit' href='mailto: shrutikalra98@gmail.com' target='_blank'>shrutikalra98@gmail.com</a>");
      });
    } else {
        $("#language-button").text("हिंदी");
      $("h1.arpit").fadeOut(500,function(){
        $("h1.arpit").fadeIn(500).text("Arpit");
      });
      $("h2.join").fadeOut(500,function(){
        $("h2.join").fadeIn(500).text("&");
      });
      $("h1.shruti").fadeOut(500,function(){
        $("h1.shruti").fadeIn(500).text("Shruti");
      });
      $("h3.married").fadeOut(500,function(){
        $("h3.married").fadeIn(500).text("Are getting married");
      });
      $(".date").fadeOut(500,function(){
        $(".date").fadeIn(500).text("On 2nd March 2024, At ");
      });
      $(".place").fadeOut(500,function(){
        $(".place").fadeIn(500).text("Seven Seas, Rohini, New Delhi");
      });
      $(".ven1").fadeOut(500,function(){
        $(".ven1").fadeIn(500).text("Locate The Venue");
      });
      $(".ven2").fadeOut(500,function(){
        $(".ven2").fadeIn(500).text("Invitation Card");
      });
      $(".ven3").fadeOut(500,function(){
        $(".ven3").fadeIn(500).text("Calendar Invite (ics)");
      });
      $(".dance-med").fadeOut(500,function(){
        $(".dance-med").fadeIn(500).text("Celebrations and a beautiful wedding to follow.");
      });
      $(".email-groom").fadeOut(500,function(){
        $(".email-groom").fadeIn(500).html("Email for queries: <a style='color: inherit' href='mailto: guptarpit1997@gmail.com' target='_blank'>guptarpit1997@gmail.com</a>");
      });
      $(".email-bride").fadeOut(500,function(){
        $(".email-bride").fadeIn(500).html("Email for queries: <a style='color: inherit' href='mailto: shrutikalra98@gmail.com' target='_blank'>shrutikalra98@gmail.com</a>");
      });
    }
}

setInterval(makeTimer, 1000);

var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 2nd Mar, 2024!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Arpit and Shruti', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
