import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PastService } from '../services/pastAlarms.services';

@Component({
  selector: 'app-full-screen-alarm',
  templateUrl: 'full-screen-alarm.component.html',
  styleUrls: ['full-screen-alarm.component.scss'],
})
export class FullScreenAlarmComponent implements OnInit, OnChanges {
  @Input() alarmRenk!: string;
  @Input() alarmKod!: string;
  @Input() alarmText!: string;
  @Input() alarmSound!: string;
  @Input() createdBy!: string;
  @Input() createdLocationRoom!: string;
  @Input() createdLocation!: any;

  textColor: string = 'white';
  private audio: HTMLAudioElement | undefined;

  constructor(private modalController: ModalController,
    private pastService: PastService) { }

  ngOnInit() {
    this.textColor = this.isDarkColor(this.alarmRenk) ? 'white' : 'black';
    this.saveAlarm();
    this.playAlarmSound();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.playAlarmSound();
  }
  saveAlarm() {
    const datas = {
      AlarmKod: this.alarmKod,
      AlarmRenk: this.alarmRenk,
      AlarmText: this.alarmText,
      AlarmStatus: false,
      createdBy: this.createdBy || 'Ferhat',
      createdLocationRoom: this.createdLocationRoom || 'Kbb Poliklink',
      createdLocation: this.createdLocation
    };

    this.pastService.saveAlarm(datas).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
  isDarkColor(hex: string): boolean {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }

  playAlarmSound() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    if (this.alarmSound === 'Normal') {
      this.audio = new Audio('assets/sound/normal.mp3');
    } else if (this.alarmSound === 'Önemli') {
      this.audio = new Audio('./assets/sound/önemli.mp3');
    }

    if (this.audio) {
      this.audio.play().catch(error => console.error(error));
    }
  }

  dismiss() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.modalController.dismiss();
  }
}
