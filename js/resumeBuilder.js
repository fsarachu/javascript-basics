var name = "Franco Sarachu";
var role = "Fullstack Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var $header = $("#header");

$header.prepend(formattedRole);
$header.prepend(formattedName);