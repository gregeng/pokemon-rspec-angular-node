require 'httparty'

class Runner
  API_PORT = 3000
  FRONTEND_PORT = 4200

  @@pid = nil
  @@frontend_pid = nil

  def self.run
    @@pid = Process.spawn('cd ../server/ && npm start', {pgroup: true}) unless `lsof -Pi :#{API_PORT} -sTCP:LISTEN -t`
    @@frontend_pid = Process.spawn('cd ../client/ && ng serve', {pgroup: true}) unless `lsof -Pi :#{FRONTEND_PORT} -sTCP:LISTEN -t`

    number_of_attempts = 0
    while number_of_attempts < 10
      begin
        response = HTTParty.get("http://localhost:#{API_PORT}/ping") # hit the ping endpoint
        frontend_response = HTTParty.get("http://localhost:#{FRONTEND_PORT}")

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
    Process.kill(-9, @@pid) if @@pid
    Process.kill(-9, @@frontend_pid) if @@frontend_pid
  end
end