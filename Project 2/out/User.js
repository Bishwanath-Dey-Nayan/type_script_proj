"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.repocount = userResponse.public_repos;
        this.followercount = userResponse.followers;
    }
    return User;
}());
exports.User = User;
