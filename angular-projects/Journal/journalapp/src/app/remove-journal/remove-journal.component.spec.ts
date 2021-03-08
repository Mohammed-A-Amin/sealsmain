import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveJournalComponent } from './remove-journal.component';

describe('RemoveJournalComponent', () => {
  let component: RemoveJournalComponent;
  let fixture: ComponentFixture<RemoveJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
