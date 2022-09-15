db.comments.insertMany([
    {
    'name':'Neha',
    'lang':'JS',
    'id':2
},
{
    'name':'Nehassss',
    'lang':'JS',
    'id':3
},
{
    'name':'Nehass',
    'lang':'JS',
    'id':4
},

])

db.comments.find({id : {$lt:3}})
db.comments.find({id : {$lt:41}, id: {$gt:3}})
db.comments.find({$or :[{id:41},{rating:3}]})
db.comments.find({$or:[{id:{$gt:3}},{id:{$lt:41}}]})

//aggregation
var pipeline=[
    {$sort:{"name":1}},
    {$limit:2},
    {$group: {"_id":"name"}}
];
db.comments.aggregate(pipeline);

//limit
db.comments.find().limit(2);
db.comments.find().skip(2);
db.comments.find().limit(2).skip(2);

//updates
db.comments.updateMany({name:'Neha'},{$set:{
    name:'Neha ji'}
})

// mechanism of finding and displaying only required feilds :: projections

 db.comments.find({},{'name':1})

 // min aggregarion
 var min =[
    {
        $group:{
            _id:"$name",
            minn:{$min:"$id"}
        }
    }
 ]

 db.comments.aggregate(min)
