import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailssComponent } from './expense-detailss.component';

describe('ExpenseDetailssComponent', () => {
  let component: ExpenseDetailssComponent;
  let fixture: ComponentFixture<ExpenseDetailssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseDetailssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseDetailssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
