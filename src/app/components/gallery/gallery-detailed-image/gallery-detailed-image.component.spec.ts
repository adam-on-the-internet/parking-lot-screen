import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDetailedImageComponent } from './gallery-detailed-image.component';

describe('GalleryDetailedImageComponent', () => {
  let component: GalleryDetailedImageComponent;
  let fixture: ComponentFixture<GalleryDetailedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDetailedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDetailedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
