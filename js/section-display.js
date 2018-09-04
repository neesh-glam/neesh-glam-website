// Function to display images
jQuery(document).ready(function($) {
  window.addEventListener("load", function(event) {
    readAllFiles('bridal');
  });
  $('#fantasy').on('click', function() {
    readAllFiles('fantasy');
  });
  $('#beauty').on('click', function() {
    readAllFiles('beauty');
  });
  $('#events').on('click', function() {
    readAllFiles('events');
  });
  $('#photography').on('click', function() {
    readAllFiles('photography');
  });
  $('#special-effects').on('click', function() {
    readAllFiles('special-effects');
  });
  $('#bridal').on('click', function() {
    readAllFiles('bridal');
  });
  var lengthObject = {
    "beauty": 19,
    "bridal": 31,
    "events": 9,
    "fantasy": 16,
    "photography": 13,
    "special-effects": 13
  };
  var path = 'images/';

  function readAllFiles(name) {
    var folderlength = lengthObject[name];
    var initialPath = path + name;
    var uppercase = name.toUpperCase();
    $('#' + name + ' .gallery-grids').html("");
    for (let i = 1; i <= folderlength; i++) {
      var imgPath = initialPath + '/' + name + "-" + i + ".jpg"

      var individualDiv = `<div class="col-md-4 col-sm-4 gallery-top">
          <a href=\"${imgPath}\" class="swipebox">
            <figure class="effect-bubba">
              <img src=\"${imgPath}\" alt="" class="img-responsive">
              <figcaption>
                <h4>${uppercase}</h4>
              </figcaption>
            </figure>
          </a>
        </div>`;

      $('#' + name + ' .gallery-grids').append(individualDiv);
      //$('.content-wrap').append(individualDiv);

    }

  }

});
