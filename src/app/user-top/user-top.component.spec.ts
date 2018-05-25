/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserTopComponent } from './user-top.component';

describe('UserTopComponent', () => {
  let component: UserTopComponent;
  let fixture: ComponentFixture<UserTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
