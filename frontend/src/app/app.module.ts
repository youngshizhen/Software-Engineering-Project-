import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { Frame1Component } from './frames/frame1/frame1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavsComponent } from './navs/navs.component';
import { AppRoutingModule } from './app-routing.module';
import { Frame2Component } from './frames/frame2/frame2.component';
import { IndexComponent } from './index/index.component';
import { DialogComponent } from './frames/frame2/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    Frame1Component,
    NavsComponent,
    Frame2Component,
    IndexComponent,
    DialogComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        AppRoutingModule,
        MatDialogModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [DialogComponent]
})
export class AppModule { }
