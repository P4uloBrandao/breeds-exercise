import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})

export class BreedComponent {
  @Input() breed: any;
  @Output() breedSelected = new EventEmitter();

  constructor() { }

  public selectBreed() {
    this.breedSelected.emit(this.breed.breed);
  }
}
