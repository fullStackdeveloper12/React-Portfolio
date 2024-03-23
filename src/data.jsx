import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/Project-1.png';
  import Work2 from './assets/Project-2.png';
  import Work3 from './assets/Project-3.png';
  import Work4 from './assets/Project-4.png';
  import Work5 from './assets/Project-5.png';
  import Work6 from './assets/Project-6.png';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Shubham',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Sharma',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '20 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'India',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91 9599012055',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'shubhamsharma1111234@mail.com',
    },
    {
      id: 9,
      title: 'Langages : ',
      description: 'Hindi, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '7+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '7+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '53+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022 - PRESENT',
      title: 'Front-End-Designer <span> Websjyoti </span>',
      desc: 'Sector 14 , M-24, Gurgaon',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022 - PRESENT',
      title: 'Front-End-Designer <span> Websjyoti </span>',
      desc: 'Sector 14 , M-24, Gurgaon',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2022 - PRESENT',
      title: 'Front-End-Designer <span> Websjyoti </span>',
      desc: 'Sector 14 , M-24, Gurgaon',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021',
      title: 'Schooling <span> Dps School </span>',
      desc: '2019-2021',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Master Degree <span> Pursuing </span>',
      desc: '2024-2026',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Bachelor Degree <span> Dpgitm University </span>',
      desc: '2021-2024',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '25',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '89',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'React-js',
      percentage: '66',
    },
  
    {
      id: 5,
      title: 'Node-js',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'Mongo-DB',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Firebase',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'React-Native',
      percentage: '45',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Web-Developments',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Chat-App',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Github',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Node-js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://chat-app-5rdi.onrender.com/',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Github',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html,Css,Js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://65ec2f75ea89e0816b5eb675--astounding-moonbeam-df71c1.netlify.app/',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Web-Development',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Github',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html,Css,js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://65ec2dacc99fd98080566246--astounding-moonbeam-df71c1.netlify.app/',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Web-Development',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Netlify',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html,Css,Js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://65ec2c83c99fd97f785663bf--astounding-moonbeam-df71c1.netlify.app/',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Music Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Netlify',
        },
        {
          title: 'Language : ',
          desc: 'Javascript',
        },
        {
          title: 'Preview : ',
          desc: 'https://65ec2cf30ff9fb77a68f31cc--astounding-moonbeam-df71c1.netlify.app/',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Web-Development',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Weather-App',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'https://weatherapp-node.onrender.com/',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Node-Js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://weatherapp-node.onrender.com/',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  