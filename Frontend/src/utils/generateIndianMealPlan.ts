// src/utils/geminiMealApi.ts
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const API_KEY = 'AIzaSyATQbSSZw38Uye1Gz_-x21mIA-06zjLx5g';
export async function generateIndianMealPlan(
  dietType: 'vegetarian' | 'non-vegetarian',
  targetCalories: number,
  availableIngredients: string[]
): Promise<string> {
  const apiKey = API_KEY; // Use your actual API key here;
  if (!apiKey) {
    throw new Error('Missing Gemini API key. Please set VITE_GEMINI_API_KEY in .env file.');
  }

  // Construct clear, structured prompt
  const prompt = `
I want you to generate a weekly Indian meal plan.

- Diet Type: ${dietType}
- Daily Calorie Target: ${targetCalories} kcal
- Available Ingredients: ${availableIngredients.join(', ')}

Constraints:
- Create a 7-day meal plan (breakfast, lunch, dinner).
- Ensure total daily calories ≈ ${targetCalories} kcal.
- Prefer recipes that use mostly the provided ingredients.
- Mention approximate calories per meal.
- Format response as:

Day 1:
  Breakfast: ..., Calories: ...
  Lunch: ..., Calories: ...
  Dinner: ..., Calories: ...

Only return the structured plan. Do not add extra explanation.
`;

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Gemini returns content under data.candidates[0].content.parts[0].text
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Invalid Gemini response format.');
  }

  return text.trim();
}
