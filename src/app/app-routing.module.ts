import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { EditorComponent } from './pages/editor/editor.component';
import { WizzardComponent } from './pages/wizzard/wizzard.component';

const routes: Routes = [
  { path: '', component: CollectionComponent },

  { path: 'collections', component: CollectionComponent },
  { path: 'edit/:id', component: EditorComponent },
  { path: 'wizzard', component: WizzardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
