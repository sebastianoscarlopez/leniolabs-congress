/**
 * Component with filters and members list
 */
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Immutable from 'seamless-immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMembers, fetchMembersSuccess } from '../../core/actions/membersContainerActions'

import { MembersFilter } from '../MembersFilter'
import { Members } from '../Members'

const MembersContainer = (props) => {
    const [filters, setFilters] = React.useState({});
    const [filtersDebounced, setFiltersDebounced] = React.useState({});

    const fetchMembers = props.fetchMembers;
    React.useEffect(() => {
        fetchMembers(filters);
    }, [filters]);

    React.useEffect(() => {
        if(!props.isFetching)
        {
            setFiltersDebounced(filters);
        }
    }, [props.isFetching]);
    


    return(
        <Container>
            <Row>
                <Col md={12} xs={12}><MembersFilter onFilterChange={ setFilters } /></Col>
                {
                  props.errorMessage &&
                  <Col md={6} xs={12}><p>{props.errorMessage}</p></Col>
                }
                {
                  !props.errorMessage &&
                  <Col md={6} xs={12}><Members data={ props.members } filters={ filtersDebounced } isFetching={ props.isFetching } /></Col>
                }
            </Row>
        </Container>
    );
}

function mapStateToProps(state){
    const newState = Immutable.from(
      {
        errorMessage: null
      })
      .merge((state && state.membersReducers) || {} );
    return newState;
  }
    
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      fetchMembers
    }, dispatch);
  }
    
  export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);