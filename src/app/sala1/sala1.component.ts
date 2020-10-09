import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';


@Component({
  selector: 'app-sala1',
  templateUrl: './sala1.component.html',
  styleUrls: ['./sala1.component.css']
})
export class Sala1Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  ngOnInit(): void {
  }
  irInicio(): void{
    this.router.navigate(['']);
  }
  imageObject: Array<object> = [{
    image: 'assets/S1-POSTER/S1-P01.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P01.jpg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S1-POSTER/S1-P02.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P02.jpg',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S1-POSTER/S1-P03.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P03.jpg',
    alt: 'alt of image',
    title: 'poster 3'
   },
   {
    image: 'assets/S1-POSTER/S1-P04.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P04.jpg',
    alt: 'alt of image',
    title: 'poster 4'
   },
   {
    image: 'assets/S1-POSTER/S1-P05.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P05.jpg',
    alt: 'alt of image',
    title: 'poster 5'
   },
   {
    image: 'assets/S1-POSTER/S1-P06.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P06.jpg',
    alt: 'alt of image',
    title: 'poster 6'
   },
   {
    image: 'assets/S1-POSTER/S1-P07.JPG',
    thumbImage: 'assets/S1-POSTER/S1-P07.JPG',
    alt: 'alt of image',
    title: 'poster 7'
   },
   {
    image: 'assets/S1-POSTER/S1-P08.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P08.jpg',
    alt: 'alt of image',
    title: 'poster 8'
   },
   {
    image: 'assets/S1-POSTER/S1-P09.JPG',
    thumbImage: 'assets/S1-POSTER/S1-P09.JPG',
    alt: 'alt of image',
    title: 'poster 9'
   },
   {
    image: 'assets/S1-POSTER/S1-P10.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P10.jpg',
    alt: 'alt of image',
    title: 'poster 10'
   },
   {
    image: 'assets/S1-POSTER/S1-P11.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P11.jpg',
    alt: 'alt of image',
    title: 'poster 11'
   },
   {
    image: 'assets/S1-POSTER/S1-P12.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P12.jpg',
    alt: 'alt of image',
    title: 'poster 12'
   },
   {
    image: 'assets/S1-POSTER/S1-P13.jpg',
    thumbImage: 'assets/S1-POSTER/S1-P13.jpg',
    alt: 'alt of image',
    title: 'poster 13'
   }
];



mostarInfo(event){
  this.dataService.poster = event;
  this.dataService.sala1 = true;
  this.dataService.sala2 = false;
  this.dataService.sala3 = false;
  this.dataService.sala4 = false;
  this.ngbModal.open(VentanaModalComponent);

}
}


