import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";

(async function () {
    const PORT = process.env.PORT ?? 3000;
    const app = await NestFactory.create<NestExpressApplication>({});
    await app.listen(PORT);
})()