export class Analyst {
  summaryId: string;
  clientId: string;
  tenant: string;
  caseType: string;
  userId: string;
  caseStatus: string;
  caseStatusType: string;
  actionDT: string;
  accountReference: string;
  caseId: string;

  Analyst() {
    this.summaryId = undefined;
    this.clientId = undefined;
    this.tenant = undefined;
    this.caseType = undefined;
    this.userId = undefined;
    this.caseStatus = undefined;
    this.caseStatusType = undefined;
    this.actionDT = undefined;
    this.accountReference = undefined;
    this.caseId = undefined;
  }
}