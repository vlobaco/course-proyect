import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    @Injectable()
    onIngredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.onIngredientsChanged.emit(this.ingredients.slice());
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.onIngredientsChanged.emit(this.ingredients.slice());
    }
}