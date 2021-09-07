import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Row, Button, Container } from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar";
import './style.css'

const baseUrlAnswerGrading = "http://localhost:5000/get-score";

class Questions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        paragraph: this.props.location.state.paragraph,
        qas: this.props.location.state.qas,
        ratio: this.props.location.state.ratio,
        caseSensitive: this.props.location.state.caseSensitive
      };
      this.generateQuestion = this.gradeAnswer.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.getStringAnswer = this.getStringAnswer.bind(this);
      this.viewHome = this.viewHome.bind(this);
    }

    componentDidMount(){
      let temp_qas = []
      this.state.qas.map((item,index) => {
        let qas = {
          answer: item.answer,
          question: item.question,
          userAnswer: '',
          score: null,
          result: ''
        }
        temp_qas = temp_qas.concat(qas)
      });
      this.setState({qas: temp_qas})
      console.log(temp_qas)
    }

    getStringAnswer(answers) {
      console.log(answers)
      let temp_answer = ''
      answers.map((item, index) => {
        temp_answer += item + ' '
      })
      temp_answer = temp_answer.substring(0,temp_answer.length-1)
      console.log(temp_answer)
      return temp_answer
    }
    
    gradeAnswer(e, index) {
      if(this.state.qas[index].userAnswer === '') {
        alert('Masukan jawaban terlebih dahulu !')
      } else {
        console.log(typeof this.state.ratio)
        axios.post(baseUrlAnswerGrading, {
          input: this.state.qas[index].userAnswer,
          ground_truth: this.getStringAnswer(this.state.qas[index].answer),
          case_sensitive: this.state.caseSensitive,
          threshold: this.state.ratio
        }).then((response) => {
          let new_qas = this.state.qas
          new_qas[index].score = response.data.score
          new_qas[index].result = response.data.result
          this.setState({qas: new_qas});
          console.log(response.data)
        }).catch((errors) => {
          console.log(errors);
        });

        // let new_qas = this.state.qas
        // new_qas[index].score = 84
        // new_qas[index].result = "correct"
        // this.setState({qas: new_qas});

      }
    }

    updateInput(e, index) {
      let new_qas = this.state.qas
      new_qas[index].userAnswer = e.target.value
      this.setState({qas: new_qas});
    }

    viewHome() {
      this.props.history.push({pathname: '/'})
    }
    
    render()
    {
      return (
        <div>
          <CustomNavbar/>
          <Container className="fluid p-30 my-3">
            <Row>
              <h3 className='top-padding'> Sistem Evaluasi Kemampuan Mandiri </h3>
            </Row>
            {this.state.qas.map((qas, index) =>
              <Row>
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>{index + 1 + '. ' + qas.question}</Form.Label>
                    {qas.score == null ?
                      <Form.Control key={index} className="w-50" type="text" placeholder="Masukan jawaban.." 
                      onChange={e => this.updateInput(e, index)}/>
                    :
                      <Form.Control key={index} className={qas.result === 'correct' ? "correct-answer w-50" : "wrong-answer w-50" } type="text" placeholder="Masukan jawaban.." disabled />
                    }
                    <div className="top-padding">
                    {qas.score != null ? 
                      <div>
                      <div> Penilaian : {qas.score}</div>
                      <div> Kunci Jawaban : {this.getStringAnswer(qas.answer)}</div>
                      </div>
                    :
                      <Button variant="dark" key={index} onClick={e => this.gradeAnswer(e, index)}>
                        Periksa Jawaban !
                      </Button>
                    }
                    </div>
                  </Form.Group>
                </Form>
              </Row>
              )}
            <Row>
              <div className="col-md-12 text-center">
                <Button variant="dark" onClick={this.viewHome}>
                  Coba paragraf lainnya !
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      )
    }
  }

export default withRouter(Questions)