#!/bin/sh

# exit script if there are failures in any of the processes
set -e

cd client/

npm install

ng build --environment=prod --output-path=../server/dist/

echo "***********************************************"
echo " Built frontend source files for production    "
echo "***********************************************"
