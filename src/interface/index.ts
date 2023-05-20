export type OptionsProps = {
  value: string;
  label: string;
};

export type Curse = OptionsProps[];

export type CoutryCity = {
  value: string;
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
