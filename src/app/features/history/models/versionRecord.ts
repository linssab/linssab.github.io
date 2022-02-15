export class VersionRecord {
  version!: string;
  changelog!: LogInfo;
}

export class LogInfo {
  entries!: Array<string>;
}
