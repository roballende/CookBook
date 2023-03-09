class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :created
    end
=begin
    id, username, (user_recipe)id, user_id, recipe_id, cooked
    7   name1      1   7                   true
    7   name1      2   7                   false
    8              3   8                    true
    9   name9       null null          null   null

    -  ------      -  7
    8  name2       3  8
=end
    def other_users
        render json: User.select("MIN(users.id) as id, 
                                  MIN(username) as username, 
                                  SUM (CASE
                                        WHEN cooked IS TRUE THEN 1
                                        ELSE 0
                                        END
                                    ) as cooked_dishes_count")
                        .joins("LEFT JOIN user_recipes on users.id = user_recipes.user_id")
                        .where.not(id: @current_user.id)
                        .group("user_recipes.user_id")
                        .order(cooked_dishes_count: :desc)
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end
end
