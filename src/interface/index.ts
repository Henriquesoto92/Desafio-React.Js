export type OptionsProps = {
  id: number;
  label: string;
};

export type Curse = OptionsProps[];

export type CoutryCity = {
  id: number;
  label: string;
  citys: OptionsProps[];
}[];

export type Subscribed = {
  name: string;
  curse: string;
  state: string;
  city: string;
  date: string;
}[];
