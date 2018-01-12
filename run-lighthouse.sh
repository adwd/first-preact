#!/bin/sh
yarn run deploy
cd ./assets/images/scores
yarn run lighthouse
cd ../../../
