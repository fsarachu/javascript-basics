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

var work = {};

work.title = "Freelance Fullstack Web Developer";
work.position = "Fullstack Web Developer";
work.employer = "Independent";
work.years = "1 year and counting";
work.city = "Remote, Maldonado (Uruguay) based";

var education = {};

education["lastSchool"] = "CURE";
education["degree"] = "Tecnólogo en Informática";
education["years"] = "2015 - 2018 (Expected)";
education["city"] = "Maldonado (Uruguay)";


var $header = $("#header");

$header.prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$header.prepend(HTMLheaderRole.replace("%data%", bio.role));
$header.prepend(HTMLheaderName.replace("%data%", bio.name));
$header.prepend(HTMLbioPic.replace("%data%", bio.bioPic));


var $contacts = $("#topContacts");

$contacts.append(HTMLemail.replace("%data%", bio.contacts.email));
$contacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$contacts.append(HTMLlocation.replace("%data%", bio.contacts.location));
$contacts.append(HTMLgithub.replace("%data%", bio.contacts.github));


var $workExperience = $("#workExperience");
var $workStart = $(HTMLworkStart);

$workExperience.append($workStart);
$workStart.append(HTMLworkEmployer.replace("%data%", work.employer));
$workStart.append(HTMLworkTitle.replace("%data%", work.title));
$workStart.append(HTMLworkDescription.replace("%data%", work.position));
$workStart.append(HTMLworkDates.replace("%data%", work.years));
$workStart.append(HTMLworkLocation.replace("%data%", work.city));


var $education = $("#education");
var $schoolStart = $(HTMLschoolStart);

$education.append($schoolStart);
$schoolStart.append(HTMLschoolName.replace("%data%", education.name));
$schoolStart.append(HTMLschoolDegree.replace("%data%", education.degree));
$schoolStart.append(HTMLschoolDates.replace("%data%", education.years));
$schoolStart.append(HTMLschoolLocation.replace("%data%", education.city));