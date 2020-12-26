import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const options = {responseType: 'text'};
    const mess = this.http.get<any>('http://localhost:3000').subscribe( d =>
    console.log( d));
    console.log(mess);
  }
}
