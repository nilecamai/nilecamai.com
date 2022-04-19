import React from 'react';

// Home page slides
import bgImg1 from '../assets/images/noogler.jpg';
import bgImg2 from '../assets/images/setup.jpg';
import bgImg3 from '../assets/images/googlesf.jpg';
import resume from '../assets/documents/resume.pdf'

// About page picture
import portrait from '../assets/images/portrait.jpg';

// Home page carousel
import pokerChipsSimulatorCard from '../assets/images/pokerChipsSimulatorCard.png';
import campusPathsCard from '../assets/images/campusPathsCard.png';
import telloMapperCard from '../assets/images/telloMapperCard.png';
import faceMeCard from '../assets/images/faceMeCard.png';

// Projects page icons
import github from '../assets/icons/github.svg';
import devpost from '../assets/icons/devpost.svg';
import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/typescript.svg';
import python from '../assets/icons/python.svg';
import go from '../assets/icons/go.svg';
import android from '../assets/icons/android.svg';
import socket_io from '../assets/icons/socket_io.svg';
import opencv from '../assets/icons/opencv.svg';
import google_cloud from '../assets/icons/google_cloud.svg';
import react from '../assets/icons/react.svg';
import sparkjava from '../assets/icons/sparkjava.png';
import firebase from '../assets/icons/firebase.svg';
import expo from '../assets/icons/expo.svg';

// Projects page images
import campusPathsSq from '../assets/images/campusPathsSq.svg';
import campusPathsHover from '../assets/images/campusPathsHover.gif';
import pokerChipsSimulatorSq from '../assets/images/pokerChipsSimulatorSq.png';
import pokerChipsSimulatorHover from '../assets/images/pokerChipsSimulatorHover.gif';
import faceMeSq from '../assets/images/faceMeSq.png';
import faceMeHover from '../assets/images/faceMeHover.gif';
import boothSq from '../assets/images/boothSq.png';
import telloMapperSq from '../assets/images/telloMapperSq.svg';
import telloMapperHover from '../assets/images/telloMapperHover.gif';
import sarGuiSq from '../assets/images/sarGuiSq.png';
import sarGuiHover from '../assets/images/sarGuiHover.gif';

const data = {

    "resume": resume,

    "title": 'nilecamai.com',

    "fadeIn": {
        opacity: 1,
        from: { opacity: 0 },
    },

    "pages": [
        {
            nav: 'Home',
            path: '/',
            hero: {
                title: 'Nile Camai',
                subTitle: 'CS 💻 @ UW ',
                bodyText: 'Welcome to my website!',
            }
        },
        {
            nav: 'Projects',
            path: '/projects',
            hero: {
                title: 'Projects',
                bodyText: 'Some of my beep boops'
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
            title: 'I make cool things!',
            bodyText: 'Check out my work:',
            firstButtonLabel: 'Projects',
            firstButtonIconSrc: '',
            firstButtonLink: '/projects',
            bgImgSrc: bgImg2
        },
        {
            id: 2,
            title: 'Let\'s connect!',
            bodyText: '',
            firstButtonLabel: 'Contact',
            firstButtonIconSrc: '',
            firstButtonLink: 'END',
            bgImgSrc: bgImg3
        }
    ],

    // cards on the front page
    "cards": [
        {
            id: 0,
            title: 'Campus Paths',
            subTitle: 'Got far-apart classes? Find the most optimal routes around campus!',
            imgSrc: campusPathsCard,
            link: 'https://campuspaths.nilecamai.com',
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
            title: 'Poker Chips Simulator',
            subTitle: 'Have a deck but forgot the poker chips? Play on with virtual currency!',
            imgSrc: pokerChipsSimulatorCard,
            link: 'https://devpost.com/software/poker-chip-simulator',
            selected: false
        },
        {
            id: 3,
            title: 'Tello Mapper',
            subTitle: 'Map paths and fly your DJI Tello autonomously with this Android application.',
            imgSrc: telloMapperCard,
            link: 'https://play.google.com/store/apps/details?id=riverflow.tellomapper',
            selected: false
        },
    ],

    "projects": [
        {
            title: 'Campus Paths',
            imgSrc: campusPathsSq,
            imgHover: campusPathsHover,
            links: [
                // no source code since the course is still being offered!
            ],
            icons: [
                {
                    label: 'Java',
                    src: java,
                },
                {
                    label: 'TypeScript',
                    src: typescript,
                },
                {
                    label: 'React',
                    src: react,
                },
                {
                    label: 'Spark Java',
                    src: sparkjava,
                },
            ],
            buttonLink: 'https://nilecamai-campuspaths.netlify.app',
            buttonLabel: 'Try it out!',
            description: (
                <div>
                    <p>
                        <i>How do I get around UW?</i> This web application will 
                        give you the fastest path from point A to point B in an
                        instant! The app lists landmarks around campus for you
                        to navigate between. You can also display steps
                        one-by-one, use your own location as the origin, and
                        drag the map around to your liking.
                    </p>
                    <p>
                        This project was the culmination of <em>CSE 331: Software 
                        Design and Implementation.</em> It features a Spark Java
                        backend to handle pathfinding requests, Dijkstra's
                        algorithm, and a React TypeScript frontend.
                    </p>
                </div>
            )
        },
        {
            title: 'FaceMe',
            imgSrc: faceMeSq,
            imgHover: faceMeHover,
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
                    <p>
                        With the lockdown and stay-at-home orders, connecting
                        with people is more important than ever. However, this
                        can be somewhat difficult as some of our loved ones
                        maybe aren't the most tech-savvy with video conferencing
                        technology.
                    </p>
                    <p>
                        FaceMe is a tool that aims to make video calls more
                        accessible. With the help of the OpenCV and Google Cloud
                        libraries, the application uses audio signals, visual
                        cues, and speech commands as accessibility features.
                    </p>
                    <p>
                        This project was a collaboration with teammates Kelvin
                        Ng, Devesh Sarda, Tenzin Low, and Nikola Bojanic as a
                        submission to DubHacks 2020. It won Best Use of Google
                        Cloud and Best First-Time Hack.
                    </p>
                </div>
            )
        },
        {
            title: 'Booth',
            imgSrc: boothSq,
            imgHover: boothSq,
            links: [
                {
                    url: 'https://github.com/nilecamai/BoothApp',
                    label: 'GitHub',
                    src: github,
                },
                {
                    url: 'https://devpost.com/software/booth',
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
                    label: 'Expo',
                    src: expo,
                },
                {
                    label: 'Firebase',
                    src: firebase,
                },
                {
                    label: 'Google Cloud API',
                    src: google_cloud,
                },
            ],
            buttonLink: 'https://nilecamai.github.io/Booth-DH21/',
            buttonLabel: 'See the concept',
            description: (
                <div>
                    <p>
                        Pop-up gatherings and events are popular among
                        communities everywhere. Whether it's a farmers market,
                        school fair, or pop-up art gallery, organizers, vendors,
                        and visitors come together to share interests unique to
                        their community.
                    </p>
                    <p>
                        Booth is an app concept that aims to bring new life to
                        pop-up culture with a focus on promoting local events,
                        bringing communities and neighborhoods closer together.
                        Using Expo as our frontend toolchain enabled us to
                        develop natively for Android, iOS, and web simultaneously.
                    </p>
                    <p>
                        This project was a collaboration with teammates Nikola
                        Bojanic, Adithi Raghavan, and Pulkit Singhal as a
                        submission to DubHacks 2021. It won best use of Domain.com.
                    </p>
                </div>
            )
        },
        {
            title: 'Poker Chips Simulator',
            imgSrc: pokerChipsSimulatorSq,
            imgHover: pokerChipsSimulatorHover,
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
                    <p>
                        Ever wanted to play a thrilling game of Texas Hold'em,
                        but forgot to bring the chips? This .io web application
                        solves that problem by using virtual currency in a
                        betting simulator companion app. This way, you can still
                        experience the thrill of real card gameplay without
                        losing the fun of betting!
                    </p>
                    <p>
                        The host can create a lobby with 3-5 players and have
                        their friends join with a four-digit room code. The game
                        will then handle player balances, the pot, the ante, and
                        the turns according to Texas Hold'em rules.
                    </p>
                    <p>
                        This project was a collaboration with classmates Kelvin
                        Ng and Winston Bullen for our <em>CSE 143</em> final 
                        project. It is built entirely in JavaScript with the 
                        help of Socket.IO.
                    </p>
                </div>
            )
        },
        {
            title: 'TelloMapper',
            imgSrc: telloMapperSq,
            imgHover: telloMapperHover,
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
                    <p>
                        TelloMapper is an Android application that connects to a
                        DJI Tello drone to control its movement.
                    </p>
                    <p>
                        Users create paths by placing points on a coordinate
                        plane. These coordinate sets are then serialized into
                        instructions that can be flown on a DJI Tello directly
                        from the app when the device is connected to the drone.
                    </p>
                    <p>
                        Part-passion project and part-school assignment,
                        I built this app as a project for the IB Computer
                        Science SL Internal Assessment.
                    </p>
                </div>
            )
        },
        {
            title: 'Unmanned Aerial System-Synthetic Aperture Radar (UAS-SAR)',
            imgSrc: sarGuiSq,
            imgHover: sarGuiHover,
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
                    <p>
                        This system, which consists of a hexacopter drone, a
                        Raspberry Pi, and a PulsON 440 Ranging and Radar Module
                        is capable of radar imaging using pulse data and back
                        projection image reconstruction.
                    </p>
                    <p>
                        I designed a companion Python application to easily
                        interface with a drone-mounted radar platform to perform
                        radar imaging. It is able to connect to the radar to
                        start and stop pulse data collection. It can also
                        process and visualize radar pulse data as 2-dimensional
                        heatmaps.
                    </p>
                    <p>
                        This app was built to help my UAS-SAR (Unmanned Aerial
                        System-Synthetic Aperture Radar) subteam demonstrate
                        our final project at Beaver Works Summer Institute 2018
                        at MIT.
                    </p>
                </div>
            )
        },
    ],

    "about": (
        <div>
            <p>
                Pleased to meet you! My name is <strong> Nile Camai</strong>, and I'm a Computer 
                Science student and teaching assistant at the 
                <strong className="uw-brand-color"> University of Washington</strong>.
            </p>
            <h4>
                Why CS?
            </h4>
            <p>
                I love the potential that computing has to positively impact
                the lives of others. All it takes is one great idea to make
                waves as a software developer.
                I hope that the fusion of logical and creative thinking that 
                defines computer science can spark interest in others, too!
            </p>
            <h4>
                What has Nile been working on?
            </h4>
            <p>
                During the summer of 2021, I was a STEP intern at 
                <strong className="google-blue"> G</strong>
                <strong className="google-red">o</strong>
                <strong className="google-yellow">o</strong>
                <strong className="google-blue">g</strong>
                <strong className="google-green">l</strong>
                <strong className="google-red">e</strong>!
                As an intern on the Payments team, I helped improve user experience
                by contributing to their internal web framework.
            </p>
            <p>
                I'm looking foward to returning to Google for the summer of
                2022, this time as a SWE intern on the Ads team!
            </p>
            <p>
                As a member of <strong className="aruw-brand-color">
                    Advanced Robotics at the University of Washington</strong>,
                a student organization at my school that
                participates in the DJI RoboMaster University League, I
                develop <a href="https://gitlab.com/aruw/controls/aruw-mcb">
                    main control board code</a> that
                our robots use to compete against
                other teams as well as contribute to
                an open-source library
                named <a href="https://gitlab.com/aruw/controls/taproot">
                    taproot</a> which helps other teams easily
                bootstrap a working robot.
            </p>
            <p>
                I am also currently a teaching assistant at UW 
                for <em> CSE 332: Data Structures and Parallelism. </em>
                I also previously taught 
                <em> CSE 142: Computer Programming I </em> in Winter 2021 and
                <em> CSE 143: Computer Programming II</em> in Spring 2021.
            </p>
            <h4>
                What else is Nile up to?
            </h4>
            <p>
                When I'm not coding, I love to sleep. Other things I enjoy include
                cooking, bouldering, and gaming. Fashion
                and <a href="https://youtube.com/playlist?list=PLWMKCq6oH71zkYsUqXQkUwYZjnzQEZ1ts">
                    mechanical keyboards</a> are
                probably my most expensive hobbies at the moment.
                I like trying new things, seeking discomfort, and making the most out of life.
            </p>
            <p>
                Feel free to connect through the links at the bottom of my website!
            </p>
        </div>
    ),

    "footer": {
        copyright: "© 2022 by Nile Camai",
        socials: [
            "mailto:nilec@cs.washington.edu",
            "https://linkedin.com/in/nile-camai",
            "https://github.com/nilecamai",
            "https://gitlab.com/nilecamai",
        ],
        footnote: "Created with matcha 🍵 love ❤ by Nile Camai"
    }
}

export default data;