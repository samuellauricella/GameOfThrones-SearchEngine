class Character < ApplicationRecord
  validates :name, presence: true
  validates :culture, presence: true
  validates :dateofbirth
  validates :dateofdeath
  validates :title
  validates :house
  validates :mother
  validates :father
  validates :spouse

  has_many :houses, through: :roles
end
