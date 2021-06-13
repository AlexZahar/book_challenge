import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxPaginationModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
