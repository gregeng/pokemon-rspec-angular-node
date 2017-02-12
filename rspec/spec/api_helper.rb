require 'spec_helper'
require 'httparty'
require 'runner'

RSpec.configure do |config|
  config.before(:suite) do
    Runner.run_api
  end
end

# Convenience method to make requests to the Go server
def get(path)
  HTTParty.get("http://localhost:4000#{path}")
end