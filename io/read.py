import requests
import json

payload = json.dumps({
    "operation": "read",
    "payload": {
        "TableName": "lambda-apigateway",
        "Key": {
            "id": "0",
        }
    }
})

try:
    r = requests.post("https://8ljmba2dzi.execute-api.us-east-1.amazonaws.com/prod/DynamoDBManager", data=payload, headers={'Content-type': 'application/json'})
    r.raise_for_status()
    if json.loads(r.text)['body']:
        print('yes')
    else:
        print('nope')
except requests.exceptions.HTTPError as err:
    print(err)
