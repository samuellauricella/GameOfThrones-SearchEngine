class CreateAnswer < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :title
      t.string :body, null: false
      t.belongs_to :user, null: false
      t.belongs_to :question, null: false
    end
  end
end
