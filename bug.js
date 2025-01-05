```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650417924857000000000000")}, {"$inc": {"field": value}});
```