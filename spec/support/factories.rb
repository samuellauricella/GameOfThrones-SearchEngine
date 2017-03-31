FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    first_name 'John'
    last_name 'Smith'
    password "password"
    password_confirmation "password"
  end

  factory :question do
    body 'Hold the door'
    title 'home the door'
  end
end
