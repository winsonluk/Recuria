#!/bin/sh

while true; do
  /usr/bin/pkill -f run.sh; /usr/bin/pkill -f python; cd ~/gpt_descriptions
  git commit -am "update" && git push --set-upstream origin master
  nohup nice -n -20 python ~/gpt_descriptions/generate_descriptions.py $(($(wc -l ~/gpt_descriptions/io/descriptions.txt | cut -f1 -d' ') + 1))
done &
