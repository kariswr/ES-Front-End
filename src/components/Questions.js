// import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Button, Container } from 'react-bootstrap';
import '../style/home.css'

class Questions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {paragraph: ''};
      this.generateQuestion = this.generateQuestion.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }

  //   componentDidMount(){
  //     var authRole = JSON.parse(localStorage.getItem('currentUser'));
  //     if (authRole){
  //     axios.get(`${APIURL}/client/profil/${this.state.currentUser.id}`)
  //       .then(res => {
  //         this.setState({
  //             placeholderNoTelepon: res.data.no_telepon,
  //             placeholderDomisili: res.data.domisili,
  //         });
  //       })
  //       .catch((errors) => {
  //         console.log(errors);
  //     })
  //   }
  // }
    
    generateQuestion(evt) {
      alert('Plis')
      if(this.state.paragraph === '') {
        alert('Masukan paragraf terlebih dahulu !')
      } else {
        alert('Plis')
      }
    }

    updateInput(evt) {
      this.setState({paragraph: evt.target.value});
    }
    
    render()
    {
      return (
        <Container class="fluid p-10 my-3 border">
          {/* <Row>
            <h2> Sistem Evaluasi Kemampuan Mandiri </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Masukan paragraf :</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={this.updateInput}/>
              </Form.Group>
              <Button variant="dark" onClick={this.generateQuestion}>
                Bangkitkan pertanyaan !
              </Button>
            </Form>
          </Row> */}
      </Container>
      )
    }
  }

export default withRouter(Questions)