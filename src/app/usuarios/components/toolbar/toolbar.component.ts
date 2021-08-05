import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { show } from '../../../store/actions/dialogAgregarEditar.action';
import { AppState } from '../../../store/app.reducer';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  

  showDialog(){
  
    this.store.dispatch( show( { mostrar: true } ) )

  }
}
