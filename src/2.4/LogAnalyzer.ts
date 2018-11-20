export class LogAnalyzer {

  private isLastFileNameValid: boolean =  null;
  get wasLastFileNameValid(): boolean {
    return this.isLastFileNameValid;
  }
  set wasLastFileNameValid(isValid: boolean) {
    this.isLastFileNameValid = isValid;
  }


  isValidLogFileName(fileName: string): boolean {
    this.wasLastFileNameValid = false;

    if (fileName === null || fileName === '') {
      throw new Error('filname has to be provided');
    }

    if (!/\.SLF$/i.test(fileName)) {
      return false;
    }
    this.wasLastFileNameValid = true;
    return true;
  }
}
