import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.styl']
})
export class ChangeComponent implements OnInit {
  checkoutForm;
  id;
  createdAt;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      type: '',
      name: ''
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.http.get<any>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + this.id).subscribe(data => {
        this.createdAt = data.createdAt;

        this.checkoutForm = this.formBuilder.group({
          type: data.type,
          name: data.name
        });
      });
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  onSubmit(data): void {
    this.http.put<any>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + this.id, {
      name: data.name,
      type: data.type
    }).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
