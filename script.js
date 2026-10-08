// script.js
$(document).ready(function () {
  var currentIndex = 0;
  var $thumbs = $(".thumb");
  // Erstellen Sie ein Klick-Ereignis für die Vorschaubilder
  $thumbs.click(function () {
    currentIndex = $thumbs.index(this);
    // Oeffnen Sie das Modal und zeigen Sie das angeklickte Bild an
    var imgSrc = $(this).attr("src");
    $("#fullImage").attr("src", imgSrc);
    $("#myModal").slideDown(400);
  });
  // Erstellen Sie ein Klick-Ereignis für die Schliessen-Schaltfläche
  $(".close-btn").click(function () {
    $("#myModal").slideUp(400);
  });
  // Schliessen Sie das Modal, wenn der Benutzer ausserhalb des Bildes klickt
  $("#myModal").click(function (event) {
    if (event.target.id === "myModal") {
      $("#myModal").slideUp(400);
    }
  });
  // Erstellen Sie Klick-Ereignisse für die Navigationsschaltflächen
  $(".next-btn").click(function () {
    currentIndex++;
    if (currentIndex >= $thumbs.length) {
      currentIndex = 0;
    }
    var newSrc = $thumbs.eq(currentIndex).attr("src");
    $("#fullImage").attr("src", newSrc);
  });
  // Erstellen Sie ein Klick-Ereignis für die Zurück-Schaltfläche
  $(".prev-btn").click(function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = $thumbs.length - 1;
    }
    var newSrc = $thumbs.eq(currentIndex).attr("src");
    $("#fullImage").attr("src", newSrc);
  });
});
