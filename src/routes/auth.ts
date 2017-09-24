import * as jwt from 'jwt-simple';
import { Request, Response } from "express";

const auth = {
    login: function (req: Request, res: Response) {
        const username = req.body.username || '';
        const password = req.body.password || '';
        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }
        // Fire a query to your DB and check if the credentials are valid
        var dbUserObj = auth.validate(username, password);
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }
        if (dbUserObj) {
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            res.json(genToken(dbUserObj.name)); 
            // TODO: HUH?
        }
    },
    validate: function (username: string, password: string) {
        // spoofing the DB response for simplicity
        var dbUserObj = { // spoofing a userobject from the DB. 
            name: username || 'arvind',
            role: 'admin',
            username: 'arvind@myapp.com',
            password: password
        };
        return dbUserObj;
    },
    validateUser: function (username: string) {
        // spoofing the DB response for simplicity
        var dbUserObj = { // spoofing a userobject from the DB. 
            name: username || 'arvind',
            role: 'admin',
            username: 'arvind@myapp.com'
        };
        return dbUserObj;
    },
}
// private method
function genToken(user: string) {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires
    }, require('../config/secret')());
    return {
        token: token,
        expires: expires,
        user: user
    };
}
function expiresIn(numDays: number) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}
module.exports = auth;