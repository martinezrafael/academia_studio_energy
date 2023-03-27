$(".tooltip").on("mouseover", function () {
  var mouse = Event.pageX;
  $(this).append("<style>.tooltip::after {left: " + mouse + "px}</style>");
});

$(".tooltip").on("mouseout", function () {
  $(".tooltip style").remove();
});
