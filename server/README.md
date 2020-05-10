# Server side of Food Recipe Recommendation App:
- Return JSON formatted response of the recommended food and its recipe based on your ingredients preference

## REST endpoint
- [POST /sign-in](#post-signin)
- [POST /get-recipe](#post-tasks)
---

> ## POST /sign-in

Sign in with email & password account

### Requests

#### _Header_
```json
{
  "Content-Type": "application/x-www-form-urlencoded"
}
```

#### _Body_
```json
{
  "email": "<your email>",
  "password": "<your password>"
}
```

### Responses

#### _Status 200 OK_
```json
{
  "access_token": "<your access token>"
}
```

#### _Status 400 Bad Request_
```json
{
  "messages": [
    "Invalid email/password"
  ]
}
```

#### _Status 500 Internal Server Error_
```json
{
  "messages": [ "Internal server error" ]
}
```

> ## POST /get-recipe

Get the recommended food and its recipe based on the ingredients preference

### Requests

#### _Header_
```json
{
  "Content-Type": "application/x-www-form-urlencoded",
  "access_token": "<your access token>"
}
```

#### _Body_
```json
{
  "ingredients": <your preference ingredients separated with comma. e.g.: "chicken,rice,cheese">,
}
```

### Responses

#### _Status 201 Created_
```json
{
  "recipe": {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6140a8d831731a20cbab5c58c090c6aa",
    "label": "Vidalia Onion Soup with Wild Rice and Blue Cheese recipes",
    "image": "https://www.edamam.com/web-img/4bf/4bf5530e127d99fecafb1d1efefeb427",
    "source": "Smitten Kitchen",
    "url": "http://smittenkitchen.com/2012/05/vidalia-onion-soup-with-wild-rice/",
    "shareAs": "http://www.edamam.com/recipe/vidalia-onion-soup-with-wild-rice-and-blue-cheese-recipes-6140a8d831731a20cbab5c58c090c6aa/chicken%2Crice%2Ccheese",
    "yield": 4,
    "dietLabels": [
      "Balanced"
    ],
    "healthLabels": [
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    "cautions": [
      "Sulfites"
    ],
    "ingredientLines": [
      "1/2 cup wild rice, uncooked",
      "3 tablespoons unsalted butter",
      "2 1/2 pounds (about 4) Vidalia onions, or other sweet onions, quartered and very thinly sliced",
      "6 cups chicken or vegetable stock",
      "herbs",
      "salt",
      "pepper",
      "8 slices baguette",
      "2 tablespoons extra-virgin olive oil",
      "4 ounces Maytag or other young, not too sharp, blue cheese, at room temperature"
    ],
    "ingredients": [
      {
        "text": "1/2 cup wild rice, uncooked",
        "weight": 80
      },
      {
        "text": "3 tablespoons unsalted butter",
        "weight": 42.599999999999994
      },
      {
        "text": "2 1/2 pounds (about 4) Vidalia onions, or other sweet onions, quartered and very thinly sliced",
        "weight": 1133.980925
      },
      {
        "text": "6 cups chicken or vegetable stock",
        "weight": 1440
      },
      {
        "text": "herbs",
        "weight": 29.169790175000003
      },
      {
        "text": "salt",
        "weight": 17.501874105000002
      },
      {
        "text": "pepper",
        "weight": 8.750937052500001
      },
      {
        "text": "8 slices baguette",
        "weight": 80
      },
      {
        "text": "2 tablespoons extra-virgin olive oil",
        "weight": 27
      },
      {
        "text": "4 ounces Maytag or other young, not too sharp, blue cheese, at room temperature",
        "weight": 113.3980925
      }
    ],
    "calories": 2431.3646354097755,
    "totalWeight": 2962.412722879913,
    "totalTime": 105,
    "totalNutrients": {
      "ENERC_KCAL": {
        "label": "Energy",
        "quantity": 2431.3646354097755,
        "unit": "kcal"
      },
      "FAT": {
        "label": "Fat",
        "quantity": 117.583252482414,
        "unit": "g"
      },
      "FASAT": {
        "label": "Saturated",
        "quantity": 52.869766204373306,
        "unit": "g"
      },
      "FATRN": {
        "label": "Trans",
        "quantity": 1.4004279999999998,
        "unit": "g"
      },
      "FAMS": {
        "label": "Monounsaturated",
        "quantity": 46.47388707329048,
        "unit": "g"
      },
      "FAPU": {
        "label": "Polyunsaturated",
        "quantity": 9.77116759486645,
        "unit": "g"
      },
      "CHOCDF": {
        "label": "Carbs",
        "quantity": 264.79802328496874,
        "unit": "g"
      },
      "FIBTG": {
        "label": "Fiber",
        "quantity": 29.932637764032503,
        "unit": "g"
      },
      "SUGAR": {
        "label": "Sugars",
        "quantity": 86.52120230662848,
        "unit": "g"
      },
      "PROCNT": {
        "label": "Protein",
        "quantity": 93.93972943969726,
        "unit": "g"
      },
      "CHOLE": {
        "label": "Cholesterol",
        "quantity": 219.83856937500002,
        "unit": "mg"
      },
      "NA": {
        "label": "Sodium",
        "quantity": 6871.560258368907,
        "unit": "mg"
      },
      "CA": {
        "label": "Calcium",
        "quantity": 1529.5109136066544,
        "unit": "mg"
      },
      "MG": {
        "label": "Magnesium",
        "quantity": 433.0046150512992,
        "unit": "mg"
      },
      "K": {
        "label": "Potassium",
        "quantity": 3951.7735012544185,
        "unit": "mg"
      },
      "FE": {
        "label": "Iron",
        "quantity": 48.10797396375072,
        "unit": "mg"
      },
      "ZN": {
        "label": "Zinc",
        "quantity": 14.059246624892165,
        "unit": "mg"
      },
      "P": {
        "label": "Phosphorus",
        "quantity": 1646.9072265197,
        "unit": "mg"
      },
      "VITA_RAE": {
        "label": "Vitamin A",
        "quantity": 588.8975774866749,
        "unit": "µg"
      },
      "VITC": {
        "label": "Vitamin C",
        "quantity": 71.8959794875,
        "unit": "mg"
      },
      "THIA": {
        "label": "Thiamin (B1)",
        "quantity": 1.82303966168945,
        "unit": "mg"
      },
      "RIBF": {
        "label": "Riboflavin (B2)",
        "quantity": 2.58180004784275,
        "unit": "mg"
      },
      "NIA": {
        "label": "Niacin (B3)",
        "quantity": 36.268822095205074,
        "unit": "mg"
      },
      "VITB6A": {
        "label": "Vitamin B6",
        "quantity": 3.1263931088352748,
        "unit": "mg"
      },
      "FOLDFE": {
        "label": "Folate equivalent (total)",
        "quantity": 407.51419767842503,
        "unit": "µg"
      },
      "FOLFD": {
        "label": "Folate (food)",
        "quantity": 577.129810428425,
        "unit": "µg"
      },
      "FOLAC": {
        "label": "Folic acid",
        "quantity": 53.6,
        "unit": "µg"
      },
      "VITB12": {
        "label": "Vitamin B12",
        "quantity": 1.4558767285,
        "unit": "µg"
      },
      "VITD": {
        "label": "Vitamin D",
        "quantity": 1.2059904625,
        "unit": "µg"
      },
      "TOCPHA": {
        "label": "Vitamin E",
        "quantity": 8.902021466686001,
        "unit": "mg"
      },
      "VITK1": {
        "label": "Vitamin K",
        "quantity": 544.7608335003175,
        "unit": "µg"
      },
      "WATER": {
        "label": "Water",
        "quantity": 2453.324486366929,
        "unit": "g"
      }
    },
    "totalDaily": {
      "ENERC_KCAL": {
        "label": "Energy",
        "quantity": 121.56823177048877,
        "unit": "%"
      },
      "FAT": {
        "label": "Fat",
        "quantity": 180.89731151140614,
        "unit": "%"
      },
      "FASAT": {
        "label": "Saturated",
        "quantity": 264.34883102186654,
        "unit": "%"
      },
      "CHOCDF": {
        "label": "Carbs",
        "quantity": 88.26600776165624,
        "unit": "%"
      },
      "FIBTG": {
        "label": "Fiber",
        "quantity": 119.73055105613001,
        "unit": "%"
      },
      "PROCNT": {
        "label": "Protein",
        "quantity": 187.87945887939452,
        "unit": "%"
      },
      "CHOLE": {
        "label": "Cholesterol",
        "quantity": 73.279523125,
        "unit": "%"
      },
      "NA": {
        "label": "Sodium",
        "quantity": 286.31501076537114,
        "unit": "%"
      },
      "CA": {
        "label": "Calcium",
        "quantity": 152.95109136066546,
        "unit": "%"
      },
      "MG": {
        "label": "Magnesium",
        "quantity": 103.096336916976,
        "unit": "%"
      },
      "K": {
        "label": "Potassium",
        "quantity": 84.0802872607323,
        "unit": "%"
      },
      "FE": {
        "label": "Iron",
        "quantity": 267.26652202083733,
        "unit": "%"
      },
      "ZN": {
        "label": "Zinc",
        "quantity": 127.81133295356513,
        "unit": "%"
      },
      "P": {
        "label": "Phosphorus",
        "quantity": 235.27246093138575,
        "unit": "%"
      },
      "VITA_RAE": {
        "label": "Vitamin A",
        "quantity": 65.4330641651861,
        "unit": "%"
      },
      "VITC": {
        "label": "Vitamin C",
        "quantity": 79.88442165277777,
        "unit": "%"
      },
      "THIA": {
        "label": "Thiamin (B1)",
        "quantity": 151.91997180745417,
        "unit": "%"
      },
      "RIBF": {
        "label": "Riboflavin (B2)",
        "quantity": 198.60000368021153,
        "unit": "%"
      },
      "NIA": {
        "label": "Niacin (B3)",
        "quantity": 226.6801380950317,
        "unit": "%"
      },
      "VITB6A": {
        "label": "Vitamin B6",
        "quantity": 240.49177760271343,
        "unit": "%"
      },
      "FOLDFE": {
        "label": "Folate equivalent (total)",
        "quantity": 101.87854941960626,
        "unit": "%"
      },
      "VITB12": {
        "label": "Vitamin B12",
        "quantity": 60.66153035416668,
        "unit": "%"
      },
      "VITD": {
        "label": "Vitamin D",
        "quantity": 8.039936416666666,
        "unit": "%"
      },
      "TOCPHA": {
        "label": "Vitamin E",
        "quantity": 59.34680977790667,
        "unit": "%"
      },
      "VITK1": {
        "label": "Vitamin K",
        "quantity": 453.9673612502646,
        "unit": "%"
      }
    },
    "digest": [
      {
        "label": "Fat",
        "tag": "FAT",
        "schemaOrgTag": "fatContent",
        "total": 117.583252482414,
        "hasRDI": true,
        "daily": 180.89731151140614,
        "unit": "g",
        "sub": [
          {
            "label": "Saturated",
            "tag": "FASAT",
            "schemaOrgTag": "saturatedFatContent",
            "total": 52.869766204373306,
            "hasRDI": true,
            "daily": 264.34883102186654,
            "unit": "g"
          },
          {
            "label": "Trans",
            "tag": "FATRN",
            "schemaOrgTag": "transFatContent",
            "total": 1.4004279999999998,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Monounsaturated",
            "tag": "FAMS",
            "schemaOrgTag": null,
            "total": 46.47388707329048,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Polyunsaturated",
            "tag": "FAPU",
            "schemaOrgTag": null,
            "total": 9.77116759486645,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      {
        "label": "Carbs",
        "tag": "CHOCDF",
        "schemaOrgTag": "carbohydrateContent",
        "total": 264.79802328496874,
        "hasRDI": true,
        "daily": 88.26600776165624,
        "unit": "g",
        "sub": [
          {
            "label": "Carbs (net)",
            "tag": "CHOCDF.net",
            "schemaOrgTag": null,
            "total": 234.86538552093623,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Fiber",
            "tag": "FIBTG",
            "schemaOrgTag": "fiberContent",
            "total": 29.932637764032503,
            "hasRDI": true,
            "daily": 119.73055105613001,
            "unit": "g"
          },
          {
            "label": "Sugars",
            "tag": "SUGAR",
            "schemaOrgTag": "sugarContent",
            "total": 86.52120230662848,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Sugars, added",
            "tag": "SUGAR.added",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      {
        "label": "Protein",
        "tag": "PROCNT",
        "schemaOrgTag": "proteinContent",
        "total": 93.93972943969726,
        "hasRDI": true,
        "daily": 187.87945887939452,
        "unit": "g"
      },
      {
        "label": "Cholesterol",
        "tag": "CHOLE",
        "schemaOrgTag": "cholesterolContent",
        "total": 219.83856937500002,
        "hasRDI": true,
        "daily": 73.279523125,
        "unit": "mg"
      },
      {
        "label": "Sodium",
        "tag": "NA",
        "schemaOrgTag": "sodiumContent",
        "total": 6871.560258368907,
        "hasRDI": true,
        "daily": 286.31501076537114,
        "unit": "mg"
      },
      {
        "label": "Calcium",
        "tag": "CA",
        "schemaOrgTag": null,
        "total": 1529.5109136066544,
        "hasRDI": true,
        "daily": 152.95109136066546,
        "unit": "mg"
      },
      {
        "label": "Magnesium",
        "tag": "MG",
        "schemaOrgTag": null,
        "total": 433.0046150512992,
        "hasRDI": true,
        "daily": 103.096336916976,
        "unit": "mg"
      },
      {
        "label": "Potassium",
        "tag": "K",
        "schemaOrgTag": null,
        "total": 3951.7735012544185,
        "hasRDI": true,
        "daily": 84.0802872607323,
        "unit": "mg"
      },
      {
        "label": "Iron",
        "tag": "FE",
        "schemaOrgTag": null,
        "total": 48.10797396375072,
        "hasRDI": true,
        "daily": 267.26652202083733,
        "unit": "mg"
      },
      {
        "label": "Zinc",
        "tag": "ZN",
        "schemaOrgTag": null,
        "total": 14.059246624892165,
        "hasRDI": true,
        "daily": 127.81133295356513,
        "unit": "mg"
      },
      {
        "label": "Phosphorus",
        "tag": "P",
        "schemaOrgTag": null,
        "total": 1646.9072265197,
        "hasRDI": true,
        "daily": 235.27246093138575,
        "unit": "mg"
      },
      {
        "label": "Vitamin A",
        "tag": "VITA_RAE",
        "schemaOrgTag": null,
        "total": 588.8975774866749,
        "hasRDI": true,
        "daily": 65.4330641651861,
        "unit": "µg"
      },
      {
        "label": "Vitamin C",
        "tag": "VITC",
        "schemaOrgTag": null,
        "total": 71.8959794875,
        "hasRDI": true,
        "daily": 79.88442165277777,
        "unit": "mg"
      },
      {
        "label": "Thiamin (B1)",
        "tag": "THIA",
        "schemaOrgTag": null,
        "total": 1.82303966168945,
        "hasRDI": true,
        "daily": 151.91997180745417,
        "unit": "mg"
      },
      {
        "label": "Riboflavin (B2)",
        "tag": "RIBF",
        "schemaOrgTag": null,
        "total": 2.58180004784275,
        "hasRDI": true,
        "daily": 198.60000368021153,
        "unit": "mg"
      },
      {
        "label": "Niacin (B3)",
        "tag": "NIA",
        "schemaOrgTag": null,
        "total": 36.268822095205074,
        "hasRDI": true,
        "daily": 226.6801380950317,
        "unit": "mg"
      },
      {
        "label": "Vitamin B6",
        "tag": "VITB6A",
        "schemaOrgTag": null,
        "total": 3.1263931088352748,
        "hasRDI": true,
        "daily": 240.49177760271343,
        "unit": "mg"
      },
      {
        "label": "Folate equivalent (total)",
        "tag": "FOLDFE",
        "schemaOrgTag": null,
        "total": 407.51419767842503,
        "hasRDI": true,
        "daily": 101.87854941960626,
        "unit": "µg"
      },
      {
        "label": "Folate (food)",
        "tag": "FOLFD",
        "schemaOrgTag": null,
        "total": 577.129810428425,
        "hasRDI": false,
        "daily": 0,
        "unit": "µg"
      },
      {
        "label": "Folic acid",
        "tag": "FOLAC",
        "schemaOrgTag": null,
        "total": 53.6,
        "hasRDI": false,
        "daily": 0,
        "unit": "µg"
      },
      {
        "label": "Vitamin B12",
        "tag": "VITB12",
        "schemaOrgTag": null,
        "total": 1.4558767285,
        "hasRDI": true,
        "daily": 60.66153035416668,
        "unit": "µg"
      },
      {
        "label": "Vitamin D",
        "tag": "VITD",
        "schemaOrgTag": null,
        "total": 1.2059904625,
        "hasRDI": true,
        "daily": 8.039936416666666,
        "unit": "µg"
      },
      {
        "label": "Vitamin E",
        "tag": "TOCPHA",
        "schemaOrgTag": null,
        "total": 8.902021466686001,
        "hasRDI": true,
        "daily": 59.34680977790667,
        "unit": "mg"
      },
      {
        "label": "Vitamin K",
        "tag": "VITK1",
        "schemaOrgTag": null,
        "total": 544.7608335003175,
        "hasRDI": true,
        "daily": 453.9673612502646,
        "unit": "µg"
      },
      {
        "label": "Sugar alcohols",
        "tag": "Sugar.alcohol",
        "schemaOrgTag": null,
        "total": 0,
        "hasRDI": false,
        "daily": 0,
        "unit": "g"
      },
      {
        "label": "Water",
        "tag": "WATER",
        "schemaOrgTag": null,
        "total": 2453.324486366929,
        "hasRDI": false,
        "daily": 0,
        "unit": "g"
      }
    ]
  },
  "bookmarked": false,
  "bought": false
}
```

#### _Status 400 Bad Request_
```json
{
  "messages": [
    "Please fill at least one ingredient"
  ]
}
```

#### _Status 403 Forbidden_
```json
{
  "messages": [ "Please sign in first" ]
}
```

#### _Status 500 Internal Server Error_
```json
{
  "messages": [ "Internal server error" ]
}
```