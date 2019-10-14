import gc
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

with open('io/pitches.txt') as f, open('io/names.txt') as f2:
    gc.collect()
    for line, line2 in zip(f, f2):
        line = line[0].lower() + line[1:]
        line2 = line2[:-1]
        line = line2 + ' is a technology company. ' + line2 + '\'s mission is ' + line.strip() + '.'
        res = gpt2.generate(sess,
                length=100,
                top_p=0.2,
                temperature=1.3,
                prefix=line,
                return_as_list=True,
                )
        with open('io/descriptions.txt', 'a+') as g:
            g.write(res[0][len(line2) + 26:].replace('\n', ' ').rsplit('.', 1)[0].strip() + '.\n')
