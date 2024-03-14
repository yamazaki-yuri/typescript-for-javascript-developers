export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
//上記の型のうち、nameとweightのみ使う型を新たに作りたい
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' >
//heightのみを除外するやり方もある
type SmallProfile = Omit<DetailedProfile, 'height'>