import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=8f41f8f7c63e4a41bc6972afc3e54a68')
        .subscribe(data => {
          console.log(data);
        })
  }

}
