require 'runner'
require 'httparty'
require 'database_cleaner'
require 'capybara/rspec'

require_relative '../lib/models'
require_relative '../configuration'
require_relative '../lib/object_creation_methods'

RSpec.configure do |config|
  # Default RSpec configs
  config.filter_run :focus
  config.run_all_when_everything_filtered = true

  config.default_formatter = 'doc'

  config.order = :random

  Kernel.srand config.seed

  config.before(:suite) do
    Runner.run
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.start
    DatabaseCleaner.clean
  end

  config.after(:suite) do
    DatabaseCleaner.clean_with(:truncation)
    Runner.stop
  end

  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
  end

  Capybara.javascript_driver = :chrome
end

# Convenience method to make requests to the Go server
def get(path)
  HTTParty.get("http://localhost:3000#{path}")
end