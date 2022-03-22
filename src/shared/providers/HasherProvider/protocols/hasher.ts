export interface Hasher {
  createHash(text: string): Promise<string>;

  compareHash(payload: string, hashed: string): Promise<boolean>;
}
