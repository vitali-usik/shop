import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './services/content.service';
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'mg-application',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../assets/core.styl'],
  providers: [ContentService, LocalStorageService]
})
export class AppComponent {

  constructor(private router: Router) {
  }
}
