#! /bin/sh
if [ -n "$1" ]; then
  mkdir tmp
  curl https://github.com/BetSmartMedia/cauldron/archive/master.zip -o tmp/cauldron-master.zip
  rm -fr scss/cauldron
  unzip tmp/cauldron-master.zip -d tmp
  cp tmp/css/examples.css css/examples.css
  cp tmp/scss/cauldron scss/cauldron
  cp tmp/examples.html ./
  rm -fr tmp
  echo -e "\e[1;Cauldron updated!.\e[0m"

else
  echo "Usage: ./update-cauldron.sh"
fi
