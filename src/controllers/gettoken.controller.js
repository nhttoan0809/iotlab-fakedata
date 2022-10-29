const jwt = require("jsonwebtoken");
const userModel = require("../models/account.model")
require("dotenv").config();

module.exports = (req, res) => {

    // Get data from body
    const username = req.body.username
    const password = req.body.password

    userModel.findOne({
        username, password
    }, (err, user) => {
        if(err){
            return res.json({
                status: "Failure"
            })
        }else{
            if(user){
                // Generate token
                
                console.log('user: ', user)
                
                const _id = user._id
                const username = user.username
                let token = user.token
                const newtoken = jwt.sign({ username, password }, process.env.SECRET_KEY);

                token.push(newtoken)

                userModel.findOneAndUpdate({
                    _id
                },{
                    token
                }
                , (err, docs) => {
                    if(err){
                        return res.json({
                            status: "Failure"
                        })
                    }else{
                        console.log('docs: ', docs)
                        return res.json({
                            status: "Successfully",
                            data: {
                                _id,
                                username,
                                token: newtoken
                            }
                        })
                    }
                })
            }else{
                return res.json({
                    status: "Failure"
                })
            }
        }
    })
}