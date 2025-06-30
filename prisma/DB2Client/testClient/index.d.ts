
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AttackLogsCookies
 * 
 */
export type AttackLogsCookies = $Result.DefaultSelection<Prisma.$AttackLogsCookiesPayload>
/**
 * Model AttackLogsHeaders
 * 
 */
export type AttackLogsHeaders = $Result.DefaultSelection<Prisma.$AttackLogsHeadersPayload>
/**
 * Model AttackLogsPeer
 * 
 */
export type AttackLogsPeer = $Result.DefaultSelection<Prisma.$AttackLogsPeerPayload>
/**
 * Model AttackLogsPeerIpInfo
 * 
 */
export type AttackLogsPeerIpInfo = $Result.DefaultSelection<Prisma.$AttackLogsPeerIpInfoPayload>
/**
 * Model AttackLogsPostData
 * 
 */
export type AttackLogsPostData = $Result.DefaultSelection<Prisma.$AttackLogsPostDataPayload>
/**
 * Model AttackLogsResponseMsg
 * 
 */
export type AttackLogsResponseMsg = $Result.DefaultSelection<Prisma.$AttackLogsResponseMsgPayload>
/**
 * Model AttackLogsResponseMsgResponse
 * 
 */
export type AttackLogsResponseMsgResponse = $Result.DefaultSelection<Prisma.$AttackLogsResponseMsgResponsePayload>
/**
 * Model AttackLogsResponseMsgResponseMessage
 * 
 */
export type AttackLogsResponseMsgResponseMessage = $Result.DefaultSelection<Prisma.$AttackLogsResponseMsgResponseMessagePayload>
/**
 * Model AttackLogsResponseMsgResponseMessageDetection
 * 
 */
export type AttackLogsResponseMsgResponseMessageDetection = $Result.DefaultSelection<Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayload>
/**
 * Model AttackLogsResponseMsgResponseMessageDetectionPayload
 * 
 */
export type AttackLogsResponseMsgResponseMessageDetectionPayload = $Result.DefaultSelection<Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayloadPayload>
/**
 * Model attack_logs
 * 
 */
export type attack_logs = $Result.DefaultSelection<Prisma.$attack_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attack_logs
 * const attack_logs = await prisma.attack_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attack_logs
   * const attack_logs = await prisma.attack_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attack_logs`: Exposes CRUD operations for the **attack_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attack_logs
    * const attack_logs = await prisma.attack_logs.findMany()
    * ```
    */
  get attack_logs(): Prisma.attack_logsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    attack_logs: 'attack_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "attack_logs"
      txIsolationLevel: never
    }
    model: {
      attack_logs: {
        payload: Prisma.$attack_logsPayload<ExtArgs>
        fields: Prisma.attack_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attack_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attack_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          findFirst: {
            args: Prisma.attack_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attack_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          findMany: {
            args: Prisma.attack_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>[]
          }
          create: {
            args: Prisma.attack_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          createMany: {
            args: Prisma.attack_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attack_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          update: {
            args: Prisma.attack_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          deleteMany: {
            args: Prisma.attack_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attack_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attack_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attack_logsPayload>
          }
          aggregate: {
            args: Prisma.Attack_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttack_logs>
          }
          groupBy: {
            args: Prisma.attack_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Attack_logsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.attack_logsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.attack_logsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.attack_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Attack_logsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    attack_logs?: attack_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AttackLogsCookies
   */





  export type AttackLogsCookiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sess_uuid?: boolean
  }, ExtArgs["result"]["attackLogsCookies"]>



  export type AttackLogsCookiesSelectScalar = {
    sess_uuid?: boolean
  }

  export type AttackLogsCookiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sess_uuid", ExtArgs["result"]["attackLogsCookies"]>

  export type $AttackLogsCookiesPayload = {
    name: "AttackLogsCookies"
    objects: {}
    scalars: {
      /**
       * Could not determine type: the field only had null or empty values in the sample set.
       */
      sess_uuid: Prisma.JsonValue | null
    }
    composites: {}
  }

  type AttackLogsCookiesGetPayload<S extends boolean | null | undefined | AttackLogsCookiesDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsCookiesPayload, S>





  /**
   * Fields of the AttackLogsCookies model
   */
  interface AttackLogsCookiesFieldRefs {
    readonly sess_uuid: FieldRef<"AttackLogsCookies", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsCookies without action
   */
  export type AttackLogsCookiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsCookies
     */
    select?: AttackLogsCookiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsCookies
     */
    omit?: AttackLogsCookiesOmit<ExtArgs> | null
  }


  /**
   * Model AttackLogsHeaders
   */





  export type AttackLogsHeadersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accept?: boolean
    accept_encoding?: boolean
    accept_language?: boolean
    connection?: boolean
    content_length?: boolean
    content_type?: boolean
    host?: boolean
    user_agent?: boolean
  }, ExtArgs["result"]["attackLogsHeaders"]>



  export type AttackLogsHeadersSelectScalar = {
    accept?: boolean
    accept_encoding?: boolean
    accept_language?: boolean
    connection?: boolean
    content_length?: boolean
    content_type?: boolean
    host?: boolean
    user_agent?: boolean
  }

  export type AttackLogsHeadersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accept" | "accept_encoding" | "accept_language" | "connection" | "content_length" | "content_type" | "host" | "user_agent", ExtArgs["result"]["attackLogsHeaders"]>

  export type $AttackLogsHeadersPayload = {
    name: "AttackLogsHeaders"
    objects: {}
    scalars: {
      accept: string | null
      accept_encoding: string | null
      accept_language: string | null
      connection: string | null
      content_length: string | null
      content_type: string | null
      host: string
      user_agent: string
    }
    composites: {}
  }

  type AttackLogsHeadersGetPayload<S extends boolean | null | undefined | AttackLogsHeadersDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsHeadersPayload, S>





  /**
   * Fields of the AttackLogsHeaders model
   */
  interface AttackLogsHeadersFieldRefs {
    readonly accept: FieldRef<"AttackLogsHeaders", 'String'>
    readonly accept_encoding: FieldRef<"AttackLogsHeaders", 'String'>
    readonly accept_language: FieldRef<"AttackLogsHeaders", 'String'>
    readonly connection: FieldRef<"AttackLogsHeaders", 'String'>
    readonly content_length: FieldRef<"AttackLogsHeaders", 'String'>
    readonly content_type: FieldRef<"AttackLogsHeaders", 'String'>
    readonly host: FieldRef<"AttackLogsHeaders", 'String'>
    readonly user_agent: FieldRef<"AttackLogsHeaders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsHeaders without action
   */
  export type AttackLogsHeadersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsHeaders
     */
    select?: AttackLogsHeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsHeaders
     */
    omit?: AttackLogsHeadersOmit<ExtArgs> | null
  }


  /**
   * Model AttackLogsPeer
   */





  export type AttackLogsPeerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    ip_info?: boolean | AttackLogsPeerIpInfoDefaultArgs<ExtArgs>
    port?: boolean
  }, ExtArgs["result"]["attackLogsPeer"]>



  export type AttackLogsPeerSelectScalar = {
    ip?: boolean
    port?: boolean
  }

  export type AttackLogsPeerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ip" | "ip_info" | "port", ExtArgs["result"]["attackLogsPeer"]>
  export type AttackLogsPeerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackLogsPeerPayload = {
    name: "AttackLogsPeer"
    objects: {}
    scalars: {
      ip: string
      port: number
    }
    composites: {
      ip_info: Prisma.$AttackLogsPeerIpInfoPayload
    }
  }

  type AttackLogsPeerGetPayload<S extends boolean | null | undefined | AttackLogsPeerDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsPeerPayload, S>





  /**
   * Fields of the AttackLogsPeer model
   */
  interface AttackLogsPeerFieldRefs {
    readonly ip: FieldRef<"AttackLogsPeer", 'String'>
    readonly port: FieldRef<"AttackLogsPeer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsPeer without action
   */
  export type AttackLogsPeerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsPeer
     */
    select?: AttackLogsPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsPeer
     */
    omit?: AttackLogsPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackLogsPeerInclude<ExtArgs> | null
  }


  /**
   * Model AttackLogsPeerIpInfo
   */





  export type AttackLogsPeerIpInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    ip_type?: boolean
    is_private?: boolean
  }, ExtArgs["result"]["attackLogsPeerIpInfo"]>



  export type AttackLogsPeerIpInfoSelectScalar = {
    ip?: boolean
    ip_type?: boolean
    is_private?: boolean
  }

  export type AttackLogsPeerIpInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ip" | "ip_type" | "is_private", ExtArgs["result"]["attackLogsPeerIpInfo"]>

  export type $AttackLogsPeerIpInfoPayload = {
    name: "AttackLogsPeerIpInfo"
    objects: {}
    scalars: {
      ip: string
      ip_type: string
      is_private: boolean
    }
    composites: {}
  }

  type AttackLogsPeerIpInfoGetPayload<S extends boolean | null | undefined | AttackLogsPeerIpInfoDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsPeerIpInfoPayload, S>





  /**
   * Fields of the AttackLogsPeerIpInfo model
   */
  interface AttackLogsPeerIpInfoFieldRefs {
    readonly ip: FieldRef<"AttackLogsPeerIpInfo", 'String'>
    readonly ip_type: FieldRef<"AttackLogsPeerIpInfo", 'String'>
    readonly is_private: FieldRef<"AttackLogsPeerIpInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsPeerIpInfo without action
   */
  export type AttackLogsPeerIpInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsPeerIpInfo
     */
    select?: AttackLogsPeerIpInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsPeerIpInfo
     */
    omit?: AttackLogsPeerIpInfoOmit<ExtArgs> | null
  }


  /**
   * Model AttackLogsPostData
   */





  export type AttackLogsPostDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exploit?: boolean
    test?: boolean
  }, ExtArgs["result"]["attackLogsPostData"]>



  export type AttackLogsPostDataSelectScalar = {
    exploit?: boolean
    test?: boolean
  }

  export type AttackLogsPostDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"exploit" | "test", ExtArgs["result"]["attackLogsPostData"]>

  export type $AttackLogsPostDataPayload = {
    name: "AttackLogsPostData"
    objects: {}
    scalars: {
      exploit: string
      test: string
    }
    composites: {}
  }

  type AttackLogsPostDataGetPayload<S extends boolean | null | undefined | AttackLogsPostDataDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsPostDataPayload, S>





  /**
   * Fields of the AttackLogsPostData model
   */
  interface AttackLogsPostDataFieldRefs {
    readonly exploit: FieldRef<"AttackLogsPostData", 'String'>
    readonly test: FieldRef<"AttackLogsPostData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsPostData without action
   */
  export type AttackLogsPostDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsPostData
     */
    select?: AttackLogsPostDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsPostData
     */
    omit?: AttackLogsPostDataOmit<ExtArgs> | null
  }


  /**
   * Model AttackLogsResponseMsg
   */





  export type AttackLogsResponseMsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    response?: boolean | AttackLogsResponseMsgResponseDefaultArgs<ExtArgs>
    version?: boolean
  }, ExtArgs["result"]["attackLogsResponseMsg"]>



  export type AttackLogsResponseMsgSelectScalar = {
    version?: boolean
  }

  export type AttackLogsResponseMsgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"response" | "version", ExtArgs["result"]["attackLogsResponseMsg"]>
  export type AttackLogsResponseMsgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackLogsResponseMsgPayload = {
    name: "AttackLogsResponseMsg"
    objects: {}
    scalars: {
      version: string
    }
    composites: {
      response: Prisma.$AttackLogsResponseMsgResponsePayload
    }
  }

  type AttackLogsResponseMsgGetPayload<S extends boolean | null | undefined | AttackLogsResponseMsgDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsResponseMsgPayload, S>





  /**
   * Fields of the AttackLogsResponseMsg model
   */
  interface AttackLogsResponseMsgFieldRefs {
    readonly version: FieldRef<"AttackLogsResponseMsg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsResponseMsg without action
   */
  export type AttackLogsResponseMsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsResponseMsg
     */
    select?: AttackLogsResponseMsgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsResponseMsg
     */
    omit?: AttackLogsResponseMsgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackLogsResponseMsgInclude<ExtArgs> | null
  }


  /**
   * Model AttackLogsResponseMsgResponse
   */





  export type AttackLogsResponseMsgResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message?: boolean | AttackLogsResponseMsgResponseMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attackLogsResponseMsgResponse"]>



  export type AttackLogsResponseMsgResponseSelectScalar = {}

  export type AttackLogsResponseMsgResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message", ExtArgs["result"]["attackLogsResponseMsgResponse"]>
  export type AttackLogsResponseMsgResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackLogsResponseMsgResponsePayload = {
    name: "AttackLogsResponseMsgResponse"
    objects: {}
    scalars: {}
    composites: {
      message: Prisma.$AttackLogsResponseMsgResponseMessagePayload
    }
  }

  type AttackLogsResponseMsgResponseGetPayload<S extends boolean | null | undefined | AttackLogsResponseMsgResponseDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsResponseMsgResponsePayload, S>





  /**
   * Fields of the AttackLogsResponseMsgResponse model
   */
  interface AttackLogsResponseMsgResponseFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * AttackLogsResponseMsgResponse without action
   */
  export type AttackLogsResponseMsgResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsResponseMsgResponse
     */
    select?: AttackLogsResponseMsgResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsResponseMsgResponse
     */
    omit?: AttackLogsResponseMsgResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackLogsResponseMsgResponseInclude<ExtArgs> | null
  }


  /**
   * Model AttackLogsResponseMsgResponseMessage
   */





  export type AttackLogsResponseMsgResponseMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    detection?: boolean | AttackLogsResponseMsgResponseMessageDetectionDefaultArgs<ExtArgs>
    sess_uuid?: boolean
  }, ExtArgs["result"]["attackLogsResponseMsgResponseMessage"]>



  export type AttackLogsResponseMsgResponseMessageSelectScalar = {
    sess_uuid?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"detection" | "sess_uuid", ExtArgs["result"]["attackLogsResponseMsgResponseMessage"]>
  export type AttackLogsResponseMsgResponseMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackLogsResponseMsgResponseMessagePayload = {
    name: "AttackLogsResponseMsgResponseMessage"
    objects: {}
    scalars: {
      sess_uuid: string
    }
    composites: {
      detection: Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayload
    }
  }

  type AttackLogsResponseMsgResponseMessageGetPayload<S extends boolean | null | undefined | AttackLogsResponseMsgResponseMessageDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsResponseMsgResponseMessagePayload, S>





  /**
   * Fields of the AttackLogsResponseMsgResponseMessage model
   */
  interface AttackLogsResponseMsgResponseMessageFieldRefs {
    readonly sess_uuid: FieldRef<"AttackLogsResponseMsgResponseMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsResponseMsgResponseMessage without action
   */
  export type AttackLogsResponseMsgResponseMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsResponseMsgResponseMessage
     */
    select?: AttackLogsResponseMsgResponseMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsResponseMsgResponseMessage
     */
    omit?: AttackLogsResponseMsgResponseMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackLogsResponseMsgResponseMessageInclude<ExtArgs> | null
  }


  /**
   * Model AttackLogsResponseMsgResponseMessageDetection
   */





  export type AttackLogsResponseMsgResponseMessageDetectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    order?: boolean
    payload?: boolean | AttackLogsResponseMsgResponseMessageDetectionPayloadDefaultArgs<ExtArgs>
    type?: boolean
    version?: boolean
  }, ExtArgs["result"]["attackLogsResponseMsgResponseMessageDetection"]>



  export type AttackLogsResponseMsgResponseMessageDetectionSelectScalar = {
    name?: boolean
    order?: boolean
    type?: boolean
    version?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageDetectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "order" | "payload" | "type" | "version", ExtArgs["result"]["attackLogsResponseMsgResponseMessageDetection"]>
  export type AttackLogsResponseMsgResponseMessageDetectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttackLogsResponseMsgResponseMessageDetectionPayload = {
    name: "AttackLogsResponseMsgResponseMessageDetection"
    objects: {}
    scalars: {
      name: string
      order: number
      type: number
      version: string
    }
    composites: {
      payload: Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayloadPayload | null
    }
  }

  type AttackLogsResponseMsgResponseMessageDetectionGetPayload<S extends boolean | null | undefined | AttackLogsResponseMsgResponseMessageDetectionDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayload, S>





  /**
   * Fields of the AttackLogsResponseMsgResponseMessageDetection model
   */
  interface AttackLogsResponseMsgResponseMessageDetectionFieldRefs {
    readonly name: FieldRef<"AttackLogsResponseMsgResponseMessageDetection", 'String'>
    readonly order: FieldRef<"AttackLogsResponseMsgResponseMessageDetection", 'Int'>
    readonly type: FieldRef<"AttackLogsResponseMsgResponseMessageDetection", 'Int'>
    readonly version: FieldRef<"AttackLogsResponseMsgResponseMessageDetection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsResponseMsgResponseMessageDetection without action
   */
  export type AttackLogsResponseMsgResponseMessageDetectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsResponseMsgResponseMessageDetection
     */
    select?: AttackLogsResponseMsgResponseMessageDetectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsResponseMsgResponseMessageDetection
     */
    omit?: AttackLogsResponseMsgResponseMessageDetectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttackLogsResponseMsgResponseMessageDetectionInclude<ExtArgs> | null
  }


  /**
   * Model AttackLogsResponseMsgResponseMessageDetectionPayload
   */





  export type AttackLogsResponseMsgResponseMessageDetectionPayloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    page?: boolean
    value?: boolean
  }, ExtArgs["result"]["attackLogsResponseMsgResponseMessageDetectionPayload"]>



  export type AttackLogsResponseMsgResponseMessageDetectionPayloadSelectScalar = {
    page?: boolean
    value?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"page" | "value", ExtArgs["result"]["attackLogsResponseMsgResponseMessageDetectionPayload"]>

  export type $AttackLogsResponseMsgResponseMessageDetectionPayloadPayload = {
    name: "AttackLogsResponseMsgResponseMessageDetectionPayload"
    objects: {}
    scalars: {
      page: string
      value: string
    }
    composites: {}
  }

  type AttackLogsResponseMsgResponseMessageDetectionPayloadGetPayload<S extends boolean | null | undefined | AttackLogsResponseMsgResponseMessageDetectionPayloadDefaultArgs> = $Result.GetResult<Prisma.$AttackLogsResponseMsgResponseMessageDetectionPayloadPayload, S>





  /**
   * Fields of the AttackLogsResponseMsgResponseMessageDetectionPayload model
   */
  interface AttackLogsResponseMsgResponseMessageDetectionPayloadFieldRefs {
    readonly page: FieldRef<"AttackLogsResponseMsgResponseMessageDetectionPayload", 'String'>
    readonly value: FieldRef<"AttackLogsResponseMsgResponseMessageDetectionPayload", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AttackLogsResponseMsgResponseMessageDetectionPayload without action
   */
  export type AttackLogsResponseMsgResponseMessageDetectionPayloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttackLogsResponseMsgResponseMessageDetectionPayload
     */
    select?: AttackLogsResponseMsgResponseMessageDetectionPayloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttackLogsResponseMsgResponseMessageDetectionPayload
     */
    omit?: AttackLogsResponseMsgResponseMessageDetectionPayloadOmit<ExtArgs> | null
  }


  /**
   * Model attack_logs
   */

  export type AggregateAttack_logs = {
    _count: Attack_logsCountAggregateOutputType | null
    _avg: Attack_logsAvgAggregateOutputType | null
    _sum: Attack_logsSumAggregateOutputType | null
    _min: Attack_logsMinAggregateOutputType | null
    _max: Attack_logsMaxAggregateOutputType | null
  }

  export type Attack_logsAvgAggregateOutputType = {
    status: number | null
  }

  export type Attack_logsSumAggregateOutputType = {
    status: number | null
  }

  export type Attack_logsMinAggregateOutputType = {
    id: string | null
    processed_at: Date | null
    unique_id: string | null
    attack_category: string | null
    method: string | null
    path: string | null
    status: number | null
    timestamp: string | null
    timestamp_parsed: Date | null
    uuid: string | null
  }

  export type Attack_logsMaxAggregateOutputType = {
    id: string | null
    processed_at: Date | null
    unique_id: string | null
    attack_category: string | null
    method: string | null
    path: string | null
    status: number | null
    timestamp: string | null
    timestamp_parsed: Date | null
    uuid: string | null
  }

  export type Attack_logsCountAggregateOutputType = {
    id: number
    processed_at: number
    unique_id: number
    attack_category: number
    method: number
    path: number
    status: number
    timestamp: number
    timestamp_parsed: number
    uuid: number
    _all: number
  }


  export type Attack_logsAvgAggregateInputType = {
    status?: true
  }

  export type Attack_logsSumAggregateInputType = {
    status?: true
  }

  export type Attack_logsMinAggregateInputType = {
    id?: true
    processed_at?: true
    unique_id?: true
    attack_category?: true
    method?: true
    path?: true
    status?: true
    timestamp?: true
    timestamp_parsed?: true
    uuid?: true
  }

  export type Attack_logsMaxAggregateInputType = {
    id?: true
    processed_at?: true
    unique_id?: true
    attack_category?: true
    method?: true
    path?: true
    status?: true
    timestamp?: true
    timestamp_parsed?: true
    uuid?: true
  }

  export type Attack_logsCountAggregateInputType = {
    id?: true
    processed_at?: true
    unique_id?: true
    attack_category?: true
    method?: true
    path?: true
    status?: true
    timestamp?: true
    timestamp_parsed?: true
    uuid?: true
    _all?: true
  }

  export type Attack_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attack_logs to aggregate.
     */
    where?: attack_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attack_logs to fetch.
     */
    orderBy?: attack_logsOrderByWithRelationInput | attack_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attack_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attack_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attack_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attack_logs
    **/
    _count?: true | Attack_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Attack_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Attack_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Attack_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Attack_logsMaxAggregateInputType
  }

  export type GetAttack_logsAggregateType<T extends Attack_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttack_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttack_logs[P]>
      : GetScalarType<T[P], AggregateAttack_logs[P]>
  }




  export type attack_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attack_logsWhereInput
    orderBy?: attack_logsOrderByWithAggregationInput | attack_logsOrderByWithAggregationInput[]
    by: Attack_logsScalarFieldEnum[] | Attack_logsScalarFieldEnum
    having?: attack_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Attack_logsCountAggregateInputType | true
    _avg?: Attack_logsAvgAggregateInputType
    _sum?: Attack_logsSumAggregateInputType
    _min?: Attack_logsMinAggregateInputType
    _max?: Attack_logsMaxAggregateInputType
  }

  export type Attack_logsGroupByOutputType = {
    id: string
    processed_at: Date
    unique_id: string
    attack_category: string
    method: string
    path: string
    status: number
    timestamp: string
    timestamp_parsed: Date
    uuid: string
    _count: Attack_logsCountAggregateOutputType | null
    _avg: Attack_logsAvgAggregateOutputType | null
    _sum: Attack_logsSumAggregateOutputType | null
    _min: Attack_logsMinAggregateOutputType | null
    _max: Attack_logsMaxAggregateOutputType | null
  }

  type GetAttack_logsGroupByPayload<T extends attack_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Attack_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Attack_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Attack_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Attack_logsGroupByOutputType[P]>
        }
      >
    >


  export type attack_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processed_at?: boolean
    unique_id?: boolean
    attack_category?: boolean
    cookies?: boolean | AttackLogsCookiesDefaultArgs<ExtArgs>
    headers?: boolean | AttackLogsHeadersDefaultArgs<ExtArgs>
    method?: boolean
    path?: boolean
    peer?: boolean | AttackLogsPeerDefaultArgs<ExtArgs>
    post_data?: boolean | AttackLogsPostDataDefaultArgs<ExtArgs>
    response_msg?: boolean | AttackLogsResponseMsgDefaultArgs<ExtArgs>
    status?: boolean
    timestamp?: boolean
    timestamp_parsed?: boolean
    uuid?: boolean
  }, ExtArgs["result"]["attack_logs"]>



  export type attack_logsSelectScalar = {
    id?: boolean
    processed_at?: boolean
    unique_id?: boolean
    attack_category?: boolean
    method?: boolean
    path?: boolean
    status?: boolean
    timestamp?: boolean
    timestamp_parsed?: boolean
    uuid?: boolean
  }

  export type attack_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "processed_at" | "unique_id" | "attack_category" | "cookies" | "headers" | "method" | "path" | "peer" | "post_data" | "response_msg" | "status" | "timestamp" | "timestamp_parsed" | "uuid", ExtArgs["result"]["attack_logs"]>
  export type attack_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $attack_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attack_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * 开始处理时间*
       */
      processed_at: Date
      unique_id: string
      /**
       * 攻击类别*
       */
      attack_category: string
      /**
       * get post 请求方法*
       */
      method: string
      /**
       * 请求路径*
       */
      path: string
      /**
       * 响应状态码*
       */
      status: number
      timestamp: string
      /**
       * *结束时间
       */
      timestamp_parsed: Date
      /**
       * 数据包id*
       */
      uuid: string
    }, ExtArgs["result"]["attack_logs"]>
    composites: {
      /**
       * *
       */
      cookies: Prisma.$AttackLogsCookiesPayload
      /**
       * 数据包头*
       */
      headers: Prisma.$AttackLogsHeadersPayload
      /**
       * 请求端信息*
       */
      peer: Prisma.$AttackLogsPeerPayload
      /**
       * post数据*
       */
      post_data: Prisma.$AttackLogsPostDataPayload | null
      /**
       * 响应消息*
       */
      response_msg: Prisma.$AttackLogsResponseMsgPayload
    }
  }

  type attack_logsGetPayload<S extends boolean | null | undefined | attack_logsDefaultArgs> = $Result.GetResult<Prisma.$attack_logsPayload, S>

  type attack_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attack_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Attack_logsCountAggregateInputType | true
    }

  export interface attack_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attack_logs'], meta: { name: 'attack_logs' } }
    /**
     * Find zero or one Attack_logs that matches the filter.
     * @param {attack_logsFindUniqueArgs} args - Arguments to find a Attack_logs
     * @example
     * // Get one Attack_logs
     * const attack_logs = await prisma.attack_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attack_logsFindUniqueArgs>(args: SelectSubset<T, attack_logsFindUniqueArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attack_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attack_logsFindUniqueOrThrowArgs} args - Arguments to find a Attack_logs
     * @example
     * // Get one Attack_logs
     * const attack_logs = await prisma.attack_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attack_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, attack_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsFindFirstArgs} args - Arguments to find a Attack_logs
     * @example
     * // Get one Attack_logs
     * const attack_logs = await prisma.attack_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attack_logsFindFirstArgs>(args?: SelectSubset<T, attack_logsFindFirstArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attack_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsFindFirstOrThrowArgs} args - Arguments to find a Attack_logs
     * @example
     * // Get one Attack_logs
     * const attack_logs = await prisma.attack_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attack_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, attack_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attack_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attack_logs
     * const attack_logs = await prisma.attack_logs.findMany()
     * 
     * // Get first 10 Attack_logs
     * const attack_logs = await prisma.attack_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attack_logsWithIdOnly = await prisma.attack_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attack_logsFindManyArgs>(args?: SelectSubset<T, attack_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attack_logs.
     * @param {attack_logsCreateArgs} args - Arguments to create a Attack_logs.
     * @example
     * // Create one Attack_logs
     * const Attack_logs = await prisma.attack_logs.create({
     *   data: {
     *     // ... data to create a Attack_logs
     *   }
     * })
     * 
     */
    create<T extends attack_logsCreateArgs>(args: SelectSubset<T, attack_logsCreateArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attack_logs.
     * @param {attack_logsCreateManyArgs} args - Arguments to create many Attack_logs.
     * @example
     * // Create many Attack_logs
     * const attack_logs = await prisma.attack_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attack_logsCreateManyArgs>(args?: SelectSubset<T, attack_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attack_logs.
     * @param {attack_logsDeleteArgs} args - Arguments to delete one Attack_logs.
     * @example
     * // Delete one Attack_logs
     * const Attack_logs = await prisma.attack_logs.delete({
     *   where: {
     *     // ... filter to delete one Attack_logs
     *   }
     * })
     * 
     */
    delete<T extends attack_logsDeleteArgs>(args: SelectSubset<T, attack_logsDeleteArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attack_logs.
     * @param {attack_logsUpdateArgs} args - Arguments to update one Attack_logs.
     * @example
     * // Update one Attack_logs
     * const attack_logs = await prisma.attack_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attack_logsUpdateArgs>(args: SelectSubset<T, attack_logsUpdateArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attack_logs.
     * @param {attack_logsDeleteManyArgs} args - Arguments to filter Attack_logs to delete.
     * @example
     * // Delete a few Attack_logs
     * const { count } = await prisma.attack_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attack_logsDeleteManyArgs>(args?: SelectSubset<T, attack_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attack_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attack_logs
     * const attack_logs = await prisma.attack_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attack_logsUpdateManyArgs>(args: SelectSubset<T, attack_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attack_logs.
     * @param {attack_logsUpsertArgs} args - Arguments to update or create a Attack_logs.
     * @example
     * // Update or create a Attack_logs
     * const attack_logs = await prisma.attack_logs.upsert({
     *   create: {
     *     // ... data to create a Attack_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attack_logs we want to update
     *   }
     * })
     */
    upsert<T extends attack_logsUpsertArgs>(args: SelectSubset<T, attack_logsUpsertArgs<ExtArgs>>): Prisma__attack_logsClient<$Result.GetResult<Prisma.$attack_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attack_logs that matches the filter.
     * @param {attack_logsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attack_logs = await prisma.attack_logs.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: attack_logsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Attack_logs.
     * @param {attack_logsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attack_logs = await prisma.attack_logs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: attack_logsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Attack_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsCountArgs} args - Arguments to filter Attack_logs to count.
     * @example
     * // Count the number of Attack_logs
     * const count = await prisma.attack_logs.count({
     *   where: {
     *     // ... the filter for the Attack_logs we want to count
     *   }
     * })
    **/
    count<T extends attack_logsCountArgs>(
      args?: Subset<T, attack_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Attack_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attack_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Attack_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Attack_logsAggregateArgs>(args: Subset<T, Attack_logsAggregateArgs>): Prisma.PrismaPromise<GetAttack_logsAggregateType<T>>

    /**
     * Group by Attack_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attack_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attack_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attack_logsGroupByArgs['orderBy'] }
        : { orderBy?: attack_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attack_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttack_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attack_logs model
   */
  readonly fields: attack_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attack_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attack_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attack_logs model
   */
  interface attack_logsFieldRefs {
    readonly id: FieldRef<"attack_logs", 'String'>
    readonly processed_at: FieldRef<"attack_logs", 'DateTime'>
    readonly unique_id: FieldRef<"attack_logs", 'String'>
    readonly attack_category: FieldRef<"attack_logs", 'String'>
    readonly method: FieldRef<"attack_logs", 'String'>
    readonly path: FieldRef<"attack_logs", 'String'>
    readonly status: FieldRef<"attack_logs", 'Int'>
    readonly timestamp: FieldRef<"attack_logs", 'String'>
    readonly timestamp_parsed: FieldRef<"attack_logs", 'DateTime'>
    readonly uuid: FieldRef<"attack_logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * attack_logs findUnique
   */
  export type attack_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter, which attack_logs to fetch.
     */
    where: attack_logsWhereUniqueInput
  }

  /**
   * attack_logs findUniqueOrThrow
   */
  export type attack_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter, which attack_logs to fetch.
     */
    where: attack_logsWhereUniqueInput
  }

  /**
   * attack_logs findFirst
   */
  export type attack_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter, which attack_logs to fetch.
     */
    where?: attack_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attack_logs to fetch.
     */
    orderBy?: attack_logsOrderByWithRelationInput | attack_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attack_logs.
     */
    cursor?: attack_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attack_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attack_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attack_logs.
     */
    distinct?: Attack_logsScalarFieldEnum | Attack_logsScalarFieldEnum[]
  }

  /**
   * attack_logs findFirstOrThrow
   */
  export type attack_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter, which attack_logs to fetch.
     */
    where?: attack_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attack_logs to fetch.
     */
    orderBy?: attack_logsOrderByWithRelationInput | attack_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attack_logs.
     */
    cursor?: attack_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attack_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attack_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attack_logs.
     */
    distinct?: Attack_logsScalarFieldEnum | Attack_logsScalarFieldEnum[]
  }

  /**
   * attack_logs findMany
   */
  export type attack_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter, which attack_logs to fetch.
     */
    where?: attack_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attack_logs to fetch.
     */
    orderBy?: attack_logsOrderByWithRelationInput | attack_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attack_logs.
     */
    cursor?: attack_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attack_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attack_logs.
     */
    skip?: number
    distinct?: Attack_logsScalarFieldEnum | Attack_logsScalarFieldEnum[]
  }

  /**
   * attack_logs create
   */
  export type attack_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a attack_logs.
     */
    data: XOR<attack_logsCreateInput, attack_logsUncheckedCreateInput>
  }

  /**
   * attack_logs createMany
   */
  export type attack_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attack_logs.
     */
    data: attack_logsCreateManyInput | attack_logsCreateManyInput[]
  }

  /**
   * attack_logs update
   */
  export type attack_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a attack_logs.
     */
    data: XOR<attack_logsUpdateInput, attack_logsUncheckedUpdateInput>
    /**
     * Choose, which attack_logs to update.
     */
    where: attack_logsWhereUniqueInput
  }

  /**
   * attack_logs updateMany
   */
  export type attack_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attack_logs.
     */
    data: XOR<attack_logsUpdateManyMutationInput, attack_logsUncheckedUpdateManyInput>
    /**
     * Filter which attack_logs to update
     */
    where?: attack_logsWhereInput
    /**
     * Limit how many attack_logs to update.
     */
    limit?: number
  }

  /**
   * attack_logs upsert
   */
  export type attack_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the attack_logs to update in case it exists.
     */
    where: attack_logsWhereUniqueInput
    /**
     * In case the attack_logs found by the `where` argument doesn't exist, create a new attack_logs with this data.
     */
    create: XOR<attack_logsCreateInput, attack_logsUncheckedCreateInput>
    /**
     * In case the attack_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attack_logsUpdateInput, attack_logsUncheckedUpdateInput>
  }

  /**
   * attack_logs delete
   */
  export type attack_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
    /**
     * Filter which attack_logs to delete.
     */
    where: attack_logsWhereUniqueInput
  }

  /**
   * attack_logs deleteMany
   */
  export type attack_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attack_logs to delete
     */
    where?: attack_logsWhereInput
    /**
     * Limit how many attack_logs to delete.
     */
    limit?: number
  }

  /**
   * attack_logs findRaw
   */
  export type attack_logsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * attack_logs aggregateRaw
   */
  export type attack_logsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * attack_logs without action
   */
  export type attack_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attack_logs
     */
    select?: attack_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attack_logs
     */
    omit?: attack_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attack_logsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const Attack_logsScalarFieldEnum: {
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

  export type Attack_logsScalarFieldEnum = (typeof Attack_logsScalarFieldEnum)[keyof typeof Attack_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type attack_logsWhereInput = {
    AND?: attack_logsWhereInput | attack_logsWhereInput[]
    OR?: attack_logsWhereInput[]
    NOT?: attack_logsWhereInput | attack_logsWhereInput[]
    id?: StringFilter<"attack_logs"> | string
    processed_at?: DateTimeFilter<"attack_logs"> | Date | string
    unique_id?: StringFilter<"attack_logs"> | string
    attack_category?: StringFilter<"attack_logs"> | string
    cookies?: XOR<AttackLogsCookiesCompositeFilter, AttackLogsCookiesObjectEqualityInput>
    headers?: XOR<AttackLogsHeadersCompositeFilter, AttackLogsHeadersObjectEqualityInput>
    method?: StringFilter<"attack_logs"> | string
    path?: StringFilter<"attack_logs"> | string
    peer?: XOR<AttackLogsPeerCompositeFilter, AttackLogsPeerObjectEqualityInput>
    post_data?: XOR<AttackLogsPostDataNullableCompositeFilter, AttackLogsPostDataObjectEqualityInput> | null
    response_msg?: XOR<AttackLogsResponseMsgCompositeFilter, AttackLogsResponseMsgObjectEqualityInput>
    status?: IntFilter<"attack_logs"> | number
    timestamp?: StringFilter<"attack_logs"> | string
    timestamp_parsed?: DateTimeFilter<"attack_logs"> | Date | string
    uuid?: StringFilter<"attack_logs"> | string
  }

  export type attack_logsOrderByWithRelationInput = {
    id?: SortOrder
    processed_at?: SortOrder
    unique_id?: SortOrder
    attack_category?: SortOrder
    cookies?: AttackLogsCookiesOrderByInput
    headers?: AttackLogsHeadersOrderByInput
    method?: SortOrder
    path?: SortOrder
    peer?: AttackLogsPeerOrderByInput
    post_data?: AttackLogsPostDataOrderByInput
    response_msg?: AttackLogsResponseMsgOrderByInput
    status?: SortOrder
    timestamp?: SortOrder
    timestamp_parsed?: SortOrder
    uuid?: SortOrder
  }

  export type attack_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid_method_path_timestamp_ip_port?: attack_logsUuidMethodPathTimestampIpPortCompoundUniqueInput
    AND?: attack_logsWhereInput | attack_logsWhereInput[]
    OR?: attack_logsWhereInput[]
    NOT?: attack_logsWhereInput | attack_logsWhereInput[]
    processed_at?: DateTimeFilter<"attack_logs"> | Date | string
    unique_id?: StringFilter<"attack_logs"> | string
    attack_category?: StringFilter<"attack_logs"> | string
    cookies?: XOR<AttackLogsCookiesCompositeFilter, AttackLogsCookiesObjectEqualityInput>
    headers?: XOR<AttackLogsHeadersCompositeFilter, AttackLogsHeadersObjectEqualityInput>
    method?: StringFilter<"attack_logs"> | string
    path?: StringFilter<"attack_logs"> | string
    peer?: XOR<AttackLogsPeerCompositeFilter, AttackLogsPeerObjectEqualityInput>
    post_data?: XOR<AttackLogsPostDataNullableCompositeFilter, AttackLogsPostDataObjectEqualityInput> | null
    response_msg?: XOR<AttackLogsResponseMsgCompositeFilter, AttackLogsResponseMsgObjectEqualityInput>
    status?: IntFilter<"attack_logs"> | number
    timestamp?: StringFilter<"attack_logs"> | string
    timestamp_parsed?: DateTimeFilter<"attack_logs"> | Date | string
    uuid?: StringFilter<"attack_logs"> | string
  }, "id" | "uuid_method_path_timestamp_ip_port">

  export type attack_logsOrderByWithAggregationInput = {
    id?: SortOrder
    processed_at?: SortOrder
    unique_id?: SortOrder
    attack_category?: SortOrder
    method?: SortOrder
    path?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    timestamp_parsed?: SortOrder
    uuid?: SortOrder
    _count?: attack_logsCountOrderByAggregateInput
    _avg?: attack_logsAvgOrderByAggregateInput
    _max?: attack_logsMaxOrderByAggregateInput
    _min?: attack_logsMinOrderByAggregateInput
    _sum?: attack_logsSumOrderByAggregateInput
  }

  export type attack_logsScalarWhereWithAggregatesInput = {
    AND?: attack_logsScalarWhereWithAggregatesInput | attack_logsScalarWhereWithAggregatesInput[]
    OR?: attack_logsScalarWhereWithAggregatesInput[]
    NOT?: attack_logsScalarWhereWithAggregatesInput | attack_logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"attack_logs"> | string
    processed_at?: DateTimeWithAggregatesFilter<"attack_logs"> | Date | string
    unique_id?: StringWithAggregatesFilter<"attack_logs"> | string
    attack_category?: StringWithAggregatesFilter<"attack_logs"> | string
    method?: StringWithAggregatesFilter<"attack_logs"> | string
    path?: StringWithAggregatesFilter<"attack_logs"> | string
    status?: IntWithAggregatesFilter<"attack_logs"> | number
    timestamp?: StringWithAggregatesFilter<"attack_logs"> | string
    timestamp_parsed?: DateTimeWithAggregatesFilter<"attack_logs"> | Date | string
    uuid?: StringWithAggregatesFilter<"attack_logs"> | string
  }

  export type attack_logsCreateInput = {
    id?: string
    processed_at: Date | string
    unique_id: string
    attack_category: string
    cookies: XOR<AttackLogsCookiesCreateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers: XOR<AttackLogsHeadersCreateEnvelopeInput, AttackLogsHeadersCreateInput>
    method: string
    path: string
    peer: XOR<AttackLogsPeerCreateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableCreateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg: XOR<AttackLogsResponseMsgCreateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status: number
    timestamp: string
    timestamp_parsed: Date | string
    uuid: string
  }

  export type attack_logsUncheckedCreateInput = {
    id?: string
    processed_at: Date | string
    unique_id: string
    attack_category: string
    cookies: XOR<AttackLogsCookiesCreateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers: XOR<AttackLogsHeadersCreateEnvelopeInput, AttackLogsHeadersCreateInput>
    method: string
    path: string
    peer: XOR<AttackLogsPeerCreateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableCreateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg: XOR<AttackLogsResponseMsgCreateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status: number
    timestamp: string
    timestamp_parsed: Date | string
    uuid: string
  }

  export type attack_logsUpdateInput = {
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unique_id?: StringFieldUpdateOperationsInput | string
    attack_category?: StringFieldUpdateOperationsInput | string
    cookies?: XOR<AttackLogsCookiesUpdateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers?: XOR<AttackLogsHeadersUpdateEnvelopeInput, AttackLogsHeadersCreateInput>
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    peer?: XOR<AttackLogsPeerUpdateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableUpdateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg?: XOR<AttackLogsResponseMsgUpdateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    timestamp_parsed?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type attack_logsUncheckedUpdateInput = {
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unique_id?: StringFieldUpdateOperationsInput | string
    attack_category?: StringFieldUpdateOperationsInput | string
    cookies?: XOR<AttackLogsCookiesUpdateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers?: XOR<AttackLogsHeadersUpdateEnvelopeInput, AttackLogsHeadersCreateInput>
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    peer?: XOR<AttackLogsPeerUpdateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableUpdateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg?: XOR<AttackLogsResponseMsgUpdateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    timestamp_parsed?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type attack_logsCreateManyInput = {
    id?: string
    processed_at: Date | string
    unique_id: string
    attack_category: string
    cookies: XOR<AttackLogsCookiesCreateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers: XOR<AttackLogsHeadersCreateEnvelopeInput, AttackLogsHeadersCreateInput>
    method: string
    path: string
    peer: XOR<AttackLogsPeerCreateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableCreateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg: XOR<AttackLogsResponseMsgCreateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status: number
    timestamp: string
    timestamp_parsed: Date | string
    uuid: string
  }

  export type attack_logsUpdateManyMutationInput = {
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unique_id?: StringFieldUpdateOperationsInput | string
    attack_category?: StringFieldUpdateOperationsInput | string
    cookies?: XOR<AttackLogsCookiesUpdateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers?: XOR<AttackLogsHeadersUpdateEnvelopeInput, AttackLogsHeadersCreateInput>
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    peer?: XOR<AttackLogsPeerUpdateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableUpdateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg?: XOR<AttackLogsResponseMsgUpdateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    timestamp_parsed?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type attack_logsUncheckedUpdateManyInput = {
    processed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unique_id?: StringFieldUpdateOperationsInput | string
    attack_category?: StringFieldUpdateOperationsInput | string
    cookies?: XOR<AttackLogsCookiesUpdateEnvelopeInput, AttackLogsCookiesCreateInput>
    headers?: XOR<AttackLogsHeadersUpdateEnvelopeInput, AttackLogsHeadersCreateInput>
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    peer?: XOR<AttackLogsPeerUpdateEnvelopeInput, AttackLogsPeerCreateInput>
    post_data?: XOR<AttackLogsPostDataNullableUpdateEnvelopeInput, AttackLogsPostDataCreateInput> | null
    response_msg?: XOR<AttackLogsResponseMsgUpdateEnvelopeInput, AttackLogsResponseMsgCreateInput>
    status?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    timestamp_parsed?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttackLogsCookiesCompositeFilter = {
    equals?: AttackLogsCookiesObjectEqualityInput
    is?: AttackLogsCookiesWhereInput
    isNot?: AttackLogsCookiesWhereInput
  }

  export type AttackLogsCookiesObjectEqualityInput = {
    sess_uuid?: InputJsonValue | null
  }

  export type AttackLogsHeadersCompositeFilter = {
    equals?: AttackLogsHeadersObjectEqualityInput
    is?: AttackLogsHeadersWhereInput
    isNot?: AttackLogsHeadersWhereInput
  }

  export type AttackLogsHeadersObjectEqualityInput = {
    accept?: string | null
    accept_encoding?: string | null
    accept_language?: string | null
    connection?: string | null
    content_length?: string | null
    content_type?: string | null
    host: string
    user_agent: string
  }

  export type AttackLogsPeerCompositeFilter = {
    equals?: AttackLogsPeerObjectEqualityInput
    is?: AttackLogsPeerWhereInput
    isNot?: AttackLogsPeerWhereInput
  }

  export type AttackLogsPeerObjectEqualityInput = {
    ip: string
    ip_info: AttackLogsPeerIpInfoObjectEqualityInput
    port: number
  }

  export type AttackLogsPostDataNullableCompositeFilter = {
    equals?: AttackLogsPostDataObjectEqualityInput | null
    is?: AttackLogsPostDataWhereInput | null
    isNot?: AttackLogsPostDataWhereInput | null
    isSet?: boolean
  }

  export type AttackLogsPostDataObjectEqualityInput = {
    exploit: string
    test: string
  }

  export type AttackLogsResponseMsgCompositeFilter = {
    equals?: AttackLogsResponseMsgObjectEqualityInput
    is?: AttackLogsResponseMsgWhereInput
    isNot?: AttackLogsResponseMsgWhereInput
  }

  export type AttackLogsResponseMsgObjectEqualityInput = {
    response: AttackLogsResponseMsgResponseObjectEqualityInput
    version: string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AttackLogsCookiesOrderByInput = {
    sess_uuid?: SortOrder
  }

  export type AttackLogsHeadersOrderByInput = {
    accept?: SortOrder
    accept_encoding?: SortOrder
    accept_language?: SortOrder
    connection?: SortOrder
    content_length?: SortOrder
    content_type?: SortOrder
    host?: SortOrder
    user_agent?: SortOrder
  }

  export type AttackLogsPeerOrderByInput = {
    ip?: SortOrder
    ip_info?: AttackLogsPeerIpInfoOrderByInput
    port?: SortOrder
  }

  export type AttackLogsPostDataOrderByInput = {
    exploit?: SortOrder
    test?: SortOrder
  }

  export type AttackLogsResponseMsgOrderByInput = {
    response?: AttackLogsResponseMsgResponseOrderByInput
    version?: SortOrder
  }

  export type attack_logsUuidMethodPathTimestampIpPortCompoundUniqueInput = {
    uuid: string
    method: string
    path: string
    timestamp: string
    ip: string
    port: number
  }

  export type attack_logsCountOrderByAggregateInput = {
    id?: SortOrder
    processed_at?: SortOrder
    unique_id?: SortOrder
    attack_category?: SortOrder
    method?: SortOrder
    path?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    timestamp_parsed?: SortOrder
    uuid?: SortOrder
  }

  export type attack_logsAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type attack_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    processed_at?: SortOrder
    unique_id?: SortOrder
    attack_category?: SortOrder
    method?: SortOrder
    path?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    timestamp_parsed?: SortOrder
    uuid?: SortOrder
  }

  export type attack_logsMinOrderByAggregateInput = {
    id?: SortOrder
    processed_at?: SortOrder
    unique_id?: SortOrder
    attack_category?: SortOrder
    method?: SortOrder
    path?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    timestamp_parsed?: SortOrder
    uuid?: SortOrder
  }

  export type attack_logsSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AttackLogsCookiesCreateEnvelopeInput = {
    set?: AttackLogsCookiesCreateInput
  }

  export type AttackLogsCookiesCreateInput = {
    sess_uuid?: InputJsonValue | null
  }

  export type AttackLogsHeadersCreateEnvelopeInput = {
    set?: AttackLogsHeadersCreateInput
  }

  export type AttackLogsHeadersCreateInput = {
    accept?: string | null
    accept_encoding?: string | null
    accept_language?: string | null
    connection?: string | null
    content_length?: string | null
    content_type?: string | null
    host: string
    user_agent: string
  }

  export type AttackLogsPeerCreateEnvelopeInput = {
    set?: AttackLogsPeerCreateInput
  }

  export type AttackLogsPeerCreateInput = {
    ip: string
    ip_info: AttackLogsPeerIpInfoCreateInput
    port: number
  }

  export type AttackLogsPostDataNullableCreateEnvelopeInput = {
    set?: AttackLogsPostDataCreateInput | null
  }

  export type AttackLogsPostDataCreateInput = {
    exploit: string
    test: string
  }

  export type AttackLogsResponseMsgCreateEnvelopeInput = {
    set?: AttackLogsResponseMsgCreateInput
  }

  export type AttackLogsResponseMsgCreateInput = {
    response: AttackLogsResponseMsgResponseCreateInput
    version: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AttackLogsCookiesUpdateEnvelopeInput = {
    set?: AttackLogsCookiesCreateInput
    update?: AttackLogsCookiesUpdateInput
  }

  export type AttackLogsHeadersUpdateEnvelopeInput = {
    set?: AttackLogsHeadersCreateInput
    update?: AttackLogsHeadersUpdateInput
  }

  export type AttackLogsPeerUpdateEnvelopeInput = {
    set?: AttackLogsPeerCreateInput
    update?: AttackLogsPeerUpdateInput
  }

  export type AttackLogsPostDataNullableUpdateEnvelopeInput = {
    set?: AttackLogsPostDataCreateInput | null
    upsert?: AttackLogsPostDataUpsertInput
    unset?: boolean
  }

  export type AttackLogsResponseMsgUpdateEnvelopeInput = {
    set?: AttackLogsResponseMsgCreateInput
    update?: AttackLogsResponseMsgUpdateInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttackLogsCookiesWhereInput = {
    AND?: AttackLogsCookiesWhereInput | AttackLogsCookiesWhereInput[]
    OR?: AttackLogsCookiesWhereInput[]
    NOT?: AttackLogsCookiesWhereInput | AttackLogsCookiesWhereInput[]
    sess_uuid?: JsonNullableFilter<"AttackLogsCookies">
  }

  export type AttackLogsHeadersWhereInput = {
    AND?: AttackLogsHeadersWhereInput | AttackLogsHeadersWhereInput[]
    OR?: AttackLogsHeadersWhereInput[]
    NOT?: AttackLogsHeadersWhereInput | AttackLogsHeadersWhereInput[]
    accept?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    accept_encoding?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    accept_language?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    connection?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    content_length?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    content_type?: StringNullableFilter<"AttackLogsHeaders"> | string | null
    host?: StringFilter<"AttackLogsHeaders"> | string
    user_agent?: StringFilter<"AttackLogsHeaders"> | string
  }

  export type AttackLogsPeerWhereInput = {
    AND?: AttackLogsPeerWhereInput | AttackLogsPeerWhereInput[]
    OR?: AttackLogsPeerWhereInput[]
    NOT?: AttackLogsPeerWhereInput | AttackLogsPeerWhereInput[]
    ip?: StringFilter<"AttackLogsPeer"> | string
    ip_info?: XOR<AttackLogsPeerIpInfoCompositeFilter, AttackLogsPeerIpInfoObjectEqualityInput>
    port?: IntFilter<"AttackLogsPeer"> | number
  }

  export type AttackLogsPeerIpInfoObjectEqualityInput = {
    ip: string
    ip_type: string
    is_private: boolean
  }

  export type AttackLogsPostDataWhereInput = {
    AND?: AttackLogsPostDataWhereInput | AttackLogsPostDataWhereInput[]
    OR?: AttackLogsPostDataWhereInput[]
    NOT?: AttackLogsPostDataWhereInput | AttackLogsPostDataWhereInput[]
    exploit?: StringFilter<"AttackLogsPostData"> | string
    test?: StringFilter<"AttackLogsPostData"> | string
  }

  export type AttackLogsResponseMsgWhereInput = {
    AND?: AttackLogsResponseMsgWhereInput | AttackLogsResponseMsgWhereInput[]
    OR?: AttackLogsResponseMsgWhereInput[]
    NOT?: AttackLogsResponseMsgWhereInput | AttackLogsResponseMsgWhereInput[]
    response?: XOR<AttackLogsResponseMsgResponseCompositeFilter, AttackLogsResponseMsgResponseObjectEqualityInput>
    version?: StringFilter<"AttackLogsResponseMsg"> | string
  }

  export type AttackLogsResponseMsgResponseObjectEqualityInput = {
    message: AttackLogsResponseMsgResponseMessageObjectEqualityInput
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AttackLogsPeerIpInfoOrderByInput = {
    ip?: SortOrder
    ip_type?: SortOrder
    is_private?: SortOrder
  }

  export type AttackLogsResponseMsgResponseOrderByInput = {
    message?: AttackLogsResponseMsgResponseMessageOrderByInput
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AttackLogsPeerIpInfoCreateInput = {
    ip: string
    ip_type: string
    is_private: boolean
  }

  export type AttackLogsResponseMsgResponseCreateInput = {
    message: AttackLogsResponseMsgResponseMessageCreateInput
  }

  export type AttackLogsCookiesUpdateInput = {
    sess_uuid?: InputJsonValue | InputJsonValue | null
  }

  export type AttackLogsHeadersUpdateInput = {
    accept?: NullableStringFieldUpdateOperationsInput | string | null
    accept_encoding?: NullableStringFieldUpdateOperationsInput | string | null
    accept_language?: NullableStringFieldUpdateOperationsInput | string | null
    connection?: NullableStringFieldUpdateOperationsInput | string | null
    content_length?: NullableStringFieldUpdateOperationsInput | string | null
    content_type?: NullableStringFieldUpdateOperationsInput | string | null
    host?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
  }

  export type AttackLogsPeerUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    ip_info?: XOR<AttackLogsPeerIpInfoUpdateEnvelopeInput, AttackLogsPeerIpInfoCreateInput>
    port?: IntFieldUpdateOperationsInput | number
  }

  export type AttackLogsPostDataUpsertInput = {
    set: AttackLogsPostDataCreateInput | null
    update: AttackLogsPostDataUpdateInput
  }

  export type AttackLogsResponseMsgUpdateInput = {
    response?: XOR<AttackLogsResponseMsgResponseUpdateEnvelopeInput, AttackLogsResponseMsgResponseCreateInput>
    version?: StringFieldUpdateOperationsInput | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AttackLogsPeerIpInfoCompositeFilter = {
    equals?: AttackLogsPeerIpInfoObjectEqualityInput
    is?: AttackLogsPeerIpInfoWhereInput
    isNot?: AttackLogsPeerIpInfoWhereInput
  }

  export type AttackLogsResponseMsgResponseCompositeFilter = {
    equals?: AttackLogsResponseMsgResponseObjectEqualityInput
    is?: AttackLogsResponseMsgResponseWhereInput
    isNot?: AttackLogsResponseMsgResponseWhereInput
  }

  export type AttackLogsResponseMsgResponseMessageObjectEqualityInput = {
    detection: AttackLogsResponseMsgResponseMessageDetectionObjectEqualityInput
    sess_uuid: string
  }

  export type AttackLogsResponseMsgResponseMessageOrderByInput = {
    detection?: AttackLogsResponseMsgResponseMessageDetectionOrderByInput
    sess_uuid?: SortOrder
  }

  export type AttackLogsResponseMsgResponseMessageCreateInput = {
    detection: AttackLogsResponseMsgResponseMessageDetectionCreateInput
    sess_uuid: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type AttackLogsPeerIpInfoUpdateEnvelopeInput = {
    set?: AttackLogsPeerIpInfoCreateInput
    update?: AttackLogsPeerIpInfoUpdateInput
  }

  export type AttackLogsPostDataUpdateInput = {
    exploit?: StringFieldUpdateOperationsInput | string
    test?: StringFieldUpdateOperationsInput | string
  }

  export type AttackLogsResponseMsgResponseUpdateEnvelopeInput = {
    set?: AttackLogsResponseMsgResponseCreateInput
    update?: AttackLogsResponseMsgResponseUpdateInput
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type AttackLogsPeerIpInfoWhereInput = {
    AND?: AttackLogsPeerIpInfoWhereInput | AttackLogsPeerIpInfoWhereInput[]
    OR?: AttackLogsPeerIpInfoWhereInput[]
    NOT?: AttackLogsPeerIpInfoWhereInput | AttackLogsPeerIpInfoWhereInput[]
    ip?: StringFilter<"AttackLogsPeerIpInfo"> | string
    ip_type?: StringFilter<"AttackLogsPeerIpInfo"> | string
    is_private?: BoolFilter<"AttackLogsPeerIpInfo"> | boolean
  }

  export type AttackLogsResponseMsgResponseWhereInput = {
    AND?: AttackLogsResponseMsgResponseWhereInput | AttackLogsResponseMsgResponseWhereInput[]
    OR?: AttackLogsResponseMsgResponseWhereInput[]
    NOT?: AttackLogsResponseMsgResponseWhereInput | AttackLogsResponseMsgResponseWhereInput[]
    message?: XOR<AttackLogsResponseMsgResponseMessageCompositeFilter, AttackLogsResponseMsgResponseMessageObjectEqualityInput>
  }

  export type AttackLogsResponseMsgResponseMessageDetectionObjectEqualityInput = {
    name: string
    order: number
    payload?: AttackLogsResponseMsgResponseMessageDetectionPayloadObjectEqualityInput | null
    type: number
    version: string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionOrderByInput = {
    name?: SortOrder
    order?: SortOrder
    payload?: AttackLogsResponseMsgResponseMessageDetectionPayloadOrderByInput
    type?: SortOrder
    version?: SortOrder
  }

  export type AttackLogsResponseMsgResponseMessageDetectionCreateInput = {
    name: string
    order: number
    payload?: AttackLogsResponseMsgResponseMessageDetectionPayloadCreateInput | null
    type: number
    version: string
  }

  export type AttackLogsPeerIpInfoUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    ip_type?: StringFieldUpdateOperationsInput | string
    is_private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttackLogsResponseMsgResponseUpdateInput = {
    message?: XOR<AttackLogsResponseMsgResponseMessageUpdateEnvelopeInput, AttackLogsResponseMsgResponseMessageCreateInput>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AttackLogsResponseMsgResponseMessageCompositeFilter = {
    equals?: AttackLogsResponseMsgResponseMessageObjectEqualityInput
    is?: AttackLogsResponseMsgResponseMessageWhereInput
    isNot?: AttackLogsResponseMsgResponseMessageWhereInput
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadObjectEqualityInput = {
    page: string
    value: string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadOrderByInput = {
    page?: SortOrder
    value?: SortOrder
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadCreateInput = {
    page: string
    value: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageUpdateEnvelopeInput = {
    set?: AttackLogsResponseMsgResponseMessageCreateInput
    update?: AttackLogsResponseMsgResponseMessageUpdateInput
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AttackLogsResponseMsgResponseMessageWhereInput = {
    AND?: AttackLogsResponseMsgResponseMessageWhereInput | AttackLogsResponseMsgResponseMessageWhereInput[]
    OR?: AttackLogsResponseMsgResponseMessageWhereInput[]
    NOT?: AttackLogsResponseMsgResponseMessageWhereInput | AttackLogsResponseMsgResponseMessageWhereInput[]
    detection?: XOR<AttackLogsResponseMsgResponseMessageDetectionCompositeFilter, AttackLogsResponseMsgResponseMessageDetectionObjectEqualityInput>
    sess_uuid?: StringFilter<"AttackLogsResponseMsgResponseMessage"> | string
  }

  export type AttackLogsResponseMsgResponseMessageUpdateInput = {
    detection?: XOR<AttackLogsResponseMsgResponseMessageDetectionUpdateEnvelopeInput, AttackLogsResponseMsgResponseMessageDetectionCreateInput>
    sess_uuid?: StringFieldUpdateOperationsInput | string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionCompositeFilter = {
    equals?: AttackLogsResponseMsgResponseMessageDetectionObjectEqualityInput
    is?: AttackLogsResponseMsgResponseMessageDetectionWhereInput
    isNot?: AttackLogsResponseMsgResponseMessageDetectionWhereInput
  }

  export type AttackLogsResponseMsgResponseMessageDetectionUpdateEnvelopeInput = {
    set?: AttackLogsResponseMsgResponseMessageDetectionCreateInput
    update?: AttackLogsResponseMsgResponseMessageDetectionUpdateInput
  }

  export type AttackLogsResponseMsgResponseMessageDetectionWhereInput = {
    AND?: AttackLogsResponseMsgResponseMessageDetectionWhereInput | AttackLogsResponseMsgResponseMessageDetectionWhereInput[]
    OR?: AttackLogsResponseMsgResponseMessageDetectionWhereInput[]
    NOT?: AttackLogsResponseMsgResponseMessageDetectionWhereInput | AttackLogsResponseMsgResponseMessageDetectionWhereInput[]
    name?: StringFilter<"AttackLogsResponseMsgResponseMessageDetection"> | string
    order?: IntFilter<"AttackLogsResponseMsgResponseMessageDetection"> | number
    payload?: XOR<AttackLogsResponseMsgResponseMessageDetectionPayloadNullableCompositeFilter, AttackLogsResponseMsgResponseMessageDetectionPayloadObjectEqualityInput> | null
    type?: IntFilter<"AttackLogsResponseMsgResponseMessageDetection"> | number
    version?: StringFilter<"AttackLogsResponseMsgResponseMessageDetection"> | string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    payload?: XOR<AttackLogsResponseMsgResponseMessageDetectionPayloadNullableUpdateEnvelopeInput, AttackLogsResponseMsgResponseMessageDetectionPayloadCreateInput> | null
    type?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadNullableCompositeFilter = {
    equals?: AttackLogsResponseMsgResponseMessageDetectionPayloadObjectEqualityInput | null
    is?: AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput | null
    isNot?: AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput | null
    isSet?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadNullableUpdateEnvelopeInput = {
    set?: AttackLogsResponseMsgResponseMessageDetectionPayloadCreateInput | null
    upsert?: AttackLogsResponseMsgResponseMessageDetectionPayloadUpsertInput
    unset?: boolean
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput = {
    AND?: AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput | AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput[]
    OR?: AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput[]
    NOT?: AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput | AttackLogsResponseMsgResponseMessageDetectionPayloadWhereInput[]
    page?: StringFilter<"AttackLogsResponseMsgResponseMessageDetectionPayload"> | string
    value?: StringFilter<"AttackLogsResponseMsgResponseMessageDetectionPayload"> | string
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadUpsertInput = {
    set: AttackLogsResponseMsgResponseMessageDetectionPayloadCreateInput | null
    update: AttackLogsResponseMsgResponseMessageDetectionPayloadUpdateInput
  }

  export type AttackLogsResponseMsgResponseMessageDetectionPayloadUpdateInput = {
    page?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}