import { AppState } from './app.reducer';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dato$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.dato$ = store.select<any>('mensaje');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  englishMessage() {
    this.store.dispatch({ type: 'ENGLISH' });
  }

}
