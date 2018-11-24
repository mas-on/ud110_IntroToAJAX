
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var city = $('#city').val();
    var address = $('#street').val() + ', ' + city;

    $greeting.text('So, you want to live at ' + address + '?');

    // load streetview
    var bgImgSrc = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location='" + address +"'";
    $body.append('<img class="bgimg" src="' + bgImgSrc + '">');
    
    // load nytimes
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += "?" + $.param({
        "api-key": "171cbf5c173a4064acec4f8731e0febf",
        "sort": "newest",
        "q": city
    });
    $.getJSON(url, function (data) {
        //console.log(data);
        $nytHeaderElem.text("New York Times articles about" + city);

        var articles = data.response.docs;
        var items = [];
        $.each( articles, function( num, article ) {            
            var link="<a href='" + article.web_url + "'>" + article.headline.main + "</a>";
            var desc = "<p>" + article.snippet + "</p>";
            items.push( "<li class='article'>" + link + desc + "</li>" );
        });
        
        $nytElem.append(items.join( "" ));
       
    })
    .fail(function() {
        $nytHeaderElem.text("New York Times articles could not be loaded");
      });;

    return false;
};

$('#form-container').submit(loadData);
