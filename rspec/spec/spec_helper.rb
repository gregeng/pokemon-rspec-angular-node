require 'runner'
require 'httparty'
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

  # Start up the Go server before all tests
  config.before(:suite) do
    Runner.run
  end

  # Stop the Go server after all of the tests
  config.after(:suite) do
    Runner.stop
  end

  config.before(:each) do
    require 'pry'
    binding.pry
  end
end

# Convenience method to make requests to the Go server
def get(path)
  HTTParty.get("http://localhost:3000#{path}")
end