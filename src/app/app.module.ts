import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ContentAreaComponent } from './pages/content-area/content-area.component';
import { CardComponent } from './components/card/card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EditorComponent,
    CollectionComponent,
    SideNavigationComponent,
    ContentHeaderComponent,
    ContentAreaComponent,
    CardComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
