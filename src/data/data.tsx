import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Francisco Pino Resume',
  description: "Website Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Francisco Pino.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> with a strong focus on iOS development, currently seeking new opportunities in this field.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
      I have extensive experience as a Mobile Developer, specializing in native iOS applications using Xcode and Swift. I also have proficiency in Android development with Android Studio and Kotlin, as well as cross-platform development using React Native, Xamarin, Unity, and Flutter.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
      My background includes solid skills in C#, .NET, Unity engine, web development, and backend server development, which complement my iOS expertise.
      </p>
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-lg'>
      Additionally, I have worked with other programming languages such as Python, C++, and SQL, and have experience with tools like MongoDB, Firebase, and REST APIs.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Currently, I serve as a Lead Engineer and Project Manager at <strong className="text-stone-100">Forty-Seven Apps LLC</strong>, where I lead the development of various mobile applications and websites.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` Results-driven senior software engineer with over 4 years of experience specializing in mobile application development using Flutter, 
  Java, and Swift. Proficient in Unity, Firebase, and AWS, with a track record of successfully launching apps like Daly App and Raaise 
  App. Led backend development projects, optimizing performance and enhancing user experiences for high-traffic applications.`,
  aboutItems: [
    {label: 'Location', text: 'Katy, TX', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Venezuela', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Games, Mobile Apps, Websites', Icon: SparklesIcon},
    {label: 'Study', text: 'Full Sail University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'IOS Developer',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Unity',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Unity',
        level: 10,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Web',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C#',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'API',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MataNoobs',
    description: 'Online Multiplayer Shooting Game.',
    url: 'https://play.google.com/store/apps/details?id=com.nesti.matanoobs&hl=en_US&gl=US',
    image: porfolioImage1,
  },
  {
    title: 'Dalydoc',
    description: 'DalyDoc is a free appointment scheduling app for managing and growing businesses from the globe along with the daily planner for the habbits, reminders etc as per the user need.',
    url: 'https://apps.apple.com/us/app/dalydoc/id1661801278',
    image: porfolioImage2,
  },
  {
    title: 'Raaise App',
    description: 'Raaise App is a social media app, where users can create and share fun videos with there friends and family.',
    url: 'https://apps.apple.com/eg/app/raaise-app/id1667121707',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'march 2021',
    location: 'Orlando,FL',
    title: 'Bachelors in Science of Computer Science',
    content: <p>Wonderful experience.</p>,
  },{
    date: 'june 2022',
    location: 'Orlando,FL',
    title: 'Master in Science of Game Development',
    content: <p>Nice experience to learn about Game development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2022 - March 2023',
    location: 'Little Orbit LLC',
    title: 'Senior BackEnd Engineer',
    content: (
      <p>
        · Contributed to custom game design and fix previous bugs from previous work.
· Implemented SSO Login with integration of Authentication system through server side using Custom API from different platforms such as Google, Facebook and Twitch
· Implemented System of Twitch Drops which allow user to claim rewards after watching stream through the platform twitch and has an authentication, until finally could earn rewards into their account 
· Well developed game using C# programming language and using tools and libraries for the game
· Implemented the system of Daily Login Rewards which allows users to gain rewards through monthly events 
- Implemented Database operations using MongoDB to get and add information into tables
- Using Unit test to test previous and new codes and solve issues and bugs during the process

      </p>
    ),
  },
  {
    date: 'August 2007 - Present',
    location: 'Forty-Seven Apps LLC',
    title: 'Lead Software Engineer (part-time)',
    content: (
      <p>
· Contributed into different projects planification, structure, and design for Mobile Applications.
· Revision of Code added planification to be able to make multiple apps go live in different environments such as Play Store and App Store
· Using Technologies to be able to successfully build mobile applications using SWIFT and JAVA for native applications and React-Native for cross platform
·Successfully added an admin panel for each platform and be able to manipulate in app data through different database such as AWS and MongoDB  
      </p>
    ),
  },
  {
    date: 'January 2022 - July 2022',
    location: 'The Nemots LLC',
    title: '.NET Developer / Mobile Developer',
    content: (
      <p>
· Contributed to custom game design and fix previous bugs from previous work.
· Working as DevOps and connecting through database and blockchain structures
· Worked with Smart NFT to develop a Play to Earn game
· Well developed game using C# programming language and using tools and libraries for the game
· Using Firebase as connection for database, MetaMask, AUTH system for the game
- using SWIFT as programming language could be able to successfully convert this application in a mobile platform
      </p>
    ),
  },
  {
    date: 'November 2021 - January 2022',
    location: 'Clinic of Hope LLC',
    title: 'Game Developer',
    content: (
      <p>
· Contributed to custom game design and fix previous bugs from previous work.
· Develop Good reusable code efficient with the latest technology.
· Created new algorithms to be able to meet the requirements of this game for children 
· Well developed game using C# programming language and using tools and libraries for the game
      </p>
    ),
  },
  {
    date: 'September 2017 - may 2021',
    location: 'Pollos Cacique (Venezuela)',
    title: 'Software Engineer',
    content: (
      <p>
·   Contributed to internal development and testing standards, employing C# to improve framework efficiencies and policy standardization.
·   Improved and corrected existing software and system applications.
·   Integrated object-oriented design and development techniques into projects to support usability goals.
·   Coordinated system installations, testing, and code corrections.
·   Designed front-end and back-end solutions for test-driven development.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'franciscopino1997@gmail.com',
      href: 'mailto:franciscopino1997@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Katy,TX , USA',
      href: 'https://www.google.com/maps/place/Katy,+TX/@29.7924376,-95.9278115,12z/data=!3m1!4b1!4m6!3m5!1s0x8640dff9ae358adf:0x17966e0d7c2b1125!8m2!3d29.7857765!4d-95.8245093!16zL20vMDEzbW1y',
    },
    {
      type: ContactType.Instagram,
      text: '@itsnesti_',
      href: 'https://www.instagram.com/itsnesti_/',
    },
    {
      type: ContactType.Github,
      text: 'fpbolivar',
      href: 'https://github.com/fpbolivar',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/fpbolivar'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/10707121/francisco-pino'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/francisco-pino-4b84a1168/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/itsnesti_/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/itsnesti_'},
];
