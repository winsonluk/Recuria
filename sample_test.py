import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess)

START_P = 0.1
START_T = 0.2

for i in [x * 0.1 for x in range(0, 9) if (START_P + x * 0.1) <= 1]:
    for j in [x * 0.2 for x in range(0, 10)]:
        print('top_p: ' + str(START_P + i) + '\ntemp: ' + str(START_T + j))
        gpt2.generate(sess,
                length=100,
                nsamples=3,
                top_p=START_P + i,
                temperature=START_T + j,
                prefix="PeopleLink's mission is delivering anything anytime without email. PeopleLink is the new social email app, now also using our SMS delivery app.  Our objective is bring people together, no matter where you or they are.",
                )
