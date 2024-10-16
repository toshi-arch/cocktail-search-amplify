export interface Cocktail {
  Name: string;
  Recipe: string;
  Ingredients: Ingredient[];

}

export interface Ingredient {
  Name: string;
  Amount: number;
  Unit: number;
}

export const fetchCocktailByName = async (name: string) => {
  try {
    const apiUrl = process.env.liquor_app_ec2_IPv4;
    const response = await fetch(`${apiUrl}/cocktail/${name}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch cocktail:', error);
    throw error;
  }
};