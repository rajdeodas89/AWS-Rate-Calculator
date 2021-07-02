import { Component, OnInit } from '@angular/core'
import { Slider, TextField, Utils } from '@nativescript/core';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  ratePerhour1 = 0.2;
  ratePerhour2 = 2;

  baseUploadHour = 0;
  plusUploadHour = 0;

  totalBasicCost = 0;
  totalStandardCost = 0;
  totalCost = 0;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  onSliderValueChange(args) {
    const slider = args.object as Slider
    if (slider.id === 'basic') {
      this.baseUploadHour = args.value;
      this.totalBasicCost = this.baseUploadHour * this.ratePerhour1;
    } else {
      this.plusUploadHour = args.value;
      this.totalStandardCost = this.plusUploadHour * this.ratePerhour2;
    }
    this.totalCost = this.totalBasicCost + this.totalStandardCost
  }

  onReturnPress(args) {
    const textField = args.object as TextField
    Utils.setTimeout(() => {
      textField.dismissSoftInput();
    }, 100)
  }
}
