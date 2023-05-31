$(function () {
  $(".submenu").fadeOut();
  $(".gnb li,.submenu").hover(
    function () {
      $(".submenu").stop().slideDown();
    },
    function () {
      $(".submenu").stop().slideUp();
    }
  );
  $("#leftmenu li:first a").addClass("active");
  $("#leftmenu li ul").hide();
  $("#leftmenu > li").hover(
    function () {
      let i = $(this).index();
      $("#leftmenu > li").eq(i).find("ul").stop().slideDown();
      $(".btn").removeClass("on");
      $(this).find(".btn").addClass("on");
    },
    function () {
      $("#leftmenu > li ul").stop().slideUp();
      $(".btn").removeClass("on");
    }
  );
  $(".leftsub li").hover(
    function () {
      let i = $(this).parent().parent().index();
      console.log(i);
      $("#leftmenu > li > a").removeClass("active");
      $("#leftmenu > li").eq(i).children("a").addClass("active");
    },
    function () {
      $("#leftmenu > li > a").removeClass("active");
    }
  );
});
