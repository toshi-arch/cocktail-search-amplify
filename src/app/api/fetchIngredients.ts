export interface Ingredient {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  ingredient_name: string;
  type: number;
  ingredient_alcohol: number;
}

export const fetchIngredients = async () => {
  try {
    const apiUrl = process.env.liquor_app_ec2_IPv4;
    const response = await fetch(`${apiUrl}/ingredients/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch ingredients:', error);
    throw error;
  }
};