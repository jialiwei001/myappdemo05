export interface IPerson {
  id?: number;
  name?: string;
  sex?: string;
  age?: number;
  height?: number;
  weight?: number;
}

export const defaultValue: Readonly<IPerson> = {};
