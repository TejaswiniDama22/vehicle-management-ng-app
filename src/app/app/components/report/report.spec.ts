import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportComponent] // ✅ standalone component import
    }).compileComponents();

    fixture = TestBed.createComponent(ReportComponent); // ✅ class name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
