import json
import requests
import sys

START = 0

with open('names.txt') as names, open('pitches.txt') as pitches, open('descriptions.txt') as descriptions:
    counter = -1
    for name, pitch, description in zip(names, pitches, descriptions):

        counter += 1
        if counter < START or counter + 1 not in [164, 255, 315, 378, 451, 476, 499, 537, 545, 636, 712, 756, 786, 875, 930, 981, 1010, 1039, 1071, 1213, 1238, 1298, 1330, 1340, 1462, 1508, 1679, 1688, 1766, 1814, 1846, 1902, 1946, 1957, 2030, 2034, 2060, 2062, 2122, 2162, 2178, 2246, 2288, 2382, 2444, 2480, 2550, 2642, 2696, 2710, 2721, 2737, 2739, 2748, 2752, 2775, 2805, 2850, 2885, 2939, 2999, 3043, 3067, 3072, 3091, 3114, 3129, 3153, 3187, 3222, 3242, 3272, 3292, 3293, 3301, 3311, 3317, 3318, 3434, 3464, 3467, 3468, 3646, 3691, 3728, 3757, 3782, 3787, 3789, 3858, 3940, 4010, 4012, 4095, 4114, 4162, 4177, 4284, 4295, 4411, 4420, 4431, 4573, 4728, 4850, 4996, 5023, 5072, 5083, 5085, 5149, 5223, 5262, 5275, 5323, 5357, 5365, 5458, 5567, 5611, 5673, 5684, 5718, 5824, 5850, 5858, 5884, 5909, 5934, 5943, 5964, 5989, 6005, 6008, 6039, 6042, 6051, 6071]:
            continue

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
            print(counter + 1)
            r = requests.post("https://8ljmba2dzi.execute-api.us-east-1.amazonaws.com/prod/DynamoDBManager", data=payload, headers={'Content-type': 'application/json'})
            r.raise_for_status()
        except requests.exceptions.HTTPError as err:
            print(err)
            sys.exit()
