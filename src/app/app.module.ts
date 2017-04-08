import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { TestComponent, DialogOverviewExampleComponent } from './feature/test/test.component';
import { HomeComponent } from './feature/home/home.component';
import { ToolbarComponent } from './feature/toolbar/toolbar.component';
import { FlexComponent } from './feature/flex/flex.component';
import { FlexrComponent } from './feature/flexr/flexr.component';
import { FormComponent } from './feature/form/form.component';

export const appRoutes: Routes = [
  // { path: 'test', component: TestComponent },
  // { path: 'browse', component: BrowseComponent },
  { path: 'test', component: TestComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'flexr', component: FlexrComponent },
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestComponent,
    HomeComponent,
    ToolbarComponent,
    DialogOverviewExampleComponent,
    FlexComponent,
    FlexrComponent,
    FormComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogOverviewExampleComponent],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
