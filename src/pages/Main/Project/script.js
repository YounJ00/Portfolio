import jQuery from "jquery";

jQuery(document).ready(function ($) {
  $(".show").click(function () {
    //same as on('click', function(){}); I just prefer this syntax
    var target = $(this).attr("data-target"); //this will be card1 if the first is clicked.
    $("." + target).slideToggle("slow"); //add . for class selector and use target to find the right element
  });
  $(".close").click(function () {
    //close button
    $(this).parent().slideToggle("slow"); //find the nearest parent and close it
  });
});

/* 이미지 슬라이드 */
