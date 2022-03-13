#!/bin/bash
cd /home/projects/ioasys-challenge
source environment/bin/activate
supervisord -c supervisord.conf
