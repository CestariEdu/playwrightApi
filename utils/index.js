const Ajv = require('ajv');

const ajv = new Ajv({ strict: false });

function validateSchema(file, body) {
    const valid = ajv.validate(file, body);

    if (!valid) {
        return JSON.stringify(ajv.errors);
    }

    return 'Success';
}

module.exports = {
    validateSchema
}
