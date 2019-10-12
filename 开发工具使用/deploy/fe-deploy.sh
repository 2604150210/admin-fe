#!/bin/sh

GIT_HOME=/developer/git-repository/
DEST_PATH=/product/front/

if [ ! -n "$1" ];
then
	echo -e "please input a project name! You cant input as follows:"
	echo -e "./fe-deploy.sh admin-fe"
	exit
fi

if [ $1 = "admin-fe" ];
then
	echo -e "--------Enter Project-------------"
	cd $GIT_HOME$1 
else
	echo -e "Invalid Project Name!"
	exit
fi

# clean dist
echo -e "--------Clean dist-------------"
rm -rf ./dist

echo -e "--------git pull-------------"
git pull

echo -e "--------yarn install-------------"
yarn

echo -e "--------yarn run dist-------------"
yarn run dist

if [ -d "./dist" ];
then
	echo -e "--------clean dist-------------"
	rm -rf $DEST_PATH/dist

	echo -e "--------copy dist-------------"
	cp -R ./dist $DEST_PATH/$1/

	echo -e "--------Deploy Success-------------"
else
	echo -e "--------Deploy Fail-------------"
fi
