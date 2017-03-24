class CreateFavHouse < ActiveRecord::Migration[5.0]
  def change
    create_table :fav_houses do |t|
      t.belongs_to :user, index: true
      t.belongs_to :house, index: true
    end
  end
end
