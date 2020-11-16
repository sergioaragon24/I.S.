import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    if(!this.auth.islogin){
      this.router.navigateByUrl('/login');
    }
  }

  tologin(){
    this.router.navigateByUrl('/login');
  }

  toPrimer(){
    this.router.navigateByUrl('/primer');
  }

}
