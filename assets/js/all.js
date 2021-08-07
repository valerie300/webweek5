"use strict";

$(document).ready(function () {
  $(".more").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
    $(".more").toggleClass("less");
  });
});
//# sourceMappingURL=all.js.map
