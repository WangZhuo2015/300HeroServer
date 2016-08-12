git reset --hard origin/master
git clean -f
git pull origin master
npm install
chmod u+x autoBuild.sh
forever restart bin/www
forever restart WebHook.js