import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  card1Testo: string = "With XISMuS interactive database, every previously compiled dataset is readily accessible, without having to re-input any data manually. XISMuS looks for file patterns to automatically recognize possible datasets! Every compiled dataset is transformed in a datacube, containing all results, configuration parameters, data, and more. Your work is constantly saved.\nElemental distribution images can be easily created.Just click the chemical elements you\'re looking for; or leave it to auto wizard, that automatically identifies possible elements within your dataset."

  card2Testo: string = "With the MOSAIC module, you have a canvas all for yourself. Load as many datasets needed, rotate and drag them around, positioning them accordingly. Choose one of the automatic algorithms to match the datasets brightenss levels or do it manually by adjusting their histograms.\nCompile the datasets together into a new datacube.It will be added to the database so you can easily access that data later, whenever needed."

  card3Testo: string = "Load two elemental distribution images side-by-side and select sub-regions to view their corresponding spectrum in live time! Save the region spectrum, fit it, and export the results. Verify the ratio between elements, correlate regions or entire images. You can visualize clusters within the correlation plot by simply drawing a mask in the plot!\nFilter the images to your heart's content and export them as PNG files, mixed or separately. With the Image Analyzer module, you have every tool needed to better understand your data."

  ngOnInit(): void {
  }

}
