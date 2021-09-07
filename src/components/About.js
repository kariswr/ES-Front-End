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
              <div className='bottom-padding'> 
                Sistem evaluasi kemampuan mandiri merupakan sebuah sistem yang dibangun untuk membantu proses evaluasi kemampuan 
                atas suatu paragraf yang berdomain pengetahuan umum. Sistem melakukan evaluasi dengan 2 tahap utama, yakni pembangkitan pertanyaan berdasarkan paragraf,
                dan penilaian jawaban yang diberikan atas pertanyaan yang dibangkitkan. Sistem hanya memberikan penilaian secara kasar 
                dengan tujuan penilaian tersebut dapat membantu setiap pengguna memiliki gambaran akan kemampuannya. Sistem tidak 
                ditujukan sebagai pengganti ujian, namun sebagai alat pembantu untuk latihan seperti teman belajar.
              </div>
              <div className='bottom-padding'> 
                Dalam membangkitkan pertanyaan dari paragraf, sistem perlu melakukan pemilihan jawaban dari paragraf. Pemilihan 
                jawaban diimplementasikan dengan modifikasi model BERT-Joint KPE karya Si Sun, dkk. Pembangkitan pertanyaan 
                diimplementasikan dengan model pembangkit pertanyaan karya Ferdian Joshua Muis. Untuk penilaian jawaban, diimplementasikan
                dengan penyamaan string. 
              </div>
              <div className='bottom-padding'> 
                Repositori koding dapat dilihat pada : 
                <ul>
                  <li>
                    <span>Pemilihan jawaban : </span>
                    <a href="https://github.com/kariswr/Multilingual-BERT-KPE" rel="noreferrer">
                      repositori pemilihan jawaban
                    </a>
                  </li>
                  <li>
                    <span>Pembangkit pertanyaan dan Penilaian jawaban : </span>
                    <a href="https://github.com/kariswr/question-generator-api" rel="noreferrer">
                      repositori pembangkit pertanyaan dan penilaian jawaban
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
        </Container>
        </div>
      )
    }
  }

export default withRouter(About)