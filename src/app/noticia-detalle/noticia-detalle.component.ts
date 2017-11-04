import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent implements OnInit {
    private autor: String;
    private descripcion: String;
    private fecha: String;
    private titulo: String;
    private url: String;
    private imagenURL: String;
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['autor'] != null) {
                this.autor = params['autor']
            }
            if (params['descripcion'] != null) {
                this.descripcion = params['descripcion']
            }
            if (params['fecha'] != null) {
                this.fecha = params['fecha']
            }
            if (params['titulo'] != null) {
                this.titulo = params['titulo']
            }
            if (params['url'] != null) {
                this.url = params['url']
            }
            if (params['imagenUrl'] != null) {
                this.imagenURL = params['imagenUrl']
            }
        })
    }
  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) {}
}
