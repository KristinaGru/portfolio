import { Project } from './types/Project';
import mealGif from './assets/gifs/meal_sharing.gif';
import adviceGif from './assets/gifs/advice_generator.gif';
import projectManagementGif from './assets/gifs/project_management.gif';

export const projects: Project[] = [
  {
    gif: mealGif,
    title: 'MEAL SHARING',
    about:
      'The Meal Sharing website is a user-friendly platform developed for browsing and hosting home-cooked meals. Users can easily explore and join dining events, leave reviews or become a host themselves by creating their own event.',
    tools: ['React.js', 'MUI', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://meal-sharing-rkfc.onrender.com/',
    github: 'https://github.com/KristinaGru/meal-sharing',
    first: true
  },
  {
    gif: projectManagementGif,
    title: 'PROJECT MANAGEMENT',
    about:
      'Dynamic project management application for individual and collaborative use. Users can create projects, define tasks, and seamlessly manage assignments between users, deadlines, priorities, and notes. The intuitive drag-and-drop UI enhances task status updates. Built in an agile environment with a 4-student team.',
    tools: [
      'React.js',
      'Typescript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Firebase Authentication',
      'MUI',
      'CSS modules'
    ],
    link: 'https://lothbrok-webservice.onrender.com/',
    github: 'https://github.com/HackYourFuture-CPH/class-25-lothbrok'
  },
  {
    gif: adviceGif,
    title: 'ADVICE GENERATOR',
    about:
      'A web application that provides instant, randomized advice at the click of a button. Utilizing an external API, the website dynamically fetches and displays practical tips and guidance, offering users a quick and accessible source of helpful insights.',
    tools: ['React.js', 'Typescript'],
    link: 'https://kristinagru.github.io/advise-generator/',
    github: 'https://github.com/KristinaGru/advise-generator',
    last: true
  }
];
