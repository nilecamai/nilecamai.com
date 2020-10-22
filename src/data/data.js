import inaba from '../assets/images/inaba.gif';
import mai from '../assets/images/mai.gif';
import nibutani from '../assets/images/nibutani.gif';
import portrait from '../assets/images/portrait.jpg';

const data = {

    "pages": [
        {
            nav: 'Home',
            path: '/',
            title: 'Hi there.',
            subTitle: 'I\'m Nile',
            bodyText: 'uw student lol',
        },
        {
            nav: 'About',
            path: '/about',
            title: 'About Me',
            imgSrc: portrait
        },
        {
            nav: 'Projects',
            path: '/projects',
            title: 'Projects'
        },
        {
            nav: 'Contact',
            path: '/contact',
            title: 'hmu'
        }
    ],

    // slides on the front page
    "slides": [
        {
            id: 0,
            title: 'I am Nile Camai',
            bodyText: 'a Computer Science student at the University of Washington',
            firstButtonLabel: 'About me',
            firstButtonIconSrc: 'inaba',
            firstButtonLink: '/about',
            secondButtonLabel: 'View CV',
            secondButtonIconSrc: '',
            secondButtonLink: '',
            bgImgSrc: ''
        },
        {
            id: 1,
            title: 'I make stuff',
            bodyText: 'that is awesome. check out my work:',
            firstButtonLabel: 'Projects',
            firstButtonIconSrc: '',
            firstButtonLink: '',
            bgImgSrc: ''
        },
        {
            id: 2,
            title: 'Let\'s chat!',
            bodyText: '',
            firstButtonLabel: 'Contact me',
            firstButtonIconSrc: '',
            firstButtonLink: '',
            bgImgSrc: ''
        }
    ],

    // cards on the front page
    "cards": [
        {
            id: 0,
            title: 'Himeko Inaba',
            subTitle: 'Kokoro Connect',
            imgSrc: inaba,
            link: 'https://google.com',
            selected: false
        },
        {
            id: 1,
            title: 'Sakurajima Mai',
            subTitle: 'Rascal Does Not Dream of Bunny Girl Senpai',
            imgSrc: mai,
            link: 'https://google.com',
            selected: false
        },
        {
            id: 2,
            title: 'Nibutani Shinka',
            subTitle: 'Love, Chunibyo, and Other Delusions!',
            imgSrc: nibutani,
            link: 'https://google.com',
            selected: false
        }
    ],

    "projects" : [
        {
            title: 'hel3o'
        }
    ]
}

export default data;