import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/assets/libs/models/heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
