import { UpVote } from './dto/votes';
import * as mongodb from 'mongodb';
// import * as url from 'url';
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

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();


async function createRecord(record: UpVote) {

    try {
        console.log("go!");
        var vote_collection = await db.collection('books');
        var result = await vote_collection.insert(record);

        console.log(result.result);
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

async function upVote(voteId: number) {
    console.log("go!");
    var error, images_collection = await db.collection('votes');

    voteId++;

    console.log(images_collection);
    console.log("error");
    console.log(error);
}

async function downVote(record: number) {
    record++;
    console.log("go!");
    var error, images_collection = await db.collection('books');
    console.log(images_collection);
    console.log("error");
    console.log(error);
}

export {
    createRecord,
    getRecord,
    upVote,
    downVote
}