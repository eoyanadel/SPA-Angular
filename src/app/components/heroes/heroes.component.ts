import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }


  /*redirecciona a la página del heroe de acuerdo a su id*/
  /* verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  } */

}
