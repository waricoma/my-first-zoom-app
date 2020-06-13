[my-first-zoom-app_express](../README.md) › [Globals](../globals.md) › ["common/server"](../modules/_common_server_.md) › [ExpressServer](_common_server_.expressserver.md)

# Class: ExpressServer

## Hierarchy

* **ExpressServer**

## Index

### Constructors

* [constructor](_common_server_.expressserver.md#constructor)

### Methods

* [bodyParserOrLineSignatureParser](_common_server_.expressserver.md#private-bodyparserorlinesignatureparser)
* [handleLineEv](_common_server_.expressserver.md#handlelineev)
* [listen](_common_server_.expressserver.md#listen)
* [setBodyParserOrLineSignatureParser](_common_server_.expressserver.md#setbodyparserorlinesignatureparser)
* [setNotFoundPage](_common_server_.expressserver.md#setnotfoundpage)

## Constructors

###  constructor

\+ **new ExpressServer**(): *[ExpressServer](_common_server_.expressserver.md)*

*Defined in [server/common/server.ts:27](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L27)*

**Returns:** *[ExpressServer](_common_server_.expressserver.md)*

## Methods

### `Private` bodyParserOrLineSignatureParser

▸ **bodyParserOrLineSignatureParser**(): *function*

*Defined in [server/common/server.ts:47](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L47)*

**Returns:** *function*

▸ (`req`: any, `res`: any, `next`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | any |
`res` | any |
`next` | any |

___

###  handleLineEv

▸ **handleLineEv**(`webHookPath`: string): *Promise‹void›*

*Defined in [server/common/server.ts:62](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`webHookPath` | string |

**Returns:** *Promise‹void›*

___

###  listen

▸ **listen**(`port`: number): *Promise‹void›*

*Defined in [server/common/server.ts:83](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |

**Returns:** *Promise‹void›*

___

###  setBodyParserOrLineSignatureParser

▸ **setBodyParserOrLineSignatureParser**(): *Promise‹void›*

*Defined in [server/common/server.ts:42](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L42)*

**Returns:** *Promise‹void›*

___

###  setNotFoundPage

▸ **setNotFoundPage**(): *Promise‹void›*

*Defined in [server/common/server.ts:76](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/common/server.ts#L76)*

**Returns:** *Promise‹void›*
