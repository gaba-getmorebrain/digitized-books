import { Component, NgZone} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  
  constructor(private http: HttpClient, private _ngZone: NgZone) {
    this.loadBook('assets/text.txt');
    window.angularComponent = {
        globalLoadBook: this.loadBook.bind(this),
        zone: _ngZone
    };
  }

  

  public loadBook(bookPath) {
    this.http.get(bookPath, {responseType: 'text'})
    .subscribe(
        data => {
            this.showBook(data);
            //console.log(data);
        },
        error => {
            console.log(error);          
        }
    );
  }

  public showBook(book: string) {
    parseBitmark(book);
  }

}


