export enum Categories {
  drinksAndCreams = "Bebidas e cremes",
  biscuitsAndCrackers = "Biscoitos e bolachas",
  cakesAndLittleCakes = "Bolos e bolinhos",
}
export interface NutritionalInfo {
  totalEnergy: number;
  servingEnergy: number;
  totalCarbs: number;
  servingCarbs: number;
  totalProteins: number;
  servingProteins: number;
  totalLipids: number;
  servingLipids: number;
  totalSodium: number;
  servingSodium: number;
  totalPotassium: number;
  servingPotassium: number;
}

export interface GraphInfo {
  leucine: number;
  totalLeucine: number;
  servingLeucine: number;
  tirosine: number;
  totalTirosine: number;
  servingTirosine: number;
  fenil: number;
  totalFenil: number;
  servingFenil: number;
  metiotine: number;
  totalMetiotine: number;
  servingMetiotine: number;
}

export interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  preparation: string[];
  servings: string;
  nutritionalInformation: NutritionalInfo[];
  graphInformation: GraphInfo[];
}

export interface MajorCategory {
  category: Categories;
  image: string;
  recipe: Recipe[];
}
