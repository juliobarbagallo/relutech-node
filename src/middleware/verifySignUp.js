import { ROLES } from "../models/Role";

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLESincludes(req.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} doesn't exists`
                })
            }
        }
    }
    next();
}