import app from "./server";
import "reflect-metadata"
import "dotenv/config"
import { PORT } from "./config/env";

const initializeApp = async () => {
    try {
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });   
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error establishing database connection:", error.message);
            console.error("Stack trace:", error.stack);
        } else {
            console.error("Unknown error:", error);
        }
    }
}
