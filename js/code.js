//Fetching Data from itunes API
$(document).ready(function() {
  //Taking json data from API
  $.getJSON("https://itunes.apple.com/in/rss/topalbums/limit=100/json", function(obj) {
    $.each(obj, function(key, value) {
      // Data for header
      var name = value.entry[0]['im:name'].label;
      var url = value.entry[0]['id'].label;
      var image = value.entry[0]['im:image'][2].label;
      $(".top-group > .col-10 > h2").append("<a href=" + url + ">" + name + "</a>");
      $(".top-group > .col-2 ").append("<img class='img-fluid' src='" + image + "'>");
      //Data for All the albums
      for (i = 0; i < value.entry.length; i++) {
        var number = i + 1;
        var name = value.entry[i]['im:name'].label;
        var artist = value.entry[i]['im:artist'].label;
        var url = value.entry[i]['id'].label;
        var price = value.entry[i]['im:price'].label;
        $(".item-list").append("<div class='row album-block data' id=album-id-" + i + "></div>")
        $("#album-id-" + i).append("<div class='col-1'><h1>" + number + "</h1></div>");
        $("#album-id-" + i).append("<div class='col-2'><img class='img-fluid' src='" + value.entry[i]['im:image'][2].label + "'></div></div>");
        $("#album-id-" + i).append("<div class='col-9'><h2> <a href=" + url + ">" + name + "</a></h2><h3>" + artist + "</h3><a class='buy-now' href='" + url + "'>Buy Now - " + price + "</a>");
      }
    });
  });
});
