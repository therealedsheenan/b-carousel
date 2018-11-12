(function (window) {
  var items;
  var currentStage = 1;

  document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById("carousel");
    var carouselStage = document.getElementById("carousel-stage");
    var carouselItem = document.getElementsByClassName("carousel-item");

    var computeCarouselItemStyles = window.getComputedStyle(carouselItem[0]);
    var computeCarouselStageStyles = window.getComputedStyle(carouselStage);
    var carouselItemWidth = carouselItem[0].clientWidth
      + parseInt(computeCarouselItemStyles.getPropertyValue("margin-right").replace("px",""));
    var carouselWidth = carousel.clientWidth;
    var carouselItemsLength = carouselItem.length;

    // setup carousel
    setupCarousel();

    // carousel controls
    var prevButton =  document.getElementById("prev-button");
    var nextButton =  document.getElementById("next-button");

    prevButton.addEventListener("click", function () {
      console.log("move previous")
      moveCarousel()
    });

    nextButton.addEventListener("click", function () {
      console.log("move next")
      moveCarousel()
    });

    // setting up carousel
    function setupCarousel () {
      var itemPerBlock = 4;
      items = Math.round(carouselItemsLength / itemPerBlock);

      var stageLeftValue = computeCarouselStageStyles.getPropertyValue("left").replace("px","");

      if (stageLeftValue === 0) {
        currentStage = 1;
      } else {
        currentStage = Math.round((stageLeftValue / carouselWidth) + 1);
      }
    }

    function moveCarousel () {
      var width = carouselWidth * (Math.abs(currentStage - items));
      debugger
      if (items < currentStage) {
        carouselStage.style.left = "-960px";
        // var stageLeftValue = computeCarouselStageStyles.getPropertyValue("left").replace("px","");
      } else {
        carouselStage.style.left = "-960px";
      }
    }

  });
})(window);