
export const validateRequest = (Schema, target = "body") => {
    return (req, res, next) => {
        const { error, value } = Schema.validate(req[target], {
            abortEarly: false,
        });

        if (error) {
            return res.status(400).json({
                error: "Dữ liệu không hợp lệ",
                details: error.details.map((err) => err.message),
            });
        }

        req[target] = value;
        next();
    };
};
