import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontSizeDirective } from './font-size.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { sophiaSideNavToggleDirective } from './sophia-side-nav-toggle.directive';
import { sophiaSidenavHelperDirective, sophiaSidenavTogglerDirective } from './sophia-sidenav-helper/sophia-sidenav-helper.directive';
import { sophiaHighlightDirective } from './sophia-highlight.directive';


const directives = [
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
  sophiaSideNavToggleDirective,
  sophiaSidenavHelperDirective,
  sophiaSidenavTogglerDirective,
  sophiaHighlightDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule {}