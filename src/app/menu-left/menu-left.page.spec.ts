import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuLeftPage } from './menu-left.page';

describe('MenuLeftPage', () => {
  let component: MenuLeftPage;
  let fixture: ComponentFixture<MenuLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLeftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
