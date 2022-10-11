export interface Repository {
  exists(t: any): Promise<boolean>;
  delete(t: any): Promise<void>;
  save(t: any): Promise<void>;
}
