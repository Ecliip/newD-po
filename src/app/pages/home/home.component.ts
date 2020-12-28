import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private dbService: DbService) {
  }

  ngOnInit(): void {
    this.dbService.getAllPersons().subscribe( d => console.log(d));
  }
}
