[my-first-zoom-app_express](../README.md) › [Globals](../globals.md) › ["common/server"](_common_server_.md)

# Module: "common/server"

## Index

### Classes

* [ExpressServer](../classes/_common_server_.expressserver.md)

### Variables

* [app](_common_server_.md#const-app)
* [bodyParserMiddleware](_common_server_.md#const-bodyparsermiddleware)
* [bodyParserText](_common_server_.md#const-bodyparsertext)
* [bodyParserUrlEncoded](_common_server_.md#const-bodyparserurlencoded)
* [expressServer](_common_server_.md#const-expressserver)

## Variables

### `Const` app

• **app**: *Express‹›* = express()

*Defined in [server/common/server.ts:15](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/server.ts#L15)*

___

### `Const` bodyParserMiddleware

• **bodyParserMiddleware**: *function* = bodyParser.json({
  limit: process.env.REQUEST_LIMIT || '100kb',
})

*Defined in [server/common/server.ts:17](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/server.ts#L17)*

#### Type declaration:

▸ (`req`: IncomingMessage, `res`: ServerResponse, `next`: NextFunction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage |
`res` | ServerResponse |
`next` | NextFunction |

___

### `Const` bodyParserText

• **bodyParserText**: *function* = bodyParser.text({
  limit: process.env.REQUEST_LIMIT || '100kb',
})

*Defined in [server/common/server.ts:24](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/server.ts#L24)*

#### Type declaration:

▸ (`req`: IncomingMessage, `res`: ServerResponse, `next`: NextFunction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage |
`res` | ServerResponse |
`next` | NextFunction |

___

### `Const` bodyParserUrlEncoded

• **bodyParserUrlEncoded**: *function* = bodyParser.urlencoded({
  extended: true,
  limit: process.env.REQUEST_LIMIT || '100kb',
})

*Defined in [server/common/server.ts:20](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/server.ts#L20)*

#### Type declaration:

▸ (`req`: IncomingMessage, `res`: ServerResponse, `next`: NextFunction): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage |
`res` | ServerResponse |
`next` | NextFunction |

___

### `Const` expressServer

• **expressServer**: *[ExpressServer](../classes/_common_server_.expressserver.md)‹›* = new ExpressServer()

*Defined in [server/common/server.ts:133](https://github.com/waricoma/my-first-zoom-app/blob/ded8f9a/express/server/common/server.ts#L133)*
