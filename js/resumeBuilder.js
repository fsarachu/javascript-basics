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
work.employer = "None";
work.years = "1 and counting";
work.city = "Remote, Maldonado (Uruguay) based";

var education = {};

education["lastSchool"] = "CURE";
education["years"] = "2";
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