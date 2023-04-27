declare namespace Cypress {
    interface Chainable<Subject> {
      saveLocalStorage(): void;
      restoreLocalStorage(): void;
      login(username: string, password: string);
    //   formRequestNoAlias(url: string, formData: FormData, alias: string);
    //   uploadFolder(offlinePackageFile: { path: string; fileName: string; folderName: string }): void;
    //   uploadFile(fixture: string, selector?: string, dynamicFileName?: boolean): Chainable<Subject>;
    //   uploadZipFile(filePath: string, selector?: string): void;
    //   preserveAuthCookies(): void;
    //   login(): void;
    //   promisify(): Promise<Subject>;
    }
  }