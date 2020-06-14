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
* [setErrPage](_common_server_.expressserver.md#seterrpage)
* [setNotFoundPage](_common_server_.expressserver.md#setnotfoundpage)

## Constructors

###  constructor

\+ **new ExpressServer**(): *[ExpressServer](_common_server_.expressserver.md)*

Defined in server/common/server.ts:28

**Returns:** *[ExpressServer](_common_server_.expressserver.md)*

## Methods

### `Private` bodyParserOrLineSignatureParser

▸ **bodyParserOrLineSignatureParser**(): *function*

Defined in server/common/server.ts:49

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

Defined in server/common/server.ts:64

**Parameters:**

Name | Type |
------ | ------ |
`webHookPath` | string |

**Returns:** *Promise‹void›*

___

###  listen

▸ **listen**(`port`: number): *Promise‹void›*

Defined in server/common/server.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`port` | number |

**Returns:** *Promise‹void›*

___

###  setBodyParserOrLineSignatureParser

▸ **setBodyParserOrLineSignatureParser**(): *Promise‹void›*

Defined in server/common/server.ts:44

**Returns:** *Promise‹void›*

___

###  setErrPage

▸ **setErrPage**(): *Promise‹void›*

Defined in server/common/server.ts:96

**Returns:** *Promise‹void›*

___

###  setNotFoundPage

▸ **setNotFoundPage**(): *Promise‹void›*

Defined in server/common/server.ts:78

**Returns:** *Promise‹void›*
