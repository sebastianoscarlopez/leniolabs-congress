import React from 'react';
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import MembersContext from './MembersContext';
import * as Render from './MemberItemRenders';


/**
 * Card with member information
 */
export default (props) => {
    // Member's fields that have not generic render
    const propertiesDisplay =
        ['party', 'gender',
            'birth',
            'twitter_account', 'youtube_account',
            { key: 'Web', render: Render.ampleGenericRender },
            { key: 'Facebook', render: Render.ampleGenericRender }
        ];

    const [selected, setSelected] = React.useContext(MembersContext);
    const handleSelect = _ => {
        window.localStorage.setItem('selected', JSON.stringify(props.data));
        setSelected(props.data);
    };
    return (
        <ListGroup.Item onClick={handleSelect} active={selected.id === props.data.id}>
            <Row>
                <Col md={2} xs={12}>
                    {
                        <Link to={`/details/${props.data.id}`}>
                            <Image roundedCircle height={100} src={`https://twitter.com/${props.data.twitter_account}/profile_image?size=original`} />
                        </Link>
                    }
                </Col>
                <Col xs={10} >
                    <Row>
                        <Col xs={12} style={{ backgroundColor: 'white' }} >
                            <Link to={`/details/${props.data.id}`}>{props.data.full_name}</Link>
                        </Col>
                    </Row>
                    <Row>
                        {
                            propertiesDisplay
                                .map(pd => {
                                    return typeof pd === 'string' // string are generic render
                                        ? Render.genericRender(props.data, pd)
                                        : pd.render(props.data, pd.key)
                                })
                        }
                    </Row>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};
