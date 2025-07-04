
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.10.1
 * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
 */
Prisma.prismaVersion = {
  client: "6.10.1",
  engine: "9b628578b3b7cae625e8c927178f15a170e74a9c"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.Attack_logsScalarFieldEnum = {
  id: 'id',
  processed_at: 'processed_at',
  unique_id: 'unique_id',
  attack_category: 'attack_category',
  method: 'method',
  path: 'path',
  status: 'status',
  timestamp: 'timestamp',
  timestamp_parsed: 'timestamp_parsed',
  uuid: 'uuid'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  attack_logs: 'attack_logs'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\05_ProSoftware\\24_03_Projects\\test2\\miaooo-backend\\prisma\\DB2Client\\testClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\05_ProSoftware\\24_03_Projects\\test2\\miaooo-backend\\prisma\\schema2.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.10.1",
  "engineVersion": "9b628578b3b7cae625e8c927178f15a170e74a9c",
  "datasourceNames": [
    "db2"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db2": {
      "url": {
        "fromEnvVar": "tanner_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./DB2Client/testClient\"\n}\n\ndatasource db2 {\n  provider = \"mongodb\"\n  url      = env(\"tanner_DATABASE_URL\")\n}\n\ntype AttackLogsCookies {\n  /// Could not determine type: the field only had null or empty values in the sample set.\n  sess_uuid Json?\n}\n\ntype AttackLogsHeaders {\n  accept          String?\n  accept_encoding String? @map(\"accept-encoding\")\n  accept_language String? @map(\"accept-language\")\n  connection      String?\n  content_length  String? @map(\"content-length\")\n  content_type    String? @map(\"content-type\")\n  host            String\n  user_agent      String  @map(\"user-agent\")\n}\n\ntype AttackLogsPeer {\n  ip      String\n  ip_info AttackLogsPeerIpInfo\n  port    Int\n}\n\ntype AttackLogsPeerIpInfo {\n  ip         String\n  ip_type    String\n  is_private Boolean\n}\n\ntype AttackLogsPostData {\n  exploit String\n  test    String\n}\n\ntype AttackLogsResponseMsg {\n  response AttackLogsResponseMsgResponse\n  version  String\n}\n\ntype AttackLogsResponseMsgResponse {\n  message AttackLogsResponseMsgResponseMessage\n}\n\ntype AttackLogsResponseMsgResponseMessage {\n  detection AttackLogsResponseMsgResponseMessageDetection\n  sess_uuid String\n}\n\ntype AttackLogsResponseMsgResponseMessageDetection {\n  name    String\n  order   Int\n  payload AttackLogsResponseMsgResponseMessageDetectionPayload?\n  type    Int\n  version String\n}\n\ntype AttackLogsResponseMsgResponseMessageDetectionPayload {\n  page  String\n  value String\n}\n\nmodel attack_logs {\n  id               String                @id @default(auto()) @map(\"_id\") @db2.ObjectId\n  processed_at     DateTime              @map(\"_processed_at\") @db2.Date /// 开始处理时间*\n  unique_id        String                @map(\"_unique_id\")\n  attack_category  String /// 攻击类别*\n  cookies          AttackLogsCookies /// *\n  headers          AttackLogsHeaders /// 数据包头*\n  method           String /// get post 请求方法*\n  path             String /// 请求路径*\n  peer             AttackLogsPeer /// 请求端信息*\n  post_data        AttackLogsPostData? /// post数据*\n  response_msg     AttackLogsResponseMsg /// 响应消息*\n  status           Int /// 响应状态码*\n  timestamp        String\n  timestamp_parsed DateTime              @db2.Date /// *结束时间\n  uuid             String /// 数据包id*\n\n  @@unique([uuid, method, path, timestamp, peer.ip, peer.port], map: \"uuid_1_method_1_path_1_timestamp_1_peer.ip_1_peer.port_1\")\n  @@index([timestamp], map: \"timestamp_1\")\n  @@index([peer.ip], map: \"peer.ip_1\")\n  @@index([method], map: \"method_1\")\n  @@index([path], map: \"path_1\")\n}\n",
  "inlineSchemaHash": "4d3e714b06494112a7a836779ed369b5f8879f841bfe4921111561eefb067dc9",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/DB2Client/testClient",
    "DB2Client/testClient",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"attack_logs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"ObjectId\",[]],\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"processed_at\",\"dbName\":\"_processed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"开始处理时间*\"},{\"name\":\"unique_id\",\"dbName\":\"_unique_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attack_category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"攻击类别*\"},{\"name\":\"cookies\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsCookies\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"*\"},{\"name\":\"headers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsHeaders\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"数据包头*\"},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"get post 请求方法*\"},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"请求路径*\"},{\"name\":\"peer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsPeer\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"请求端信息*\"},{\"name\":\"post_data\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsPostData\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"post数据*\"},{\"name\":\"response_msg\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsResponseMsg\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"响应消息*\"},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"响应状态码*\"},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp_parsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"*结束时间\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"数据包id*\"}],\"primaryKey\":null,\"uniqueFields\":[[\"uuid\",\"method\",\"path\",\"timestamp\",\"ip\",\"port\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"uuid\",\"method\",\"path\",\"timestamp\",\"ip\",\"port\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{\"AttackLogsCookies\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"sess_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"documentation\":\"Could not determine type: the field only had null or empty values in the sample set.\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsHeaders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"accept\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"accept_encoding\",\"dbName\":\"accept-encoding\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"accept_language\",\"dbName\":\"accept-language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"connection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"content_length\",\"dbName\":\"content-length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"content_type\",\"dbName\":\"content-type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"host\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"user_agent\",\"dbName\":\"user-agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsPeer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"ip_info\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsPeerIpInfo\",\"nativeType\":null},{\"name\":\"port\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsPeerIpInfo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"ip_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"is_private\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsPostData\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"exploit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"test\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsResponseMsg\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"response\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsResponseMsgResponse\",\"nativeType\":null},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsResponseMsgResponse\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsResponseMsgResponseMessage\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsResponseMsgResponseMessage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"detection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsResponseMsgResponseMessageDetection\",\"nativeType\":null},{\"name\":\"sess_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsResponseMsgResponseMessageDetection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null},{\"name\":\"payload\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AttackLogsResponseMsgResponseMessageDetectionPayload\",\"nativeType\":null},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"AttackLogsResponseMsgResponseMessageDetectionPayload\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"page\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]}}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/DB2Client/testClient/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/DB2Client/testClient/schema.prisma")
