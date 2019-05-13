function loadMascots() {
  $.ajax({
    type: "GET",
    url: "score.xml",
    dataType: "xml",
    success: function(xml) {
      var $xml = $(xml);
      //Away
      $awayteam = $xml.find("awayteam").text();
      $hometeam = $xml.find("hometeam").text();
      if ($awayteam == "lamar") {
        $(".awayteam").text("SAVAGES");
        $(".awaymascot").attr("src", "./img/savage.png");
      } else if ($awayteam == "trinidad") {
        $(".awayteam").text("MINERS");
        $(".awaymascot").attr("src", "./img/trinidad.png");
      } else if ($awayteam == "sterling") {
        $(".awayteam").text("TIGERS");
        $(".awaymascot").attr("src", "./img/sterling.png");
      } else if ($awayteam == "manitou") {
        $(".awayteam").text("MUSTANGS");
        $(".awaymascot").attr("src", "./img/manitou.png");
      } else if ($awayteam == "florence") {
        $(".awayteam").text("HUSKIES");
        $(".awaymascot").attr("src", "./img/florence.png");
      } else if ($awayteam == "stmarys") {
        $(".awayteam").text("PIRATES");
        $(".awaymascot").attr("src", "./img/stmarys.png");
      } else if ($awayteam == "james") {
        $(".awayteam").text("JAGUARS");
        $(".awaymascot").attr("src", "./img/james.png");
      } else if ($awayteam == "salida") {
        $(".awayteam").text("SPARTANS");
        $(".awaymascot").attr("src", "./img/salida.png");
      } else if ($awayteam == "lj") {
        $(".awayteam").text("TIGERS");
        $(".awaymascot").attr("src", "./img/lj.png");
      } else {
        $(".awayteam").text("UK");
        $(".awaymascot").attr("src", "./img/uk.png");
      }

      //Home Team
      if ($hometeam == "lamar") {
        $(".hometeam").text("SAVAGES");
        $(".homemascot").attr("src", "./img/savage.png");
      } else if ($hometeam == "trinidad") {
        $(".hometeam").text("MINERS");
        $(".homemascot").attr("src", "./img/trinidad.png");
      } else if ($hometeam == "sterling") {
        $(".hometeam").text("TIGERS");
        $(".homemascot").attr("src", "./img/sterling.png");
      } else if ($hometeam == "manitou") {
        $(".hometeam").text("MUSTANGS");
        $(".homemascot").attr("src", "./img/manitou.png");
      } else if ($hometeam == "florence") {
        $(".hometeam").text("HUSKIES");
        $(".homemascot").attr("src", "./img/florence.png");
      } else if ($hometeam == "stmarys") {
        $(".hometeam").text("PIRATES");
        $(".homemascot").attr("src", "./img/stmarys.png");
      } else if ($hometeam == "james") {
        $(".hometeam").text("JAGUARS");
        $(".homemascot").attr("src", "./img/james.png");
      } else if ($hometeam == "salida") {
        $(".hometeam").text("SPARTANS");
        $(".homemascot").attr("src", "./img/salida.png");
      } else if ($hometeam == "lj") {
        $(".hometeam").text("TIGERS");
        $(".homemascot").attr("src", "./img/lj.png");
      } else {
        $(".hometeam").text("UK");
        $(".homemascot").attr("src", "./img/uk.png");
      }
    }
  });
}

function loadScoresBB() {
  $.ajax({
    type: "GET",
    url: "score.xml",
    dataType: "xml",
    cache: false,
    success: function(xml) {
      var $xml = $(xml);
      $homescore = $xml.find("homescore");
      $homefoul = $xml.find("homefoul");
      $hometol = $xml.find("hometol");
      $awayfoul = $xml.find("awayfoul");
      $awaytol = $xml.find("awaytol");
      $awayscore = $xml.find("awayscore");
      $period = $xml.find("period");
      $time = $xml.find("time");
      $message = $xml.find("message");
      $(".homescore").text($homescore.text());
      $(".hometol").text($hometol.text());
      $(".homefoul").text($homefoul.text());
      $(".awaytol").text($awaytol.text());
      $(".awayscore").text($awayscore.text());
      $(".awayfoul").text($awayfoul.text());
      $(".period").text($period.text());
      if ($period.text() == "1" || $period.text() == "2" || $period.text() == "3" || $period.text() == "4") {
        $("#halftimeTable").hide();
        $("#gameTable").show();
        $("#appTable").hide();
        console.log($period.text());
      } else if ($period.text() == "PRE" || $period.text() == "HALF" || $period.text() == "FIN") {
        $("#halftimeTable").show();
        $("#gameTable").hide();
        $("#appTable").hide();
        console.log($period.text());
        if ($period.text() == "PRE") {
          $("#periodh").text("PREGAME");
        } else if ($period.text() == "HALF") {
          $("#periodh").text("HALFTIME");
        } else if ($period.text() == "FIN") {
          $("#periodh").text("FINAL");
        }
      }
    }
  });
}


loadMascots();
loadScoresBB();


setInterval(function() {
  loadScoresBB() // this will run after every 5 seconds
}, 500);
