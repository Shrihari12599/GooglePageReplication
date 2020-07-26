$(document).click(function (event) {
  if (event.target.className !== "app") {
    $(".apps").css("display", "none");
  }
});

$(".search-box").mouseenter(function (e) {
  $(this).removeClass("transparent");
  $(this).css("opacity", "1");
  $(this).css("box-shadow", "0 0 3px 3px grey");
  $(this).css("outline", "none");
});
$(".search-box").mouseleave(function () {
  $(this).val("");
  $(this).addClass("transparent");
  $(this).css("opacity", "0.2");
  $(this).css("outline", "none");
});
$(".menu").click(function () {
  var value = $(".apps").css("display");
  var setValue;
  if (value === "block") {
    setValue = "none";
  } else {
    setValue = "block";
  }
  $(".apps").css("display", setValue);
});
