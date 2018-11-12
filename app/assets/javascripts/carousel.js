(function(window) {
  let items;
  let currentStage = 1;

  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");
    const carouselStage = document.getElementById("carousel-stage");
    const carouselItem = document.getElementsByClassName("carousel-item");

    const computeCarouselItemStyles = window.getComputedStyle(carouselItem[0]);
    const computeCarouselStageStyles = window.getComputedStyle(carouselStage);
    const carouselItemWidth = carouselItem[0].clientWidth
      + parseInt(computeCarouselItemStyles.getPropertyValue("margin-right").replace("px",""));
    const carouselWidth = carousel.clientWidth;
    const carouselItemsLength = carouselItem.length;

    // setup carousel
    setupCarousel();

    // carousel controls
    const prevButton =  document.getElementById("prev-button");
    const nextButton =  document.getElementById("next-button");

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
      const itemPerBlock = 4;
      items = Math.round(carouselItemsLength / itemPerBlock);

      const stageLeftValue = computeCarouselStageStyles.getPropertyValue("left").replace("px","");

      if (stageLeftValue === 0) {
        currentStage = 1;
      } else {
        currentStage = Math.round((stageLeftValue / carouselWidth) + 1);
      }
    }

    function moveCarousel () {
      const width = carouselWidth * (Math.abs(currentStage - items));
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