export default function dropdownSelectModule() {
  // Select 01
  $(".btn-select1").on("click", function () {
    $(".tk-select-list1").toggleClass("active");
  });
  $(".item1").on("click", function () {
    var itemValue = $(this).data("value");
    console.log(itemValue);
    $(".btn-select1 span")
      .text($(this).text())
      .parent()
      .attr("data-value", itemValue);
    $(".tk-select-list1").toggleClass("active");
  });

  // Select 02
  $(".btn-select2").on("click", function () {
    $(".tk-select-list2").toggleClass("active");
  });
  $(".item2").on("click", function () {
    var itemValue = $(this).data("value");
    console.log(itemValue);
    $(".btn-select2 span")
      .text($(this).text())
      .parent()
      .attr("data-value", itemValue);
    $(".tk-select-list2").toggleClass("active");
  });
}
