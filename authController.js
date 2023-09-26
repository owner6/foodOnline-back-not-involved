const User = require('./models/User')
const Role = require('./models/Role')
const bCrypt = require('bcryptjs')

class authController {
    async registration(req, res) {
        try {
            const { username, password } = req.body;
            const candidate = await User.findOne({ where: { username } });
    
            if (candidate) {
                return res.status(500).json({ message: 'A user with the same username already exists' });
            }
    
            const newUser = await User.create({
                username,
                password, 
            });
    
            return res.json({ message: 'User successfully registered' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Error during registration' });
        }
    }

    async login(req, res) {
        try {
            
        } catch (e) {
            console.error(e);
            res.status(500).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            res.json('server work')
        } catch (e) {
            console.error(e);
            res.status(500).json({message: 'getUsers error'})
        }
    }
}

module.exports = new authController();
