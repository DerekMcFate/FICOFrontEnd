export class Queue {
    summaryId: string;
    caseId: string;
    tenant: string;
    userId: string;
    clientId: string;
    queueName: string;
    caseStatus: string;
    caseStatusType: string;
    caseCreationDT: string;
    queueProcessDT: string;
    caseType: string;
    caseLevel: string;
  
    Queue() {
      this.summaryId = undefined;
      this.caseId = undefined;
      this.tenant = undefined;
      this.userId = undefined;
      this.clientId = undefined;
      this.queueName = undefined;
      this.caseStatus = undefined;
      this.caseStatusType = undefined;
      this.caseCreationDT = undefined;
      this.queueProcessDT = undefined;
      this.caseType = undefined;
      this.caseLevel = undefined;
    }
  }