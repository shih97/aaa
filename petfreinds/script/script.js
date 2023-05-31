$(function () {
  $(".visual ul li:gt(0)").fadeOut();
  function nextani() {
    $(".visual ul li:first")
      .fadeOut(500)
      .next()
      .fadeIn(500)
      .end()
      .appendTo(".visual ul");
  }
  function prevani() {
    $(".visual ul li:last")
      .fadeOut(500)
      .prev()
      .fadeIn(500)
      .end()
      .prependTo(".ban");
  }
  let interval = setInterval(nextani, 2000);
  $(".visual").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(nextani, 2000);
    }
  );
});
