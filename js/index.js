$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    dots: false,
    items: 1,
    mouseDrag: false,
    onTranslated: translated,
    margin: 0
  });

  window.document.onkeydown = function(event) {
    var key = event.which;
    if (key === 39) {
      owl.trigger("next.owl.carousel");
    }
    if (key === 37) {
      owl.trigger("prev.owl.carousel");
    }
  };

  $(".btn-next").click(function() {
    owl.trigger("next.owl.carousel");
  });

  $(".btn-prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });

  function translated(event) {
    var items = event.item.count;
    var item = event.item.index + 1;
    if (item === 1) {
      $(".btn-prev").addClass("none");
    } else {
      $(".btn-prev").removeClass("none");
    }

    if (item === items) {
      $(".btn-next").addClass("none");
    } else {
      $(".btn-next").removeClass("none");
    }
  }

  $(".btn-prev").addClass("none");
});
