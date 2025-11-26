require("dotenv").config()

const config={
    app:{
        name:process.env.APP_NAME || "defualt app",
        version:process.env.APP_VERSION || "1.1.1"
    }
}


module.export = config