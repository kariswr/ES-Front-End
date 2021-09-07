import React from 'react';
import { withRouter } from 'react-router-dom';
import {Row, Container} from 'react-bootstrap';
import CustomNavbar from "./CustomNavbar";
import './style.css'

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
              <div className='title'> 
                Pembangkitan Pertanyaan
              </div>
              <div className='bottom-padding'> 
                Pembangkitan pertanyaan dapat dilakukan dengan memasukan paragraf materi yang ingin dievaluasi ke dalam sistem. 
                Paragraf yang dimasukan sebaiknya hanya sebuah paragraf yang terdiri dar 3-7 kalimat. Setelah memasukan paragraf ke 
                dalam kotak masukan yang tersedia, pembangkitan pertanyaan dapat dilakukan dengan menekan tombol "Bangkitkan pertanyaan !".
                Selanjutnya tinggal menunggu sistem membangkitkan pertanyaan, proses ini membutuhkan waktu kurang lebih dua(2) menit.
              </div>
              <div className='title'> 
                Penilaian Jawaban
              </div>
              <div className='bottom-padding'> 
                Penilaian jawaban dapat dilakukan setelah mengisikan jawaban pada kotak input yang tersedia. Penilaian jawaban dilakukan 
                dengan menekan tombol "Periksa Jawaban !" yang terletak dibawah jawaban yang ingin dinilai. Kriteria penilaian dapat diatur
                sebelum membangkitkan pertanyaan, dengan menekan tombol "Atur penilaian jawaban" yang terletak di bawah tombol "Bangkitkan 
                pertanyaan !". Terdapat dua(2) hal yang dapat diatur dalam penilaian jawaban. Pertama berupa rasio kemiripan teks, yakni 
                nilai kemiripan teks berdasarkan algoritma Levenshtein Distance. Kedua berupa case sensitive, yakni sistem membedakan huruf 
                besar dan huruf kecil. Untuk penilaian dengan case sensitive, rasio kemiripan teks akan langsung bernilai 100 sehingga 
                penilaian jawban harus sama persis.Pengaturan ini akan dijadikan sebagai nilai minimum untuk menandakan apakah 
                jawaban yang dinilai tergolong benar atau salah. 
              </div>
            </Row>
        </Container>
        </div>
      )
    }
  }

export default withRouter(About)