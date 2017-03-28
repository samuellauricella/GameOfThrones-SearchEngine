class HousesController < ApplicationController
  before_action :set_house, only: [:update, :destroy]

def index
end


def search
end

private
  def page
    params[:page] || 1
  end
end
