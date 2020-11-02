import { Component } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';

@Component({
    selector: "ns-photo",
    moduleId: module.id,
    templateUrl: "./photo.component.html",
    styleUrls: ['./photo.component.css']
})

export class PhotoComponent {

    constructor() { }

    //La photo est stockée dans la gallerie de l'appareil par défaut (boolean = true)
    public saveToGallery: boolean = true;
    public cameraImage: ImageAsset;

    onTakePictureTap() {
        requestPermissions().then(
            () => this.capture(),
            () => alert('permissions rejected')
        );
    }

    capture() {
        takePicture({ width: 150, height: 280, keepAspectRatio: true, saveToGallery: this.saveToGallery })
            .then((ImageAsset: any) => {
                this.cameraImage = ImageAsset;
                // ImageAsset.getImageAsync(function (nativeImage) {
                //     let scale = 1;
                //     let height = 0;
                //     let width = 0;
                    // if (ImageAsset.android) {
                    //     // get the current density of the screen (dpi) and divide it by the default one to get the scale
                    //     scale = nativeImage.getDensity() / ImageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                    //     height = ImageAsset.options.height;
                    //     width = ImageAsset.options.width;
                    // } else {
                    //     scale = nativeImage.scale;
                    //     width = nativeImage.size.width * scale;
                    //     height = nativeImage.size.height * scale;
                    // }
                    // console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                    // console.log(`Image Size: ${width / scale}x${height / scale}`);
                // });
            }, (error) => {
                console.log("Error: " + error);
            });
    }

  
}

//   takePicture() {
//     camera.requestPermissions().then(
//         function success() {
//             camera.takePicture({
//               width: 250,
//               height: 300,
//               keepAspectRatio: true})
//         }, 
//         function failure() {
//             alert('Camera permissions not granted.');
//         }
//     );
// }
  
// }
