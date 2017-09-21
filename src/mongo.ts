import { UpVoteDTO } from './dto/votes';
import * as mongodb from 'mongodb';
import * as url from 'url';
var server = new mongodb.Server('localhost', 27017);

var db = new mongodb.Db('mydb', server, { w: 1 });
db.open(function () { });


// function createRecord(record: UpVoteDTO) {
//     try {
//         console.log("go!");
//         var images_collection = db.collection('votes').insertOne(record);
//         var xx = images_collection;
//         console.log(xx);
//         // console.log("error");
//         // console.log(error);
//     }
//     catch (x) {
//         console.log('catch');
//         console.log(x);
//     }
//     console.log('done');
// }

async function createRecord(record: UpVoteDTO) {
    var urll = new url.URL('http://test');
    var myrecord = new UpVoteDTO(urll, 1,2);

    try {
        console.log("go!");
        var error2, vote_collection = await db.collection('books');
        //var error, xx = await vote_collection.insert(myrecord);

        console.log(vote_collection);
        // console.log(xx);
        // console.log("error");
        // console.log(error);
    }
    catch (x) {
        console.log('catch');
        console.log(x);
    }
    console.log('done');
}


async function getRecord() {
    console.log("go!");
    var error, images_collection = await db.collection('votes');
    console.log(images_collection);
    console.log("error");
    console.log(error);
}

async function upVote(record: UpVoteDTO) {
    
    console.log("go!");
    var error, images_collection = await db.collection('votes');
    console.log(images_collection);
    console.log("error");
    console.log(error);

}

async function downVote(record: UpVoteDTO) {
    console.log("go!");
    var error, images_collection = await db.collection('books');
    console.log(images_collection);
    console.log("error");
    console.log(error);

}


console.log('DONE');

export {
    createRecord,
    getRecord,
    upVote,
    downVote
}