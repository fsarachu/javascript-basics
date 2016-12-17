var bio = {
  "name": "Franco Sarachu",
  "role": "Fullstack Web Developer",
  "contacts": {
    "email": "fsarachu@gmail.com",
    "github": "fsarachu",
    "mobile": "+59899123456",
    "location": "Maldonado, Uruguay"
  },
  "welcomeMessage": "Hey! I'm Franco and I can write beautiful code for you!",
  "skills": [
    "Javascript", "Css3/Sass", "Html5", "Python", "Php"
  ],
  "bioPic": "images/fry.jpg"
};

var work = {
  "work": [
    {
      "title": "Mobile phone repairing",
      "position": "Serviceman",
      "employer": "Independent",
      "years": "2014 - 2015",
      "city": "Maldonado (Uruguay)"
    },
    {
      "title": "Freelance Fullstack Web Developer",
      "position": "Fullstack Web Developer",
      "employer": "Independent",
      "years": "2016 - Today",
      "city": "Remote, Maldonado (Uruguay) based"
    }
  ]
};


var education = {
  "education": [
    {
      "lastSchool": "CURE",
      "degree": "Tecnólogo en Informática",
      "years": "2015 - 2018 (Expected)",
      "city": "Maldonado (Uruguay)"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Website Design",
      "dates": "1 may 2016 - 15 may 2016",
      "description": "Full website design, only photoshop mockups",
      "image": "images/197x148.gif"
    }
  ]
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var $skills = $("#skills");

  bio.skills.forEach(function (skill) {
    $skills.append(HTMLskills.replace("%data%", skill));
  })
}