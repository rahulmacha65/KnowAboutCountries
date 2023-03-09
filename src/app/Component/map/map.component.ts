import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  template: `
    <div style="position:absolute;margin:auto;top:0;left:0;right:0;bottom:0;width:100%;height:50%" id="map" class="map"></div>
  `,
  styles: [
  ]
})
export class MapComponent implements OnInit,OnChanges {

  @Input()
  latlng!:Array<number>;

  map!:mapboxgl.Map;
  constructor(){
    (mapboxgl as any).accessToken =  environment.mapbox.accessToken;
  }
  ngOnInit(): void {
    this.buildMap(); 
    console.log(this.latlng[0]);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.buildMap();
  }
  buildMap(){
    this.map = new mapboxgl.Map({
      container:'map',
      style:'mapbox://styles/mapbox/streets-v11',
      center:[this.latlng[1], this.latlng[0]],
      zoom:5,
    });
    new mapboxgl.Marker({color:'red',draggable:true,}).setPopup(new mapboxgl.Popup().setHTML(`<h5>Lng:${this.latlng[1]} Lat:${this.latlng[0]}</h5>`)).setLngLat([this.latlng[1], this.latlng[0]]).addTo(this.map);
  }

}
