$(document).ready(function () {
  $(".thumb").click(function () {
    var imgSrc = $(this).attr("src");
    $("#fullImage").attr("src", imgSrc);
    $("#myModal").slideDown(400);
  });
  $(".close-btn").click(function () {
    $("#myModal").slideUp(400);
  });
  $("#myModal").click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").slideUp(400);
    }
  });
});
