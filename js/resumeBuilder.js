/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Samantha A. Britney";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


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
	"message" : "High tech professional with global expertise in User Experience, Product and Marketing. Demonstrated focus on improving the customer experience coupled with strong analytical, communication and problem solving skills. Principle strengths include empathy and adaptability. Accomplished in developing teams, directing, influencing and motivating others to deliver high quality products and services.",
	"skills" : ["french", "cooking", "travel", "reading"],
	"bioPic" : "images/logo_s_orange.png"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);


var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedMessage);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formattedSkill);

formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(formattedSkill);
}


var work = {
	"jobs" : [
	{
		"title" : "Senior Product Manager",
		"employer" : "Expedia, Inc.",
		"dates" : "2014-2015",
		"location" : "Bellevue, WA",
		"description" : "Built strategic partnerships with global customers and teams to advance Business Intelligence (BI) product strategy. Acted as Scrum product owner for BI product offerings."
	},
	{
		"title" : "Director, Product Management",
		"employer" : "moz",
		"dates" : "2012-2013",
		"location" : "Seattle, WA",
		"description" : "Drove product strategy, managed backlog and inspired product team for Marketing Analytics SaaS start-up."
	},
	{
		"title" : "Senior Product Manager",
		"employer" : "moz",
		"dates" : "2011-2012",
		"location" : "Seattle, WA",
		"description" : "Conducted user research, developed product plans, wireframes and specifications. Led cross-functional teams through agile product development."
	},
	{
		"title" : "Business Manager, Online Advertising",
		"employer" : "Microsoft Corp.",
		"dates" : "2008-2010",
		"location" : "Redmond, WA",
		"description" : "Drove operational business processes including strategic planning and business reviews for 50-person Global Marketing team. Responsible for financial management and analysis of $16M Marketing budget."
	},
	{
		"title" : "Marketing Communcations Manager, Atlas",
		"employer" : "Microsoft Corp.",
		"dates" : "2008",
		"location" : "Redmond, WA",
		"description" : "Produced marketing collateral including brochures, product sheets, white papers and event signage. Reviewed outgoing Marketing Communications for brand accuracy."
	},
	{
		"title" : "Program Manager, Dynamics",
		"employer" : "Microsoft Corp.",
		"dates" : "2002-2007",
		"location" : "Redmond, WA",
		"description" : "Remotely managed cross-functional teams designing features for Microsoft Dynamics financial management software. Developed use cases, technical specifications, wireframes and process models."
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
			"title" : "Placeholder for a Project",
			"dates" : "TBD",
			"description" : "This is a placeholder for where a project will go",
			"images" : ["images/comb1_d.png", "images/comb3.png"]
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

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();

var education = {
	"schools" : [
	{
		"name" : "University of Washington",
		"degree" : "MBA",
		"location" : "Seattle, WA",
		"major" : "Technology Management"
	},
	{
		"name" : "Syracuse University",
		"degree" : "BA",
		"location" : "Syracuse, NY",
		"major" : "English"
	}
	]
};

function displayEducation() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

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






