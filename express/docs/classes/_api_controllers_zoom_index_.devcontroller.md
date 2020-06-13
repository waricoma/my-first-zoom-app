[my-first-zoom-app_express](../README.md) › [Globals](../globals.md) › ["api/controllers/zoom/index"](../modules/_api_controllers_zoom_index_.md) › [DevController](_api_controllers_zoom_index_.devcontroller.md)

# Class: DevController

## Hierarchy

* Controller

  ↳ **DevController**

## Index

### Methods

* [create](_api_controllers_zoom_index_.devcontroller.md#create)
* [getHeader](_api_controllers_zoom_index_.devcontroller.md#getheader)
* [getHeaders](_api_controllers_zoom_index_.devcontroller.md#getheaders)
* [getStatus](_api_controllers_zoom_index_.devcontroller.md#getstatus)
* [setHeader](_api_controllers_zoom_index_.devcontroller.md#setheader)
* [setStatus](_api_controllers_zoom_index_.devcontroller.md#setstatus)

## Methods

###  create

▸ **create**(): *Promise‹string›*

*Defined in [server/api/controllers/zoom/index.ts:7](https://github.com/waricoma/my-first-zoom-app/blob/9d66697/express/server/api/controllers/zoom/index.ts#L7)*

**Returns:** *Promise‹string›*

___

###  getHeader

▸ **getHeader**(`name`: string): *string | undefined*

*Inherited from [DevController](_api_controllers_zoom_index_.devcontroller.md).[getHeader](_api_controllers_zoom_index_.devcontroller.md#getheader)*

Defined in node_modules/tsoa/dist/interfaces/controller.d.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getHeaders

▸ **getHeaders**(): *object*

*Inherited from [DevController](_api_controllers_zoom_index_.devcontroller.md).[getHeaders](_api_controllers_zoom_index_.devcontroller.md#getheaders)*

Defined in node_modules/tsoa/dist/interfaces/controller.d.ts:8

**Returns:** *object*

* \[ **name**: *string*\]: string | undefined

___

###  getStatus

▸ **getStatus**(): *number | undefined*

*Inherited from [DevController](_api_controllers_zoom_index_.devcontroller.md).[getStatus](_api_controllers_zoom_index_.devcontroller.md#getstatus)*

Defined in node_modules/tsoa/dist/interfaces/controller.d.ts:5

**Returns:** *number | undefined*

___

###  setHeader

▸ **setHeader**(`name`: string, `value?`: string): *void*

*Inherited from [DevController](_api_controllers_zoom_index_.devcontroller.md).[setHeader](_api_controllers_zoom_index_.devcontroller.md#setheader)*

Defined in node_modules/tsoa/dist/interfaces/controller.d.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value?` | string |

**Returns:** *void*

___

###  setStatus

▸ **setStatus**(`statusCode`: number): *void*

*Inherited from [DevController](_api_controllers_zoom_index_.devcontroller.md).[setStatus](_api_controllers_zoom_index_.devcontroller.md#setstatus)*

Defined in node_modules/tsoa/dist/interfaces/controller.d.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |

**Returns:** *void*
