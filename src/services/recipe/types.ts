export enum Category {
  salty = "salty",
  sweet = "sweet",
}

export type Recipe = {
  id: string;
  name: string;
  category: Category;
  ingredients: string[];
  preparation: string;
  image: string;
};
