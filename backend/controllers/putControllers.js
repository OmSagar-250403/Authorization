import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js'


/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) 
{
    try 
    {
        const id = req.query.id;
        if (!id) {
            return res.status(404).send({ error: "User Not Found..." });
        }
    
        const body = req.body;
        if (!body) {
            return res.status(400).send({ error: "Invalid request body" });
        }
    
        const updateUserPromise = UserModel.updateOne({ _id: id }, body).exec();
        const result = await updateUserPromise;
        return res.status(201).send({ msg: "Record Updated..." });
    } 
    
    catch (error) 
    {
      console.error(error); // log the error for debugging purposes
      return res.status(500).send({ error: "Internal Server Error" });
    }
    
  }