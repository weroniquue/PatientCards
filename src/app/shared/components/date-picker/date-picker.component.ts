import { Component, OnInit } from '@angular/core';
import {NgxDrpOptions, PresetItem} from 'ngx-mat-daterange-picker';
import {Range} from '../../utils/DatePickerConfig';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  range: Range = {fromDate: new Date(), toDate: new Date()};
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];

  ngOnInit() {
    const today = new Date();
    const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    this.setupPresets();

    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: {fromDate: today, toDate: today},
      applyLabel: 'Submit',
      calendarOverlayConfig: {
        shouldCloseOnBackdropClick: true,
        hasBackDrop: false
      }
      // cancelLabel: "Cancel",
      // excludeWeekends:true,
      // fromMinMax: {fromDate:fromMin, toDate:fromMax},
      //  toMinMax: {fromDate: toMin, toDate: toMax}
    };
  }

  // handler function that receives the updated date range object
  updateRange(range: Range) {
    this.range = range;
  }

  // helper function to create initial presets
  setupPresets() {

    const backDate = (numOfDays) => {
      const today: Date = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    };

    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7);
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.presets =  [
      {presetLabel: 'Yesterday', range: { fromDate: yesterday, toDate: today }},
      {presetLabel: 'Last 7 Days', range: { fromDate: minus7, toDate: today }},
      {presetLabel: 'Last 30 Days', range: { fromDate: minus30, toDate: today }},
      {presetLabel: 'This Month', range: { fromDate: currMonthStart, toDate: currMonthEnd }},
      {presetLabel: 'Last Month', range: { fromDate: lastMonthStart, toDate: lastMonthEnd }}
    ];
  }

}
