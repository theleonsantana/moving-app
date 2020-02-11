class WelcomeController < ApplicationController
  def index
    render json: { status: 200, message: "Moving App API" }
  end
end
