import { Component, OnInit } from '@angular/core';
import { PastService } from '../services/pastAlarms.services';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  pastAlarms: any[] = [];

  constructor(private pastService: PastService) {}

  ngOnInit() {
    this.loadPastAlarms();
  }
  loadPastAlarms() {
    this.pastService.getPastAlarms().subscribe(
      data => {
        this.pastAlarms = data;
        console.log('Past alarms loaded:', this.pastAlarms);
      },
      error => {
        console.error('Error loading past alarms:', error);
      }
    );
  }
}
