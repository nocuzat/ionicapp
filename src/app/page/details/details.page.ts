import { Component, OnInit } from '@angular/core';
declare var L;
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
   const mymap = L.map('mapid').setView([51.505, -0.09], 13);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoibm9jdXphdCIsImEiOiJjanhxMjRqb2owbTRuM25udGVoZWZmcDZ1In0.p6c-F5Y_BqGmNU1TTV5dEQ'
}).addTo(mymap);
  }

}
