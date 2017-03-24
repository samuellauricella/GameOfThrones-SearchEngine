class CreateFavChar < ActiveRecord::Migration[5.0]
  def change
    create_table :fav_chars do |t|
      t.belongs_to :user, index: true
      t.belongs_to :character, index: true
    end
  end
end
