class Character < ApplicationRecord
  validates :name, presence: true
  validates :culture, presence: true

  has_many :houses, through: :roles
end
