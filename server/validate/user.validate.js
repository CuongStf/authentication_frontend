const {
	body
} = require('express-validator/check')


module.exports.validate = (method) => {
	switch (method) {
		case 'signup':
			{
				return [
					body('email', 'Invalid email').exists().isEmail(),
					body('password')
					.isLength({
						min: 5
					}).withMessage('password must have least 5 character.')
				]
			}
	}
}