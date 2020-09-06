import React from 'react';

import CardInfo from './CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block n-card" onMouseEnter={(e) => props.hover(props.item)} onMouseLeave={(e) => props.hover(null)}>
            <div className="container">
                <img className="n-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {/* { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} selected={props.item.selected}/> } */}
                <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} selected={props.item.selected}/>
            </div>
        </div>
    );

}

export default Card;