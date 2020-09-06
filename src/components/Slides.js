import React from 'react';

class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [
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
            ]
        }
    }
}