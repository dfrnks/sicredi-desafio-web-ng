import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})

export class HomeComponent implements OnInit {
  dragons;
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').subscribe(data => {
      this.dragons = data;
    });
  }

  remover(id): void{
    this.http.delete<any>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
