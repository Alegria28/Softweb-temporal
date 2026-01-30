import { Injectable, Inject, Renderer2, RendererFactory2, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import  { getQueryParam } from '../helpers/url.helper';

export interface ITheme {
  name: string,
  baseColor?: string,
  isActive?: boolean
}

@Injectable()
export class ThemeService {
  public onThemeChange :EventEmitter<ITheme> = new EventEmitter();
  public darkThemes :ITheme[]  = [{
    "name": "sophia-dark",
    "baseColor": "#000000",
    "isActive": false
  }];

  public sophiaThemes :ITheme[]  = [{
    "name": "sophia-dark",
    "baseColor": "#000000",
    "isActive": false
  }, {
    "name": "sophia-blue",
    "baseColor": "#03a9f4",
    "isActive": true
  },
  {
    "name": "sophia-pink",
    "baseColor": "#e91e63",
    "isActive": true
  },
  {
    "name": "sophia-green",
    "baseColor": "#4caf50",
    "isActive": true
  },{
    "name": "sophia-orange",
    "baseColor": "#ff9800",
    "isActive": true
  },
   {
    "name": "sophia-light-purple",
    "baseColor": "#7367f0",
    "isActive": false
  },
  {
    "name": "sophia-indigo",
    "baseColor": "#3f51b5",
    "isActive": false
  },
  {
    "name": "sophia-red",
    "baseColor": "#f44336",
    "isActive": false
  },  {
    "name": "sophia-teal",
    "baseColor": "#00bcd4",
    "isActive": false 
  },  {
    "name": "sophia-amber",
    "baseColor": "#ffc107",
    "isActive": false 
  }];
  public activatedTheme: ITheme;
  private renderer: Renderer2;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // Invoked in AppComponent and apply 'activatedTheme' on startup
  applyMatTheme( themeName: string) {

    this.activatedTheme = this.sophiaThemes.find(t => t.name === themeName); 
    this.flipActiveFlag(themeName);

    // *********** ONLY FOR DEMO **********
    this.setThemeFromQuery();
    // ************************************

    // this.changeTheme(themeName);
    this.renderer.addClass(this.document.body, themeName);

  }

  changeTheme(prevTheme, themeName: string) {
    this.renderer.removeClass(this.document.body, prevTheme);
    this.renderer.addClass(this.document.body, themeName);
    this.flipActiveFlag(themeName);
    this.onThemeChange.emit(this.activatedTheme);
  }

  flipActiveFlag(themeName:string) {
    this.sophiaThemes.forEach((t) => {
      t.isActive = false;
      if(t.name === themeName) {
        t.isActive = true;
        this.activatedTheme = t;
      }
    });
  }

  // *********** ONLY FOR DEMO **********
  setThemeFromQuery() {
    let themeStr = getQueryParam('theme');
    try {
      this.activatedTheme = JSON.parse(themeStr);
      console.log(this.activatedTheme);
      
      this.flipActiveFlag(this.activatedTheme.name);
    } catch(e) {}
  }
}
