import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.styl']
})
export class NewComponent implements OnInit {
  checkoutForm;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      type: '',
      name: '',
      history: ''
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  onSubmit(data): void {
    this.http.post<any>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      name: data.name,
      type: data.type,
      history: data.history
    }).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
