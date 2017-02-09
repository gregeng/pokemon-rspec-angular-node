require 'httparty'

class Runner
  @@pid = nil

  def self.run
    @@pid = Process.spawn('cd ../server/ && npm start', {pgroup: true})
    @@frontend_pid = Process.spawn('cd ../client/ && ng serve', {pgroup: true})

    number_of_attempts = 0
    while number_of_attempts < 10
      begin
        response = HTTParty.get('http://localhost:3000/ping') # hit the ping endpoint
        frontend_response = HTTParty.get('http://localhost:4200')

        break if response.code == 200 && frontend_response.code == 200 # success!
      rescue Errno::ECONNREFUSED # rescue only if the exception is a failure to connect
        number_of_attempts += 1
        sleep 0.5
      end

      raise 'Failed to start api server' if number_of_attempts == 10
    end
  end

  def self.stop
    # kill the processes
    Process.kill(-9, @@pid)
    Process.kill(-9, @@frontend_pid)
  end
end