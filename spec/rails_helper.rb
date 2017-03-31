# This file is copied to spec/ when you run "rails generate rspec:install"
ENV["RAILS_ENV"] ||= "test"
require File.expand_path("../../config/environment", __FILE__)
# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require "spec_helper"
require "rspec/rails"
require "capybara/rails"

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

Capybara.javascript_driver = :webkit

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each, js: true) do
    DatabaseCleaner.strategy = :truncation
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    begin
      DatabaseCleaner.clean
    rescue Exception => e
  # Recover from thread locks and retry the database clean after a slight delay
      sleep 2
      DatabaseCleaner.clean
    end
  end

end

def sign_in(user)
  visit root_path
  click_link "Sign In"
  fill_in "Email", with: user.email
  fill_in "Password", with: user.password
  click_button "Log in"
end
