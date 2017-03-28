class House < ApplicationRecord
  validates :name, presence: true
  validates :region, presence: true


  has_many :characters, through: :roles

end
