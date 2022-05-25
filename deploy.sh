#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/s930175/homework.git master:gh-pages

cd -