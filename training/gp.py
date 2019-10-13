import gpt_2_simple as gpt2

model_name = "774M"
gpt2.download_gpt2(model_name=model_name)   # model is saved into current directory under /models/124M/

sess = gpt2.start_tf_sess()
gpt2.finetune(sess,
              'techcrunch_posts.txt',
              model_name=model_name,
              multi_gpu=True,
              steps=50001)   # steps is max number of training steps

gpt2.generate(sess)
