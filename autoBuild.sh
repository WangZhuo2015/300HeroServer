git reset --hard origin/master
git clean -f
git pull origin master
npm install
forever restart bin/www
forever restart WebHook.js