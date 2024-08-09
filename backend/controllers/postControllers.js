import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js'

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export async function register(req, res) {
    try {
      const { username, password, profile, email } = req.body;
  
      // Check if all required fields are present
      if (!username || !password || !email) {
        return res.status(400).send({ error: 'Missing required fields' });
      }
  
      // Check if username already exists
      const existingUser = await UserModel.findOne({ username });
      if (existingUser) {
        return res.status(400).send({ error: 'Please use a unique username' });
      }
  
      // Check if email already exists
      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail) {
        return res.status(400).send({ error: 'Please use a unique email' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || '',
        email,
      });
  
      // Save the user and return the response
      await newUser.save();
      return res.status(201).send({ msg: 'User Registered Successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal Server Error' });
    }
  }


  /** POST: http://localhost:8080/api/login 
* @param: {
"username" : "example123",
"password" : "admin123"
}
*/
export async function login(req,res){
 
const { username, password } = req.body;

try {
    
    UserModel.findOne({ username })
        .then(user => {
            bcrypt.compare(password, user.password)
                .then(passwordCheck => {

                    if(!passwordCheck) return res.status(400).send({ error: "Don't have Password"});

                    // create jwt token
                    const token = jwt.sign({
                                    userId: user._id,
                                    username : user.username
                                }, ENV.JWT_secret , { expiresIn : "24h"});

                    return res.status(200).send({
                        msg: "Login Successful...!",
                        username: user.username,
                        token
                    });                                    

                })
                .catch(error =>{
                    return res.status(400).send({ error: "Password does not Match"})
                })
        })
        .catch( error => {
            return res.status(404).send({ error : "Username not Found"});
        })

} catch (error) {
    return res.status(500).send({ error});
}
}
