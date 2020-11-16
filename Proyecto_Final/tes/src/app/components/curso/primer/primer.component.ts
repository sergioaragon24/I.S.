import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toPrimate(){
    this.router.navigateByUrl('/primate');
  }

  togrado(){
    this.router.navigateByUrl('/grado');
  }

  tologin(){
    this.router.navigateByUrl('/login');
  }
}
