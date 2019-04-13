import { Company } from './Company';

export class UserContext {
    selectedCompany: Company;
    companies: Company[];
    showLoading: boolean = false;
    errorMessage: string = "";
}