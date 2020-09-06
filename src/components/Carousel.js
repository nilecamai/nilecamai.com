import React from 'react';

import Card from './Card';

import inaba from '../assets/images/inaba.jpg';
import mai from '../assets/images/mai.jpg';
import nibutani from '../assets/images/nibutani.gif';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'title 0',
                    subTitle: 'subtitle0',
                    imgSrc: inaba,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'title 1',
                    subTitle: 'subtitle1',
                    imgSrc: mai,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'title 2',
                    subTitle: 'subtitle2',
                    imgSrc: nibutani,
                    link: 'https://google.com',
                    selected: false
                }
            ]
        }
    }

    handleCardHover = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        // toggle selected argument
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        });
    }

    // takes the items specified in props and adds them to the page
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} hover={(e => this.handleCardHover(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;