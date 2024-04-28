import { config } from "dotenv";config();
import express from "express";
import Config from "../Config/Config.json" assert { type: "json" }
import Listen from "../Modules/Listen.js"
import CrashHandler from "../Handlers/CrashHandler.js";
import Api from "../Routes/Api.js"

CrashHandler.Load()

const app = express();

app.use(`/api/v${Config.ApiVersion}`, Api)

// Listen
Listen(app, Config.Port)