import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conjuntos',
  templateUrl: './conjuntos.component.html',
  styleUrls: ['./conjuntos.component.css']
})
export class ConjuntosComponent implements OnInit {
  safeUrl;
  constructor(private santizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.safeUrl = this.santizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/i_IuCOqtkuQ');
  }

  toPrimate(){
    this.router.navigateByUrl('/primate');
  }

  topregconj(){
    this.router.navigateByUrl('/pregconj');
  }
  tologin(){
    this.router.navigateByUrl('/login');
  }

}
