"use strict";

/**
 * Bio Section, including Header and Top Contacts
 */

var bio = {
    "name": "Samantha A. Britney",
    "role": "UX Designer",
    "contacts": {
        "mobile": "206-953-2971",
        "email": "sambritney@gmail.com",
        "github": "sambritney",
        "twitter": "@sambritney",
        "location": "Carlsbad, CA"
    },
    "welcomeMessage": "UX professional with global expertise in Product and Marketing.",
    "skills": ["User Experience Design", "Product Management", "Agile Methodologies", "HTML, CSS, JavaScript"],
    "biopic": "images/sam-146.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#bsRole").prepend(formattedRole);
    $("#bsName").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);


    /**
     * Move bio pic and message to right column, below education
     */

    var formattedPic = HTMLbiopic.replace("%data%", bio.biopic);
    $(formattedPic).insertBefore("#education");
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $(formattedMessage).insertBefore("#education");


    if (bio.skills.length) {
        $(HTMLskillsStart).insertAfter("#education");

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

    }
};

bio.display();


/**
 * Work Section, listing all jobs
 */

var work = {
    "jobs": [{
        "title": "Senior Product Manager, Egencia",
        "employer": "Expedia, Inc.",
        "dates": "2014-2015",
        "location": "Bellevue, WA",
        "description": "Built strategic partnerships with global customers and teams to advance Business Intelligence (BI) product strategy. Acted as Scrum product owner for BI product offerings.",
        "url": "http://www.egencia.com/"
    }, {
        "title": "Director, Product Management",
        "employer": "moz",
        "dates": "2012-2013",
        "location": "Seattle, WA",
        "description": "Drove product strategy, managed backlog and inspired product team for Marketing Analytics SaaS start-up.",
        "url": "https://moz.com/"
    }, {
        "title": "Senior Product Manager",
        "employer": "moz",
        "dates": "2011-2012",
        "location": "Seattle, WA",
        "description": "Conducted user research, developed product plans, wireframes and specifications. Led cross-functional teams through agile product development.",
        "url": "https://moz.com/"
    }, {
        "title": "Business Manager, Online Advertising",
        "employer": "Microsoft Corp.",
        "dates": "2008-2010",
        "location": "Redmond, WA",
        "description": "Drove operational business processes including strategic planning and business reviews for 50-person Global Marketing team. Responsible for financial management and analysis of $16M Marketing budget.",
        "url": "http://advertise.bingads.microsoft.com/"
    }, {
        "title": "Marketing Communcations Manager, Atlas",
        "employer": "Microsoft Corp.",
        "dates": "2008",
        "location": "Redmond, WA",
        "description": "Produced marketing collateral including brochures, product sheets, white papers and event signage. Reviewed outgoing Marketing Communications for brand accuracy.",
        "url": "https://www.microsoft.com/"
    }, {
        "title": "Program Manager, Dynamics",
        "employer": "Microsoft Corp.",
        "dates": "2002-2007",
        "location": "Redmond, WA",
        "description": "Remotely managed cross-functional teams designing features for Microsoft Dynamics financial management software. Developed use cases, technical specifications, wireframes and process models.",
        "url": "https://www.microsoft.com/en-us/dynamics/default.aspx"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDesc);
            $(".work-entry:last a").attr("href", job.url);
    });
}

work.display();

/**
 * Projects section. Placeholder for now until I have projects to share.
 */

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "December 2015",
        "description": "Developed personal portfolio site",
        "images": ["images/comb_folio.png", "images/comb_code.png"]
    }, {
        "title": "Persona Development",
        "dates": "February 2016",
        "description": "Persona research and development for Good Market",
        "images": ["images/comb_ex.png"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                })
            }
    });
}

projects.display();

/**
 * Education Section
 */

var education = {
    "schools": [{
        "name": "University of Washington",
        "degree": "MBA",
        "location": "Seattle, WA",
        "majors": ["Technology Management"],
        "dates": "2006-2007",
        "url": "http://foster.uw.edu/"
    }, {
        "name": "Syracuse University",
        "degree": "BA",
        "location": "Syracuse, NY",
        "majors": ["English"],
        "dates": "1989-1993",
        "url": "http://www.syr.edu/"

    }],

    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "http://www.udacity.com/"
    }, {
        "title": "UX Design",
        "school": "DesignLab",
        "date": "2016",
        "url": "http://trydesignlab.com/"
    }]
};


education.display = function() {
    education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedNameDegree, formattedLocation, formattedDates, formattedMajor);
            $(".education-entry:last a").attr("href", school.url);

    });

    /**
     * To display online course details
     */

    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLonlineStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
        $(".online-entry:last").append(formattedTitleSchool, formattedOnlineDates);
        $(".online-entry:last a").attr("href", onlineCourse.url);

    });

}

education.display();


/**
 * Code for location map
 */

$("#mapDiv").append(googleMap);

/**
 * Code for recording clicks in console.log
 */

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
