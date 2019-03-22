export class FPRScore {
    scoreId: string;
    tenant: string;
    clientId: string;
    modelName: string;
    modelCreationCR: string;
    fraudXFLG: string;
    caseLevel: string;
    caseType: string;
    caseStatusType: string;
    caseStatus: string;
  
    FPRScore() {
      this.scoreId = undefined;
      this.tenant = undefined;
      this.clientId = undefined;
      this.modelName = undefined;
      this.modelCreationCR = undefined;
      this.fraudXFLG = undefined;
      this.caseLevel = undefined;
      this.caseType = undefined;
      this.caseStatusType = undefined;
      this.caseStatus = undefined;
    }
  }