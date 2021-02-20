import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(texto: string) {
    this._router.navigate(['/buscar-heroe', texto]);
  }

}
