export interface CocktailName {
  Name: string
}

export interface CocktailByIngredient {
  IngredientName: string;
  CocktailName: CocktailName[];
}


export const fetchCocktailByIngredient = async (name: string | string[] | undefined) => {
  try {
    const apiUrl = process.env.liquor_app_ec2_IPv4;
    const response = await fetch(`${apiUrl}/cocktails/${name}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch cocktails:', error);
    throw error;
  }
};
