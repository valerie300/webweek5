$(document).ready(function () {
  $(".more").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
    $(".more").toggleClass("less");
  });
});