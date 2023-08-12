import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';

const verifyStructureMiddleware = (modelStructure) => {
    return (req, res, next) => {
        if (!req.rateLimit) return;
        let { payload } = req.data;
        const { iat, exp, ...newPayload } = payload;
        payload = newPayload;
        let Clone = JSON.stringify(classToPlain(plainToClass(modelStructure, {}, { ignoreDecorators: true })));
        let Verify = Clone === JSON.stringify(payload);
        (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
    }
};

export default verifyStructureMiddleware;