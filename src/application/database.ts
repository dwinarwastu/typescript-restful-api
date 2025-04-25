import { PrismaClient } from "@prisma/client"
import {logger} from "./logging";

export const prisma = new PrismaClient()

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "error"
        },
        {
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level: "warn"
        },
    ]
})

prismaClient.$on("error", err => {
    logger.error(err)
})

prismaClient.$on("query", err => {
    logger.error(err)
})

prismaClient.$on("info", err => {
    logger.error(err)
})

prismaClient.$on("warn", err => {
    logger.error(err)
})