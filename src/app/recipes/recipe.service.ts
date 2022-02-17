import { EventEmitter} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    onRecipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://i0.wp.com/therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg?resize=1000%2C1446&ssl=1',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else do you need to say?', 
            'https://media-cdn.tripadvisor.com/media/photo-s/18/9e/08/6c/shqiptari-burger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}