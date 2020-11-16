import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primate',
  templateUrl: './primate.component.html',
  styleUrls: ['./primate.component.css']
})
export class PrimateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toconju(){
    this.router.navigateByUrl('/conjuntos');
  }

  todetconj(){
    this.router.navigateByUrl('/detconj');
  }

  toprimer(){
    this.router.navigateByUrl('/primer');
  }

  tologin(){
    this.router.navigateByUrl('/login');
  }

}
