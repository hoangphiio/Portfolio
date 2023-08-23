export default function toggleModule() {
  $(document).ready(function () {
    $(".language").click(function () {
      $(".language.active").removeClass("active");
      $(this).addClass("active");
    });

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("in");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("in");
      }
    });
  });
}
