import { DataserviceService } from './../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';


@Component({
  selector: 'app-sala4',
  templateUrl: './sala4.component.html',
  styleUrls: ['./sala4.component.css']
})
export class Sala4Component implements OnInit {

  constructor(private router: Router, private ngbModal: NgbModal, private dataService:DataserviceService) { }

  ngOnInit(): void {
  }

  irInicio(): void{
    this.router.navigate(['']);
  }

  imageObject: Array<object> = [{
    image: 'assets/S4-POSTER/S4-P01.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P01.jpg',
    alt: 'alt of image',
    title: 'poster 1'

   },
   {
    image: 'assets/S4-POSTER/S4-P02.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P02.jpg',
    alt: 'alt of image',
    title: 'poster 2'
   },
   {
    image: 'assets/S4-POSTER/S4-P03.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P03.jpg',
    alt: 'alt of image',
    title: 'poster 3'
   },
   {
    image: 'assets/S4-POSTER/S4-P04.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P04.jpg',
    alt: 'alt of image',
    title: 'poster 4'
   },
   {
    image: 'assets/S4-POSTER/S4-P05.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P05.JPG',
    alt: 'alt of image',
    title: 'poster 5'
   },
   {
    image: 'assets/S4-POSTER/S4-P06.jpg',
    thumbImage: 'assets/S4-POSTER/S4-P06.jpg',
    alt: 'alt of image',
    title: 'poster 6'
   }
];

mostarInfo(event){
    this.dataService.poster = event;
   this.dataService.sala1 = false;
  this.dataService.sala2 = false;
  this.dataService.sala3 = false;
  this.dataService.sala4 = true;
  this.ngbModal.open(VentanaModalComponent);
}

}
