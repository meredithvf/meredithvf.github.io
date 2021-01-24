import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Meredith Von Feldt Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: null,
  description: "A computer science student with a passion for all things outdoors.",
};

/*=====================
    2. Social Networks
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/meredithvf",
  linkden: "https://www.linkedin.com/in/meredith-von-feldt/",
  facebook: null,
  instagram: null,
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Meredith Von Feldt",
  bannerHeading: "hey there,",
  bannerTagLine: emoji(
    "I'm a computer science student with a love for ui/ux, development, and all things outdoors."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpeg",
  resumeLink:
    "https://docs.google.com/document/d/103J57hH5ZMkuOVKb6Ks5F2JIuyevwGO7LUs6XU43Cf0/preview",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command
    line concept so it asked you to add the admin of the command line
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "Meredith",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "I love computer science. I research human computer interaction in the outdoors and work as a UX teaching assistant. I love helping people. I am the VP of the Women in Computer Science club and work on improving students' mental health as part of my position in BYU's advisory council.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Passionate about UI/UX and creating exciting interfaces and apps using Figma, Android Studio, CSS...",
    "Love pushing myself to solve problems in python.",
    "Always learning new skills and languages. Most recently, Flutter",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-java",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      fontAwesomeClassname: "fab fa-android",
    },
  ],
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "College Housing App",
      projectBio:
        "Current project aimed to solve the inneficiences in the Provo, Utah housing market",

      projectUrl: null,
      stackList: ["Flutter", "React", "Javascript"],
    },
    {
      projectName: "Twitter Clone",
      projectBio:
        "Mock twitter app. It connected to AWS backend in order to store and retrieve user information, post tweets, and update user stories and feed for a large scale number of users (10,000+) with low perceived latency (< 2 seconds).",

      projectUrl: null,
      stackList: ["AWS", "Java", "AndroidStudio", "Lucid"],
    },
    {
      projectName: "Family Map App",
      projectBio:
        "App that lets a user view and interact with their family history through plotting geographical origins with attached information through the Google Maps API",

      projectUrl: null,
      stackList: ["MySQL", "Java", "AndroidStudio"],
    },

    {
      projectName: "Photography Website",
      projectBio:
        "Simple website for photographer",

      projectUrl: "https://clarasevernphotography.com/",
      stackList: ["WordPress", "CSS", "HTML"],
    },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Learned to Program",
      experienceDesc:
        "Spontaneously took my first cs class, AP Computer Science. Didn't know what coding was when I signed up.",
      // Recommended : don't add full date.
      experienceDuration: "9/16-05/17",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Java", "OOP", "High School"],
    },
    {
      experienceTitle: "Started the BYU CS program",
      experienceDesc:
        "Challenged myself more than I thought possible. Learned C++ and data structures my first year.",
      experienceDuration: "10/19-11/19",
      experienceTags: ["C++", "Freshman", "Data Structures"],
    },
    {
      experienceTitle: "Church Mission",
      experienceDesc:
        "Took time off of school to learn Spanish in order to serve and help others.",
      experienceDuration: "8/2018-12/2018",
      experienceTags: ["Service", "Spirituality"],
    },
    {
      experienceTitle: "CS Research Assistant",
      experienceDesc:
        "Researched/Developed techonology in the outdoors, training athletes through machine learning, and machine labeling. Awarded 2nd place in section at BYU Student Research Conference.",
      experienceDuration: "Current",
      experienceTags: ["HCI", "Machine Learning", "Outdoors"],
    },
    {
      experienceTitle: "UX Teaching Assistant",
      experienceDesc:
        "Mentored and graded students on UX projects and tools including problem statements, user testing, site remodeling, and app creation.",
      experienceDuration: "Current",
      experienceTags: ["UX", "Teaching", "App Design"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey folks. I'd love to be in contact with you.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["meredithvf@byu.edu"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  projectsSection,
  experienceSection,
  contactSection,
};
