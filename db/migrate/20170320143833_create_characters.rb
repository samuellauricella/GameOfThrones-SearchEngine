class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :culture, null: false
      t.string :dateofbirth
      t.string :dateofdeath
      t.string :title
      t.string :house
      t.string :mother
      t.string :father
      t.string :spouse

    end
  end
end
