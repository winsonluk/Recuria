import requests
import json

START = 0

with open('names.txt') as names, open('pitches.txt') as pitches, open('descriptions.txt') as descriptions:
    counter = -1
    for name, pitch, description in zip(names, pitches, descriptions):

        counter += 1
        if counter < START:
            continue

        payload = json.dumps({
            "operation": "read",
            "payload": {
                "TableName": "lambda-apigateway",
                "Key": {
                    "id": str(counter),
                }
            }
        })

        try:
            r = requests.post("https://8ljmba2dzi.execute-api.us-east-1.amazonaws.com/prod/DynamoDBManager", data=payload, headers={'Content-type': 'application/json'})
            r.raise_for_status()
            if json.loads(r.text)['body']:
                continue
        except requests.exceptions.HTTPError as err:
            print(err)

        payload = json.dumps({
            "operation": "create",
            "tableName": "lambda-apigateway",
            "payload": {
                "Item": {
                    "id": str(counter),
                    "name": name,
                    "tagline": pitch,
                    "description": description,
                }
            }
        })

        try:
            r = requests.post("https://8ljmba2dzi.execute-api.us-east-1.amazonaws.com/prod/DynamoDBManager", data=payload, headers={'Content-type': 'application/json'})
            r.raise_for_status()
        except requests.exceptions.HTTPError as err:
            print(err)
