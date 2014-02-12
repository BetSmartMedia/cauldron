#! /bin/sh
TEMP=$(mktemp -d tmp.XXXXXXXX)
wget https://github.com/BetSmartMedia/cauldron/archive/master.zip -O ${TEMP}/cauldron-master.zip
rm -fr scss/cauldron
unzip ${TEMP}/cauldron-master.zip -d ${TEMP}
cp -R ${TEMP}/cauldron-master/css/cauldron css/
cp -R ${TEMP}/cauldron-master/scss/cauldron scss/cauldron
cp -R ${TEMP}/cauldron-master/examples.html ./
rm -fr ${TEMP}