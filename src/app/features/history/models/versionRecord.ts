export class VersionRecord {
  version!: string;
  changelog!: LogInfo;
}

export class LogInfo {
  entries!: Array<string>;
}

export class Dummy {
  version!: string;
  text!: string;
}
