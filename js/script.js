
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var address = $('#street').val() + ', ' + $('#city').val();

    $greeting.text('So, you want to live at ' + address + '?');

    // load streetview
    var bgImgSrc = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location='" + address +"'";
    $body.append('<img class="bgimg" src="' + bgImgSrc + '">');
    
    // load nytimes
    

    return false;
};

$('#form-container').submit(loadData);
