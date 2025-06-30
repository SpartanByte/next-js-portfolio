// main TSX file
 
// Hero imports
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'
export const copyRightIcon = <CopyrightLineIcon />

// Import icons for Navbar (to be removed,, using other icons)
import Home5LineIcon from 'remixicon-react/Home5LineIcon' // For home
import UserLineIcon from 'remixicon-react/UserLineIcon' // For about
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon' // For experience
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon' // For skills
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon' // For projects

import Toggle from '../components/Toggle'

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />

// Navigation Icons
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />


/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: '/icons/png/interface/home.png',
  },
    {
    id: 'skills',
    name: 'Skills',
    icon: '/icons/png/interface/skills-list.png',
  },
  {
    id: 'experience',
    name: 'Experience',
    icon:  '/icons/png/interface/experience.png',
  },

{
    id: 'about',
    name: 'About',
    icon: '/icons/png/interface/user.png',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: '/icons/png/interface/projects.png',
  },
]

export const frontendSkills = [
  {
    id: 'html5',
    name: 'HTML5',
    icon: '/icons/png/technologies/html5.png',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: '/icons/png/technologies/css.png',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon:  '/icons/png/technologies/javascript.png',
  },
  {
    id: 'reactjs',
    name: 'React.js',
    icon: '/icons/png/technologies/react.png',
  },
  {
    id: 'typescript',
    name: 'Typescript',
    icon: '/icons/png/technologies/typescript.png',
  },
    {
    id: 'wordpress',
    name: 'WordPress',
    icon: '/icons/png/technologies/wordpress.png',
  },
]

export const backendSkills = [
  {
    id: 'php',
    name: 'PHP',
    icon: '/icons/png/technologies/php.png',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    icon: '/icons/png/technologies/laravel.png',
  },
  {
    id: 'rubyonrails',
    name: 'Ruby on Rails',
    icon:  '/icons/png/technologies/ruby.png',
  },
{
    id: 'mysql',
    name: 'MySQL',
    icon:  '/icons/png/technologies/database.png',
  },
]

export const experienceData = [
  {
    id: 'one',
    year: 1,
    title: 'Software Engineer',
    company: 'LuminFire',
    location: 'Minneapolis, Minnesota',
    dates_start_end: '09/2021 - 09/2024',
    description: 'Developed new WordPress sites, new functionality, break/fix support for multiple clients in the WordPress CMS including custom plugins, custom functionality for third party plugins and performing regular maintenance and security checks. Enhanced functionality of two Laravel applications also using Vue.js, Laravel Nova, and Tailwind CSS. Performed DevOps duties for site migrations, database and server setup, DNS configuration and SSL certificates.',
  },
  {
    id: 'two',
    year: 2,
    title: 'Web Developer (Contract)',
    company: 'Winnebago',
    location: 'Minneapolis, Minnesota',
    dates_start_end: '03/2021 - 09/2021',
    description: 'Leveraged C# and Razor template syntax for new/enhanced backend solutions in DynamicWeb and .NET as well as custom CSS and ES6 JavaScript. Developed configuration sites using React.js and Next.js. Attended regular team meetings, participated in code reviews, IIS environment setup, and occasionally trained users on functionality.',
  },
  {
    id: 'three',
    year: 3,
    title: 'Software Engineer',
    company: 'Codelation',
    location: 'Fargo, North Dakota',
    dates_start_end: '07/2019 - 02/2021',
    description: 'Designed, developed, and enhanced applications in Ruby on Rails, React.js, Bootstrap, and Postgres. Integrated APIs such as Stripe and Pinterest into new MVC applications, implemented Spec and Capybara for testing frameworks, deployed applications to Heroku environments, kept track of issues and code reviews through Jira, and participated in team meetings and code reviews.',
  },
{
    id: 'four',
    year: 4,
    title: 'Software Engineer I',
    company: 'New Vision',
    location: 'Moorhead, Minnesota',
    dates_start_end: '05/2018 - 07/2019',
    description: 'Developed and enhanced features to deliver Internet of Things (IoT) solutions for various companies within the Thingworx platform. Made regular updates and implemented a test framework into a Java application reporting software with the XSSFWorkbook package. Created technical documentation including architecture and workflow with Microsoft Visio and deployed code to Microsoft Team Foundation Server (TFS) along with code reviews. Developed an augmented reality app with Vuforia for product configuration previews. ',
  },
]
