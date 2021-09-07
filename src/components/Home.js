import axios from "axios";
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Button, Container, Modal, Spinner} from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar";

const baseUrlQuestionGeneration = "http://localhost:5000/get-question";
const baseUrlExtractAnswerClassification = "http://localhost:5002/extract-answer";
const baseUrlExtractAnswerBertJoint = "http://localhost:5001/extract-answer";

class Home extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        paragraph: '',
        isLoading: '',
        qas: [],
        showModal: false,
        ratio: 85,
        caseSensitive: false,
        tempRatio: 85,
        tempCaseSensitive: false
      };
      this.generateQuestion = this.generateQuestion.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.handleModalOpen = this.handleModalOpen.bind(this);
      this.handleModalClose = this.handleModalClose.bind(this);
      this.handleModalSave = this.handleModalSave.bind(this);
      this.updateRangeInput = this.updateRangeInput.bind(this);
      this.updateCheckbox = this.updateCheckbox.bind(this);
    }
    
    generateQuestion(evt) {
      if(this.state.paragraph === '') {
        alert('Masukan paragraf terlebih dahulu !')
      } else {
        this.setState({isLoading: 'Meng-ekstraksi jawaban..'})
        axios.post(baseUrlExtractAnswerBertJoint, {
          paragraph: this.state.paragraph
        }).then((response) => {
          this.setState({isLoading: ''})
          let answers = response.data.keyphrases
          console.log(answers)
          if (answers.length === 0){
            alert('Tidak ditemukan kandidat jawaban, mohon ganti paragraf')
            this.setState({paragraph: ''})
          } else {
            this.setState({isLoading: 'Membangkitkan pertanyaan..'})
            axios.post(baseUrlQuestionGeneration, {
              paragraph: this.state.paragraph,
              answer: answers})
            .then((response) => {
              let qas = response.data.qas
              this.setState({isLoading: ''})
              console.log(qas)
              if (qas.length === 0) {
                alert('Tidak ada pertanyaan yang dibangkitkan, mohon ganti paragraf')
                this.setState({paragraph: ''})
              } else {
                this.setState({qas: qas})
                this.props.history.push({pathname: '/questions', state: {paragraph: this.state.paragraph, qas: qas, ratio: this.state.ratio, caseSensitive: this.state.caseSensitive}})
              }
            }).catch((errors) => {
              this.setState({isLoading: ''})
              console.log(errors);
            });
          }
        }).catch((errors) => {
          this.setState({isLoading: ''})
          console.log(errors);
        });

        // let qas = [
        //   {answer: ["wawawaw"], question: "woowooowoo"},
        //   {answer: ["wawawaw2"], question: "woowooowoo2"}
        // ]

        // this.props.history.push({pathname: '/questions', state: {paragraph: this.state.paragraph, qas: qas, ratio: this.state.ratio, caseSensitive: this.state.caseSensitive}})
      }
    }

    updateInput(evt) {
      this.setState({paragraph: evt.target.value});
    }

    handleModalOpen() {
      this.setState({showModal: true});
    }

    handleModalClose() {
      this.setState({showModal: false, ratio: this.state.tempRatio, caseSensitive: this.state.tempCaseSensitive});
    }

    handleModalSave() {
      this.setState({showModal: false, tempRatio: this.state.ratio, tempCaseSensitive: this.state.caseSensitive});
    }

    updateRangeInput(e){
      this.setState({ratio: e.target.value});
    }

    updateCheckbox(e){
      if (e.target.checked) {
        this.setState({ratio: 100})
      }
      this.setState({caseSensitive: e.target.checked});
    }
    
    render()
    {
      return (
        <div>
          <CustomNavbar/>
          <Container className="fluid p-10 my-3">
            <Row>
              <h3 className='top-padding'> Sistem Evaluasi Kemampuan Mandiri </h3>
              <div className='bottom-padding'> 
                Sistem evaluasi kemampuan mandiri akan membantumu dalam melakukan evaluasi kemampuanmu terhadap suatu paragraf. Sistem 
                akan membangkitkan pertanyaan secara otomatis dari paragraf masukan yang diberikan. Jawablah pertanyaan yang dibangkitkan 
                sistem dan sistem akan memberikan penilaian serta kunci jawabannya. Kriteria peniaian dapat diatur dalam tombol 
                "Atur penilaian jawaban". 
              </div>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Masukan paragraf :</Form.Label>
                  <Form.Control as="textarea" rows="7" onChange={this.updateInput}/>
                </Form.Group>
                <div className="col-md-12 text-center">
                {this.state.isLoading === '' ?
                  <Button variant="dark" onClick={this.generateQuestion}>
                    Bangkitkan pertanyaan !
                  </Button>
                :
                  <Button variant="dark" onClick={this.generateQuestion} disabled>
                    <Spinner as="span" animation="border"size="sm" role="status" aria-hidden="true"/>
                    { ' ' + this.state.isLoading}
                  </Button>
                }
                </div>
                <div className="col-md-12 text-center">
                  <Button variant="link" onClick={this.handleModalOpen}>Atur penilaian jawaban</Button>
                </div>
                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Pengaturan Penilaian Jawaban</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Label>Rasio kemiripan teks: {this.state.caseSensitive ? '-': this.state.ratio}</Form.Label>
                    <Form.Range min="0" max="100" value={this.state.ratio} onChange={this.updateRangeInput} disabled={this.state.caseSensitive ? 'true': ''}/>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Case-sensitive" checked={this.state.caseSensitive ? 'checked': ''} onChange={this.updateCheckbox}/>
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModalClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={this.handleModalSave}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            </Row>            
        </Container>
        </div>
      )
    }
  }

export default withRouter(Home)