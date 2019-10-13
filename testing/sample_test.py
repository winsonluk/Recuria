import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

START_P = 0.1
START_T = 0.8

for i in [x * 0.1 for x in range(0, 6) if (START_P + x * 0.1) <= 1]:
    for j in [x * 0.2 for x in range(0, 5)]:
        print('top_p: ' + str(START_P + i) + '\ntemp: ' + str(START_T + j))
        gpt2.generate(sess,
                length=180,
                nsamples=5,
                top_p=START_P + i,
                temperature=START_T + j,
                prefix="Dotino is a SaaS Project Management Software Compiler.",
                )

