import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroesArr: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private _router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.heroesArr = this.heroeService.buscarHeroes(params['texto']);
      this.termino = params['texto'];
      console.log(this.heroesArr);
   });
  }

  /*redirecciona a la página del heroe de acuerdo a su id*/
  /* verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  } */

}
