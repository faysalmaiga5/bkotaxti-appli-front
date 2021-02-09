import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriqueTrajetsPage } from './historique-trajets.page';

describe('HistoriqueTrajetsPage', () => {
  let component: HistoriqueTrajetsPage;
  let fixture: ComponentFixture<HistoriqueTrajetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueTrajetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriqueTrajetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
