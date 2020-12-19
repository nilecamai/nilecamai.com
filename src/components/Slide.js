import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Spring, animated } from 'react-spring/renderprops';

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
        <HashRouter>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{props => 
                <div id={'slide-${id}'} className="n-slide" style={props}>
                    <img className="n-slide-image" src={bgImgSrc} alt={bgImgSrc} />
                    <div className="n-slide-card">
                        <div className="n-slide-info">
                            <p className="n-slide-title">{title}</p>
                            <p className="n-slide-body">{bodyText}</p>
                            <div className="n-slide-card-buttons">
                                { firstButtonLabel != null && 
                                    <Link to={firstButtonLink}>
                                        <Button className="n-slide-card-button" variant="outline-primary">
                                            {firstButtonLabel}
                                        </Button>
                                        <img src={firstButtonIconSrc} />
                                    </Link>
                                }
                                { secondButtonLabel != null && 
                                    <Link to={secondButtonLink}>
                                        <Button variant="outline-secondary">
                                            {secondButtonLabel}
                                        </Button>
                                        <img src={secondButtonIconSrc} />
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            </Spring>
        </HashRouter>
    );

}

Slide.propTypes = {
    props: PropTypes.object.isRequired
}

export default Slide;