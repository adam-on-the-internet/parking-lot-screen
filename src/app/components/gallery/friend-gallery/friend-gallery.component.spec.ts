import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendGalleryComponent } from './friend-gallery.component';

describe('FriendGalleryComponent', () => {
  let component: FriendGalleryComponent;
  let fixture: ComponentFixture<FriendGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
