/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Samantha Britney";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : {
		"mobile" : "206-953-2971",
		"email" : "sambritney@gmail.com",
		"twitter" : "@sambritney",
		"github" : "sambritney",
		"location" : "Carlsbad, CA"
	},
	"bioPic" : "images/fry.jpg",
	"skills" : ["french", "cooking", "travel", "reading"]
};

$("#header").append(bio);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}

var work = {
	"jobs" : [
	{
		"title" : "Senior Product Manager",
		"employer" : "Expedia, Inc.",
		"dates" : "2014-2015",
		"location" : "Bellevue, WA",
		"description" : "Reporting and BI Product Manager for business travel site"
	},
	{
		"title" : "Director, Product Management",
		"employer" : "moz",
		"dates" : "2011 - 2013",
		"location" : "Seattle, WA",
		"description" : "Marketing analytics site"
	}
	]
};

function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDesc);
}
}

displayWork();

var projects = {
	"projects" : [
	{
			"title" : "Action List",
			"dates" : "2012",
			"description" : "Developed an action list to show users next steps in optimizing SEO"
	},
	{
			"title" : "Historical Tracking",
			"dates" : "2011",
			"description" : "Added historical data points to rankings tracking"
	}
	]
};

projects.display = function () {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

	// if (projects.projects[project].images.length > 0) {
	// 	for (image in projects.projects[project].images) {
	// 		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	// 		$(".project-entry.last").append(formattedImage);
	// 	}
	// }
}
}

projects.display();

var education = {
	"schools" : [
	{
		"name" : "University of Washington",
		"degree" : "MBA",
		"location" : "Seattle, WA",
		"major" : "Technology Management",
		"dates" : 2007
	},
	{
		"name" : "Syracuse University",
		"degree" : "BA",
		"location" : "Syracuse, NY",
		"major" : "English",
		"dates" : 1993
	}
	]
};

function displayEducation() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);	

	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	}
}

displayEducation();


$("#mapDiv").append(googleMap);

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;

//   logClicks(x,y);
// });

/*Internationalizer*/
// function inName(name) {
// 	name = bio.name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0] + " " + name[1];
// }


// $("#main").append(internationalizeButton);






