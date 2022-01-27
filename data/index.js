const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zacwalker93:tinky0070@vucluster.pkbtr.mongodb.net/vuglidb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
