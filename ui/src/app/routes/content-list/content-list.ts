import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'content-list.html'
})
export class ContentListRoute {

  // isReady: boolean = false;
  // activeType: string = TYPES.ALL;
  // contents: Content[];
  //
  // constructor(private contentService: ContentService, private router: Router) {}
  //
  // ngOnInit(): void {
  //   this.contentService.getContents().subscribe((data) => {
  //     this.contents = data;
  //     this.isReady = true;
  //   });
  // }
  //
  // addOrEditContent(id?: string): void {
  //   let innerId = id || '';
  //   this.router.navigateByUrl('content/setup/' + innerId);
  // }
  //
  // removeContent(id: string): void {
  //   this.contentService.deleteContent(id).subscribe(() => {
  //     this.contents = this.contents.filter(function (item) {
  //       return item.id !== parseInt(id);
  //     });
  //   });
  // }
}
