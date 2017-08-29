import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataTermsProvider {

  terms: Array<{term: string, description: string}>;

  constructor(private http: Http) {}

  getJsonData(): Observable<any> {
    return this.http.get('assets/data/terms.json')
      .map((res) => res.json());
  }

   filterItems(searchTerm) {
     return this.terms.filter((item) => {
       return item.term.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}
