#!/bin/sh

# exit script if there are failures in any of the processes
set -e

echo "***********************************************"
echo " Compiling frontend files for production      "
echo "***********************************************"

./build_for_production.sh

echo "***********************************************"
echo " Deploying to heroku                          "
echo "***********************************************"

./heroku_deploy.sh

echo "***********************************************"
echo " DEPLOY COMPLETE!!!!                          "
echo "***********************************************"