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
  "jobs": [
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

projects.display = function () {
  if (this.projects.length > 0) {
    var $projects = $("#projects");

    this.projects.forEach(function (project) {
      var $projectEntry = $(HTMLprojectStart);
      $projects.append($projectEntry);
      $projectEntry.append(HTMLprojectTitle.replace("%data%", project.title));
      $projectEntry.append(HTMLprojectDates.replace("%data%", project.dates));
      $projectEntry.append(HTMLprojectDescription.replace("%data%", project.description));
      $projectEntry.append(HTMLprojectImage.replace("%data%", project.image));
    });
  }
};

function displayInfo() {
  var $header = $("#header");
  $header.prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  $header.prepend(HTMLbioPic.replace("%data%", bio.bioPic));
  $header.prepend(HTMLheaderRole.replace("%data%", bio.role));
  $header.prepend(HTMLheaderName.replace("%data%", bio.name));

  var $topContacts = $("#topContacts");
  $topContacts.append(HTMLemail.replace("%data%", bio.contacts.email));
  $topContacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
  $topContacts.append(HTMLlocation.replace("%data%", bio.contacts.location));
  $topContacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
}

function displaySkills() {
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var $skills = $("#skills");

    bio.skills.forEach(function (skill) {
      $skills.append(HTMLskills.replace("%data%", skill));
    })
  }
}

function displayWork() {
  if (work.jobs.length > 0) {
    var $workExperience = $("#workExperience");

    for (var i in work.jobs) {
      var $workEntry = $(HTMLworkStart);
      $workExperience.append($workEntry);

      var job = work.jobs[i];
      $workEntry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
      $workEntry.append(HTMLworkDates.replace("%data%", job.years));
      $workEntry.append(HTMLworkLocation.replace("%data%", job.city));
      $workEntry.append(HTMLworkDescription.replace("%data%", job.position));
    }
  }
}

displayInfo();
displaySkills();
displayWork();
projects.display();

$("#mapDiv").append(googleMap);