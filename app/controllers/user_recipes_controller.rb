class UserRecipesController < ApplicationController

    # data preloading ... includes, eager_load, preload
    def index
        user_id = params[:user_id] || @current_user.id
        render json: UserRecipe.includes(:user, :recipe).where(user_id: user_id).order(favorite: :desc), status: :ok
    end

    def show
        user_recipe = UserRecipe.find(params[:id])
        render json: user_recipe, status: :ok
    end

     def create
        recipe = @current_user.user_recipes.create!(user_recipe_params)
        render json: recipe, status: :created
    end

    def update
        user_recipe = UserRecipe.find(params[:id])
        user_recipe.update!(user_recipe_params)
        render json: user_recipe, status: :ok
    end

    def destroy
        user_recipe = UserRecipe.find(params[:id]).destroy!
        render json: {}
    end
    
    private

    def user_recipe_params
        params.permit(:recipe_id, :cooked, :favorite)
    end

    def user_recipe
        @user_recipe ||= UserRecipe.find_by(user: @current_user, recipe_id: params[:recipe_id])
    end
end
