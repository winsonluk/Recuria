import gc
import re
import sys
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

START = int(sys.argv[1])

with open('io/summaries.txt') as f, open('io/names.txt') as f2:
    counter = 0
    for line, line2 in zip(f, f2):
        counter += 1
        if counter < START:
            continue
        line = line2.strip() + ' is a software technology startup company. ' + line.strip()
        line = line.replace('<|endoftext|>', ' ')
        res = gpt2.generate(sess,
                length=100,
                top_p=0.2,
                temperature=1.3,
                prefix=line,
                return_as_list=True,
                )
        res[0] = res[0][len(line2) + 42:].replace('\n', ' ').rsplit('.', 1)[0].strip()
        if bool(re.search('\$\d+$', res[0])):
            res[0] = res[0] + '8 million'
        res[0] = res[0] +  '.\n'
        with open('io/descriptions_with_summaries.txt', 'a+') as g:
            g.write(res[0])
        del line
        del line2
        del res
        gc.collect()
