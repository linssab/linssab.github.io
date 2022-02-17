import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { TutorialsComponent } from './features/tutorials/tutorials.component';
import { TableComponent } from './shared/table/table.component';
import { DownloadComponent } from './features/download/download.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './features/history/history.component';
import { ContactComponent } from './features/contact/contact.component'

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    TutorialsComponent,
    TableComponent,
    DownloadComponent,
    HistoryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
