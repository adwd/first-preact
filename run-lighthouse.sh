#!/bin/sh
yarn run deploy
cd ./assets/images/scores
npx lighthouse-badges --urls https://my-preact-app.firebaseapp.com/
cd ../../../
