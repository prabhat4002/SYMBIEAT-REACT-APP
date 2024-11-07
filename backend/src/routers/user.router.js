
import { Router } from 'express'; 
import { sample_users } from '../data.js';
import jwt from 'jsonwebtoken';
import { BAD_REQUEST } from '../constants/httpStatus.js';
const router=Router();
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user=sample_users.find(
        user=> user.email === email && user.password===password

);
if (user){
    res.send(generateTokenResponse(user));
    return;
}
    res.status(BAD_REQUEST).send('Username or password in invalid');
    return;

});

const generateTokenResponse=user=>{
    const token=jwt.sign(
        {
            id: user.id,
            emial:user.emial,
            isAdmin: user.isAdmin,
        },
        'SomeRandomText',
        {
            expiresIn:'30d',
        }
    );
    return {
        id: user.id,
        emial:user.emial,
        name:user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
}

export default router;
