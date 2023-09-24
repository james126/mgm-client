import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponentStub } from 'src/test/header.component.stub';
import { RouterOutletStub } from 'src/test/router-outlet.component.stub';
import { FooterComponentStub } from 'src/test/footer.component.stub';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, HeaderComponentStub, RouterOutletStub, FooterComponentStub],
    providers: []
  }));

  it('create an instance of AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`default route is 'index'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.currentRoute).toEqual('index');
  });
});
