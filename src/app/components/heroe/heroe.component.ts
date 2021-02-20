import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private _router: Router) {

    this.activatedRoute.params.subscribe(params => {
      /*console.log(params['id']);*/
      this.heroe = this.heroeService.getHeroe(+params['id']); /*el simbolo + parsea un string a number */
      console.log(this.heroe.nombre);
      console.log(this.heroe);
    });
   }

   verHeroes() {
    this._router.navigate(['/heroes']);
  }

}
