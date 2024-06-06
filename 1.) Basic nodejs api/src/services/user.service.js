import UserModel from "../models/user.model.js";

class UserService {

    async create(data) {
        const user = await UserModel.create(data);
        return user;
    }

    async findOne(query) {
        const user = await UserModel.findOne(query);
        return user;
    }

}

export default new UserService();