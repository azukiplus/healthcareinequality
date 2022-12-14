"use strict";
(function () {
  let HEALTH_VAL = -1;
  let MONEY_VAL = -1;


  window.addEventListener('load', init);

  /**
   * Initial functions
   */
  function init() {
    document.getElementById("intro-btn").addEventListener("click", showOpening);
    document.getElementById("choose-story-button").addEventListener("click", chooseYourStory);
    document.getElementById("hm-path").addEventListener("click", hispanicMaleStory);
  }

  function showOpening() {
    document.getElementById("opening").classList.remove("hidden");
    document.getElementById("intro").classList.add("fadeOut");
    setTimeout(function () {
      showOpeningZero();
      document.getElementById("choose-story-button").classList.remove("hidden");
    }, 500);
  }

  function showOpeningZero() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("opening-0").classList.remove("hidden");
    document.getElementById("opening-0").classList.add("fadeIn");
    setTimeout(function () {
      showOpeningOne();
    }, 2000);
  }

  function showOpeningOne() {
    document.getElementById("opening-0").classList.add("hidden");
    document.getElementById("opening-1").classList.remove("hidden");
    document.getElementById("opening-1").classList.add("fadeIn");
    setTimeout(function () {
      showOpeningTwo();
    }, 2000);
  }

  function showOpeningTwo() {
    document.getElementById("opening-1").classList.add("hidden");
    document.getElementById("opening-2").classList.remove("hidden");
    document.getElementById("opening-2").classList.add("fadeIn");
    setTimeout(function () {
      showOpeningThree();
    }, 2000);

    function showOpeningThree() {
      document.getElementById("opening-2").classList.add("hidden");
      document.getElementById("opening-3").classList.remove("hidden");
      document.getElementById("opening-3").classList.add("fadeIn");
      setTimeout(function () {
        showOpeningFour();
      }, 2000);
    }

    function showOpeningFour() {
      document.getElementById("opening-3").classList.add("hidden");
      document.getElementById("opening-4").classList.remove("hidden");
      document.getElementById("opening-4").classList.add("fadeIn");
    }
  }

  function chooseYourStory() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("story-selection").classList.remove("hidden");
    document.getElementById("story-selection").classList.add("fadeIn");
  }

  function hispanicMaleStory() {
    document.getElementById("story-selection").classList.add("hidden");
    document.getElementById("hm1").classList.remove("hidden");
  }

  function showHm2() {
    document.getElementById("navbar").classList.remove("hidden");
    document.getElementById("nav-bar").classList.add("fadeIn");
    document.getElementById("hm1").classList.add("hidden");
    document.getElementById("hm2").classList.remove("hidden");
  }

})();