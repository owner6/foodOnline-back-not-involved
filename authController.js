const db = require('./DB/models');
class authController {
    async registration(req, res) {
        try {
            const { firstname, lastname, email, password, phone } = req.body;
            const candidate = await db.User.findOne({ where: { email } });
    
            if (candidate) {
                return res.status(500).json({ message: 'A user with the same username already exists' });
            }
    
            const newUser = await db.User.create({
                email,
                password, 
                firstname,
                lastname,
                phone
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
