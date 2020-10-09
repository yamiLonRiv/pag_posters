import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana-modal',
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css']
})
export class VentanaModalComponent implements OnInit {
  imagen:string;
  pdf:string;
  nombreDescarga:string;
  posters01 = [{imagen:'assets/S1-POSTER/S1-P01.jpg', pdf:"assets/S1-POSTER/S1-P01.pdf", nombreDescarga:"S1-P01.pdf"},
  {imagen:'assets/S1-POSTER/S1-P02.jpg', pdf:"assets/S1-POSTER/S1-P02.pdf", nombreDescarga:"S1-P02.pdf"},
  {imagen:'assets/S1-POSTER/S1-P03.jpg', pdf:"assets/S1-POSTER/S1-P03.pdf", nombreDescarga:"S1-P03.pdf"},
  {imagen:'assets/S1-POSTER/S1-P04.jpg', pdf:"assets/S1-POSTER/S1-P04.pdf", nombreDescarga:"S1-P04.pdf"},
  {imagen:'assets/S1-POSTER/S1-P05.jpg', pdf:"assets/S1-POSTER/S1-P05.pdf", nombreDescarga:"S1-P05.pdf"},
  {imagen:'assets/S1-POSTER/S1-P06.jpg', pdf:"assets/S1-POSTER/S1-P06.pdf", nombreDescarga:"S1-P06.pdf"},
  {imagen:'assets/S1-POSTER/S1-P07.JPG', pdf:"assets/S1-POSTER/S1-P07.pdf", nombreDescarga:"S1-P07.pdf"},
  {imagen:'assets/S1-POSTER/S1-P08.jpg', pdf:"assets/S1-POSTER/S1-P08.pdf", nombreDescarga:"S1-P08.pdf"},
  {imagen:'assets/S1-POSTER/S1-P09.JPG', pdf:"assets/S1-POSTER/S1-P09.pdf", nombreDescarga:"S1-P09.pdf"},
  {imagen:'assets/S1-POSTER/S1-P10.jpg', pdf:"assets/S1-POSTER/S1-P10.pdf", nombreDescarga:"S1-P10.pdf"},
  {imagen:'assets/S1-POSTER/S1-P11.jpg', pdf:"assets/S1-POSTER/S1-P11.pdf", nombreDescarga:"S1-P11.pdf"},
  {imagen:'assets/S1-POSTER/S1-P12.jpg', pdf:"assets/S1-POSTER/S1-P12.pdf", nombreDescarga:"S1-P12.pdf"},
  {imagen:'assets/S1-POSTER/S1-P13.jpg', pdf:"assets/S1-POSTER/S1-P13.pdf", nombreDescarga:"S1-P13.pdf"}
  ];

  posters02 = [{imagen:'assets/S2-POSTER/S2-P01.jpg', pdf:"assets/S2-POSTER/S2-P01.pdf.pdf", nombreDescarga:"S2-P01.pdf"},
  {imagen:'assets/S2-POSTER/S2-P02.jpg', pdf:"assets/S2-POSTER/S2-P02.pdf.pdf", nombreDescarga:"S2-P02.pdf"},
  {imagen:'assets/S2-POSTER/S2-P03.jpg', pdf:"assets/S2-POSTER/S2-P03.pdf.pdf", nombreDescarga:"S2-P03.pdf"},
  {imagen:'assets/S2-POSTER/S2-P04.jpg', pdf:"assets/S2-POSTER/S2-P04.pdf.pdf", nombreDescarga:"S2-P04.pdf"},
  {imagen:'assets/S2-POSTER/S2-P05.jpg', pdf:"assets/S2-POSTER/S2-P05.pdf.pdf", nombreDescarga:"S2-P05.pdf"},
  {imagen:'assets/S2-POSTER/S2-P06.JPG', pdf:"assets/S2-POSTER/S2-P06.pdf.pdf", nombreDescarga:"S2-P06.pdf"},
  {imagen:'assets/S2-POSTER/S2-P07.jpg', pdf:"assets/S2-POSTER/S2-P07.pdf.pdf", nombreDescarga:"S2-P07.pdf"},
  {imagen:'assets/S2-POSTER/S2-P08.jpg', pdf:"assets/S2-POSTER/S2-P08.pdf.pdf", nombreDescarga:"S2-P08.pdf"},
  {imagen:'assets/S2-POSTER/S2-P09.jpg', pdf:"assets/S2-POSTER/S2-P09.pdf.pdf", nombreDescarga:"S2-P09.pdf"},
  {imagen:'assets/S2-POSTER/S2-P10.jpg', pdf:"assets/S2-POSTER/S2-P10.pdf.pdf", nombreDescarga:"S2-P10.pdf"}
  ];

    posters03 = [{imagen:'assets/S3-POSTER/S3-P01.jpg', pdf:"assets/S3-POSTER/S3-P01.pdf", nombreDescarga:"S3-P01.pdf"},
  {imagen:'assets/S3-POSTER/S3-P02.jpg', pdf:"assets/S3-POSTER/S3-P02.pdf", nombreDescarga:"S3-P02.pdf"},
  {imagen:'assets/S3-POSTER/S3-P03.jpg', pdf:"assets/S3-POSTER/S3-P03.pdf", nombreDescarga:"S3-P03.pdf"},
  {imagen:'assets/S3-POSTER/S3-P04.jpg', pdf:"assets/S3-POSTER/S3-P04.pdf", nombreDescarga:"S3-P04.pdf"},
  {imagen:'assets/S3-POSTER/S3-P05.jpg', pdf:"assets/S3-POSTER/S3-P05.pdf", nombreDescarga:"S3-P05.pdf"},
  {imagen:'assets/S3-POSTER/S3-P06.jpg', pdf:"assets/S3-POSTER/S3-P06.pdf", nombreDescarga:"S3-P06.pdf"},
  {imagen:'assets/S3-POSTER/S3-P07.jpg', pdf:"assets/S3-POSTER/S3-P07.pdf", nombreDescarga:"S3-P07.pdf"},
  {imagen:'assets/S3-POSTER/S3-P08.jpg', pdf:"assets/S3-POSTER/S3-P08.pdf", nombreDescarga:"S3-P08.pdf"},
  {imagen:'assets/S3-POSTER/S3-P09.jpg', pdf:"assets/S3-POSTER/S3-P09.pdf", nombreDescarga:"S3-P09.pdf"},
  {imagen:'assets/S3-POSTER/S3-P10.jpg', pdf:"assets/S3-POSTER/S3-P10.pdf", nombreDescarga:"S3-P10.pdf"},
  {imagen:'assets/S3-POSTER/S3-P11.jpg', pdf:"assets/S3-POSTER/S3-P11.pdf", nombreDescarga:"S3-P11.pdf"},
  {imagen:'assets/S3-POSTER/S3-P12.jpg', pdf:"assets/S3-POSTER/S3-P12.pdf", nombreDescarga:"S3-P12.pdf"},
  {imagen:'assets/S3-POSTER/S3-P13.jpg', pdf:"assets/S3-POSTER/S3-P13.pdf", nombreDescarga:"S3-P13.pdf"},
  {imagen:'assets/S3-POSTER/S3-P14.jpg', pdf:"assets/S3-POSTER/S3-P14.pdf", nombreDescarga:"S3-P14.pdf"},
  {imagen:'assets/S3-POSTER/S3-P15.jpg', pdf:"assets/S3-POSTER/S3-P15.pdf", nombreDescarga:"S3-P15.pdf"},
  {imagen:'assets/S3-POSTER/S3-P16.jpg', pdf:"assets/S3-POSTER/S3-P16.pdf", nombreDescarga:"S3-P16.pdf"},
  {imagen:'assets/S3-POSTER/S3-P17.jpg', pdf:"assets/S3-POSTER/S3-P17.pdf", nombreDescarga:"S3-P17.pdf"},
  {imagen:'assets/S3-POSTER/S3-P18.jpg', pdf:"assets/S3-POSTER/S3-P18.pdf", nombreDescarga:"S3-P18.pdf"},
  {imagen:'assets/S3-POSTER/S3-P19.jpg', pdf:"assets/S3-POSTER/S3-P19.pdf", nombreDescarga:"S3-P19.pdf"},
  {imagen:'assets/S3-POSTER/S3-P20.jpg', pdf:"assets/S3-POSTER/S3-P20.pdf", nombreDescarga:"S3-P20.pdf"},
  {imagen:'assets/S3-POSTER/S3-P21.jpg', pdf:"assets/S3-POSTER/S3-P21.pdf", nombreDescarga:"S3-P21.pdf"},
  {imagen:'assets/S3-POSTER/S3-P22.jpg', pdf:"assets/S3-POSTER/S3-P22.pdf", nombreDescarga:"S3-P22.pdf"},
  {imagen:'assets/S3-POSTER/S3-P23.jpg', pdf:"assets/S3-POSTER/S3-P23.pdf", nombreDescarga:"S3-P23.pdf"},
  {imagen:'assets/S3-POSTER/S3-P24.jpg', pdf:"assets/S3-POSTER/S3-P24.pdf", nombreDescarga:"S3-P24.pdf"},
  {imagen:'assets/S3-POSTER/S3-P25.jpg', pdf:"assets/S3-POSTER/S3-P25.pdf", nombreDescarga:"S3-P25.pdf"},
  {imagen:'assets/S3-POSTER/S3-P26.jpg', pdf:"assets/S3-POSTER/S3-P26.pdf", nombreDescarga:"S3-P26.pdf"},
  {imagen:'assets/S3-POSTER/S3-P27.jpg', pdf:"assets/S3-POSTER/S3-P27.pdf", nombreDescarga:"S3-P27.pdf"},
  {imagen:'assets/S3-POSTER/S3-P28.jpg', pdf:"assets/S3-POSTER/S3-P28.pdf", nombreDescarga:"S3-P28.pdf"},
  {imagen:'assets/S3-POSTER/S3-P29.jpg', pdf:"assets/S3-POSTER/S3-P29.pdf", nombreDescarga:"S3-P29.pdf"},
  {imagen:'assets/S3-POSTER/S3-P30.jpg', pdf:"assets/S3-POSTER/S3-P30.pdf", nombreDescarga:"S3-P30.pdf"}
  ];

  posters04 = [{imagen:'assets/S4-POSTER/S4-P01.jpg', pdf:"assets/S4-POSTER/S4-P01.pdf", nombreDescarga:"S4-P01.pdf"},
  {imagen:'assets/S4-POSTER/S4-P02.jpg', pdf:"assets/S4-POSTER/S4-P02.pdf", nombreDescarga:"S4-P02.pdf"},
  {imagen:'assets/S4-POSTER/S4-P03.jpg', pdf:"assets/S4-POSTER/S4-P03.pdf", nombreDescarga:"S4-P03.pdf"},
  {imagen:'assets/S4-POSTER/S4-P04.jpg', pdf:"assets/S4-POSTER/S4-P04.pdf", nombreDescarga:"S4-P04.pdf"},
  {imagen:'assets/S4-POSTER/S4-P05.JPG', pdf:"assets/S4-POSTER/S4-P05.pdf", nombreDescarga:"S4-P05.pdf"},
  {imagen:'assets/S4-POSTER/S4-P06.jpg', pdf:"assets/S4-POSTER/S4-P06.pdf", nombreDescarga:"S4-P06.pdf"},
  ];
  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
    if (this.dataservice.sala1) {
      this.imagen=this.posters01[this.dataservice.poster].imagen;
      this.pdf=this.posters01[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters01[this.dataservice.poster].nombreDescarga;
    }
    else if(this.dataservice.sala2){
      this.imagen=this.posters02[this.dataservice.poster].imagen;
      this.pdf=this.posters02[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters02[this.dataservice.poster].nombreDescarga;
    }
     else if(this.dataservice.sala3){
       this.imagen=this.posters03[this.dataservice.poster].imagen;
      this.pdf=this.posters03[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters03[this.dataservice.poster].nombreDescarga;
     }
     else{
      this.imagen=this.posters04[this.dataservice.poster].imagen;
      this.pdf=this.posters04[this.dataservice.poster].pdf;
      this.nombreDescarga=this.posters04[this.dataservice.poster].nombreDescarga;
     }
  }

}
