import dontenv from "dotenv"
import path from "path"

dontenv.config({path:path.join(process.cwd(),".env")})

const config={
    port:process.env.PORT
}
export default config