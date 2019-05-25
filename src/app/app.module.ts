import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyPaintersComponent } from './party-painters/party-painters.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    PartyPaintersComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
