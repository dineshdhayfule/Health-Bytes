import { useState, useCallback } from 'react';
import axios from 'axios';
import { Meal } from '../types/meal';

const SPOONACULAR_API_KEY = "c14ec4dbac3f434c9bc8f61b5955e60b";
const BASE_URL = 'https://api.spoonacular.com/recipes';


type MealTime = 'breakfast' | 'lunch' | 'dinner';

export const useFood = () => {
  const [weeklyMealPlan, setWeeklyMealPlan] = useState<Meal[][]>([]);
  const [dietType, setDietType] = useState<'vegetarian' | 'non-vegetarian'>('non-vegetarian');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [targetCalories, setTargetCalories] = useState<number>(2100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMeals = async (mealType: MealTime) => {
    const caloriesPerMeal = Math.round(targetCalories / 3);
    const tolerance = 100;

    // Create query parameters for ingredients
    const includeIngredients = ingredients.join('|'); // Use | as separator for OR logic
    const requireIngredients = ingredients.length > 1 ? ingredients[0] : ''; // Require at least the first ingredient

    const params = {
      apiKey: SPOONACULAR_API_KEY,
      number: 7,
      type: mealType,
      diet: dietType === 'vegetarian' ? 'vegetarian' : undefined,
      includeIngredients,
      ...(requireIngredients && { query: requireIngredients }), // Add main ingredient to query for better results
      minCalories: caloriesPerMeal - tolerance,
      maxCalories: caloriesPerMeal + tolerance,
      fillIngredients: true,
      addRecipeInformation: true,
      instructionsRequired: true,
      sort: 'max-used-ingredients', // Prioritize recipes that use more of the provided ingredients
      ranking: 2, // Minimize missing ingredients
    };

    try {
      const response = await axios.get(`${BASE_URL}/complexSearch`, { params });
      
      if (!response.data.results.length) {
        throw new Error(`No ${mealType} recipes found with the specified ingredients and criteria`);
      }

      const recipes = await Promise.all(
        response.data.results.map(async (result: any) => {
          const recipeInfo = await axios.get(`${BASE_URL}/${result.id}/information`, {
            params: { apiKey: SPOONACULAR_API_KEY }
          });

          // Calculate how many of our ingredients are used in this recipe
          const recipeIngredients = recipeInfo.data.extendedIngredients.map((ing: any) => 
            ing.name.toLowerCase()
          );
          const usedIngredientsCount = ingredients.filter(ing => 
            recipeIngredients.some((recipeIng: string | string[]) => recipeIng.includes(ing.toLowerCase()))
          ).length;

          return {
            id: result.id,
            name: result.title,
            image: result.image,
            description: recipeInfo.data.summary
              ? recipeInfo.data.summary.replace(/<[^>]*>/g, '').slice(0, 150) + '...'
              : 'No description available',
            calories: Math.round(result.nutrition?.nutrients?.find((n: any) => n.name === 'Calories')?.amount || 0),
            prepTime: recipeInfo.data.readyInMinutes,
            vegetarian: recipeInfo.data.vegetarian,
            type: mealType,
            ingredients: recipeInfo.data.extendedIngredients.map((ing: any) => ing.original),
            instructions: recipeInfo.data.analyzedInstructions[0]?.steps.map((step: any) => step.step) || [],
            usedIngredientsCount, // Add count of used ingredients
          };
        })
      );

      // Sort recipes by how many of our ingredients they use
      return recipes.sort((a, b) => b.usedIngredientsCount - a.usedIngredientsCount);
    } catch (error) {
      console.error(`Error fetching ${mealType} meals:`, error);
      throw error;
    }
  };

  const generateMealPlan = useCallback(async () => {
    if (!SPOONACULAR_API_KEY) {
      setError('API key is not configured. Please add your Spoonacular API key to the environment variables.');
      return;
    }

    if (ingredients.length === 0) {
      setError('Please add at least one ingredient to generate meal plans.');
      return;
    }

    if (targetCalories < 1200 || targetCalories > 4000) {
      setError('Please enter a daily calorie target between 1200 and 4000.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Fetch all meal types in parallel
      const [lunchMeals] = await Promise.all([
        fetchMeals('lunch'),
        // Uncomment below to add breakfast and dinner
        // fetchMeals('breakfast'),
        // fetchMeals('dinner'),
      ]);

      const weekPlan = Array.from({ length: 7 }, (_, i) => [
        // breakfastMeals[i],
        lunchMeals[i],
        // dinnerMeals[i],
      ]);

      setWeeklyMealPlan(weekPlan);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        setError('Invalid API key. Please check your Spoonacular API key configuration.');
      } else if (axios.isAxiosError(err) && err.response?.status === 402) {
        setError('API quota exceeded. Please try again later.');
      } else {
        setError('Failed to generate meal plan. Please try with different ingredients or criteria.');
      }
      console.error('Error generating meal plan:', err);
    } finally {
      setLoading(false);
    }
  }, [dietType, ingredients, targetCalories]);

  return {
    weeklyMealPlan,
    loading,
    error,
    dietType,
    setDietType,
    ingredients,
    setIngredients,
    targetCalories,
    setTargetCalories,
    generateMealPlan,
  };
};