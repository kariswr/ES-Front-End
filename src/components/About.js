import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Button, Container, Modal, Spinner} from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar";

class About extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render()
    {
      return (
        <div>
          <CustomNavbar/>
          <Container className="fluid p-10 my-3">
            <Row>
              <h3 className='top-padding'> Sistem Evaluasi Kemampuan Mandiri </h3>
              <div> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </Row>
        </Container>
        </div>
      )
    }
  }

export default withRouter(About)