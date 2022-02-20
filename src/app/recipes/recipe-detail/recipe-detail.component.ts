import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var id = +this.route.snapshot.params['id'];
    console.log('Recipe ' + id + ' selected')
    this.recipe = this.recipeService.getRecipes[id]
  }

  addIngredientsToSL() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
