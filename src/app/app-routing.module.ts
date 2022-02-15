import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { DownloadComponent } from './features/download/download.component';
import { HistoryComponent } from './features/history/history.component';
import { HomeComponent } from './features/home/home.component';
import { TutorialsComponent } from './features/tutorials/tutorials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
