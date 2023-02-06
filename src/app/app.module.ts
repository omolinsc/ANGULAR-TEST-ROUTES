import { MessagesService } from './components/shared/services/messages.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavigatorComponent } from './components/shared/navigator/navigator.component';
import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { NewMessageComponent } from './components/shared/new-message/new-message.component';
import { MessagesListComponent } from './components/shared/messages-list/messages-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/shared/character/character.component';
import { CharacterDetailComponent } from './components/shared/character-detail/character-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    NavigatorComponent,
    GalleryDetailComponent,
    NewMessageComponent,
    MessagesListComponent,
    // CharacterComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
