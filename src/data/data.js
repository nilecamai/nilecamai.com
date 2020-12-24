// Home page slides
import bgImg1 from '../assets/images/cityWaterfront.jpg';
import bgImg2 from '../assets/images/robo1.JPG';
import bgImg3 from '../assets/images/bwPortrait.jpg';

// About page picture
import portrait from '../assets/images/portrait.jpg';

// Home page carousel
import pokerChipsSimulatorCard from '../assets/images/pokerChipsSimulatorCard.png';
import telloMapperCard from '../assets/images/telloMapperCard.png';
import faceMeCard from '../assets/images/faceMeCard.png';

// Projects page icons
import github from '../assets/icons/github.svg';
import devpost from '../assets/icons/devpost.svg';
import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import python from '../assets/icons/python.svg';
import go from '../assets/icons/go.svg';
import android from '../assets/icons/android.svg';
import socket_io from '../assets/icons/socket_io.svg';
import google_cloud from '../assets/icons/google_cloud.svg';

const data = {

    "fadeIn": {
        opacity: 1,
        from: { opacity: 0 },
    },

    "homepage": 'nilec',

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
            firstButtonIconSrc: '',
            firstButtonLink: '/about',
            secondButtonLabel: 'View CV',
            secondButtonIconSrc: '',
            secondButtonLink: '',
            bgImgSrc: bgImg1
        },
        {
            id: 1,
            title: 'I make stuff',
            bodyText: 'that is awesome. check out my work:',
            firstButtonLabel: 'Projects',
            firstButtonIconSrc: '',
            firstButtonLink: '/projects',
            bgImgSrc: bgImg2
        },
        {
            id: 2,
            title: 'Let\'s chat!',
            bodyText: '',
            firstButtonLabel: 'Contact me',
            firstButtonIconSrc: '',
            firstButtonLink: '/contact',
            bgImgSrc: bgImg3
        }
    ],

    // cards on the front page
    "cards": [
        {
            id: 0,
            title: 'Poker Chips Simulator',
            subTitle: 'Have a deck but forgot the poker chips? Play on with virtual currency!',
            imgSrc: pokerChipsSimulatorCard,
            link: 'https://devpost.com/software/poker-chip-simulator',
            selected: false
        },
        {
            id: 1,
            title: 'FaceMe',
            subTitle: 'Make connecting with loved ones easier with more accessible video calls.',
            imgSrc: faceMeCard,
            link: 'https://devpost.com/software/facecentric/',
            selected: false
        },
        {
            id: 2,
            title: 'Tello Mapper',
            subTitle: 'Map paths and autonomously fly your DJI Tello with this Android application.',
            imgSrc: telloMapperCard,
            link: 'https://google.com',
            selected: false
        }
    ],

    "projects" : [
        {
            title: 'Poker Chips Simulator',
            imgSrc: '',
            links: [
                {
                    url: 'https://github.com/9KelvinN/Winston-Nile-Kelvin-CSE143-Final',
                    label: 'GitHub',
                    src: github,
                },
                {
                    url: 'https://devpost.com/software/poker-chip-simulator',
                    label: 'Devpost',
                    src: devpost,
                },
            ],
            icons: [
                {
                    label: 'JavaScript',
                    src: javascript,
                },
                {
                    label: 'Socket.IO',
                    src: socket_io,
                },
            ],
            buttonLink: 'http://34.221.107.58:3000/',
            buttonLabel: 'Try it out!',
            description: 'description',
        },
    ]
}

export default data;