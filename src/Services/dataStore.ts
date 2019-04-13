import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserContext } from '../model/UserContext';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})

export class dataStore {

  private _userContext$: BehaviorSubject<UserContext>;
  private _dataStore: { root: UserContext };

  constructor( ) {

    this._dataStore = { root: new UserContext() };
    this._userContext$ = <BehaviorSubject<UserContext>>new BehaviorSubject(this._dataStore.root);
    }

    public get root() {
      return this._userContext$.asObservable();
    }

    public Load(companies: Company[]) {
      this._dataStore.root.companies = companies;
      this._userContext$.next(Object.assign({}, this._dataStore).root);
    }

    public SetCompany(selectedId: number) {

      const value: number = selectedId;
      const source = from(this._dataStore.root.companies);
      let data = source.pipe(filter(c => c.id == selectedId));

      data.subscribe( company =>  {
        this._dataStore.root.selectedCompany = company;
        this._userContext$.next(Object.assign({}, this._dataStore).root);
      });


    }

}