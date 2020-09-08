import React from 'react';

import Card from './Card';

import { Container, Row } from 'react-bootstrap';
import data from '../data/data';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            cards: data.cards
        }
    }

    handleCardHover = (id, card) => {
        let items = [...this.state.cards];

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
                <Row className="justify-content-around n-carousel">
                    {this.makeItems(this.state.cards)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;