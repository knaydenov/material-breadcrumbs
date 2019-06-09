import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbDirective } from './breadcrumb.directive';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [BreadcrumbsComponent, BreadcrumbDirective],
  exports: [BreadcrumbsComponent, BreadcrumbDirective]
})
export class MaterialBreadcrumbsModule { }
