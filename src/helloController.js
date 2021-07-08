
/**
 * Simple GET request and response
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const sayHello = (req, res, next) => {
    res.send({message: 'Hello in JSON!!!'})
}

/**
 * Request takes a parameter and returns in response
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const sayHelloWithParameter = (req, res, next) => {
    const requestParameter = req.params.name;
    
    res.send({message: `Hello ${requestParameter}`})
}


module.exports= {
    sayHello,
    sayHelloWithParameter
}