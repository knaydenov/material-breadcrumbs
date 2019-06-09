import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { BreadcrumbDirective } from '../breadcrumb.directive';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @ContentChildren(BreadcrumbDirective) breadcrumbs: QueryList<BreadcrumbDirective>


  constructor() { }

  ngOnInit() {
  }

}
