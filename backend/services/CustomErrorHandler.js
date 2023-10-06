class CustomErrorHandler extends Error {
    constructor(status, code) {
        super();
        this.status = status;
        this.message = code;
    }

    static wrongCredentials(message = "Wrong Credentials") {
        return new CustomErrorHandler(401, message);
    }

    static serverError(message = "Internal Server Error") {
        return new CustomErrorHandler(500, message);
    }
}

export default CustomErrorHandler;
