var bio = {
    "name": "Winston Hosea Driggins",
    "role": "Front End Ninja",
    "contacts": {
        "mobile" : "(518)698-5103" ,
        "email"  :"wdriggins@gmail.com" ,
        "github" :"winstonhoseadriggins" ,
        "linked" :"winstonhoseadriggins" ,
        "twitter":"@winstonhoseadriggins" ,
        "location": "Florida USA"
    },
    "welcomeMessage": "I am pursuing a Front End Web Development Nano Degree through the Udacity Transcend Scholarship Program." ,
    "skills": [
        "Javascript", "jQuery", "Bootstrap", "AngularJS", "HTML5", "CSS3" , "Machine Operator", "Diagnostic and Mechanical Repair", "Inspection and Maintenance Service"
		],
    "biopic": "images/logo.png"
};

var work = {
    "jobs": [{
        "employer": "Operational Engineer and Technical",
        "title": " Machine and Equipment Operator ",
        "location": "Florida",
        "dates": "November 2010 - March 2015",
        "description": "Operated machinery on various construction sites"
    }, {
        "employer": "Automotive Diagnostic Repair",
        "title": "Maintenance Technician",
        "location": "New Jersey",
        "dates": "September 1995 - June 2005",
        "description": "Performed Inspection and scheduled maintenance"
    }, {
        "employer": "Unique Mart",
        "title": "Manager",
        "location": "Pennsylvania",
        "dates": "June 2005 - September 2010",
        "description": "Operated a variety market"
    }]
};

var projects = {
    "projects": [{
        "title": "Mockup to Article",
        "dates": "2016",
        "description": "HTML5 elements used are head, body, paragraph, bold, italic, image, ordered/unordered list, horizontal rule, and superscript.",
        "images": ["images/Mockup-to-Article.png"],
        "url": "https://github.com/winstonhoseadriggins/winstonhoseadriggins.github.io.git"
    }, {
        "title": "Animal Trading Cards",
        "dates": "2016",
        "description": "Convert a design prototype into a webpage template.",
        "images": ["images/bumblebee_800.jpg"],
        "url": "https://github.com/winstonhoseadriggins/winstonhoseadriggins.github.io.git"
    }, {
        "title": "Build a Portfolio Site",
        "dates": "2016",
        "description": "Replicate design mockup in HTML5 and CSS3 including projects for Front End Web Developer Nano Degree.",
        "images": ["images/portfolio banner img.jpg"],
        "url": "https://github.com/winstonhoseadriggins/winstonhoseadriggins.github.io.git"
    }, {
        "title": "Online Resume",
        "dates": "2016",
        "description": " Use javascript with json objects to build resume template update.",
        "images": ["images/resume.jpg"],
        "url": "https://github.com/winstonhoseadriggins/winstonhoseadriggins.github.io.git"
    }]
};

var education = {
    "schools": [{
        "name": "Chester High School",
        "location": "Chester, Pa",
        "degree": "Vocational",
        "majors": ["Equipment Operation"],
        "dates": "1994",
        "url": "http://www.cusd.edu/"
    }, {
        "name": "Automotive Technician",
        "location": "LoganTwp, NJ",
        "degree": "Certification",
        "majors": ["Diagnostic Services"],
        "dates": "1995",
        "url": "http://www..edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "Writing READMEs with Walter Lattimer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/writing-readmes--ud777"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Intro to Git and Github",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }]
};

var data = '%data%';

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
    $("#header").prepend(HTMLheaderName.replace(data, bio.name));
    $("#header").append(HTMLbioPic.replace(data, bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
    $("#topContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace(data, bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace(data, bio.contacts.github));
    $("#topContacts").append(HTMLlinkedin.replace(data, bio.contacts.linkedin));
    $("#topContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace(data, bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = '';
        var $skillList = $("#skills");
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace(data, skill);
            $skillList.append(formattedSkill);
        });
    }
    $("#footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace(data, bio.contacts.github));
    $("#footerContacts").append(HTMLlinkedin.replace(data, bio.contacts.linkedin));
    $("#footerContacts").append(HTMLtwitter.replace(data, bio.contacts.twitter));
    $("#footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (school = 0; school < education.onlineCourses.length; school++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[school].title).replace("#", education.onlineCourses[school].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[school].school);
                var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[school].dates);
                var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[school].url).replace("#", education.onlineCourses[school].url);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

education.display();

function displaymap() {
    $('#mapDiv').append(googleMap);
}
displaymap();