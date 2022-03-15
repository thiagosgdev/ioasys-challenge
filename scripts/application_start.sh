#!/bin/bash

#give permission for everything in the project directory
sudo chmod -R 777 /home/ec2-user/projects/ioasys-challenge

#navigate into the working directory where all github files are
cd /home/ec2-user/projects/ioasys-challenge

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
yarn --network-timeout 1000000000

#start our node app in the background
pm2 start ioasys-challenge