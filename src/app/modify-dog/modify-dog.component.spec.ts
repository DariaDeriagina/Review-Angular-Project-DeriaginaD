import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDogComponent } from './modify-dog.component';

describe('ModifyDogComponent', () => {
  let component: ModifyDogComponent;
  let fixture: ComponentFixture<ModifyDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyDogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
