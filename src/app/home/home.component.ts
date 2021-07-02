import { Component, OnInit } from '@angular/core'
import { Dialogs, Slider, TextField, Utils } from '@nativescript/core'

import { DataService, DataItem } from '../shared/data.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  gridData: Array<DataItem>
  sdData: Array<DataItem>
  hdData: Array<DataItem>
  fhdData: Array<DataItem>

  streamingCostSD = 0;
  streamingCostHD = 0;
  streamingCostFHD = 0;

  totalStreamingCost = 0;
  selectedtype = 0;

  constructor(private _itemService: DataService) { }

  ngOnInit(): void {
    this.sdData = this._itemService.getSDRates()
    this.hdData = this._itemService.getHDRates()
    this.fhdData = this._itemService.getFHDRates()

    this.gridData = this.sdData;
  }

  onSliderValueChange(args) {
    const slider = args.object as Slider
    if (args.value <= 10000) {
      this.gridData[slider.id].baseStreamHour = args.value;
      this.gridData[slider.id].plusStreamHour = 0;
      this.gridData[slider.id].cost = this.gridData[slider.id].baseStreamHour * this.gridData[slider.id].ratePerhour1
    } else {
      this.gridData[slider.id].baseStreamHour = 10000;
      this.gridData[slider.id].plusStreamHour = args.value - this.gridData[slider.id].baseStreamHour;
      this.gridData[slider.id].cost = this.gridData[slider.id].baseStreamHour * this.gridData[slider.id].ratePerhour1 + this.gridData[slider.id].plusStreamHour * this.gridData[slider.id].ratePerhour2
    }
    this.calculateTotalCost();
  }

  onReturnPress(args) {
    const textField = args.object as TextField
    Utils.setTimeout(() => {
      textField.dismissSoftInput();
    }, 100)
  }

  onFocus(args) {
    const textField = args.object as TextField
  }

  onBlur(args) {
    const textField = args.object as TextField
  }

  calculateTotalCost() {
    switch (this.selectedtype) {
      case 0:
        this.streamingCostSD = 0;
        this.gridData.forEach(element => {
          if (element.cost) {
            this.streamingCostSD = this.streamingCostSD + element.cost;
          }
        });
        break;
      case 1:
        this.streamingCostHD = 0;
        this.gridData.forEach(element => {
          if (element.cost) {
            this.streamingCostHD = this.streamingCostHD + element.cost;
          }
        });
        break;
      case 2:
        this.streamingCostFHD = 0;
        this.gridData.forEach(element => {
          if (element.cost) {
            this.streamingCostFHD = this.streamingCostFHD + element.cost;
          }
        });
        break;
    }
    this.finalCost();
  }

  finalCost() {
    this.totalStreamingCost = 0;
    this.totalStreamingCost = this.streamingCostSD + this.streamingCostHD + this.streamingCostFHD;
  }

  changeType() {
    Dialogs.action({
      title: 'Stream Type',
      cancelButtonText: 'Cancel',
      cancelable: true,
      actions: ['SD', 'HD', 'FHD']
    }).then((result: any) => {
      // console.log('Dialog result: ' + result);
      switch (this.selectedtype) {
        case 0:
          this.sdData = this.gridData;
          break;
        case 1:
          this.hdData = this.gridData;
          break;
        case 2:
          this.fhdData = this.gridData;
          break;
      }

      if (result === 'SD') {
        this.selectedtype = 0;
        this.gridData = this.sdData;
      } else if (result === 'HD') {
        this.selectedtype = 1;
        this.gridData = this.hdData;
      } else {
        this.selectedtype = 2;
        this.gridData = this.fhdData;
      }
    });
  }


}
