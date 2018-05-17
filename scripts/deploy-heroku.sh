# Cleaning previous export
rm -rf .tmp/
mkdir .tmp

# Build documentation
build-storybook -c config/storybook -o .tmp

# Copying special Heroku files
cp -v config/heroku/* config/heroku/.* .tmp/
mkdir .tmp/dist
cp -rv shared/dist/* .tmp/dist/
mkdir .tmp/fonts
cp -rv shared/fonts/* .tmp/fonts/

# Adding Heroku remote
cd .tmp/
git init
heroku git:remote -a pattern-library-cl

# Commiting changes
git add -A
git commit -m "Updating exported storybook"

# Deploying on Heroku
git push --force heroku master

# Returning to project root
cd ../
