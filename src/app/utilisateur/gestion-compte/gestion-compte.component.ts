import { Component, OnInit } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import * as camera from "nativescript-camera";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public saveToGallery: boolean = true;
  public cameraImage: ImageAsset;

  onTakePictureTap(args) {
      requestPermissions().then(
          () => this.capture(),
          () => alert('permissions rejected')
      );
  }

  capture() {
      takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery })
          .then((imageAsset: any) => {
              this.cameraImage = imageAsset;
              imageAsset.getImageAsync(function (nativeImage) {
                  let scale = 1;
                  let height = 0;
                  let width = 0;
                  if (imageAsset.android) {
                      // get the current density of the screen (dpi) and divide it by the default one to get the scale
                      scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                      height = imageAsset.options.height;
                      width = imageAsset.options.width;
                  } else {
                      scale = nativeImage.scale;
                      width = nativeImage.size.width * scale;
                      height = nativeImage.size.height * scale;
                  }
                  console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                  console.log(`Image Size: ${width / scale}x${height / scale}`);
              });
          }, (error) => {
              console.log("Error: " + error);
          });
  }
  // Ouvrir le menu burger
  onDrawerButtonTap(){
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}













// takePicture() {
//   camera.requestPermissions().then(
//       function success() {
//           camera.takePicture({
//             width: 100,
//             height: 100,
//             keepAspectRatio: true})
//       }, 
//       function failure() {
//           alert('Camera permissions not granted.');
//       }
//   );
// }