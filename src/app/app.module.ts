import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { NewsListEffects } from './store/effects/list-news';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './components/edit/edit.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ContactComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers()),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      NewsListEffects
    ]),
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  exports: [
    EditComponent
  ],
  entryComponents: [
    EditComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {}},
	  { provide: MAT_DIALOG_DATA, useValue: []},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
