import { GetAllNewsAction, DeleteNewsByIdAction, EditNewsByIdAction } from './../../store/actions/list-news';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/list-news';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  public table: any;

  constructor(
    private store: Store<object>,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.gettUnits).subscribe(
      (value) => {
        this.table = value;
      }
    );

    this.store.dispatch(new GetAllNewsAction());
  }

  public deleteRow(id: any) {
    this.store.dispatch(new DeleteNewsByIdAction(id));
  }

  public editRow(id: any) {
    this.dialog.open(EditComponent, {
      panelClass: 'main',
      data: { id },
    });

  }

}
