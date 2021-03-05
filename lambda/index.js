const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient({ region: "REGION" });

// ======================
// GET ALL ANIMALS
// ======================
exports.handler = async (event, context) => {
  var params = {
    TableName: "Animals",
  };

  try {
    const data = await docClient.scan(params).promise();
    console.log("scan succeeeded:", JSON.stringify(data, null, 2));
    const res = {
      statusCode: 200,
      data,
    };
    return res;
  } catch (e) {
    console.log(e);
  }
};

// ======================
// GET ANIMAL BY ID
// ======================
exports.handler = async (event, context) => {
  var params = {
    TableName: "Animals",
    Key: {
      animalId: event.pathParameters.animalId,
    },
  };

  // event.pathParameters.animalId
  try {
    const data = await docClient.get(params).promise();
    console.log("scan succeeeded:", JSON.stringify(data, null, 2));
    var response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data.Item),
    };

    return response;
  } catch (err) {
    console.log(
      "unable to read items. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
};

// ======================
// CREATE ANIMAL
// ======================
exports.handler = async (event, context) => {
  var params = {
    TableName: "Animals",
    Item: {
      animalId: event.animal.animalId,
      animalDesc: event.animal.animalDesc,
      imageUrl: event.animal.imageUrl,
      animalName: event.animal.animalName,
      residence: event.animal.residence,
      sanctuary: event.animal.sanctuary,
      animalType: event.animal.animalType,
    },
  };

  try {
    const data = await docClient.put(params).promise();
    console.log("scan succeeeded:", JSON.stringify(data, null, 2));
    const response = {
      message: "Successfully added animal",
      animal: params.Item,
    };
    return response;
  } catch (err) {
    console.log(
      "unable to read items. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
};

// ======================
// UPDATE ANIMAL BY ID
// ======================
exports.handler = async (event, context) => {
  var expressions = {
    animalDesc: ":des",
    imageUrl: ":img",
    animalName: ":nm",
    residence: ":res",
    sanctuary: ":sanc",
    animalType: ":tp",
  };

  var updateExpression = `animalDesc = ${expressions.animalDesc}, imageUrl = ${expressions.imageUrl}, animalName = ${expressions.animalName}, residence = ${expressions.residence}, sanctuary = ${expressions.sanctuary}, animalType = ${expressions.animalType}`;

  const body = JSON.parse(event.body);

  var params = {
    TableName: "Animals",
    Key: {
      animalId: event.pathParameters.animalId,
    },
    UpdateExpression: `set ${updateExpression}`,
    ExpressionAttributeValues: {
      ":des": body.animal.animalDesc,
      ":img": body.animal.imageUrl,
      ":nm": body.animal.animalName,
      ":res": body.animal.residence,
      ":sanc": body.animal.sanctuary,
      ":tp": body.animal.animalType,
    },
  };

  try {
    const data = await docClient.update(params).promise();
    var response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(params.ExpressionAttributeValues),
    };

    return response;
  } catch (err) {
    console.log(
      "unable to read items. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
};

// ======================
// DELETE ANIMAL BY ID
// ======================
exports.handler = async (event, context, callback) => {
  var params = {
    TableName: "Animals",
    Key: {
      animalId: event.pathParameters.animalId,
    },
  };

  try {
    const data = await docClient.delete(params).promise();
    var response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    callback(null, response);
  } catch (err) {
    console.log(
      "unable to read items. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  }
};
