#!/bin/sh
yarn run lighthouse

mv ./*.report.html lighthouse/
git add lighthouse
git commit -m "run lighthouse"
