import {createIdea} from './doc.service.js';

export const createIdeaOne = async(req,res)=>{
    try {
        const ideaOne = await createIdea(req.body);
        res.status(200).json({
            _id:ideaOne._id,
            fullName:ideaOne.fullName,
            email:ideaOne.email,
            idea:ideaOne.idea
        });
        return ideaOne;
    } catch (error) {
        res.status(400).json({
            error,
            message:error.message
        });
    };
};