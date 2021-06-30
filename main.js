// JavaScript Document
$(document).ready(function () {
  var x = "x";
  var o = "o";
  var count = 0;
  var o_win = 0;
  if (localStorage.getItem("o_win")) {
    o_win = localStorage.getItem("o_win");
  }
  var x_win = 0;
  if (localStorage.getItem("x_win")) {
    x_win = localStorage.getItem("x_win");
  }
  $("#o_win").text(o_win);
  $("#x_win").text(x_win);
  $("#game li").click(function () {
    // console.log(count);
    if ($(this).hasClass("disable")) {
      // alert("Already selected");
      $(".modal-text").text("Already selected.");
    }
    else {
    if ($("#playWithPCCheck").is(':checked')&& count<8) {
      console.log("playing",count);
      $(this).text(o);
      $(this).addClass("disable o btn-info");
      playWithPC(count);
      count=count+2;
    }
    if (count % 2 == 0) {
      $("#currentMarker").html("X");
    } else {
      $("#currentMarker").html("O");
    }
    // O won the game
    if (
      ($("#one").hasClass("o") &&
        $("#two").hasClass("o") &&
        $("#three").hasClass("o")) ||
      ($("#four").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#six").hasClass("o")) ||
      ($("#seven").hasClass("o") &&
        $("#eight").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#one").hasClass("o") &&
        $("#four").hasClass("o") &&
        $("#seven").hasClass("o")) ||
      ($("#two").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#eight").hasClass("o")) ||
      ($("#three").hasClass("o") &&
        $("#six").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#one").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#nine").hasClass("o")) ||
      ($("#three").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#seven").hasClass("o"))
    ) {
      $(".js-container").removeClass("congrats-container");
      if ($("#playWithPCCheck").is(':checked')){
        o_win++;
        $("#o_win").text(o_win);
        count = 0;
      }
      localStorage.setItem("o_win", o_win);
      // alert("O has won the game. Start a new game");
      modal.style.display = "block";
      $(".modal-text").text("O has won the game. Start a new game");
      $("#game li").text("+");
      $("#game li").removeClass("disable");
      $("#game li").removeClass("o");
      $("#game li").removeClass("x");
      $("#game li").removeClass("btn-primary");
      $("#game li").removeClass("btn-info");
    }
    // X won the game
    else if (
      ($("#one").hasClass("x") &&
        $("#two").hasClass("x") &&
        $("#three").hasClass("x")) ||
      ($("#four").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#six").hasClass("x")) ||
      ($("#seven").hasClass("x") &&
        $("#eight").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#one").hasClass("x") &&
        $("#four").hasClass("x") &&
        $("#seven").hasClass("x")) ||
      ($("#two").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#eight").hasClass("x")) ||
      ($("#three").hasClass("x") &&
        $("#six").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#one").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#nine").hasClass("x")) ||
      ($("#three").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#seven").hasClass("x"))
    ) {
      if ($("#playWithPCCheck").is(':checked')){
        x_win++;
        $("#x_win").text(x_win);
        count = 0;
      }
      localStorage.setItem("x_win", x_win);
      $(".js-container").removeClass("congrats-container");
      // alert("X wins has won the game. Start a new game");
      modal.style.display = "block";
      $(".modal-text").text("X wins has won the game. Start a new game");
      $("#game li").text("+");
      $("#game li").removeClass("disable");
      $("#game li").removeClass("o");
      $("#game li").removeClass("x");
      $("#game li").removeClass("btn-primary");
      $("#game li").removeClass("btn-info");
    }
    // Tie game
    else if (count == 8) {
      if (count % 2 == 0) {
        $(this).text(o);
        $(this).addClass("disable o btn-info");
      } else {
        $(this).text(x);
        $(this).addClass("disable x btn-info");
      }
      if (
        ($("#one").hasClass("o") || $("#one").hasClass("x")) &&
        ($("#two").hasClass("o") || $("#two").hasClass("x")) &&
        ($("#three").hasClass("o") || $("#three").hasClass("x")) &&
        ($("#four").hasClass("o") || $("#four").hasClass("x")) &&
        ($("#five").hasClass("o") || $("#five").hasClass("x")) &&
        ($("#six").hasClass("o") || $("#six").hasClass("x")) &&
        ($("#seven").hasClass("o") || $("#seven").hasClass("x")) &&
        ($("#eight").hasClass("o") || $("#eight").hasClass("x")) &&
        ($("#nine").hasClass("o") || $("#nine").hasClass("x"))
      ) {
        // alert("Its a tie. It will restart.");
        modal.style.display = "block";
        $(".modal-text").text("Its a tie. It will restart.");
        resetBoard();
      }
    }
    // Already Selected
    else if ($(this).hasClass("disable")) {
      // alert("Already selected");
      $(".modal-text").text("Already selected.");
    } else if (count % 2 == 0) {
      count++;
      $(this).text(o);
      $(this).addClass("disable o btn-primary");
      // O Won
      if (
        ($("#one").hasClass("o") &&
          $("#two").hasClass("o") &&
          $("#three").hasClass("o")) ||
        ($("#four").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#six").hasClass("o")) ||
        ($("#seven").hasClass("o") &&
          $("#eight").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#one").hasClass("o") &&
          $("#four").hasClass("o") &&
          $("#seven").hasClass("o")) ||
        ($("#two").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#eight").hasClass("o")) ||
        ($("#three").hasClass("o") &&
          $("#six").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#one").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#nine").hasClass("o")) ||
        ($("#three").hasClass("o") &&
          $("#five").hasClass("o") &&
          $("#seven").hasClass("o"))
      ) {
        $(".js-container").addClass("congrats-container");
        // alert("O wins");
        modal.style.display = "block";
        $(".modal-text").text("O wins");
        count = 0;
        o_win++;
        localStorage.setItem("o_win", o_win);
        $("#o_win").text(o_win);
      }
    } else {
      count++;
      $(this).text(x);
      $(this).addClass("disable x btn-info");
      // X Won
      if (
        ($("#one").hasClass("x") &&
          $("#two").hasClass("x") &&
          $("#three").hasClass("x")) ||
        ($("#four").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#six").hasClass("x")) ||
        ($("#seven").hasClass("x") &&
          $("#eight").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#one").hasClass("x") &&
          $("#four").hasClass("x") &&
          $("#seven").hasClass("x")) ||
        ($("#two").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#eight").hasClass("x")) ||
        ($("#three").hasClass("x") &&
          $("#six").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#one").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#nine").hasClass("x")) ||
        ($("#three").hasClass("x") &&
          $("#five").hasClass("x") &&
          $("#seven").hasClass("x"))
      ) {
        $(".js-container").addClass("congrats-container");
        // alert("X wins");
        modal.style.display = "block";
        $(".modal-text").text("X wins");
        count = 0;
        x_win++;
        localStorage.setItem("x_win", x_win);
        $("#x_win").text(x_win);
      }
    }}
  });
  $("#playWithPCCheck").click(function () {
    checkboxPlayWithPC();
  });
  $("#reset").click(function () {
    resetBoard();
  });
  $("#reset-everything").click(function () { resetEverything(); });

  // Play with PC
  function checkboxPlayWithPC() {
    resetEverything();
  }
  function playWithPC(count) {
    var allIds = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
    var randomNumber = getRandomInt(0, 8);
    // console.log("count",count);
    // // console.log(document.querySelector("#playWithPCCheck").checked);
    // if (document.querySelector("#playWithPCCheck").checked) {
    //   while(($(allIds[randomNumber]).hasClass("o")||$(allIds[randomNumber]).hasClass("x")) && count==8){
    //   randomNumber= getRandomInt(0,10);
    //   }
    //   count++;
    // }
    if (document.querySelector("#playWithPCCheck").checked && count < 8) {
      // console.log(getRandomInt(0, 10));
      while ((($(allIds[randomNumber]).hasClass("disable o btn-info")) || ($(allIds[randomNumber]).hasClass("disable x btn-info")))) {
        randomNumber = getRandomInt(0, 8);
      }
      console.log(randomNumber,count);
      $(allIds[randomNumber]).text(x);
      $(allIds[randomNumber]).addClass("disable x btn-info");
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resetBoard() {
    $(".js-container").removeClass("congrats-container");
    $("#game li").text("+");
    $("#game li").removeClass("disable");
    $("#game li").removeClass("o");
    $("#game li").removeClass("x");
    $("#game li").removeClass("btn-primary");
    $("#game li").removeClass("btn-info");
    count = 0;
  }

  function resetEverything() {
    resetBoard();
    // console.log(x_win,o_win);
    modal.style.display = "block";
    if (x_win > o_win) {
      $(".modal-text").text("W wins.");
    }
    else if (x_win < o_win) {
      $(".modal-text").text("O wins.");
    }
    else if (x_win > 0 && o_win > 0 && x_win == o_win) {
      $(".modal-text").text("It's a Tie.");
    }
    else {
      modal.style.display = "none";
    }
    localStorage.removeItem("o_win");
    localStorage.removeItem("x_win");
    $("#game li").text("+");
    $(".js-container").removeClass("congrats-container");
    $("#game li").removeClass("disable");
    $("#game li").removeClass("o");
    $("#game li").removeClass("x");
    $("#game li").removeClass("btn-primary");
    $("#game li").removeClass("btn-info");
    count = 0;
    o_win = 0;
    x_win = 0;
    $("#o_win").text(o_win);
    $("#x_win").text(x_win);
  }

  // modal
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // congrats animation
  const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = ["#EF2964", "#00C09D", "#2D87B0", "#48485E", "#EFFF1D"];
    this.confettiAnimations = ["slow", "medium", "fast"];

    this._setupElements();
    this._renderConfetti();
  };

  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;

    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }

    containerEl.classList.add("confetti-container");

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
  };

  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground =
        this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
        ];
      const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation =
        this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
        ];

      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);

      this.containerEl.appendChild(confettiEl);
    }, 25);
  };

  window.confettiful = new Confettiful(document.querySelector(".js-container"));
});
