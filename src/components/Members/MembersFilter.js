import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import RowHeader from '../shared/RowHeader';

import React from 'react';
export default (props) => {
    const [isAdvanced, setIsAdvanced] = React.useState(true);
    const [basicSearch, setBasicSearch] = React.useState('');
    const [party, setParty] = React.useState('');
    const [congress, setCongress] = React.useState(116);
    const [chamber, setChamber] = React.useState('senate');
    const [inOffice, setInOffice] = React.useState(false);
    const [name, setName] = React.useState('');

    const minSenate = 80, minHouse = 102, maxCongress = 116; // mini

    // if house chamber was selected, min value is 102 
    React.useEffect(() => {
        if (congress < minHouse && chamber === 'house') {
            setCongress(minHouse);
        } else if (congress < minSenate) {
            setCongress(minSenate);
        } else if (congress > maxCongress) {
            setCongress(maxCongress);
        }
    }, [chamber, congress]);

    const onFilterChange = props.onFilterChange;
    React.useEffect(() => {
        if (onFilterChange !== undefined) {
            onFilterChange({
                congress, chamber, isAdvanced, basicSearch, party, inOffice, name
            });
        }
    }, [onFilterChange, congress, chamber, isAdvanced, basicSearch, party, inOffice, name]);

    return (
        <>
            <Row>
                <RowHeader>
                    <ToggleButtonGroup type="checkbox" value={isAdvanced} onChange={() => setIsAdvanced(!isAdvanced)} >
                        <ToggleButton value={true}>Filter mode {isAdvanced ? 'Advanced' : 'Basic'} </ToggleButton>
                    </ToggleButtonGroup >
                </RowHeader>
            </Row>
            <br />
            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column md={1}>Congress:</Form.Label>
                <Col md={2}>
                    <Form.Control type='number' min={chamber === 'house' ? minHouse : minSenate} max={maxCongress} value={congress} onChange={e => setCongress(e.target.value)} />
                </Col>
                <Form.Label column md={1}>Chamber:</Form.Label>
                <Col md={2}>
                    <Form.Control as="select" value={chamber} onChange={e => setChamber(e.target.value)}>
                        <option value='senate' >Senate</option>
                        <option value='house' >House</option>
                    </Form.Control>
                </Col>
                {
                    !isAdvanced &&
                    <>
                        <Form.Label column md={1}>Search:</Form.Label>
                        <Col md={2}>
                            <Form.Control value={basicSearch} onChange={e => setBasicSearch(e.target.value)} />
                        </Col>
                    </>
                }
                {
                    isAdvanced &&
                    <>
                        <Form.Label column md={1}>Name:</Form.Label>
                        <Col md={2}>
                            <Form.Control value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                        <Form.Label column md={1}>Party:</Form.Label>
                        <Col md={2}>
                            <Form.Control as="select" value={party} onChange={e => setParty(e.target.value)}>
                                <option value=''>Any</option>
                                <option value='R'>Republican</option>
                                <option value='D'>Democratic</option>
                                <option value='I'>Independents</option>
                            </Form.Control>
                        </Col>
                        <Col md={3}>
                            <Form.Check type='checkbox' checked={inOffice} label='In Office' onChange={e => setInOffice(e.target.checked)} />
                        </Col>
                    </>
                }
            </Form.Group>
        </>
    );
}