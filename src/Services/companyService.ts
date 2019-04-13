import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserContext } from '../model/UserContext';
import { Company } from '../model/company';
import { dataStore } from './dataStore';
import { CIRCULAR } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})

export class companyService {

    constructor(
        private store: dataStore) {
      }

      public LoadTestData() {

        const mockData: Company[] = [];

        let c1 = new Company();
        c1.id = 100;
        c1.name = "Microsoft";
        c1.city = "Redmond";
        c1.state = "WA";
        c1.postalCode = "98052"
        mockData.push(c1);

        let c2 = new Company();
        c2.id = 200;
        c2.name = "Google";
        c2.city = "Mountain View";
        c2.state = "CA";
        c2.postalCode = "94043"
        mockData.push(c2);

        let c3 = new Company();
        c3.id = 300;
        c3.name = "Game Stop";
        c3.city = "Grapevine";
        c3.state = "TX";
        c3.postalCode = "76051"
        mockData.push(c3);


        this.store.Load(mockData);
      }

      public SetCompany(selectedId: number) {
        this.store.SetCompany(selectedId);
      }

}