const asyncHandeler = (requestHandeler) => {
    (req,res,next) => {
        promise.resolve(requestHandeler (req,res,next)).catch
        ((err) => next (err))
    }
}

export {asyncHandeler};