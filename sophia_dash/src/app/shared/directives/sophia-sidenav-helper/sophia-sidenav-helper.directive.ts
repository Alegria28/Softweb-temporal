import {
  Directive,
  OnInit,
  OnDestroy,
  HostBinding,
  Input,
  HostListener
} from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { MatchMediaService } from "app/shared/services/match-media.service";
import { sophiaSidenavHelperService } from "./sophia-sidenav-helper.service";
import { MatSidenav } from "@angular/material/sidenav";
import { MediaObserver } from "@angular/flex-layout";

@Directive({
  selector: "[sophiaSidenavHelper]"
})
export class sophiaSidenavHelperDirective implements OnInit, OnDestroy {
  @HostBinding("class.is-open")
  isOpen: boolean;

  @Input("sophiaSidenavHelper")
  id: string;

  @Input("isOpen")
  isOpenBreakpoint: string;

  private unsubscribeAll: Subject<any>;

  constructor(
    private matchMediaService: MatchMediaService,
    private sophiaSidenavHelperService: sophiaSidenavHelperService,
    private matSidenav: MatSidenav,
    private mediaObserver: MediaObserver
  ) {
    // Set the default value
    this.isOpen = true;

    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.sophiaSidenavHelperService.setSidenav(this.id, this.matSidenav);

    if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
      this.isOpen = true;
      this.matSidenav.mode = "side";
      this.matSidenav.toggle(true);
    } else {
      this.isOpen = false;
      this.matSidenav.mode = "over";
      this.matSidenav.toggle(false);
    }

    this.matchMediaService.onMediaChange
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
          this.isOpen = true;
          this.matSidenav.mode = "side";
          this.matSidenav.toggle(true);
        } else {
          this.isOpen = false;
          this.matSidenav.mode = "over";
          this.matSidenav.toggle(false);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

@Directive({
  selector: "[sophiaSidenavToggler]"
})
export class sophiaSidenavTogglerDirective {
  @Input("sophiaSidenavToggler")
  public id: any;

  constructor(private sophiaSidenavHelperService: sophiaSidenavHelperService) {}

  @HostListener("click")
  onClick() {
    // console.log(this.sophiaSidenavHelperService.getSidenav(this.id))
    this.sophiaSidenavHelperService.getSidenav(this.id).toggle();
  }
}
