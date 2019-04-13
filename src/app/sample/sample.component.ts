import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../../model/company';
import { UserContext } from '../../model/UserContext';
import { companyService } from '../../services/companyservice';
import { dataStore } from '../../services/dataStore';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, OnDestroy {

  private subscription$; Subscription;
  private model: UserContext;
  private selectedCompany: Company;

  constructor(
    private store: dataStore,
    private comapnyService: companyService,
  ) { }

  ngOnInit() {

    this.model = new UserContext();
    this.selectedCompany = new Company();

      this.subscription$ = this.store.root.subscribe((data: UserContext) => {
          this.model = data;

          if (data.selectedCompany)
            this.selectedCompany = data.selectedCompany;
      });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  public loadData() {
    this.comapnyService.LoadTestData();
  }

  
  public changeCompany(filterVal: any) {
    this.comapnyService.SetCompany(filterVal);
  }
}
