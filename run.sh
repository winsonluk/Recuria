#!/bin/sh

while true; do
  git commit -am "update";git push --set-upstream origin master
  nohup python ~/gpt_descriptions/generate_descriptions.py $(($(wc -l ~/gpt_descriptions/io/descriptions.txt | cut -f1 -d' ') + 1))
done
