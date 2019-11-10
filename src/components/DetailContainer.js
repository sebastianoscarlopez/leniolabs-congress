import React from 'react';
import { useParams, useHistory } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import MembersContext from './MembersContext';
import * as Render from './MemberItemRenders';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
/**
 * Show detailed information about a member
 */
const MembersContainer = (props) => {
    const history = useHistory()
    const member = JSON.parse(window.localStorage.getItem('selected'));
    const { idMember } = useParams();
    // Member's fields that have not generic render
    const propertiesDisplay =
        ['party', 'gender',
            'birth',
            'title', 'seniority',
            'twitter_account', 'youtube_account',
            { key: 'Web', render: Render.ampleGenericRender },
            { key: 'Facebook', render: Render.ampleGenericRender },
            'office', 'phone', 'fax', 'senate_class', 'next_election', 'total_votes', 'missed_votes', 'total_present', 'last_update'
        ];
    return (
        <>
            <Header>
                <Row>
                    <Col xs={12}>
                        <button type="button" onClick={() => history.goBack()}>{'<'}</button>
                    </Col>
                </Row>
            </Header>
            {
                props.isFetching &&
                <Loading />
            }
            {
                !props.isFetching &&
                <Container>
                    <Row>
                        <Col xs={12}>
                        </Col>
                        <Col md={2} xs={12}>
                            <Image roundedCircle height={100} src={`https://twitter.com/${member.twitter_account}/profile_image?size=original`} />
                        </Col>
                        <Col xs={10} >
                            <Row>
                                <Col xs={12}>
                                    {member.full_name}
                                </Col>
                            </Row>
                            <Row>
                                {
                                    propertiesDisplay
                                        .map(pd => {
                                            return typeof pd === 'string' // string are generic render
                                                ? Render.genericRender(member, pd)
                                                : pd.render(member, pd.key)
                                        })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            }
            <Footer />
        </>
    )
}

export default MembersContainer;