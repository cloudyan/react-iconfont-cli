#!/usr/bin/env bash

rm -rf snapshots/*

cp -f ./scripts/config/demo-js.json ./iconfont.json
npx ts-node src/commands/createIcon.ts

cp -f ./scripts/config/demo-ts.json ./iconfont.json
npx ts-node src/commands/createIcon.ts

# test
cp -f ./scripts/config/demo3.json ./iconfont.json
npx ts-node src/commands/createIcon.ts
