/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import src from "./attribution/logo-orizontal-anm.svg";
import HTML from '../../components/I18N/HTML';
import {createPlugin} from "../../utils/PluginsUtils";

/**
 * Footer plugin, section of the homepage.
 * description of footer can be overridden by
 * `home.footerDescription` message id in the translations
 * @prop {object} cfg.logo logo data to change image and href, set to null to hide the logo
 * @prop {string} cfg.logo.src source of the logo
 * @prop {number|string} cfg.logo.width width of the logo image
 * @prop {number|string} cfg.logo.height height of the logo image
 * @prop {string} cfg.logo.title title of the logo image
 * @prop {string} cfg.logo.alt alternative text of the logo image
 * @memberof plugins
 * @class
 * @name Footer
 */

class Footer extends React.Component {

    static propTypes = {
        logo: PropTypes.object
    };

    static defaultProps = {
        logo: {
            src,
            width: 140,
            height: 'auto',
            href: 'https://www.meteoromania.ro',
            title: 'Meteo România',
            alt: 'Meteo România'
        }
    };

    render() {
        const { href, ...logo } = this.props.logo || {};
        const image = (
            <img
                src={logo.src}
                width={logo.width || 'auto'}
                height={logo.height || 'auto'}
                title={logo.title || ''}
                alt={logo.alt || ''} />
        );
        return (
            <Grid>
                {logo && logo.src && <Row>
                    <Col xs={12} className="text-center">
                        <div>
                            {href ? <a target="_blank" href={href}>
                                {image}
                            </a> : image}
                        </div>
                    </Col>
                </Row>}
                <Row>
                    <Col xs={12} className="text-center">
                        <HTML msgId="home.footerDescription"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const FooterPlugin = createPlugin('Footer', {
    component: Footer
});

export default FooterPlugin;
