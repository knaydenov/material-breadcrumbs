import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialBreadcrumbsModule } from 'material-breadcrumbs';
import { PageComponent } from './page/page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    children: [
      {
        path: '',
        component: PageComponent
      },
      {
        path: 'b',
        children: [
          {
            path: '',
            component: PageComponent
          },
          {
            path: 'c',
            component: PageComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    MaterialBreadcrumbsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
