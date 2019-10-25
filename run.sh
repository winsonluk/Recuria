#!/bin/sh

while true; do
  nohup python ~/gpt_descriptions/generate_descriptions.py $(($(wc -l ~/gpt_descriptions/io/descriptions.txt | cut -f1 -d' ') + 1))
done &
