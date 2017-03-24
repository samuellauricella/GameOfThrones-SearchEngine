class CreateHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |t|
      t.string :name, null: false
      t.string :region, null: false
      t.string :overlord
      t.string :currentlord
      t.string :cadetbranch
    end
  end
end
