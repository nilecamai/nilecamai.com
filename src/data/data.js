import React from 'react';

// Home page slides
import bgImg1 from '../assets/images/cityWaterfront.jpg';
import bgImg2 from '../assets/images/setup.jpg';
import bgImg3 from '../assets/images/bwPortrait.jpg';
import resume from '../assets/documents/resume.pdf'

// About page picture
import portrait from '../assets/images/portrait.jpg';

// Contact page picture
import cityCorner from '../assets/images/cityCorner.jpg'

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

    "title": 'nilecamai.me',

    "fadeIn": {
        opacity: 1,
        from: { opacity: 0 },
    },

    "pages": [
        {
            nav: 'Home',
            path: '/',
        },
        {
            nav: 'Projects',
            path: '/projects',
            hero: {
                title: 'Projects'
            }
        },
        {
            nav: 'About',
            path: '/about',
            hero: {
                title: 'About Me',
                imgSrc: portrait
            }
        },
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
            secondButtonLabel: 'Resume',
            secondButtonIconSrc: '',
            secondButtonLink: resume,
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
            title: 'Let\'s connect!',
            bodyText: '',
            firstButtonLabel: 'Contact links',
            firstButtonIconSrc: '',
            firstButtonLink: 'END',
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
            link: 'https://play.google.com/store/apps/details?id=riverflow.tellomapper',
            selected: false
        }
    ],

    "projects": [
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
            buttonLink: 'http://54.218.193.60:3000/',
            buttonLabel: '', // TODO: update link and label when online: 'Try it out!'
            description: (
                <div>
                    <p>Ever wanted to play a thrilling game of Texas Hold'em, but forgot to bring the chips? This .io web application solves that problem by using virtual currency with familiar betting rules to play together.</p>
                    <p>The host can create a lobby with 3-5 players and have their friends join with a four-digit room code. The game will then handle player balances, the pot, the ante, and the turns according to Texas Hold'em rules.</p>
                    <p>This project was a collaboration with classmates Kelvin Ng and Winston Bullen for our CSE143 final project.</p>
                </div>
            )
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
            description: (
                <div>
                    <p>With the lockdown and stay-at-home orders, connecting with people is more important than ever. However, some of our loved ones aren't the most tech-savvy with video conferencing apps.</p>
                    <p>FaceMe is a tool that aims to make video calls more accessible. With the help of the OpenCV and Google Cloud libraries, the application uses audio signals, visual cues, and speech commands as accessibility features.</p>
                    <p>This project was a collaboration with teammates Kelvin Ng, Devesh Sarda, Tenzin Low, and Nikola Bojanic as a submission to DubHacks 2020. It won Best Use of Google Cloud and Best First-Time Hack.</p>
                </div>
            )
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
            imageButton: {
                link: 'https://play.google.com/store/apps/details?id=riverflow.tellomapper&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                alt: 'Get it on Google Play',
                imgSrc: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
            },
            description: (
                <div>
                    <p>TelloMapper is an Android application that connects to a DJI Tello drone to control its movement.</p>
                    <p>Users create paths by placing points on a coordinate plane. These coordinate sets are then saved as "paths" that can be flown on a DJI Tello connected via Wi-Fi.</p>
                    <p>The app code is written in Java, and the flight controls are written in Go using Gobot drivers.</p>
                </div>
            )
        },
        {
            title: 'Synthetic Aperture Radar (SAR) GUI',
            imgSrc: sarGui,
            links: [
                {
                    url: 'https://github.com/nilecamai/UAV-SAR/',
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
            description: (
                <div>
                    <p>This graphical user interface was developed for the sole use alongside a synthetic-aperture radar (SAR) project at MIT during Beaver Works Summer Institute 2018.</p>
                    <p>The Python TKinter desktop application is able to connect to a PulsON 440 Ranging and Radar Module to start and stop radar collection. It can also generate and visualize heatmaps using NumPy and Matplotlib.</p>
                </div>
            )
        },
    ],

    "about": (
        <div>
            <p>
                Pleased to meet you! My name is <strong> Nile Camai</strong>, and I'm a Computer 
                Science student at the 
                <strong className="uw-brand-color"> University of Washington</strong>. 
                I was born and raised on the Sammamish plateau and am lucky to 
                call the great <strong style={{color: "green"}}> PNW </strong> my home for these next four years.
            </p>
            <h4>
                Why CS?
            </h4>
            <p>
                I love the possibility of building technologies ranging in 
                impact from the apps on the device in your pocket 
                to the next greatest innovation in exploratory robotics. 
                I hope that the fusion of logical and creative thinking that 
                defines computer science can spark interest in others, too!
            </p>
            <h4>
                What's Nile up to?
            </h4>
            <p>
                I am currently a STEP intern on the Payments team at 
                <strong className="google-blue"> G</strong>
                <strong className="google-red">o</strong>
                <strong className="google-yellow">o</strong>
                <strong className="google-blue">g</strong>
                <strong className="google-green">l</strong>
                <strong className="google-red">e </strong>! #noogler
            </p>
            <p>
                I was previously a CSE 14x teaching assistant at UW and taught 
                <em> CSE 142: Computer Programming I </em> in Winter 2021 and
                <em> CSE 143: Computer Programming II</em> in Spring 2021.
                I also participate in 
                <strong className="aruw-brand-color"> Advanced Robotics at the University
                of Washington </strong>
                (ARUW) as a Controls team member.
            </p>
            <p>
                My latest project, built on Java, React.js, and Spark, is a 
                pathfinding web application named 
                <em> Campus Paths</em>. As the name suggests, the application is
                designed to help UW students find the fastest paths between 
                buildings on campus. In this culminating project for
                <em> CSE 331: Software Design &amp; Implementation, </em>
                I independently implemented several abstract data types and 
                Dijkstra's algorithm underneath a frontend layer of TypeScript React.
            </p>
            <p>
                When I'm not coding, I love to sleep. Other things I enjoy include
                cooking, working out, and playing musical instruments.
                Recently I've gotten into building mechanical keyboards, a hobby
                far too expensive for my own good.
                I like trying new things, seeking discomfort, and making the most out of life.
            </p>
            <p>
                Feel free to connect with me through the links at the bottom of my website.
            </p>
            <p>On to the next!</p>
        </div>
    ),

    "footer": {
        copyright: "© 2021 by Nile Camai",
        socials: [
            "mailto:nile.camai@gmail.com",
            "https://linkedin.com/in/nile-camai",
            "https://github.com/nilecamai",
        ],
        footnote: "Created with matcha 🍵 love ❤ by Nile Camai"
    }
}

export default data;