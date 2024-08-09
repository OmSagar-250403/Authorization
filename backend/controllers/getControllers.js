import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js'

/** GET: http://localhost:8080/api/user/:username */
export async function getUser(req, res) 
{
  const { username } = req.params;

  try {
    if (!username) {
      return res.status(400).send({ error: "Invalid Username" });
    }

    // Use async/await with findOne
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "Couldn't Find the User" });
    }

    // Remove password from user object before sending response
    const { password, ...rest } = user.toJSON();

    return res.status(200).send(rest);
  } 
  
  catch (error) 
  {
    console.error(error);
    return res.status(500).send({ error: "Cannot Find User Data" });
  }
}
