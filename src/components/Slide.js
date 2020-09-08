import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Slide = ({property}) => {

    const {
        //id,
        title,
        bodyText,
        firstButtonLabel,
        firstButtonIconSrc,
        firstButtonLink,
        secondButtonLabel,
        secondButtonIconSrc,
        secondButtonLink,
        bgImgSrc
    } = property;

    return(
        <div id={'slide-${id}'} className="n-slide">
            <img className="n-slide-image" src={bgImgSrc} alt={bgImgSrc} />
            <div className="n-slide-card">
                <div className="n-slide-info">
                    <p className="n-slide-title">{title}</p>
                    <p className="n-slide-body">{bodyText}</p>
                    <div className="n-slide-card-buttons">
                        { firstButtonLabel != null && <Button variant="outline-primary" href={firstButtonLink}>{firstButtonLabel}</Button> }
                        {' '}
                        { secondButtonLabel != null && <Button variant="outline-secondary" href={secondButtonLink}>{secondButtonLabel} </Button> }
                    </div>
                </div>
            </div>
        </div>
    );

}

Slide.propTypes = {
    props: PropTypes.object.isRequired
}

export default Slide;