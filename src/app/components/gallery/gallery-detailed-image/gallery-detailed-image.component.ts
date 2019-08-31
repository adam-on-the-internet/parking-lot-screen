import { Component, Input } from '@angular/core';
import { DetailedImage } from 'src/app/models/Image.model';

@Component({
  selector: 'app-gallery-detailed-image',
  templateUrl: './gallery-detailed-image.component.html',
  styleUrls: ['./gallery-detailed-image.component.css']
})
export class GalleryDetailedImageComponent {
  @Input() detailedImage: DetailedImage;
  @Input() imageLibrary: string;
  @Input() index: number;

  public get fullSrc(): string {
    return `assets/${this.imageLibrary}/${this.detailedImage.src}`;
  }
}
