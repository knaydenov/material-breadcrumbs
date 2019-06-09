import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'breadcrumb'
})
export class BreadcrumbDirective {

  @Input() label: string;
  @Input() routerLink: any[] | string;
  
  constructor() { }

}
