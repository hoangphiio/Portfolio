export default function swapModule() {
  // Button swap
  $("#swap").click(function () {
    var div1_value = $("#from").html();
    var div2_value = $("#to").html();
    $("#from").hide().html(div2_value).fadeIn(500);
    $("#to").hide().html(div1_value).fadeIn(500);
  });
}
