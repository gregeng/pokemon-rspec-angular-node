#!/bin/sh

export NODE_ENV=production
export API_PORT=8080

# exit script if there are failures in any of the processes
set -e

cd client/

ng build --environment=prod --output-path=../server/dist/

cd ../server/

echo "***********************************************"
echo "Frontend and API starting on PORT :" $API_PORT
echo "***********************************************"

node ./bin/www