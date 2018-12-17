# !/bin/bash
REGEXP='v([0-9]+\.[0-9]+)'
if [[ $TRAVIS_TAG =~ $REGEXP ]];
then
    eval "$(ssh-agent -s)"
    chmod 600 deploy_rsa
    ssh-add deploy_rsa
    ssh -a $USER@$HOST "
rm -rf split-view
git clone --depth=50 --branch=$TRAVIS_TAG https://github.com/CrutchAndBike/split-view.git 
cd split-view
~/.nvm/versions/node/v11.3.0/bin/npm ci
~/.nvm/versions/node/v11.3.0/bin/npm run build
exit
"
fi