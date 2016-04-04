


/*
Bio Section, including Header and Top Contacts
 */

var bio = {
	"name" : "Samantha A. Britney",
	"role" : "UX Designer",
	"contacts" : {
		"mobile" : "206-953-2971",
		"email" : "sambritney@gmail.com",
		"twitter" : "@sambritney",
		"location" : "Carlsbad, CA"
	},
	"message" : "UX professional with global expertise in Product and Marketing.",
	"skills" : ["User Experience Design", "Product Management", "Agile Methodologies", "HTML, CSS, JavaScript"],
	"biopic" : "images/sam-146.jpg"
};

bio.display = function () {
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#bsRole").prepend(formattedRole);
	$("#bsName").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);


	/* Move bio pic and message to right column, below education
	*/
	var formattedPic = HTMLbiopic.replace("%data%", bio.biopic);
		$(formattedPic).insertBefore("#education");
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
		$(formattedMessage).insertBefore("#education");


	if (bio.skills.length > 0) {
		$(HTMLskillsStart).insertAfter("#education");

		for(var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}

	}
}

bio.display();


/*
Work Section, listing all jobs
*/

var work = {
	"jobs" : [
	{
		"title" : "Senior Product Manager, Egencia",
		"employer" : "Expedia, Inc.",
		"dates" : "2014-2015",
		"location" : "Bellevue, WA",
		"description" : "Built strategic partnerships with global customers and teams to advance Business Intelligence (BI) product strategy. Acted as Scrum product owner for BI product offerings.",
		"url" : "http://www.egencia.com/"
	},
	{
		"title" : "Director, Product Management",
		"employer" : "moz",
		"dates" : "2012-2013",
		"location" : "Seattle, WA",
		"description" : "Drove product strategy, managed backlog and inspired product team for Marketing Analytics SaaS start-up.",
		"url" : "https://moz.com/"
	},
	{
		"title" : "Senior Product Manager",
		"employer" : "moz",
		"dates" : "2011-2012",
		"location" : "Seattle, WA",
		"description" : "Conducted user research, developed product plans, wireframes and specifications. Led cross-functional teams through agile product development.",
		"url" : "https://moz.com/"
	},
	{
		"title" : "Business Manager, Online Advertising",
		"employer" : "Microsoft Corp.",
		"dates" : "2008-2010",
		"location" : "Redmond, WA",
		"description" : "Drove operational business processes including strategic planning and business reviews for 50-person Global Marketing team. Responsible for financial management and analysis of $16M Marketing budget.",
		"url" : "http://advertise.bingads.microsoft.com/"
	},
	{
		"title" : "Marketing Communcations Manager, Atlas",
		"employer" : "Microsoft Corp.",
		"dates" : "2008",
		"location" : "Redmond, WA",
		"description" : "Produced marketing collateral including brochures, product sheets, white papers and event signage. Reviewed outgoing Marketing Communications for brand accuracy.",
		"url" : "https://www.microsoft.com/"
	},
	{
		"title" : "Program Manager, Dynamics",
		"employer" : "Microsoft Corp.",
		"dates" : "2002-2007",
		"location" : "Redmond, WA",
		"description" : "Remotely managed cross-functional teams designing features for Microsoft Dynamics financial management software. Developed use cases, technical specifications, wireframes and process models.",
		"url" : "https://www.microsoft.com/en-us/dynamics/default.aspx"
	}
	]
};

work.display = function() {
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

	$(".work-entry:last a").attr("href", work.jobs[job].url);

	}
}

work.display();

/*
Projects section. Placeholder for now until I have projects to share.
*/

var projects = {
	"projects" : [
	{
			"title" : "Portfolio Site",
			"dates" : "December 2015",
			"description" : "Developed personal portfolio site",
			"images" : ["images/comb_folio.png", "images/comb_code.png"]
	},
	{
			"title" : "Persona Development",
			"dates" : "February 2016",
			"description" : "Persona research and development for Good Market",
			"images" : ["images/comb_ex.png"]	
	}
	]
};


projects.display = function() {
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



/*
Education Section
*/

var education = {
	"schools" : [
	{
		"name" : "University of Washington",
		"degree" : "MBA",
		"location" : "Seattle, WA",
		"major" : "Technology Management",
		"dates" : "2006-2007",
		"url" : "http://foster.uw.edu/"
	},
	{
		"name" : "Syracuse University",
		"degree" : "BA",
		"location" : "Syracuse, NY",
		"major" : "English",
		"dates" : "1989-1993",
		"url" : "http://www.syr.edu/"

	}
	],

	"onlineCourses" : [
	{
		"title" : "Front End Developer",
		"school" : "Udacity",
		"date" : "2016",
		"url" : "http://www.udacity.com/"
	},
	{
		"title" : "UX Design",
		"school" : "DesignLab",
		"date" : "2016",
		"url" : "http://trydesignlab.com/"
	}	
	]
};

education.display = function() {
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	

	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	$(".education-entry:last a").attr("href", education.schools[school].url);

	};


// To display online course details

for (onlineCourse in education.onlineCourses) {
	$("#education").append(HTMLonlineStart);

	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".online-entry:last").append(formattedTitleSchool);

	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".online-entry:last").append(formattedDates);

	$(".online-entry:last a").attr("href", education.onlineCourses[onlineCourse].url);

	}
}

education.display();


/*
Code for location map
*/

$("#mapDiv").append(googleMap);

/*
Code for recording clicks in console.log
*/

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});







