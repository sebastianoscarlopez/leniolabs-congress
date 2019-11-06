import Container from 'react-bootstrap/Container';
import Immutable from 'seamless-immutable';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
 
import React from 'react';
export const MembersFilter = (props) => {
    const [isAdvanced, setIsAdvanced] = React.useState(true);
    const [party, setParty] = React.useState('');
    const [congress, setCongress] = React.useState(116);
    const [chamber, setChamber] = React.useState('house');
    const [inOffice, setInOffice] = React.useState(false);
    const [name, setName] = React.useState('');

    // if house chamber was selected, min value is 102 
    React.useEffect(() =>{
        if(congress < 102 && chamber === 'house'){
            setCongress(102);
        }
    }, [chamber, congress]);
    
    const onFilterChange = props.onFilterChange;
    React.useEffect(() =>{
        if(onFilterChange !== undefined)
        {
            onFilterChange({
                party, congress, chamber, inOffice, name
            });
        }
    }, [onFilterChange, party, congress, chamber, inOffice, name]);

    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <ToggleButtonGroup type="checkbox" value={isAdvanced} onChange={ () => setIsAdvanced(!isAdvanced) } >
                        <ToggleButton value={true}>Filter mode { isAdvanced ? 'Advanced' : 'Basic'} </ToggleButton>
                    </ToggleButtonGroup >
                </Col>
            </Row>
            <br />
            <Form.Group as={Row}  controlId="formPlaintextPassword">
                <Form.Label column md={1}>Congress:</Form.Label>
                <Col md={2}>
                    <Form.Control type='number' min={chamber === 'house' ? 102 : 80} max={116} value={congress} onChange={e => setCongress(e.target.value) }/>
                </Col>
                <Form.Label column md={1}>Search:</Form.Label>
                <Col md={2}>
                    <Form.Control as="select" value={chamber} onChange={ e => setChamber(e.target.value) }>
                        <option value='senate' >Senate</option>
                        <option value='house' >House</option>
                    </Form.Control>
                </Col>
                {
                    !isAdvanced &&
                    <>
                        <Form.Label column md={1}>Search:</Form.Label>
                        <Col md={2}>
                            <Form.Control />
                        </Col>
                    </>
                }
                {
                    isAdvanced && 
                    <>
                    <Form.Label column md={1}>Name:</Form.Label>
                    <Col md={2}>
                        <Form.Control value={name} onChange={ e => setName(e.target.value) }/>
                    </Col>
                    <Form.Label column md={1}>Party:</Form.Label>
                    <Col md={2}>
                        <Form.Control as="select" value={party} onChange={ e => setParty(e.target.value) }>
                            <option value=''>Any</option>
                            <option value='R'>Republican</option>
                            <option value='D'>Democratic</option>
                            <option value='I'>Independents</option>
                        </Form.Control>
                    </Col>
                    <Col md={3}>
                        <Form.Check type='checkbox' checked={inOffice} label='In Office' onChange={ e => setInOffice(e.target.checked) } />
                    </Col>
                    </>
                }
            </Form.Group>
        </Container>
    );
}