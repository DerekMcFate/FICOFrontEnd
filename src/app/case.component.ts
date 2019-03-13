export class Case {
    clientId: string;
    queueName: string;
    tenant: string;
    caseType: string;
    caseLevel: string;
    userId: string;
    caseStatus: string;
    fraudType: string;
    caseStatusType: string;
    accountRefId: string;
    caseId: string;
  
    Case() {
      this.clientId = undefined;
      this.queueName = undefined;
      this.tenant = undefined;
      this.caseType = undefined;
      this.caseLevel = undefined;
      this.userId = undefined;
      this.caseStatus = undefined;
      this.fraudType = undefined;
      this.caseStatusType = undefined;
      this.accountRefId = undefined;
      this.caseId = undefined;
    }
  }