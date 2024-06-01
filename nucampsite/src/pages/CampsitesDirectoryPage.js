import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/CampsitesSlice';

const CampsitesDirectoryPage = () => {
  // State to store the ID of the selected campsite
  const [campsiteId, setCampsiteId] = useState(0);

  // Get the actual campsite object based on the ID
  const selectedCampsite = selectCampsiteById(campsiteId);
 
  return (
    <Container>
      {/* Removed the commented-out button section */}
      <Row>
        <Col sm='5' md='7'>
          <CampsitesList setCampsiteId={setCampsiteId} /> {/* Pass setCampsiteId prop */}
        </Col>
        <Col sm='7' md='5'>
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage;
