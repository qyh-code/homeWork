const { createToken } = require('../auth')
const model = require('../models/userModels')

module.exports = {
    login: async(ctx, next) => {
        let { username, password } = ctx.request.body;
        let results = await model.getUserByNameAndPwd(username, password);
        console.log(results);
        if (results.length) {
            let payload = {
                userId: Math.random(),
                username,
            };
            var token = createToken(payload);
            ctx.body = {
                state: 'success',
                token,
                loginUser: username
            }
        } else {
            ctx.body = 'fail';
        }

    },


    async checkUser(ctx) {
        console.log(ctx.query);
        let { inpVal } = ctx.query;
        let results = await model.getUserByUsername(inpVal);
        console.log(results);
        if (results.length > 0) {
            ctx.body = {
                state: 'fail'
            }
        } else {
            ctx.body = {
                state: 'success'
            }
        }
    },

    async regist(ctx) {
        let { username, password, nickname } = ctx.request.body;

        if (username.trim().length == 0) {
            ctx.body = {
                state: 'fail'
            }
        } else {
            let results = await model.saveUser({ username, password, nickname })
            console.log(results);
            if (results.insertId) {
                ctx.body = {
                    state: 'success'
                }
            } else {
                ctx.body = {
                    state: 'fail'
                }
            }

        }

    },

}