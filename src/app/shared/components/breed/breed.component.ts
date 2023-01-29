import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})

export class BreedComponent {
  @Input() breed: any;
}
