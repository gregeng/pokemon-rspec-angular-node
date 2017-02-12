#!/bin/sh

# exit script if there are failures in any of the processes
set -e

echo "***********************************************"
echo " Committing distribution files                 "
echo "***********************************************"

git add server/dist/
git commit -m "Created production distribution on: $(date)"
git subtree push --prefix server heroku master