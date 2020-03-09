class RestaurantsController < ApplicationController

	def new
		@restaurant = Restaurant.new
	end

	def create
		binding.pry
		p 1
	end
	
	private 


	def restaurant_params
		params.require()
	end	
end


