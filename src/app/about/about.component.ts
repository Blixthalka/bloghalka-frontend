import { Component, OnInit } from '@angular/core';
import  ParticlesConfig from '../../assets/data/particles-2.json';

declare var particlesJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, function() {
      console.log('callback - particles.js config loaded');
    });
  }

}
