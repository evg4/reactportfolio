import eduTaskHub from "../assets/eduTaskHub.PNG";
import evgtrans from "../assets/EVGTranslations.JPG";
import reddit from "../assets/reddit-mini.JPG";
import flashcards from "../assets/flashcards.PNG";
import packingList from "../assets/packingList.PNG";
import planner from "../assets/planner.PNG";
import recipe from "../assets/recipe-blog.JPG";
import jammming from "../assets/Jammming.PNG";
import timer from "../assets/timer.PNG";
import quizTeam from "../assets/quizTeam.PNG";
import libraryRentals from "../assets/LibraryRentals.PNG";
import friendFrenzy from "../assets/friendFrenzy.PNG";
import foodFacts from "../assets/foodFacts.PNG";
import rhymes from "../assets/rhymes.PNG";
import quizzes from "../assets/quizzes.jpeg";
import shapes from "../assets/shapes.jpeg";
import findYourHat from "../assets/findYourHat.jpeg";
import portfolio from "../assets/portfolio.PNG";
import survey from "../assets/survey.jpeg";
import colourChanger from "../assets/colourChanger.jpeg";
import bakery from "../assets/bakery.jpeg";
import stammtisch from "../assets/stammtisch.jpeg";
import meetTheTeam from "../assets/meetTheTeam.PNG";
import greenConsulting from "../assets/greenConsulting.jpeg";
import superfoods2 from "../assets/superfoods2.jpeg";
import superfoods1 from "../assets/superfoods1.jpeg";
import spanish from "../assets/spanish.jpeg";
import styleGuide from "../assets/styleGuide.jpeg";
import cheatsheet from "../assets/cheatsheet.jpeg";
import salsa from "../assets/salsa.jpeg";

const blogs = [
  {
    title: "EduTaskHub",
    link: "https://edutaskhub.netlify.app/",
    day: "01",
    month: "02",
    year: "2024",
    img: eduTaskHub,
    summaryText: "I worked on this with my mentor Jade Wilson.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "EVG Translations",
    link: "https://evg-translations.netlify.app/",
    day: "28",
    month: "12",
    year: "2023",
    img: evgtrans,
    summaryText:
      "This is the first website I've built to be used in the real world! Featured on the Projects page.",
    fullText:
      "I really enjoyed making this 'real-life' project. At the time, I was still working as a self-employed translator while learning how to code, and my annual payment for my Squarespace website was due for renewal. So I decided to kill two birds with one stone and build a website myself. Not only was it good for advertising my translation services, it was also good for my coding portfolio!",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Redditmini",
    link: "https://evg-redditmini.netlify.app/",
    day: "07",
    month: "11",
    year: "2023",
    img: reddit,
    summaryText:
      "This React app uses Redux and connects to the Reddit API. Featured on the Projects page.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Flashcards",
    link: "https://evg-flashcards.netlify.app/",
    day: "12",
    month: "10",
    year: "2023",
    img: flashcards,
    summaryText: "This Codecademy project was to practise Redux.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Packing list",
    link: "https://evg-packing-list.netlify.app/",
    day: "09",
    month: "10",
    year: "2023",
    img: packingList,
    summaryText: "I created this app to help me understand the Redux toolkit.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Appointment planner",
    link: "https://evg-appointment-planner.netlify.app/contacts",
    day: "27",
    month: "09",
    year: "2023",
    img: planner,
    summaryText:
      "This Codecademy project combines React Routing, HTML forms, and React hooks.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Recipe blog",
    link: "https://evg-recipe-blog.netlify.app/",
    day: "21",
    month: "09",
    year: "2023",
    img: recipe,
    summaryText:
      "A React app using React Routing. Featured on the Projects page.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Jammming",
    link: "",
    day: "30",
    month: "08",
    year: "2023",
    img: jammming,
    summaryText:
      "This webapp connects to the Spotify API. Featured on the Projects page.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Timer",
    link: "https://evg4.github.io/timer/",
    day: "22",
    month: "08",
    year: "2023",
    img: timer,
    summaryText: "My attempt at using the useEffect() hook.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Quiz team registration",
    link: "https://evg4.github.io/quizmember/",
    day: "21",
    month: "08",
    year: "2023",
    img: quizTeam,
    summaryText: "This form uses the useState() hook with a JavaScript object.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Library rentals",
    link: "https://evg4.github.io/libraryrentals/",
    day: "18",
    month: "08",
    year: "2023",
    img: libraryRentals,
    summaryText:
      "More React practise - this time with a focus on useState() with an array.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Friend Frenzy",
    link: "https://evg4.github.io/friendfrenzy/",
    day: "17",
    month: "08",
    year: "2023",
    img: friendFrenzy,
    summaryText:
      "My second React app makes use of props and the useState() hook.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Food facts",
    link: "https://evg4.github.io/food-facts/",
    day: "15",
    month: "08",
    year: "2023",
    img: foodFacts,
    summaryText: "This is a basic webpage built using React.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Rhyme finder",
    link: "https://evg4.github.io/Rhyme-finder/",
    day: "10",
    month: "08",
    year: "2023",
    img: rhymes,
    summaryText: "My first API call!",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Quizzes",
    link: "",
    day: "27",
    month: "07",
    year: "2023",
    img: quizzes,
    summaryText:
      "I created a bank of questions and answers to export for different quizzes.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Shapes",
    link: "https://evg4.github.io/Shapes/",
    day: "26",
    month: "07",
    year: "2023",
    img: shapes,
    summaryText:
      "The main purpose of this was to practice importing and exporting JavaScript modules.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Find my hat",
    link: "https://evg4.github.io/Find-your-hat-web/",
    day: "25",
    month: "07",
    year: "2023",
    img: findYourHat,
    summaryText:
      "This started out as a JavaScript-only Codecademy challenge, but I made a webpage too. ",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Portfolio",
    link: "https://evg4.github.io/index.html",
    day: "10",
    month: "07",
    year: "2023",
    img: portfolio,
    summaryText: "Here is my first portfolio! Featured on the Projects page.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Sweets and chocolate survey",
    link: "https://evg4.github.io/Sweets-survey/",
    day: "30",
    month: "06",
    year: "2023",
    img: survey,
    summaryText: "I made this form to practise HTML forms. ",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Colour changer",
    link: "https://evg4.github.io/Colour-changer/",
    day: "28",
    month: "06",
    year: "2023",
    img: colourChanger,
    summaryText:
      "It's finally time to incorporate JavaScript into my webpages! ",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Belle's Bakery",
    link: "https://evg4.github.io/Belle-s-bakery/",
    day: "26",
    month: "06",
    year: "2023",
    img: bakery,
    summaryText:
      "This website focuses on transitions, transformations and animations using CSS.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Stammtisch Sundays",
    link: "https://evg4.github.io/Stammtisch-Sundays/",
    day: "25",
    month: "05",
    year: "2023",
    img: stammtisch,
    summaryText: "This site uses @media rulesets to make a webpage responsive.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Meet the team",
    link: "https://evg4.github.io/Meet-the-team/",
    day: "18",
    month: "05",
    year: "2023",
    img: meetTheTeam,
    summaryText:
      "I wanted to work out how to get a caption that appears on hover.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Green Consulting",
    link: "https://evg4.github.io/Green-Consulting/",
    day: "17",
    month: "05",
    year: "2023",
    img: greenConsulting,
    summaryText:
      "My largest project so far - putting everything together into one webpage.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Superfoods 2",
    link: "https://evg4.github.io/Superfoods-v2/",
    day: "16",
    month: "05",
    year: "2023",
    img: superfoods2,
    summaryText:
      "Here is my second attempt at using the grid layout, based heavily on the previous design.",
    fullText: "",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Superfoods 1",
    link: "https://evg4.github.io/Superfoods-v1/",
    day: "15",
    month: "05",
    year: "2023",
    img: superfoods1,
    summaryText:
      "This simple page was my first attempt at using the grid layout.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Spanish",
    link: "https://evg4.github.io/Spanish/",
    day: "14",
    month: "05",
    year: "2023",
    img: spanish,
    summaryText:
      "This webpage was for me to try out flexbox... with an interesting colour choice!",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Website style guide",
    link: "https://evg4.github.io/Website-style-guide/",
    day: "12",
    month: "05",
    year: "2023",
    img: styleGuide,
    summaryText: "A project to get used to different style elements.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "CSS colours cheatsheet",
    link: "https://evg4.github.io/css-colours/",
    day: "08",
    month: "05",
    year: "2023",
    img: cheatsheet,
    summaryText:
      "This Codecademy exercise was designed to practise tables in HTML.",
    fullText:
      "This will be several paragraphs of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    title: "Salsa dancing",
    link: "https://evg4.github.io/Salsa-dancing/",
    day: "24",
    month: "04",
    year: "2023",
    img: salsa,
    summaryText:
      "My first project! I completed this as part of the SheCodes Basics course.",
    fullText:
      "This was my first project, completed as part of the SheCodes Basics course. It only uses basic skills but was a great first project to inspire me to continue.",
    get fullDate() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
];

let blogTitles = {};
blogs.forEach((blog) => {
  blogTitles[blog.fullDate] = blog.title;
});

let years = [];

blogs.forEach((blog) => {
  let year = blog.year;
  let month = blog.month;
  let day = blog.day;

  let existingYear = years.find((obj) => obj.year === year);

  if (!existingYear) {
    years.push({ year: year, months: [{ month: month, days: [day] }] });
  } else {
    let existingMonth = existingYear.months.find((obj) => obj.month === month);

    if (!existingMonth) {
      existingYear.months.push({ month: month, days: [day] });
    } else {
      existingMonth.days.push(day);
    }
  }
});

// [{year: 2024, months: [{month: march, days: [01, 12]}, {month: april, days: [08, 15]}]

export default blogs;
export { years, blogTitles };
