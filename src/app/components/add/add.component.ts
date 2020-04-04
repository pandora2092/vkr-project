import { AddNewsAction } from './../../store/actions/list-news';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.styl']
})
export class AddComponent implements OnInit {

  @ViewChild('addForm') addForm;

  public addName = '';
  public addCode = '';
  public addManuscript = '';
  public addInfo = '';
  public addBibliography = '';

  constructor(private store: Store<object>) { }

  ngOnInit() {
  }

  public addNews() {
    this.store.dispatch(new AddNewsAction(this.addName, this.addCode, this.addManuscript, this.addInfo, this.addBibliography));
  }

}
