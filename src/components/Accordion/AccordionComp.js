import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css'

function AccordionComp() {
  return (
  <div className='container-accordionComp'>
    <div className='title-accordion'>
      <span className='spesifikasi'>SPESIFIKASI</span>
    </div>
    <div className='container-accordion'>
      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>DIMENSI</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='content-accordion'>
              <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>MESIN</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>TRANSMISI</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>BERAT</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>RANGKA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='typography'>KAPASITAS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className='container-content'>
                <h4 className='content-item'>Panjang Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Lebar Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Tinggi Keseluruhan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Poros Roda</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Depan</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Pijak Belakang</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Jarak Terendah</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
              <div className='container-content'>
                <h4 className='content-item'>Radius Putar Minimum</h4>
                <span className='content-item detail'>4,450 mm</span>
              </div>
            </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  </div>
  );
}

export default AccordionComp;
