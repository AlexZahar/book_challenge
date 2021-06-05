import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },

  { path: 'collection', component: CollectionComponent },
  { path: 'editor', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
