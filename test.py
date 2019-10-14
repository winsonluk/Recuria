import re

st = "PlayNow's mission is reliable and Trusted Carriers for Origination and Online Transfer. The company has over 30 years of experience in the transportation and transportation industry. It’s a business. And it’s not just a tech company. It’s a big business. And it has become very successful. The company has been growing steadily. It’s now at 55 employees, and it’s now booking more than $50 million in annual revenue. And the company is still growing. In 2013, the company saw $13."

if bool(re.search('\$\d+\.$', st)):
    st = st + 'million.'

print(st)
