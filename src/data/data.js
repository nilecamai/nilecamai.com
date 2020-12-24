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
import opencv from '../assets/icons/opencv.svg';
import google_cloud from '../assets/icons/google_cloud.svg';

// Projects page images
import pokerChipsSimulatorSq from '../assets/images/pokerChipsSimulatorSq.png';
import faceMeSq from '../assets/images/faceMeSq.png';
import telloMapper from '../assets/images/telloMapper.gif';
import sarGui from '../assets/images/sarGui.gif';

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
            imgSrc: pokerChipsSimulatorSq,
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
            description: [
                {
                    line: 'Ever wanted to play a thrilling game of Texas Hold\'em, but forgot to bring the chips? This .io web application solves that problem by using virtual currency with familiar betting rules to play together.',
                },
                {
                    line: 'The host can create a lobby with 3-5 players and have their friends join with a four-digit room code. The game will then handle player balances, the pot, the ante, and the turns according to Texas Hold\'em rules.',
                },
                {
                    line: 'This project was a collaboration with classmates Kelvin Ng and Winston Bullen for our CSE143 final project.',
                },
            ]
        },
        {
            title: 'FaceMe',
            imgSrc: faceMeSq,
            links: [
                {
                    url: 'https://github.com/nilecamai/FaceMe',
                    label: 'GitHub',
                    src: github,
                },
                {
                    url: 'https://devpost.com/software/facecentric',
                    label: 'Devpost',
                    src: devpost,
                },
            ],
            icons: [
                {
                    label: 'Python',
                    src: python,
                },
                {
                    label: 'OpenCV',
                    src: opencv,
                },
                {
                    label: 'Google Cloud API',
                    src: google_cloud,
                },
            ],
            buttonLink: null,
            buttonLabel: null,
            description: [
                {
                    line: 'With the lockdown and stay-at-home orders, connecting with people is more important than ever. However, some of our loved ones aren\'t the most tech-savvy with video conferencing apps.',
                },
                {
                    line: 'FaceMe is a tool that aims to make video calls more accessible. With the help of the OpenCV and Google Cloud libraries, the application uses audio signals, visual cues, and speech commands as accessibility features.'
                },
                {
                    line: 'This project was a collaboration with teammates Kelvin Ng, Devesh Sarda, Tenzin Low, and Nikola Bojanic as a submission to DubHacks 2020. It won Best Use of Google Cloud and Best First-Time Hack.'
                }
            ]
        },
        {
            title: 'TelloMapper',
            imgSrc: telloMapper,
            links: [
                {
                    url: 'https://github.com/nilecamai/TelloMapper',
                    label: 'GitHub',
                    src: github,
                },
            ],
            icons: [
                {
                    label: 'Android',
                    src: android,
                },
                {
                    label: 'Java',
                    src: java,
                },
                {
                    label: 'Go',
                    src: go,
                },
            ],
            buttonLink: null,
            buttonLabel: null,
            description: [
                {
                    line: 'TelloMapper is an Android application that connects to a DJI Tello drone to control its movement.',
                },
                {
                    line: 'Users create paths by placing points on a coordinate plane. These coordinate sets are then saved as \"paths\" that can be flown on a DJI Tello connected via Wi-Fi.',
                },
                {
                    line: 'The app code is written in Java, and the flight controles are written in Go using Gobot drivers.'
                }
            ]
        },
        {
            title: 'Synthetic Aperture Radar (SAR) GUI',
            imgSrc: sarGui,
            links: [
                {
                    url: 'https://github.com/DariusBxsci/UAV-SAR-Radar-beta/tree/feat/GUI',
                    label: 'GitHub',
                    src: github,
                },
            ],
            icons: [
                {
                    label: 'Python',
                    src: python,
                },
            ],
            buttonLink: null,
            buttonLabel: null,
            description: [
                {
                    line: 'This graphical user interface was developed for the sole use alongside a synthetic-aperture radar (SAR) project at MIT during Beaver Works Summer Institute 2018.',
                },
                {
                    line: 'The Python TKinter desktop application is able to connect to a PulsON 440 Ranging and Radar Module to start and stop radar collection. It can also generate and visualize heatmaps using NumPy and Matplotlib.'
                }
            ]
        },
    ]
}

export default data;