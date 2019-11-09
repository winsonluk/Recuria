import os
import re
import sys
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

START = int(sys.argv[1])

with open('io/summaries.txt', 'r') as f, open('io/names.txt', 'r') as f2:
    counter = 0
    for line, line2 in zip(f, f2):
        counter += 1
        if counter < START:
            continue
        line = line2.strip() + ' is a software technology startup company. ' + line.strip()
        line = line.replace('<|endoftext|>', ' ')
        res = gpt2.generate(sess,
                length=80,
                top_p=0.25,
                temperature=1.2,
                prefix=line,
                return_as_list=True,
                )
        paragraph = res[0][len(line2) + 42:].replace('\n', ' ').replace('”', '"').replace('“', '"').rsplit('.', 1)[0].strip()
        paragraph = re.sub(r'(\d+)(\.)(\d+)', r'\1\3', paragraph)
        sentences = [x + '. ' for x in paragraph.split('. ') if '$' not in x and '€' not in x and '£' not in x and 'round' not in x.lower()]

        if ''.join(sentences).count('"') % 2 == 1:
            sentences[-1] = sentences[-1][:-1] + '"'
        else:
            sentences[-1] = sentences[-1][:-1]

        paragraph = ''.join(sentences) + '\n'
        with open('io/descriptions.txt', 'a') as g:
            g.write(paragraph)
        os.system('git push origin master')
