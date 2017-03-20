$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

var achievements = [
		{
			title: "The IET Diamond Jubilee Scholarship",
			img: "media/IET-DIAMOND-Award-2016-WINNER-med.jpg",
            imgClass: "IETLogo",
            description: "Awarded a Diamond Jubilee Scholarship by the Institution of Engineering and Technology (IET) supported by BT for academic excellence.",
		},
  {
			title: "Prize for A-Level Mathematics",
			img: "media/jfsLogo.png",
            imgClass: "JFSLogo2",
            description: "Awarded for demonstration of excellence in mathematics.",
		},
  {
			title: "Preparatory course in Mathematical Sciences",
			img: "media/TAULogo.png",
            imgClass: "TAULogo",
            description: "Completed a selective Preparatory Course in Mathematical Sciences at Tel-Aviv University at age 14, after which I was granted admission to the Bachelors degree in Sciences there. Completed my high school mathematics studies 3 years early as part of the course.",
		},
		
	];

var achieve = function() {
  for (var i = 0; i < achievements.length; i++) {
  $(".academicAchievements").append("\
            <div class='Awrap displayBox'>\
                <img class='IMGLogo " + achievements[i].imgClass +"' src=" + achievements[i].img + " />\
                <h3 class='achievements secondSub'>" + achievements[i].title + "</h3>\
                <span class='achievements textContent'>" + achievements[i].description + "</span>\
            </div>");
  }
}

$(function () {
  achieve();
})