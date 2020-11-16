import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detconj',
  templateUrl: './detconj.component.html',
  styleUrls: ['./detconj.component.css']
})
export class DetconjComponent implements OnInit {
  safeUrl;
  constructor(private santizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.safeUrl = this.santizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/EEYdeJ3PzXs');
  }

  Pregdetconj(){
    this.router.navigateByUrl('/pregdetconj');
  }

  toPrimate(){
    this.router.navigateByUrl('/primate');
  }

  tologin(){
    this.router.navigateByUrl('/login');
  }

}
