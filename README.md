# Animals App
## About
    Full stack app built with AWS and React
    AWS Services Used:
    - DynamoDB
    - Lambda Functions
    - API Gateway
    - AWS Amplify / Cognito
## Documentation
### GET `/animals` - Get all animals
Sample Response:
    {
        "statusCode": 200,
        "data": {
            "Items": [
                {
                    "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
                    "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
                    "animalType": "mammal",
                    "animalId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
                    "residence": "South America",
                    "animalName": "Kinkajou (Honey Bear)",
                    "sanctuary": "Lone Pine Koala Sanctuary"
                },
                {
                    "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
                    "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
                    "animalType": "mammal",
                    "animalId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcbdf",
                    "residence": "South America",
                    "animalName": "Kinkajou (Honey Bear)",
                    "sanctuary": "Lone Pine Koala Sanctuary"
                }
            ],
            "Count": 2,
            "ScannedCount": 2
        }
    }
<hr>
### GET `/animals/:animalID` - Get animal by ID
Sample response:
    {
        "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
        "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
        "animalType": "mammal",
        "animalId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        "residence": "South America",
        "animalName": "Kinkajou (Honey Bear)",
        "sanctuary": "Lone Pine Koala Sanctuary"
    }
<hr>
### POST `/animals` - Add animal
Sample response:
    {
        "message": "Successfully added animal",
        "animal": {
            "animalId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
            "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
            "animalName": "Kinkajou (Honey Bear)",
            "residence": "South America",
            "sanctuary": "Lone Pine Koala Sanctuary",
            "animalType": "mammal"
        }
    }
Sample body request:
    {
        "animal" : {
            "animalId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
            "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
            "animalName": "Kinkajou (Honey Bear)",
            "residence": "South America",
            "sanctuary": "Lone Pine Koala Sanctuary",
            "animalType": "mammal"
        }
    }
<hr>
### PUT `/animals/:animalID` - Update animal
Sample response:
    {
        ":des": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
        ":img": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
        ":nm": "Kinkajou (Honey Bear)",
        ":res": "South America",
        ":sanc": "Lone Pine Koala Sanctuary",
        ":tp": "aviary"
    }
Sample body request:
    {
        "animal": {
            "animalDesc": "Kinkajous are small, golden brown, tree-dwelling mammals that are native to Central and South American rainforests. Also known as honey bears, kinkajous have become popular in the exotic pet trade. They are generally friendly, playful, and curious when raised in captivity. However, they are easy to startle and might become aggressive with their owners. Plus, they can be difficult to house, as they require lots of room for exercise. And they need a varied diet that mimics what they would eat in the wild. Overall, this is a high-maintenance pet that requires a knowledgable and committed owner.",
            "imageUrl": "https://www.thesprucepets.com/thmb/TuZWEEBtLWJLu5NBd9OVrNOyVIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200207822-001-56a2bcde3df78cf7727960a2.jpg",
            "animalName": "Kinkajou (Honey Bear)",
            "residence": "South America",
            "sanctuary": "Lone Pine Koala Sanctuary",
            "animalType": "aviary"
        }
    }
<hr>
### DELETE `/animals/:animalID` - Delete animal
### Deletes animal. No need for body request. Pass in `:animalId` in params