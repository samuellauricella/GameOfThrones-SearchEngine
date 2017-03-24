class HousesController < ApplicationController
  before_action :set_house, only: [:update, :destroy]

def index
  render json {
    houses: House.paginate(page: page)
      .order(sort_by + ' ' + order)

      page: page,
      pages: House.pages
  }

end


def search
  query = params[:query]
  houses = House.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                       "%#{query}%", "%#{query}%", "%#{query}%")
                .paginate(page: page)
  render json: houses
end

private
    ...
    def page
      params[:page] || 1
    end
  end
end
