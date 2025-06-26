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

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: '/icons/png/interface/home.png',
  },
  {
    id: 'about',
    name: 'AboutMe',
    icon: '/icons/png/interface/user.png',
  },
  {
    id: 'experience',
    name: 'MyExperience',
    icon:  '/icons/png/interface/experience.png',
  },
  {
    id: 'skills',
    name: 'MySkills',
    icon: '/icons/png/interface/skills-list.png',
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
]

