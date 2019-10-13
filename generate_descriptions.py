import gc
import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

with open('io/pitches.txt') as f:
    gc.collect()
    for line in f:
        line = line[0].lower() + line[1:]
        line = 'Dotino is a technology company. Dotino\'s mission is ' + line.strip()
        res = gpt2.generate(sess,
                length=120,
                top_p=0.25,
                temperature=1.2,
                prefix=line,
                return_as_list=True,
                )
        with open('io/descriptions.txt', 'a+') as g:
            g.write(res[0][32:].replace('\n', ' ').rsplit('.', 1)[0].strip() + '.\n')
