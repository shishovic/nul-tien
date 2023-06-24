import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { BlogImage } from "src/app/blog/models/blog.models";
import { ImageSizes } from "../../core/models/core.models";

const DEFAULT_IMAGE: BlogImage = { src: 'assets/images/img-placeholder.png', size: ImageSizes.SMALL }

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  _image!: BlogImage;

  @Input() set image(img: BlogImage) {
    if (!img?.src?.length) {
      this._image = DEFAULT_IMAGE;
    } else {
      this._image = img;
    }
  }

  get imageSize(): string {
    return this._image.size.split('x')[0];
  }

  setDefaultImg(): void {
    this._image = DEFAULT_IMAGE;
  }
}
