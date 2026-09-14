import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cowork } from './cowork';

describe('Cowork', () => {
  let component: Cowork;
  let fixture: ComponentFixture<Cowork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cowork],
    }).compileComponents();

    fixture = TestBed.createComponent(Cowork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
