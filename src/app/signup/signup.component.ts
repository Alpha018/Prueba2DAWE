import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    datos: any = {};
    constructor(private http: Http) {
    }

    ngOnInit() {}
    login(inputEmail: String, inputPass: String) {
        const apiURL = 'http://localhost:8080/persona?rut=' + inputEmail;
        // this.getData(apiURL);
        this.getImages(apiURL);
    }
    getData(apiURL) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(apiURL).map((res: Response) => res.json())
    }
    getImages(apiURL) {
        this.getData(apiURL).subscribe(datos => {
            console.log(datos);
            this.datos = datos;
        });
    }
}
