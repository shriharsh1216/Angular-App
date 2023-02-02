import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoItems: Array<any>;

  activeIndex = 0;
  data;
  currentVideo: any;
  constructor() {}

  ngOnInit(): void {
    this.currentVideo = this.videoItems[this.activeIndex];
  }

  videoPlayerInit(data): void {
    this.data = data;

    this.data
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo(): void {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo(): void {
    this.data.play();
  }

  startPlaylistVdo(item, index: number): void {
    this.activeIndex = index;
    this.currentVideo = item;
  }
}
