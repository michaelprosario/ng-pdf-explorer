import { Component } from '@angular/core';
import { FindResultMatchesCount, FindState, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-pdf-explorer';


  public highlightAll = false;
  public matchCase = false;
  public wholeWord = false;
  public ignoreAccents = false;

  public _searchtext = '';
  findState: FindState;
  currentMatchNumber: number | undefined;
  totalMatches: number | undefined;

  public get searchtext(): string {
    return this._searchtext;
  }

  public set searchtext(text: string) {
     if (this.ngxExtendedPdfViewerService.find(
              text,
              { highlightAll: this.highlightAll,
                matchCase: this.matchCase,
                wholeWords: this.wholeWord,
                ignoreAccents: this.ignoreAccents})) {
      this._searchtext = text;
    }
  }

  constructor(private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService) {
    this.findState = FindState.NOT_FOUND;
  }

  public findNext(): void {
    this.ngxExtendedPdfViewerService.findNext();
  }

  public findPrevious(): void {
    this.ngxExtendedPdfViewerService.findPrevious();
  }

  public updateFindState(result: FindState) {
    this.findState = result;
  }

  public updateFindMatchesCount(result: FindResultMatchesCount) {
    this.currentMatchNumber = result.current;
    this.totalMatches = result.total;
  }

  public onFind(){
    alert(this.searchtext);
  }
    
}
