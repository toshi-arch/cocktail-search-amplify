export interface Cocktail {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string
    DeletedAt: string | null;
    cocktail_name: string;
    cocktail_alcohol: number;
    recipe: string;
}

export const fetchCocktails = async () => {
    try {
        const apiUrl = process.env.liquor_app_ec2_IPv4;
        const response = await fetch(`${apiUrl}/cocktails/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Failed to fetch ingredients:', error);
        throw error
    }
}
