import { StepIngredient } from "./StepIngredient";

export interface Recipe {
    title: string;
    description: string;
    prep_time: number;
    cook_time: number;
    servings: number;
    original_recipe_url: string;
    img_url: string;

    ingredients: StepIngredient[];
    steps: StepIngredient[];
    collections?: { id: string; title: string }[];
    tags?: { id: string; title: string }[];
    // set by FE:
    total_time?: number;
    is_public?: boolean;
}