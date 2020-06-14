[my-first-zoom-app_express](../README.md) › [Globals](../globals.md) › ["common/logger"](_common_logger_.md)

# Module: "common/logger"

## Index

### Variables

* [l](_common_logger_.md#const-l)

## Variables

### `Const` l

• **l**: *BaseLogger‹› & object* = pino({
  name: process.env.APP_ID || 'express',
  level: process.env.LOG_LEVEL || 'debug',
})

*Defined in [server/common/logger.ts:3](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/logger.ts#L3)*
