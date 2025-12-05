
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EnergyRequest
 * 
 */
export type EnergyRequest = $Result.DefaultSelection<Prisma.$EnergyRequestPayload>
/**
 * Model InfoRequest
 * 
 */
export type InfoRequest = $Result.DefaultSelection<Prisma.$InfoRequestPayload>
/**
 * Model ChargerRequest
 * 
 */
export type ChargerRequest = $Result.DefaultSelection<Prisma.$ChargerRequestPayload>
/**
 * Model Manufacturer
 * 
 */
export type Manufacturer = $Result.DefaultSelection<Prisma.$ManufacturerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.energyRequest`: Exposes CRUD operations for the **EnergyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnergyRequests
    * const energyRequests = await prisma.energyRequest.findMany()
    * ```
    */
  get energyRequest(): Prisma.EnergyRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infoRequest`: Exposes CRUD operations for the **InfoRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfoRequests
    * const infoRequests = await prisma.infoRequest.findMany()
    * ```
    */
  get infoRequest(): Prisma.InfoRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargerRequest`: Exposes CRUD operations for the **ChargerRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargerRequests
    * const chargerRequests = await prisma.chargerRequest.findMany()
    * ```
    */
  get chargerRequest(): Prisma.ChargerRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manufacturer`: Exposes CRUD operations for the **Manufacturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacturers
    * const manufacturers = await prisma.manufacturer.findMany()
    * ```
    */
  get manufacturer(): Prisma.ManufacturerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    User: 'User',
    EnergyRequest: 'EnergyRequest',
    InfoRequest: 'InfoRequest',
    ChargerRequest: 'ChargerRequest',
    Manufacturer: 'Manufacturer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "energyRequest" | "infoRequest" | "chargerRequest" | "manufacturer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EnergyRequest: {
        payload: Prisma.$EnergyRequestPayload<ExtArgs>
        fields: Prisma.EnergyRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnergyRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnergyRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          findFirst: {
            args: Prisma.EnergyRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnergyRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          findMany: {
            args: Prisma.EnergyRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>[]
          }
          create: {
            args: Prisma.EnergyRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          createMany: {
            args: Prisma.EnergyRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnergyRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>[]
          }
          delete: {
            args: Prisma.EnergyRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          update: {
            args: Prisma.EnergyRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          deleteMany: {
            args: Prisma.EnergyRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnergyRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnergyRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>[]
          }
          upsert: {
            args: Prisma.EnergyRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnergyRequestPayload>
          }
          aggregate: {
            args: Prisma.EnergyRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnergyRequest>
          }
          groupBy: {
            args: Prisma.EnergyRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnergyRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnergyRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EnergyRequestCountAggregateOutputType> | number
          }
        }
      }
      InfoRequest: {
        payload: Prisma.$InfoRequestPayload<ExtArgs>
        fields: Prisma.InfoRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfoRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfoRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          findFirst: {
            args: Prisma.InfoRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfoRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          findMany: {
            args: Prisma.InfoRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>[]
          }
          create: {
            args: Prisma.InfoRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          createMany: {
            args: Prisma.InfoRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfoRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>[]
          }
          delete: {
            args: Prisma.InfoRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          update: {
            args: Prisma.InfoRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          deleteMany: {
            args: Prisma.InfoRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfoRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfoRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>[]
          }
          upsert: {
            args: Prisma.InfoRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoRequestPayload>
          }
          aggregate: {
            args: Prisma.InfoRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfoRequest>
          }
          groupBy: {
            args: Prisma.InfoRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfoRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfoRequestCountArgs<ExtArgs>
            result: $Utils.Optional<InfoRequestCountAggregateOutputType> | number
          }
        }
      }
      ChargerRequest: {
        payload: Prisma.$ChargerRequestPayload<ExtArgs>
        fields: Prisma.ChargerRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargerRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargerRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          findFirst: {
            args: Prisma.ChargerRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargerRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          findMany: {
            args: Prisma.ChargerRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>[]
          }
          create: {
            args: Prisma.ChargerRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          createMany: {
            args: Prisma.ChargerRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargerRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>[]
          }
          delete: {
            args: Prisma.ChargerRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          update: {
            args: Prisma.ChargerRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          deleteMany: {
            args: Prisma.ChargerRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargerRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargerRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>[]
          }
          upsert: {
            args: Prisma.ChargerRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerRequestPayload>
          }
          aggregate: {
            args: Prisma.ChargerRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargerRequest>
          }
          groupBy: {
            args: Prisma.ChargerRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargerRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargerRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ChargerRequestCountAggregateOutputType> | number
          }
        }
      }
      Manufacturer: {
        payload: Prisma.$ManufacturerPayload<ExtArgs>
        fields: Prisma.ManufacturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findFirst: {
            args: Prisma.ManufacturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findMany: {
            args: Prisma.ManufacturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          create: {
            args: Prisma.ManufacturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          createMany: {
            args: Prisma.ManufacturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManufacturerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          delete: {
            args: Prisma.ManufacturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          update: {
            args: Prisma.ManufacturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManufacturerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          upsert: {
            args: Prisma.ManufacturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          aggregate: {
            args: Prisma.ManufacturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturer>
          }
          groupBy: {
            args: Prisma.ManufacturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturerCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    energyRequest?: EnergyRequestOmit
    infoRequest?: InfoRequestOmit
    chargerRequest?: ChargerRequestOmit
    manufacturer?: ManufacturerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ManufacturerCountOutputType
   */

  export type ManufacturerCountOutputType = {
    requests: number
  }

  export type ManufacturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ManufacturerCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerCountOutputType
     */
    select?: ManufacturerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    surname: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    energyRequest?: boolean | User$energyRequestArgs<ExtArgs>
    chargerRequest?: boolean | User$chargerRequestArgs<ExtArgs>
    infoRequest?: boolean | User$infoRequestArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    energyRequest?: boolean | User$energyRequestArgs<ExtArgs>
    chargerRequest?: boolean | User$chargerRequestArgs<ExtArgs>
    infoRequest?: boolean | User$infoRequestArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      energyRequest: Prisma.$EnergyRequestPayload<ExtArgs> | null
      chargerRequest: Prisma.$ChargerRequestPayload<ExtArgs> | null
      infoRequest: Prisma.$InfoRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    energyRequest<T extends User$energyRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$energyRequestArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chargerRequest<T extends User$chargerRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$chargerRequestArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    infoRequest<T extends User$infoRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$infoRequestArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.energyRequest
   */
  export type User$energyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    where?: EnergyRequestWhereInput
  }

  /**
   * User.chargerRequest
   */
  export type User$chargerRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    where?: ChargerRequestWhereInput
  }

  /**
   * User.infoRequest
   */
  export type User$infoRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    where?: InfoRequestWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EnergyRequest
   */

  export type AggregateEnergyRequest = {
    _count: EnergyRequestCountAggregateOutputType | null
    _avg: EnergyRequestAvgAggregateOutputType | null
    _sum: EnergyRequestSumAggregateOutputType | null
    _min: EnergyRequestMinAggregateOutputType | null
    _max: EnergyRequestMaxAggregateOutputType | null
  }

  export type EnergyRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type EnergyRequestSumAggregateOutputType = {
    id: number | null
  }

  export type EnergyRequestMinAggregateOutputType = {
    id: number | null
    billName: string | null
    billUrl: string | null
    createdAt: Date | null
    paquete: string | null
    userEmail: string | null
  }

  export type EnergyRequestMaxAggregateOutputType = {
    id: number | null
    billName: string | null
    billUrl: string | null
    createdAt: Date | null
    paquete: string | null
    userEmail: string | null
  }

  export type EnergyRequestCountAggregateOutputType = {
    id: number
    billName: number
    billUrl: number
    createdAt: number
    paquete: number
    userEmail: number
    _all: number
  }


  export type EnergyRequestAvgAggregateInputType = {
    id?: true
  }

  export type EnergyRequestSumAggregateInputType = {
    id?: true
  }

  export type EnergyRequestMinAggregateInputType = {
    id?: true
    billName?: true
    billUrl?: true
    createdAt?: true
    paquete?: true
    userEmail?: true
  }

  export type EnergyRequestMaxAggregateInputType = {
    id?: true
    billName?: true
    billUrl?: true
    createdAt?: true
    paquete?: true
    userEmail?: true
  }

  export type EnergyRequestCountAggregateInputType = {
    id?: true
    billName?: true
    billUrl?: true
    createdAt?: true
    paquete?: true
    userEmail?: true
    _all?: true
  }

  export type EnergyRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnergyRequest to aggregate.
     */
    where?: EnergyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnergyRequests to fetch.
     */
    orderBy?: EnergyRequestOrderByWithRelationInput | EnergyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnergyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnergyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnergyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnergyRequests
    **/
    _count?: true | EnergyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnergyRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnergyRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnergyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnergyRequestMaxAggregateInputType
  }

  export type GetEnergyRequestAggregateType<T extends EnergyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEnergyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnergyRequest[P]>
      : GetScalarType<T[P], AggregateEnergyRequest[P]>
  }




  export type EnergyRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnergyRequestWhereInput
    orderBy?: EnergyRequestOrderByWithAggregationInput | EnergyRequestOrderByWithAggregationInput[]
    by: EnergyRequestScalarFieldEnum[] | EnergyRequestScalarFieldEnum
    having?: EnergyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnergyRequestCountAggregateInputType | true
    _avg?: EnergyRequestAvgAggregateInputType
    _sum?: EnergyRequestSumAggregateInputType
    _min?: EnergyRequestMinAggregateInputType
    _max?: EnergyRequestMaxAggregateInputType
  }

  export type EnergyRequestGroupByOutputType = {
    id: number
    billName: string
    billUrl: string
    createdAt: Date
    paquete: string
    userEmail: string
    _count: EnergyRequestCountAggregateOutputType | null
    _avg: EnergyRequestAvgAggregateOutputType | null
    _sum: EnergyRequestSumAggregateOutputType | null
    _min: EnergyRequestMinAggregateOutputType | null
    _max: EnergyRequestMaxAggregateOutputType | null
  }

  type GetEnergyRequestGroupByPayload<T extends EnergyRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnergyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnergyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnergyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EnergyRequestGroupByOutputType[P]>
        }
      >
    >


  export type EnergyRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billName?: boolean
    billUrl?: boolean
    createdAt?: boolean
    paquete?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["energyRequest"]>

  export type EnergyRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billName?: boolean
    billUrl?: boolean
    createdAt?: boolean
    paquete?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["energyRequest"]>

  export type EnergyRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billName?: boolean
    billUrl?: boolean
    createdAt?: boolean
    paquete?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["energyRequest"]>

  export type EnergyRequestSelectScalar = {
    id?: boolean
    billName?: boolean
    billUrl?: boolean
    createdAt?: boolean
    paquete?: boolean
    userEmail?: boolean
  }

  export type EnergyRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billName" | "billUrl" | "createdAt" | "paquete" | "userEmail", ExtArgs["result"]["energyRequest"]>
  export type EnergyRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnergyRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnergyRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnergyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnergyRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      billName: string
      billUrl: string
      createdAt: Date
      paquete: string
      userEmail: string
    }, ExtArgs["result"]["energyRequest"]>
    composites: {}
  }

  type EnergyRequestGetPayload<S extends boolean | null | undefined | EnergyRequestDefaultArgs> = $Result.GetResult<Prisma.$EnergyRequestPayload, S>

  type EnergyRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnergyRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnergyRequestCountAggregateInputType | true
    }

  export interface EnergyRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnergyRequest'], meta: { name: 'EnergyRequest' } }
    /**
     * Find zero or one EnergyRequest that matches the filter.
     * @param {EnergyRequestFindUniqueArgs} args - Arguments to find a EnergyRequest
     * @example
     * // Get one EnergyRequest
     * const energyRequest = await prisma.energyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnergyRequestFindUniqueArgs>(args: SelectSubset<T, EnergyRequestFindUniqueArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnergyRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnergyRequestFindUniqueOrThrowArgs} args - Arguments to find a EnergyRequest
     * @example
     * // Get one EnergyRequest
     * const energyRequest = await prisma.energyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnergyRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EnergyRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnergyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestFindFirstArgs} args - Arguments to find a EnergyRequest
     * @example
     * // Get one EnergyRequest
     * const energyRequest = await prisma.energyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnergyRequestFindFirstArgs>(args?: SelectSubset<T, EnergyRequestFindFirstArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnergyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestFindFirstOrThrowArgs} args - Arguments to find a EnergyRequest
     * @example
     * // Get one EnergyRequest
     * const energyRequest = await prisma.energyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnergyRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EnergyRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnergyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnergyRequests
     * const energyRequests = await prisma.energyRequest.findMany()
     * 
     * // Get first 10 EnergyRequests
     * const energyRequests = await prisma.energyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const energyRequestWithIdOnly = await prisma.energyRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnergyRequestFindManyArgs>(args?: SelectSubset<T, EnergyRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnergyRequest.
     * @param {EnergyRequestCreateArgs} args - Arguments to create a EnergyRequest.
     * @example
     * // Create one EnergyRequest
     * const EnergyRequest = await prisma.energyRequest.create({
     *   data: {
     *     // ... data to create a EnergyRequest
     *   }
     * })
     * 
     */
    create<T extends EnergyRequestCreateArgs>(args: SelectSubset<T, EnergyRequestCreateArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnergyRequests.
     * @param {EnergyRequestCreateManyArgs} args - Arguments to create many EnergyRequests.
     * @example
     * // Create many EnergyRequests
     * const energyRequest = await prisma.energyRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnergyRequestCreateManyArgs>(args?: SelectSubset<T, EnergyRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnergyRequests and returns the data saved in the database.
     * @param {EnergyRequestCreateManyAndReturnArgs} args - Arguments to create many EnergyRequests.
     * @example
     * // Create many EnergyRequests
     * const energyRequest = await prisma.energyRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnergyRequests and only return the `id`
     * const energyRequestWithIdOnly = await prisma.energyRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnergyRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EnergyRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnergyRequest.
     * @param {EnergyRequestDeleteArgs} args - Arguments to delete one EnergyRequest.
     * @example
     * // Delete one EnergyRequest
     * const EnergyRequest = await prisma.energyRequest.delete({
     *   where: {
     *     // ... filter to delete one EnergyRequest
     *   }
     * })
     * 
     */
    delete<T extends EnergyRequestDeleteArgs>(args: SelectSubset<T, EnergyRequestDeleteArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnergyRequest.
     * @param {EnergyRequestUpdateArgs} args - Arguments to update one EnergyRequest.
     * @example
     * // Update one EnergyRequest
     * const energyRequest = await prisma.energyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnergyRequestUpdateArgs>(args: SelectSubset<T, EnergyRequestUpdateArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnergyRequests.
     * @param {EnergyRequestDeleteManyArgs} args - Arguments to filter EnergyRequests to delete.
     * @example
     * // Delete a few EnergyRequests
     * const { count } = await prisma.energyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnergyRequestDeleteManyArgs>(args?: SelectSubset<T, EnergyRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnergyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnergyRequests
     * const energyRequest = await prisma.energyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnergyRequestUpdateManyArgs>(args: SelectSubset<T, EnergyRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnergyRequests and returns the data updated in the database.
     * @param {EnergyRequestUpdateManyAndReturnArgs} args - Arguments to update many EnergyRequests.
     * @example
     * // Update many EnergyRequests
     * const energyRequest = await prisma.energyRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnergyRequests and only return the `id`
     * const energyRequestWithIdOnly = await prisma.energyRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnergyRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EnergyRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnergyRequest.
     * @param {EnergyRequestUpsertArgs} args - Arguments to update or create a EnergyRequest.
     * @example
     * // Update or create a EnergyRequest
     * const energyRequest = await prisma.energyRequest.upsert({
     *   create: {
     *     // ... data to create a EnergyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnergyRequest we want to update
     *   }
     * })
     */
    upsert<T extends EnergyRequestUpsertArgs>(args: SelectSubset<T, EnergyRequestUpsertArgs<ExtArgs>>): Prisma__EnergyRequestClient<$Result.GetResult<Prisma.$EnergyRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnergyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestCountArgs} args - Arguments to filter EnergyRequests to count.
     * @example
     * // Count the number of EnergyRequests
     * const count = await prisma.energyRequest.count({
     *   where: {
     *     // ... the filter for the EnergyRequests we want to count
     *   }
     * })
    **/
    count<T extends EnergyRequestCountArgs>(
      args?: Subset<T, EnergyRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnergyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnergyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnergyRequestAggregateArgs>(args: Subset<T, EnergyRequestAggregateArgs>): Prisma.PrismaPromise<GetEnergyRequestAggregateType<T>>

    /**
     * Group by EnergyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyRequestGroupByArgs} args - Group by arguments.
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
      T extends EnergyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnergyRequestGroupByArgs['orderBy'] }
        : { orderBy?: EnergyRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnergyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnergyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnergyRequest model
   */
  readonly fields: EnergyRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnergyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnergyRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnergyRequest model
   */
  interface EnergyRequestFieldRefs {
    readonly id: FieldRef<"EnergyRequest", 'Int'>
    readonly billName: FieldRef<"EnergyRequest", 'String'>
    readonly billUrl: FieldRef<"EnergyRequest", 'String'>
    readonly createdAt: FieldRef<"EnergyRequest", 'DateTime'>
    readonly paquete: FieldRef<"EnergyRequest", 'String'>
    readonly userEmail: FieldRef<"EnergyRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnergyRequest findUnique
   */
  export type EnergyRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnergyRequest to fetch.
     */
    where: EnergyRequestWhereUniqueInput
  }

  /**
   * EnergyRequest findUniqueOrThrow
   */
  export type EnergyRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnergyRequest to fetch.
     */
    where: EnergyRequestWhereUniqueInput
  }

  /**
   * EnergyRequest findFirst
   */
  export type EnergyRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnergyRequest to fetch.
     */
    where?: EnergyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnergyRequests to fetch.
     */
    orderBy?: EnergyRequestOrderByWithRelationInput | EnergyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnergyRequests.
     */
    cursor?: EnergyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnergyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnergyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnergyRequests.
     */
    distinct?: EnergyRequestScalarFieldEnum | EnergyRequestScalarFieldEnum[]
  }

  /**
   * EnergyRequest findFirstOrThrow
   */
  export type EnergyRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnergyRequest to fetch.
     */
    where?: EnergyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnergyRequests to fetch.
     */
    orderBy?: EnergyRequestOrderByWithRelationInput | EnergyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnergyRequests.
     */
    cursor?: EnergyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnergyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnergyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnergyRequests.
     */
    distinct?: EnergyRequestScalarFieldEnum | EnergyRequestScalarFieldEnum[]
  }

  /**
   * EnergyRequest findMany
   */
  export type EnergyRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EnergyRequests to fetch.
     */
    where?: EnergyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnergyRequests to fetch.
     */
    orderBy?: EnergyRequestOrderByWithRelationInput | EnergyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnergyRequests.
     */
    cursor?: EnergyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnergyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnergyRequests.
     */
    skip?: number
    distinct?: EnergyRequestScalarFieldEnum | EnergyRequestScalarFieldEnum[]
  }

  /**
   * EnergyRequest create
   */
  export type EnergyRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EnergyRequest.
     */
    data: XOR<EnergyRequestCreateInput, EnergyRequestUncheckedCreateInput>
  }

  /**
   * EnergyRequest createMany
   */
  export type EnergyRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnergyRequests.
     */
    data: EnergyRequestCreateManyInput | EnergyRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnergyRequest createManyAndReturn
   */
  export type EnergyRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EnergyRequests.
     */
    data: EnergyRequestCreateManyInput | EnergyRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnergyRequest update
   */
  export type EnergyRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EnergyRequest.
     */
    data: XOR<EnergyRequestUpdateInput, EnergyRequestUncheckedUpdateInput>
    /**
     * Choose, which EnergyRequest to update.
     */
    where: EnergyRequestWhereUniqueInput
  }

  /**
   * EnergyRequest updateMany
   */
  export type EnergyRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnergyRequests.
     */
    data: XOR<EnergyRequestUpdateManyMutationInput, EnergyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EnergyRequests to update
     */
    where?: EnergyRequestWhereInput
    /**
     * Limit how many EnergyRequests to update.
     */
    limit?: number
  }

  /**
   * EnergyRequest updateManyAndReturn
   */
  export type EnergyRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * The data used to update EnergyRequests.
     */
    data: XOR<EnergyRequestUpdateManyMutationInput, EnergyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EnergyRequests to update
     */
    where?: EnergyRequestWhereInput
    /**
     * Limit how many EnergyRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnergyRequest upsert
   */
  export type EnergyRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EnergyRequest to update in case it exists.
     */
    where: EnergyRequestWhereUniqueInput
    /**
     * In case the EnergyRequest found by the `where` argument doesn't exist, create a new EnergyRequest with this data.
     */
    create: XOR<EnergyRequestCreateInput, EnergyRequestUncheckedCreateInput>
    /**
     * In case the EnergyRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnergyRequestUpdateInput, EnergyRequestUncheckedUpdateInput>
  }

  /**
   * EnergyRequest delete
   */
  export type EnergyRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
    /**
     * Filter which EnergyRequest to delete.
     */
    where: EnergyRequestWhereUniqueInput
  }

  /**
   * EnergyRequest deleteMany
   */
  export type EnergyRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnergyRequests to delete
     */
    where?: EnergyRequestWhereInput
    /**
     * Limit how many EnergyRequests to delete.
     */
    limit?: number
  }

  /**
   * EnergyRequest without action
   */
  export type EnergyRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnergyRequest
     */
    select?: EnergyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnergyRequest
     */
    omit?: EnergyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnergyRequestInclude<ExtArgs> | null
  }


  /**
   * Model InfoRequest
   */

  export type AggregateInfoRequest = {
    _count: InfoRequestCountAggregateOutputType | null
    _avg: InfoRequestAvgAggregateOutputType | null
    _sum: InfoRequestSumAggregateOutputType | null
    _min: InfoRequestMinAggregateOutputType | null
    _max: InfoRequestMaxAggregateOutputType | null
  }

  export type InfoRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type InfoRequestSumAggregateOutputType = {
    id: number | null
  }

  export type InfoRequestMinAggregateOutputType = {
    id: number | null
    requestType: string | null
    comment: string | null
    userEmail: string | null
  }

  export type InfoRequestMaxAggregateOutputType = {
    id: number | null
    requestType: string | null
    comment: string | null
    userEmail: string | null
  }

  export type InfoRequestCountAggregateOutputType = {
    id: number
    requestType: number
    comment: number
    userEmail: number
    _all: number
  }


  export type InfoRequestAvgAggregateInputType = {
    id?: true
  }

  export type InfoRequestSumAggregateInputType = {
    id?: true
  }

  export type InfoRequestMinAggregateInputType = {
    id?: true
    requestType?: true
    comment?: true
    userEmail?: true
  }

  export type InfoRequestMaxAggregateInputType = {
    id?: true
    requestType?: true
    comment?: true
    userEmail?: true
  }

  export type InfoRequestCountAggregateInputType = {
    id?: true
    requestType?: true
    comment?: true
    userEmail?: true
    _all?: true
  }

  export type InfoRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoRequest to aggregate.
     */
    where?: InfoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoRequests to fetch.
     */
    orderBy?: InfoRequestOrderByWithRelationInput | InfoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfoRequests
    **/
    _count?: true | InfoRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfoRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfoRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfoRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfoRequestMaxAggregateInputType
  }

  export type GetInfoRequestAggregateType<T extends InfoRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateInfoRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfoRequest[P]>
      : GetScalarType<T[P], AggregateInfoRequest[P]>
  }




  export type InfoRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfoRequestWhereInput
    orderBy?: InfoRequestOrderByWithAggregationInput | InfoRequestOrderByWithAggregationInput[]
    by: InfoRequestScalarFieldEnum[] | InfoRequestScalarFieldEnum
    having?: InfoRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfoRequestCountAggregateInputType | true
    _avg?: InfoRequestAvgAggregateInputType
    _sum?: InfoRequestSumAggregateInputType
    _min?: InfoRequestMinAggregateInputType
    _max?: InfoRequestMaxAggregateInputType
  }

  export type InfoRequestGroupByOutputType = {
    id: number
    requestType: string
    comment: string
    userEmail: string
    _count: InfoRequestCountAggregateOutputType | null
    _avg: InfoRequestAvgAggregateOutputType | null
    _sum: InfoRequestSumAggregateOutputType | null
    _min: InfoRequestMinAggregateOutputType | null
    _max: InfoRequestMaxAggregateOutputType | null
  }

  type GetInfoRequestGroupByPayload<T extends InfoRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfoRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfoRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfoRequestGroupByOutputType[P]>
            : GetScalarType<T[P], InfoRequestGroupByOutputType[P]>
        }
      >
    >


  export type InfoRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestType?: boolean
    comment?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infoRequest"]>

  export type InfoRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestType?: boolean
    comment?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infoRequest"]>

  export type InfoRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestType?: boolean
    comment?: boolean
    userEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infoRequest"]>

  export type InfoRequestSelectScalar = {
    id?: boolean
    requestType?: boolean
    comment?: boolean
    userEmail?: boolean
  }

  export type InfoRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestType" | "comment" | "userEmail", ExtArgs["result"]["infoRequest"]>
  export type InfoRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InfoRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InfoRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InfoRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfoRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requestType: string
      comment: string
      userEmail: string
    }, ExtArgs["result"]["infoRequest"]>
    composites: {}
  }

  type InfoRequestGetPayload<S extends boolean | null | undefined | InfoRequestDefaultArgs> = $Result.GetResult<Prisma.$InfoRequestPayload, S>

  type InfoRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfoRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfoRequestCountAggregateInputType | true
    }

  export interface InfoRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfoRequest'], meta: { name: 'InfoRequest' } }
    /**
     * Find zero or one InfoRequest that matches the filter.
     * @param {InfoRequestFindUniqueArgs} args - Arguments to find a InfoRequest
     * @example
     * // Get one InfoRequest
     * const infoRequest = await prisma.infoRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfoRequestFindUniqueArgs>(args: SelectSubset<T, InfoRequestFindUniqueArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfoRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfoRequestFindUniqueOrThrowArgs} args - Arguments to find a InfoRequest
     * @example
     * // Get one InfoRequest
     * const infoRequest = await prisma.infoRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfoRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, InfoRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestFindFirstArgs} args - Arguments to find a InfoRequest
     * @example
     * // Get one InfoRequest
     * const infoRequest = await prisma.infoRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfoRequestFindFirstArgs>(args?: SelectSubset<T, InfoRequestFindFirstArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestFindFirstOrThrowArgs} args - Arguments to find a InfoRequest
     * @example
     * // Get one InfoRequest
     * const infoRequest = await prisma.infoRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfoRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, InfoRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfoRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfoRequests
     * const infoRequests = await prisma.infoRequest.findMany()
     * 
     * // Get first 10 InfoRequests
     * const infoRequests = await prisma.infoRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infoRequestWithIdOnly = await prisma.infoRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfoRequestFindManyArgs>(args?: SelectSubset<T, InfoRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfoRequest.
     * @param {InfoRequestCreateArgs} args - Arguments to create a InfoRequest.
     * @example
     * // Create one InfoRequest
     * const InfoRequest = await prisma.infoRequest.create({
     *   data: {
     *     // ... data to create a InfoRequest
     *   }
     * })
     * 
     */
    create<T extends InfoRequestCreateArgs>(args: SelectSubset<T, InfoRequestCreateArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfoRequests.
     * @param {InfoRequestCreateManyArgs} args - Arguments to create many InfoRequests.
     * @example
     * // Create many InfoRequests
     * const infoRequest = await prisma.infoRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfoRequestCreateManyArgs>(args?: SelectSubset<T, InfoRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfoRequests and returns the data saved in the database.
     * @param {InfoRequestCreateManyAndReturnArgs} args - Arguments to create many InfoRequests.
     * @example
     * // Create many InfoRequests
     * const infoRequest = await prisma.infoRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfoRequests and only return the `id`
     * const infoRequestWithIdOnly = await prisma.infoRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfoRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, InfoRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfoRequest.
     * @param {InfoRequestDeleteArgs} args - Arguments to delete one InfoRequest.
     * @example
     * // Delete one InfoRequest
     * const InfoRequest = await prisma.infoRequest.delete({
     *   where: {
     *     // ... filter to delete one InfoRequest
     *   }
     * })
     * 
     */
    delete<T extends InfoRequestDeleteArgs>(args: SelectSubset<T, InfoRequestDeleteArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfoRequest.
     * @param {InfoRequestUpdateArgs} args - Arguments to update one InfoRequest.
     * @example
     * // Update one InfoRequest
     * const infoRequest = await prisma.infoRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfoRequestUpdateArgs>(args: SelectSubset<T, InfoRequestUpdateArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfoRequests.
     * @param {InfoRequestDeleteManyArgs} args - Arguments to filter InfoRequests to delete.
     * @example
     * // Delete a few InfoRequests
     * const { count } = await prisma.infoRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfoRequestDeleteManyArgs>(args?: SelectSubset<T, InfoRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfoRequests
     * const infoRequest = await prisma.infoRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfoRequestUpdateManyArgs>(args: SelectSubset<T, InfoRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoRequests and returns the data updated in the database.
     * @param {InfoRequestUpdateManyAndReturnArgs} args - Arguments to update many InfoRequests.
     * @example
     * // Update many InfoRequests
     * const infoRequest = await prisma.infoRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfoRequests and only return the `id`
     * const infoRequestWithIdOnly = await prisma.infoRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfoRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, InfoRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfoRequest.
     * @param {InfoRequestUpsertArgs} args - Arguments to update or create a InfoRequest.
     * @example
     * // Update or create a InfoRequest
     * const infoRequest = await prisma.infoRequest.upsert({
     *   create: {
     *     // ... data to create a InfoRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfoRequest we want to update
     *   }
     * })
     */
    upsert<T extends InfoRequestUpsertArgs>(args: SelectSubset<T, InfoRequestUpsertArgs<ExtArgs>>): Prisma__InfoRequestClient<$Result.GetResult<Prisma.$InfoRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfoRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestCountArgs} args - Arguments to filter InfoRequests to count.
     * @example
     * // Count the number of InfoRequests
     * const count = await prisma.infoRequest.count({
     *   where: {
     *     // ... the filter for the InfoRequests we want to count
     *   }
     * })
    **/
    count<T extends InfoRequestCountArgs>(
      args?: Subset<T, InfoRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfoRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfoRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InfoRequestAggregateArgs>(args: Subset<T, InfoRequestAggregateArgs>): Prisma.PrismaPromise<GetInfoRequestAggregateType<T>>

    /**
     * Group by InfoRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoRequestGroupByArgs} args - Group by arguments.
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
      T extends InfoRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfoRequestGroupByArgs['orderBy'] }
        : { orderBy?: InfoRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InfoRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfoRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfoRequest model
   */
  readonly fields: InfoRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfoRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfoRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InfoRequest model
   */
  interface InfoRequestFieldRefs {
    readonly id: FieldRef<"InfoRequest", 'Int'>
    readonly requestType: FieldRef<"InfoRequest", 'String'>
    readonly comment: FieldRef<"InfoRequest", 'String'>
    readonly userEmail: FieldRef<"InfoRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InfoRequest findUnique
   */
  export type InfoRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter, which InfoRequest to fetch.
     */
    where: InfoRequestWhereUniqueInput
  }

  /**
   * InfoRequest findUniqueOrThrow
   */
  export type InfoRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter, which InfoRequest to fetch.
     */
    where: InfoRequestWhereUniqueInput
  }

  /**
   * InfoRequest findFirst
   */
  export type InfoRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter, which InfoRequest to fetch.
     */
    where?: InfoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoRequests to fetch.
     */
    orderBy?: InfoRequestOrderByWithRelationInput | InfoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoRequests.
     */
    cursor?: InfoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoRequests.
     */
    distinct?: InfoRequestScalarFieldEnum | InfoRequestScalarFieldEnum[]
  }

  /**
   * InfoRequest findFirstOrThrow
   */
  export type InfoRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter, which InfoRequest to fetch.
     */
    where?: InfoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoRequests to fetch.
     */
    orderBy?: InfoRequestOrderByWithRelationInput | InfoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoRequests.
     */
    cursor?: InfoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoRequests.
     */
    distinct?: InfoRequestScalarFieldEnum | InfoRequestScalarFieldEnum[]
  }

  /**
   * InfoRequest findMany
   */
  export type InfoRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter, which InfoRequests to fetch.
     */
    where?: InfoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoRequests to fetch.
     */
    orderBy?: InfoRequestOrderByWithRelationInput | InfoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfoRequests.
     */
    cursor?: InfoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoRequests.
     */
    skip?: number
    distinct?: InfoRequestScalarFieldEnum | InfoRequestScalarFieldEnum[]
  }

  /**
   * InfoRequest create
   */
  export type InfoRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a InfoRequest.
     */
    data: XOR<InfoRequestCreateInput, InfoRequestUncheckedCreateInput>
  }

  /**
   * InfoRequest createMany
   */
  export type InfoRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfoRequests.
     */
    data: InfoRequestCreateManyInput | InfoRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfoRequest createManyAndReturn
   */
  export type InfoRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * The data used to create many InfoRequests.
     */
    data: InfoRequestCreateManyInput | InfoRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfoRequest update
   */
  export type InfoRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a InfoRequest.
     */
    data: XOR<InfoRequestUpdateInput, InfoRequestUncheckedUpdateInput>
    /**
     * Choose, which InfoRequest to update.
     */
    where: InfoRequestWhereUniqueInput
  }

  /**
   * InfoRequest updateMany
   */
  export type InfoRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfoRequests.
     */
    data: XOR<InfoRequestUpdateManyMutationInput, InfoRequestUncheckedUpdateManyInput>
    /**
     * Filter which InfoRequests to update
     */
    where?: InfoRequestWhereInput
    /**
     * Limit how many InfoRequests to update.
     */
    limit?: number
  }

  /**
   * InfoRequest updateManyAndReturn
   */
  export type InfoRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * The data used to update InfoRequests.
     */
    data: XOR<InfoRequestUpdateManyMutationInput, InfoRequestUncheckedUpdateManyInput>
    /**
     * Filter which InfoRequests to update
     */
    where?: InfoRequestWhereInput
    /**
     * Limit how many InfoRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfoRequest upsert
   */
  export type InfoRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the InfoRequest to update in case it exists.
     */
    where: InfoRequestWhereUniqueInput
    /**
     * In case the InfoRequest found by the `where` argument doesn't exist, create a new InfoRequest with this data.
     */
    create: XOR<InfoRequestCreateInput, InfoRequestUncheckedCreateInput>
    /**
     * In case the InfoRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfoRequestUpdateInput, InfoRequestUncheckedUpdateInput>
  }

  /**
   * InfoRequest delete
   */
  export type InfoRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
    /**
     * Filter which InfoRequest to delete.
     */
    where: InfoRequestWhereUniqueInput
  }

  /**
   * InfoRequest deleteMany
   */
  export type InfoRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoRequests to delete
     */
    where?: InfoRequestWhereInput
    /**
     * Limit how many InfoRequests to delete.
     */
    limit?: number
  }

  /**
   * InfoRequest without action
   */
  export type InfoRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoRequest
     */
    select?: InfoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoRequest
     */
    omit?: InfoRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfoRequestInclude<ExtArgs> | null
  }


  /**
   * Model ChargerRequest
   */

  export type AggregateChargerRequest = {
    _count: ChargerRequestCountAggregateOutputType | null
    _avg: ChargerRequestAvgAggregateOutputType | null
    _sum: ChargerRequestSumAggregateOutputType | null
    _min: ChargerRequestMinAggregateOutputType | null
    _max: ChargerRequestMaxAggregateOutputType | null
  }

  export type ChargerRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type ChargerRequestSumAggregateOutputType = {
    id: number | null
  }

  export type ChargerRequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userEmail: string | null
    manufacturerName: string | null
  }

  export type ChargerRequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userEmail: string | null
    manufacturerName: string | null
  }

  export type ChargerRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    userEmail: number
    manufacturerName: number
    _all: number
  }


  export type ChargerRequestAvgAggregateInputType = {
    id?: true
  }

  export type ChargerRequestSumAggregateInputType = {
    id?: true
  }

  export type ChargerRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    userEmail?: true
    manufacturerName?: true
  }

  export type ChargerRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userEmail?: true
    manufacturerName?: true
  }

  export type ChargerRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    userEmail?: true
    manufacturerName?: true
    _all?: true
  }

  export type ChargerRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargerRequest to aggregate.
     */
    where?: ChargerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargerRequests to fetch.
     */
    orderBy?: ChargerRequestOrderByWithRelationInput | ChargerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargerRequests
    **/
    _count?: true | ChargerRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargerRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargerRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargerRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargerRequestMaxAggregateInputType
  }

  export type GetChargerRequestAggregateType<T extends ChargerRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateChargerRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargerRequest[P]>
      : GetScalarType<T[P], AggregateChargerRequest[P]>
  }




  export type ChargerRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerRequestWhereInput
    orderBy?: ChargerRequestOrderByWithAggregationInput | ChargerRequestOrderByWithAggregationInput[]
    by: ChargerRequestScalarFieldEnum[] | ChargerRequestScalarFieldEnum
    having?: ChargerRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargerRequestCountAggregateInputType | true
    _avg?: ChargerRequestAvgAggregateInputType
    _sum?: ChargerRequestSumAggregateInputType
    _min?: ChargerRequestMinAggregateInputType
    _max?: ChargerRequestMaxAggregateInputType
  }

  export type ChargerRequestGroupByOutputType = {
    id: number
    createdAt: Date
    userEmail: string
    manufacturerName: string | null
    _count: ChargerRequestCountAggregateOutputType | null
    _avg: ChargerRequestAvgAggregateOutputType | null
    _sum: ChargerRequestSumAggregateOutputType | null
    _min: ChargerRequestMinAggregateOutputType | null
    _max: ChargerRequestMaxAggregateOutputType | null
  }

  type GetChargerRequestGroupByPayload<T extends ChargerRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargerRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargerRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargerRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ChargerRequestGroupByOutputType[P]>
        }
      >
    >


  export type ChargerRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userEmail?: boolean
    manufacturerName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }, ExtArgs["result"]["chargerRequest"]>

  export type ChargerRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userEmail?: boolean
    manufacturerName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }, ExtArgs["result"]["chargerRequest"]>

  export type ChargerRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userEmail?: boolean
    manufacturerName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }, ExtArgs["result"]["chargerRequest"]>

  export type ChargerRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userEmail?: boolean
    manufacturerName?: boolean
  }

  export type ChargerRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userEmail" | "manufacturerName", ExtArgs["result"]["chargerRequest"]>
  export type ChargerRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }
  export type ChargerRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }
  export type ChargerRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manufacturer?: boolean | ChargerRequest$manufacturerArgs<ExtArgs>
  }

  export type $ChargerRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargerRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      manufacturer: Prisma.$ManufacturerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userEmail: string
      manufacturerName: string | null
    }, ExtArgs["result"]["chargerRequest"]>
    composites: {}
  }

  type ChargerRequestGetPayload<S extends boolean | null | undefined | ChargerRequestDefaultArgs> = $Result.GetResult<Prisma.$ChargerRequestPayload, S>

  type ChargerRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargerRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargerRequestCountAggregateInputType | true
    }

  export interface ChargerRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargerRequest'], meta: { name: 'ChargerRequest' } }
    /**
     * Find zero or one ChargerRequest that matches the filter.
     * @param {ChargerRequestFindUniqueArgs} args - Arguments to find a ChargerRequest
     * @example
     * // Get one ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargerRequestFindUniqueArgs>(args: SelectSubset<T, ChargerRequestFindUniqueArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargerRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargerRequestFindUniqueOrThrowArgs} args - Arguments to find a ChargerRequest
     * @example
     * // Get one ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargerRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargerRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargerRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestFindFirstArgs} args - Arguments to find a ChargerRequest
     * @example
     * // Get one ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargerRequestFindFirstArgs>(args?: SelectSubset<T, ChargerRequestFindFirstArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargerRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestFindFirstOrThrowArgs} args - Arguments to find a ChargerRequest
     * @example
     * // Get one ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargerRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargerRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargerRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargerRequests
     * const chargerRequests = await prisma.chargerRequest.findMany()
     * 
     * // Get first 10 ChargerRequests
     * const chargerRequests = await prisma.chargerRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargerRequestWithIdOnly = await prisma.chargerRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargerRequestFindManyArgs>(args?: SelectSubset<T, ChargerRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargerRequest.
     * @param {ChargerRequestCreateArgs} args - Arguments to create a ChargerRequest.
     * @example
     * // Create one ChargerRequest
     * const ChargerRequest = await prisma.chargerRequest.create({
     *   data: {
     *     // ... data to create a ChargerRequest
     *   }
     * })
     * 
     */
    create<T extends ChargerRequestCreateArgs>(args: SelectSubset<T, ChargerRequestCreateArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargerRequests.
     * @param {ChargerRequestCreateManyArgs} args - Arguments to create many ChargerRequests.
     * @example
     * // Create many ChargerRequests
     * const chargerRequest = await prisma.chargerRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargerRequestCreateManyArgs>(args?: SelectSubset<T, ChargerRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargerRequests and returns the data saved in the database.
     * @param {ChargerRequestCreateManyAndReturnArgs} args - Arguments to create many ChargerRequests.
     * @example
     * // Create many ChargerRequests
     * const chargerRequest = await prisma.chargerRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargerRequests and only return the `id`
     * const chargerRequestWithIdOnly = await prisma.chargerRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargerRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargerRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargerRequest.
     * @param {ChargerRequestDeleteArgs} args - Arguments to delete one ChargerRequest.
     * @example
     * // Delete one ChargerRequest
     * const ChargerRequest = await prisma.chargerRequest.delete({
     *   where: {
     *     // ... filter to delete one ChargerRequest
     *   }
     * })
     * 
     */
    delete<T extends ChargerRequestDeleteArgs>(args: SelectSubset<T, ChargerRequestDeleteArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargerRequest.
     * @param {ChargerRequestUpdateArgs} args - Arguments to update one ChargerRequest.
     * @example
     * // Update one ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargerRequestUpdateArgs>(args: SelectSubset<T, ChargerRequestUpdateArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargerRequests.
     * @param {ChargerRequestDeleteManyArgs} args - Arguments to filter ChargerRequests to delete.
     * @example
     * // Delete a few ChargerRequests
     * const { count } = await prisma.chargerRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargerRequestDeleteManyArgs>(args?: SelectSubset<T, ChargerRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargerRequests
     * const chargerRequest = await prisma.chargerRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargerRequestUpdateManyArgs>(args: SelectSubset<T, ChargerRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargerRequests and returns the data updated in the database.
     * @param {ChargerRequestUpdateManyAndReturnArgs} args - Arguments to update many ChargerRequests.
     * @example
     * // Update many ChargerRequests
     * const chargerRequest = await prisma.chargerRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargerRequests and only return the `id`
     * const chargerRequestWithIdOnly = await prisma.chargerRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargerRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargerRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargerRequest.
     * @param {ChargerRequestUpsertArgs} args - Arguments to update or create a ChargerRequest.
     * @example
     * // Update or create a ChargerRequest
     * const chargerRequest = await prisma.chargerRequest.upsert({
     *   create: {
     *     // ... data to create a ChargerRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargerRequest we want to update
     *   }
     * })
     */
    upsert<T extends ChargerRequestUpsertArgs>(args: SelectSubset<T, ChargerRequestUpsertArgs<ExtArgs>>): Prisma__ChargerRequestClient<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestCountArgs} args - Arguments to filter ChargerRequests to count.
     * @example
     * // Count the number of ChargerRequests
     * const count = await prisma.chargerRequest.count({
     *   where: {
     *     // ... the filter for the ChargerRequests we want to count
     *   }
     * })
    **/
    count<T extends ChargerRequestCountArgs>(
      args?: Subset<T, ChargerRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargerRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChargerRequestAggregateArgs>(args: Subset<T, ChargerRequestAggregateArgs>): Prisma.PrismaPromise<GetChargerRequestAggregateType<T>>

    /**
     * Group by ChargerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerRequestGroupByArgs} args - Group by arguments.
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
      T extends ChargerRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargerRequestGroupByArgs['orderBy'] }
        : { orderBy?: ChargerRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChargerRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargerRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargerRequest model
   */
  readonly fields: ChargerRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargerRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargerRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manufacturer<T extends ChargerRequest$manufacturerArgs<ExtArgs> = {}>(args?: Subset<T, ChargerRequest$manufacturerArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChargerRequest model
   */
  interface ChargerRequestFieldRefs {
    readonly id: FieldRef<"ChargerRequest", 'Int'>
    readonly createdAt: FieldRef<"ChargerRequest", 'DateTime'>
    readonly userEmail: FieldRef<"ChargerRequest", 'String'>
    readonly manufacturerName: FieldRef<"ChargerRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChargerRequest findUnique
   */
  export type ChargerRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChargerRequest to fetch.
     */
    where: ChargerRequestWhereUniqueInput
  }

  /**
   * ChargerRequest findUniqueOrThrow
   */
  export type ChargerRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChargerRequest to fetch.
     */
    where: ChargerRequestWhereUniqueInput
  }

  /**
   * ChargerRequest findFirst
   */
  export type ChargerRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChargerRequest to fetch.
     */
    where?: ChargerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargerRequests to fetch.
     */
    orderBy?: ChargerRequestOrderByWithRelationInput | ChargerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargerRequests.
     */
    cursor?: ChargerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargerRequests.
     */
    distinct?: ChargerRequestScalarFieldEnum | ChargerRequestScalarFieldEnum[]
  }

  /**
   * ChargerRequest findFirstOrThrow
   */
  export type ChargerRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChargerRequest to fetch.
     */
    where?: ChargerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargerRequests to fetch.
     */
    orderBy?: ChargerRequestOrderByWithRelationInput | ChargerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargerRequests.
     */
    cursor?: ChargerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargerRequests.
     */
    distinct?: ChargerRequestScalarFieldEnum | ChargerRequestScalarFieldEnum[]
  }

  /**
   * ChargerRequest findMany
   */
  export type ChargerRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChargerRequests to fetch.
     */
    where?: ChargerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargerRequests to fetch.
     */
    orderBy?: ChargerRequestOrderByWithRelationInput | ChargerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargerRequests.
     */
    cursor?: ChargerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargerRequests.
     */
    skip?: number
    distinct?: ChargerRequestScalarFieldEnum | ChargerRequestScalarFieldEnum[]
  }

  /**
   * ChargerRequest create
   */
  export type ChargerRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ChargerRequest.
     */
    data: XOR<ChargerRequestCreateInput, ChargerRequestUncheckedCreateInput>
  }

  /**
   * ChargerRequest createMany
   */
  export type ChargerRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargerRequests.
     */
    data: ChargerRequestCreateManyInput | ChargerRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChargerRequest createManyAndReturn
   */
  export type ChargerRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ChargerRequests.
     */
    data: ChargerRequestCreateManyInput | ChargerRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargerRequest update
   */
  export type ChargerRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ChargerRequest.
     */
    data: XOR<ChargerRequestUpdateInput, ChargerRequestUncheckedUpdateInput>
    /**
     * Choose, which ChargerRequest to update.
     */
    where: ChargerRequestWhereUniqueInput
  }

  /**
   * ChargerRequest updateMany
   */
  export type ChargerRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargerRequests.
     */
    data: XOR<ChargerRequestUpdateManyMutationInput, ChargerRequestUncheckedUpdateManyInput>
    /**
     * Filter which ChargerRequests to update
     */
    where?: ChargerRequestWhereInput
    /**
     * Limit how many ChargerRequests to update.
     */
    limit?: number
  }

  /**
   * ChargerRequest updateManyAndReturn
   */
  export type ChargerRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * The data used to update ChargerRequests.
     */
    data: XOR<ChargerRequestUpdateManyMutationInput, ChargerRequestUncheckedUpdateManyInput>
    /**
     * Filter which ChargerRequests to update
     */
    where?: ChargerRequestWhereInput
    /**
     * Limit how many ChargerRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargerRequest upsert
   */
  export type ChargerRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ChargerRequest to update in case it exists.
     */
    where: ChargerRequestWhereUniqueInput
    /**
     * In case the ChargerRequest found by the `where` argument doesn't exist, create a new ChargerRequest with this data.
     */
    create: XOR<ChargerRequestCreateInput, ChargerRequestUncheckedCreateInput>
    /**
     * In case the ChargerRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargerRequestUpdateInput, ChargerRequestUncheckedUpdateInput>
  }

  /**
   * ChargerRequest delete
   */
  export type ChargerRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    /**
     * Filter which ChargerRequest to delete.
     */
    where: ChargerRequestWhereUniqueInput
  }

  /**
   * ChargerRequest deleteMany
   */
  export type ChargerRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargerRequests to delete
     */
    where?: ChargerRequestWhereInput
    /**
     * Limit how many ChargerRequests to delete.
     */
    limit?: number
  }

  /**
   * ChargerRequest.manufacturer
   */
  export type ChargerRequest$manufacturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    where?: ManufacturerWhereInput
  }

  /**
   * ChargerRequest without action
   */
  export type ChargerRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
  }


  /**
   * Model Manufacturer
   */

  export type AggregateManufacturer = {
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  export type ManufacturerMinAggregateOutputType = {
    name: string | null
  }

  export type ManufacturerMaxAggregateOutputType = {
    name: string | null
  }

  export type ManufacturerCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type ManufacturerMinAggregateInputType = {
    name?: true
  }

  export type ManufacturerMaxAggregateInputType = {
    name?: true
  }

  export type ManufacturerCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type ManufacturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturer to aggregate.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manufacturers
    **/
    _count?: true | ManufacturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerMaxAggregateInputType
  }

  export type GetManufacturerAggregateType<T extends ManufacturerAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturer[P]>
      : GetScalarType<T[P], AggregateManufacturer[P]>
  }




  export type ManufacturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerWhereInput
    orderBy?: ManufacturerOrderByWithAggregationInput | ManufacturerOrderByWithAggregationInput[]
    by: ManufacturerScalarFieldEnum[] | ManufacturerScalarFieldEnum
    having?: ManufacturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturerCountAggregateInputType | true
    _min?: ManufacturerMinAggregateInputType
    _max?: ManufacturerMaxAggregateInputType
  }

  export type ManufacturerGroupByOutputType = {
    name: string
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  type GetManufacturerGroupByPayload<T extends ManufacturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    requests?: boolean | Manufacturer$requestsArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectScalar = {
    name?: boolean
  }

  export type ManufacturerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["manufacturer"]>
  export type ManufacturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Manufacturer$requestsArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManufacturerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ManufacturerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManufacturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manufacturer"
    objects: {
      requests: Prisma.$ChargerRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["manufacturer"]>
    composites: {}
  }

  type ManufacturerGetPayload<S extends boolean | null | undefined | ManufacturerDefaultArgs> = $Result.GetResult<Prisma.$ManufacturerPayload, S>

  type ManufacturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManufacturerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManufacturerCountAggregateInputType | true
    }

  export interface ManufacturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manufacturer'], meta: { name: 'Manufacturer' } }
    /**
     * Find zero or one Manufacturer that matches the filter.
     * @param {ManufacturerFindUniqueArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturerFindUniqueArgs>(args: SelectSubset<T, ManufacturerFindUniqueArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manufacturer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacturerFindUniqueOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturerFindFirstArgs>(args?: SelectSubset<T, ManufacturerFindFirstArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manufacturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany()
     * 
     * // Get first 10 Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const manufacturerWithNameOnly = await prisma.manufacturer.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends ManufacturerFindManyArgs>(args?: SelectSubset<T, ManufacturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manufacturer.
     * @param {ManufacturerCreateArgs} args - Arguments to create a Manufacturer.
     * @example
     * // Create one Manufacturer
     * const Manufacturer = await prisma.manufacturer.create({
     *   data: {
     *     // ... data to create a Manufacturer
     *   }
     * })
     * 
     */
    create<T extends ManufacturerCreateArgs>(args: SelectSubset<T, ManufacturerCreateArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manufacturers.
     * @param {ManufacturerCreateManyArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturer = await prisma.manufacturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacturerCreateManyArgs>(args?: SelectSubset<T, ManufacturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manufacturers and returns the data saved in the database.
     * @param {ManufacturerCreateManyAndReturnArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturer = await prisma.manufacturer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manufacturers and only return the `name`
     * const manufacturerWithNameOnly = await prisma.manufacturer.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManufacturerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManufacturerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manufacturer.
     * @param {ManufacturerDeleteArgs} args - Arguments to delete one Manufacturer.
     * @example
     * // Delete one Manufacturer
     * const Manufacturer = await prisma.manufacturer.delete({
     *   where: {
     *     // ... filter to delete one Manufacturer
     *   }
     * })
     * 
     */
    delete<T extends ManufacturerDeleteArgs>(args: SelectSubset<T, ManufacturerDeleteArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manufacturer.
     * @param {ManufacturerUpdateArgs} args - Arguments to update one Manufacturer.
     * @example
     * // Update one Manufacturer
     * const manufacturer = await prisma.manufacturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacturerUpdateArgs>(args: SelectSubset<T, ManufacturerUpdateArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manufacturers.
     * @param {ManufacturerDeleteManyArgs} args - Arguments to filter Manufacturers to delete.
     * @example
     * // Delete a few Manufacturers
     * const { count } = await prisma.manufacturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacturerDeleteManyArgs>(args?: SelectSubset<T, ManufacturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacturers
     * const manufacturer = await prisma.manufacturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacturerUpdateManyArgs>(args: SelectSubset<T, ManufacturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers and returns the data updated in the database.
     * @param {ManufacturerUpdateManyAndReturnArgs} args - Arguments to update many Manufacturers.
     * @example
     * // Update many Manufacturers
     * const manufacturer = await prisma.manufacturer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manufacturers and only return the `name`
     * const manufacturerWithNameOnly = await prisma.manufacturer.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManufacturerUpdateManyAndReturnArgs>(args: SelectSubset<T, ManufacturerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manufacturer.
     * @param {ManufacturerUpsertArgs} args - Arguments to update or create a Manufacturer.
     * @example
     * // Update or create a Manufacturer
     * const manufacturer = await prisma.manufacturer.upsert({
     *   create: {
     *     // ... data to create a Manufacturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacturer we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturerUpsertArgs>(args: SelectSubset<T, ManufacturerUpsertArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerCountArgs} args - Arguments to filter Manufacturers to count.
     * @example
     * // Count the number of Manufacturers
     * const count = await prisma.manufacturer.count({
     *   where: {
     *     // ... the filter for the Manufacturers we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerCountArgs>(
      args?: Subset<T, ManufacturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerAggregateArgs>(args: Subset<T, ManufacturerAggregateArgs>): Prisma.PrismaPromise<GetManufacturerAggregateType<T>>

    /**
     * Group by Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerGroupByArgs} args - Group by arguments.
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
      T extends ManufacturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturerGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManufacturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manufacturer model
   */
  readonly fields: ManufacturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manufacturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Manufacturer$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturer$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Manufacturer model
   */
  interface ManufacturerFieldRefs {
    readonly name: FieldRef<"Manufacturer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manufacturer findUnique
   */
  export type ManufacturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer findUniqueOrThrow
   */
  export type ManufacturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer findFirst
   */
  export type ManufacturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer findFirstOrThrow
   */
  export type ManufacturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer findMany
   */
  export type ManufacturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer create
   */
  export type ManufacturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manufacturer.
     */
    data: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
  }

  /**
   * Manufacturer createMany
   */
  export type ManufacturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manufacturers.
     */
    data: ManufacturerCreateManyInput | ManufacturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacturer createManyAndReturn
   */
  export type ManufacturerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * The data used to create many Manufacturers.
     */
    data: ManufacturerCreateManyInput | ManufacturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacturer update
   */
  export type ManufacturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manufacturer.
     */
    data: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
    /**
     * Choose, which Manufacturer to update.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer updateMany
   */
  export type ManufacturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manufacturers.
     */
    data: XOR<ManufacturerUpdateManyMutationInput, ManufacturerUncheckedUpdateManyInput>
    /**
     * Filter which Manufacturers to update
     */
    where?: ManufacturerWhereInput
    /**
     * Limit how many Manufacturers to update.
     */
    limit?: number
  }

  /**
   * Manufacturer updateManyAndReturn
   */
  export type ManufacturerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * The data used to update Manufacturers.
     */
    data: XOR<ManufacturerUpdateManyMutationInput, ManufacturerUncheckedUpdateManyInput>
    /**
     * Filter which Manufacturers to update
     */
    where?: ManufacturerWhereInput
    /**
     * Limit how many Manufacturers to update.
     */
    limit?: number
  }

  /**
   * Manufacturer upsert
   */
  export type ManufacturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manufacturer to update in case it exists.
     */
    where: ManufacturerWhereUniqueInput
    /**
     * In case the Manufacturer found by the `where` argument doesn't exist, create a new Manufacturer with this data.
     */
    create: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
    /**
     * In case the Manufacturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
  }

  /**
   * Manufacturer delete
   */
  export type ManufacturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter which Manufacturer to delete.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer deleteMany
   */
  export type ManufacturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturers to delete
     */
    where?: ManufacturerWhereInput
    /**
     * Limit how many Manufacturers to delete.
     */
    limit?: number
  }

  /**
   * Manufacturer.requests
   */
  export type Manufacturer$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerRequest
     */
    select?: ChargerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargerRequest
     */
    omit?: ChargerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerRequestInclude<ExtArgs> | null
    where?: ChargerRequestWhereInput
    orderBy?: ChargerRequestOrderByWithRelationInput | ChargerRequestOrderByWithRelationInput[]
    cursor?: ChargerRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargerRequestScalarFieldEnum | ChargerRequestScalarFieldEnum[]
  }

  /**
   * Manufacturer without action
   */
  export type ManufacturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manufacturer
     */
    omit?: ManufacturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EnergyRequestScalarFieldEnum: {
    id: 'id',
    billName: 'billName',
    billUrl: 'billUrl',
    createdAt: 'createdAt',
    paquete: 'paquete',
    userEmail: 'userEmail'
  };

  export type EnergyRequestScalarFieldEnum = (typeof EnergyRequestScalarFieldEnum)[keyof typeof EnergyRequestScalarFieldEnum]


  export const InfoRequestScalarFieldEnum: {
    id: 'id',
    requestType: 'requestType',
    comment: 'comment',
    userEmail: 'userEmail'
  };

  export type InfoRequestScalarFieldEnum = (typeof InfoRequestScalarFieldEnum)[keyof typeof InfoRequestScalarFieldEnum]


  export const ChargerRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userEmail: 'userEmail',
    manufacturerName: 'manufacturerName'
  };

  export type ChargerRequestScalarFieldEnum = (typeof ChargerRequestScalarFieldEnum)[keyof typeof ChargerRequestScalarFieldEnum]


  export const ManufacturerScalarFieldEnum: {
    name: 'name'
  };

  export type ManufacturerScalarFieldEnum = (typeof ManufacturerScalarFieldEnum)[keyof typeof ManufacturerScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    energyRequest?: XOR<EnergyRequestNullableScalarRelationFilter, EnergyRequestWhereInput> | null
    chargerRequest?: XOR<ChargerRequestNullableScalarRelationFilter, ChargerRequestWhereInput> | null
    infoRequest?: XOR<InfoRequestNullableScalarRelationFilter, InfoRequestWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    energyRequest?: EnergyRequestOrderByWithRelationInput
    chargerRequest?: ChargerRequestOrderByWithRelationInput
    infoRequest?: InfoRequestOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    energyRequest?: XOR<EnergyRequestNullableScalarRelationFilter, EnergyRequestWhereInput> | null
    chargerRequest?: XOR<ChargerRequestNullableScalarRelationFilter, ChargerRequestWhereInput> | null
    infoRequest?: XOR<InfoRequestNullableScalarRelationFilter, InfoRequestWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type EnergyRequestWhereInput = {
    AND?: EnergyRequestWhereInput | EnergyRequestWhereInput[]
    OR?: EnergyRequestWhereInput[]
    NOT?: EnergyRequestWhereInput | EnergyRequestWhereInput[]
    id?: IntFilter<"EnergyRequest"> | number
    billName?: StringFilter<"EnergyRequest"> | string
    billUrl?: StringFilter<"EnergyRequest"> | string
    createdAt?: DateTimeFilter<"EnergyRequest"> | Date | string
    paquete?: StringFilter<"EnergyRequest"> | string
    userEmail?: StringFilter<"EnergyRequest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnergyRequestOrderByWithRelationInput = {
    id?: SortOrder
    billName?: SortOrder
    billUrl?: SortOrder
    createdAt?: SortOrder
    paquete?: SortOrder
    userEmail?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EnergyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userEmail?: string
    AND?: EnergyRequestWhereInput | EnergyRequestWhereInput[]
    OR?: EnergyRequestWhereInput[]
    NOT?: EnergyRequestWhereInput | EnergyRequestWhereInput[]
    billName?: StringFilter<"EnergyRequest"> | string
    billUrl?: StringFilter<"EnergyRequest"> | string
    createdAt?: DateTimeFilter<"EnergyRequest"> | Date | string
    paquete?: StringFilter<"EnergyRequest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userEmail">

  export type EnergyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    billName?: SortOrder
    billUrl?: SortOrder
    createdAt?: SortOrder
    paquete?: SortOrder
    userEmail?: SortOrder
    _count?: EnergyRequestCountOrderByAggregateInput
    _avg?: EnergyRequestAvgOrderByAggregateInput
    _max?: EnergyRequestMaxOrderByAggregateInput
    _min?: EnergyRequestMinOrderByAggregateInput
    _sum?: EnergyRequestSumOrderByAggregateInput
  }

  export type EnergyRequestScalarWhereWithAggregatesInput = {
    AND?: EnergyRequestScalarWhereWithAggregatesInput | EnergyRequestScalarWhereWithAggregatesInput[]
    OR?: EnergyRequestScalarWhereWithAggregatesInput[]
    NOT?: EnergyRequestScalarWhereWithAggregatesInput | EnergyRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EnergyRequest"> | number
    billName?: StringWithAggregatesFilter<"EnergyRequest"> | string
    billUrl?: StringWithAggregatesFilter<"EnergyRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnergyRequest"> | Date | string
    paquete?: StringWithAggregatesFilter<"EnergyRequest"> | string
    userEmail?: StringWithAggregatesFilter<"EnergyRequest"> | string
  }

  export type InfoRequestWhereInput = {
    AND?: InfoRequestWhereInput | InfoRequestWhereInput[]
    OR?: InfoRequestWhereInput[]
    NOT?: InfoRequestWhereInput | InfoRequestWhereInput[]
    id?: IntFilter<"InfoRequest"> | number
    requestType?: StringFilter<"InfoRequest"> | string
    comment?: StringFilter<"InfoRequest"> | string
    userEmail?: StringFilter<"InfoRequest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InfoRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestType?: SortOrder
    comment?: SortOrder
    userEmail?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InfoRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userEmail?: string
    AND?: InfoRequestWhereInput | InfoRequestWhereInput[]
    OR?: InfoRequestWhereInput[]
    NOT?: InfoRequestWhereInput | InfoRequestWhereInput[]
    requestType?: StringFilter<"InfoRequest"> | string
    comment?: StringFilter<"InfoRequest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userEmail">

  export type InfoRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestType?: SortOrder
    comment?: SortOrder
    userEmail?: SortOrder
    _count?: InfoRequestCountOrderByAggregateInput
    _avg?: InfoRequestAvgOrderByAggregateInput
    _max?: InfoRequestMaxOrderByAggregateInput
    _min?: InfoRequestMinOrderByAggregateInput
    _sum?: InfoRequestSumOrderByAggregateInput
  }

  export type InfoRequestScalarWhereWithAggregatesInput = {
    AND?: InfoRequestScalarWhereWithAggregatesInput | InfoRequestScalarWhereWithAggregatesInput[]
    OR?: InfoRequestScalarWhereWithAggregatesInput[]
    NOT?: InfoRequestScalarWhereWithAggregatesInput | InfoRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InfoRequest"> | number
    requestType?: StringWithAggregatesFilter<"InfoRequest"> | string
    comment?: StringWithAggregatesFilter<"InfoRequest"> | string
    userEmail?: StringWithAggregatesFilter<"InfoRequest"> | string
  }

  export type ChargerRequestWhereInput = {
    AND?: ChargerRequestWhereInput | ChargerRequestWhereInput[]
    OR?: ChargerRequestWhereInput[]
    NOT?: ChargerRequestWhereInput | ChargerRequestWhereInput[]
    id?: IntFilter<"ChargerRequest"> | number
    createdAt?: DateTimeFilter<"ChargerRequest"> | Date | string
    userEmail?: StringFilter<"ChargerRequest"> | string
    manufacturerName?: StringNullableFilter<"ChargerRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    manufacturer?: XOR<ManufacturerNullableScalarRelationFilter, ManufacturerWhereInput> | null
  }

  export type ChargerRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userEmail?: SortOrder
    manufacturerName?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    manufacturer?: ManufacturerOrderByWithRelationInput
  }

  export type ChargerRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userEmail?: string
    AND?: ChargerRequestWhereInput | ChargerRequestWhereInput[]
    OR?: ChargerRequestWhereInput[]
    NOT?: ChargerRequestWhereInput | ChargerRequestWhereInput[]
    createdAt?: DateTimeFilter<"ChargerRequest"> | Date | string
    manufacturerName?: StringNullableFilter<"ChargerRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    manufacturer?: XOR<ManufacturerNullableScalarRelationFilter, ManufacturerWhereInput> | null
  }, "id" | "userEmail">

  export type ChargerRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userEmail?: SortOrder
    manufacturerName?: SortOrderInput | SortOrder
    _count?: ChargerRequestCountOrderByAggregateInput
    _avg?: ChargerRequestAvgOrderByAggregateInput
    _max?: ChargerRequestMaxOrderByAggregateInput
    _min?: ChargerRequestMinOrderByAggregateInput
    _sum?: ChargerRequestSumOrderByAggregateInput
  }

  export type ChargerRequestScalarWhereWithAggregatesInput = {
    AND?: ChargerRequestScalarWhereWithAggregatesInput | ChargerRequestScalarWhereWithAggregatesInput[]
    OR?: ChargerRequestScalarWhereWithAggregatesInput[]
    NOT?: ChargerRequestScalarWhereWithAggregatesInput | ChargerRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChargerRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChargerRequest"> | Date | string
    userEmail?: StringWithAggregatesFilter<"ChargerRequest"> | string
    manufacturerName?: StringNullableWithAggregatesFilter<"ChargerRequest"> | string | null
  }

  export type ManufacturerWhereInput = {
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    name?: StringFilter<"Manufacturer"> | string
    requests?: ChargerRequestListRelationFilter
  }

  export type ManufacturerOrderByWithRelationInput = {
    name?: SortOrder
    requests?: ChargerRequestOrderByRelationAggregateInput
  }

  export type ManufacturerWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    requests?: ChargerRequestListRelationFilter
  }, "name">

  export type ManufacturerOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: ManufacturerCountOrderByAggregateInput
    _max?: ManufacturerMaxOrderByAggregateInput
    _min?: ManufacturerMinOrderByAggregateInput
  }

  export type ManufacturerScalarWhereWithAggregatesInput = {
    AND?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    OR?: ManufacturerScalarWhereWithAggregatesInput[]
    NOT?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Manufacturer"> | string
  }

  export type UserCreateInput = {
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestCreateNestedOneWithoutUserInput
    chargerRequest?: ChargerRequestCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestUncheckedCreateNestedOneWithoutUserInput
    chargerRequest?: ChargerRequestUncheckedCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUpdateOneWithoutUserNestedInput
    chargerRequest?: ChargerRequestUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUncheckedUpdateOneWithoutUserNestedInput
    chargerRequest?: ChargerRequestUncheckedUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    surname: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyRequestCreateInput = {
    billName: string
    billUrl: string
    createdAt?: Date | string
    paquete: string
    user: UserCreateNestedOneWithoutEnergyRequestInput
  }

  export type EnergyRequestUncheckedCreateInput = {
    id?: number
    billName: string
    billUrl: string
    createdAt?: Date | string
    paquete: string
    userEmail: string
  }

  export type EnergyRequestUpdateInput = {
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEnergyRequestNestedInput
  }

  export type EnergyRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyRequestCreateManyInput = {
    id?: number
    billName: string
    billUrl: string
    createdAt?: Date | string
    paquete: string
    userEmail: string
  }

  export type EnergyRequestUpdateManyMutationInput = {
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type InfoRequestCreateInput = {
    requestType: string
    comment: string
    user: UserCreateNestedOneWithoutInfoRequestInput
  }

  export type InfoRequestUncheckedCreateInput = {
    id?: number
    requestType: string
    comment: string
    userEmail: string
  }

  export type InfoRequestUpdateInput = {
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInfoRequestNestedInput
  }

  export type InfoRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type InfoRequestCreateManyInput = {
    id?: number
    requestType: string
    comment: string
    userEmail: string
  }

  export type InfoRequestUpdateManyMutationInput = {
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type InfoRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerRequestCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChargerRequestInput
    manufacturer?: ManufacturerCreateNestedOneWithoutRequestsInput
  }

  export type ChargerRequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userEmail: string
    manufacturerName?: string | null
  }

  export type ChargerRequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChargerRequestNestedInput
    manufacturer?: ManufacturerUpdateOneWithoutRequestsNestedInput
  }

  export type ChargerRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChargerRequestCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userEmail: string
    manufacturerName?: string | null
  }

  export type ChargerRequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManufacturerCreateInput = {
    name: string
    requests?: ChargerRequestCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateInput = {
    name: string
    requests?: ChargerRequestUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    requests?: ChargerRequestUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    requests?: ChargerRequestUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerCreateManyInput = {
    name: string
  }

  export type ManufacturerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
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

  export type EnergyRequestNullableScalarRelationFilter = {
    is?: EnergyRequestWhereInput | null
    isNot?: EnergyRequestWhereInput | null
  }

  export type ChargerRequestNullableScalarRelationFilter = {
    is?: ChargerRequestWhereInput | null
    isNot?: ChargerRequestWhereInput | null
  }

  export type InfoRequestNullableScalarRelationFilter = {
    is?: InfoRequestWhereInput | null
    isNot?: InfoRequestWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnergyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    billName?: SortOrder
    billUrl?: SortOrder
    createdAt?: SortOrder
    paquete?: SortOrder
    userEmail?: SortOrder
  }

  export type EnergyRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnergyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    billName?: SortOrder
    billUrl?: SortOrder
    createdAt?: SortOrder
    paquete?: SortOrder
    userEmail?: SortOrder
  }

  export type EnergyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    billName?: SortOrder
    billUrl?: SortOrder
    createdAt?: SortOrder
    paquete?: SortOrder
    userEmail?: SortOrder
  }

  export type EnergyRequestSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type InfoRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestType?: SortOrder
    comment?: SortOrder
    userEmail?: SortOrder
  }

  export type InfoRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InfoRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestType?: SortOrder
    comment?: SortOrder
    userEmail?: SortOrder
  }

  export type InfoRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestType?: SortOrder
    comment?: SortOrder
    userEmail?: SortOrder
  }

  export type InfoRequestSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type ManufacturerNullableScalarRelationFilter = {
    is?: ManufacturerWhereInput | null
    isNot?: ManufacturerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChargerRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userEmail?: SortOrder
    manufacturerName?: SortOrder
  }

  export type ChargerRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChargerRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userEmail?: SortOrder
    manufacturerName?: SortOrder
  }

  export type ChargerRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userEmail?: SortOrder
    manufacturerName?: SortOrder
  }

  export type ChargerRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChargerRequestListRelationFilter = {
    every?: ChargerRequestWhereInput
    some?: ChargerRequestWhereInput
    none?: ChargerRequestWhereInput
  }

  export type ChargerRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManufacturerCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type ManufacturerMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type ManufacturerMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type EnergyRequestCreateNestedOneWithoutUserInput = {
    create?: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: EnergyRequestCreateOrConnectWithoutUserInput
    connect?: EnergyRequestWhereUniqueInput
  }

  export type ChargerRequestCreateNestedOneWithoutUserInput = {
    create?: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutUserInput
    connect?: ChargerRequestWhereUniqueInput
  }

  export type InfoRequestCreateNestedOneWithoutUserInput = {
    create?: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: InfoRequestCreateOrConnectWithoutUserInput
    connect?: InfoRequestWhereUniqueInput
  }

  export type EnergyRequestUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: EnergyRequestCreateOrConnectWithoutUserInput
    connect?: EnergyRequestWhereUniqueInput
  }

  export type ChargerRequestUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutUserInput
    connect?: ChargerRequestWhereUniqueInput
  }

  export type InfoRequestUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: InfoRequestCreateOrConnectWithoutUserInput
    connect?: InfoRequestWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnergyRequestUpdateOneWithoutUserNestedInput = {
    create?: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: EnergyRequestCreateOrConnectWithoutUserInput
    upsert?: EnergyRequestUpsertWithoutUserInput
    disconnect?: EnergyRequestWhereInput | boolean
    delete?: EnergyRequestWhereInput | boolean
    connect?: EnergyRequestWhereUniqueInput
    update?: XOR<XOR<EnergyRequestUpdateToOneWithWhereWithoutUserInput, EnergyRequestUpdateWithoutUserInput>, EnergyRequestUncheckedUpdateWithoutUserInput>
  }

  export type ChargerRequestUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutUserInput
    upsert?: ChargerRequestUpsertWithoutUserInput
    disconnect?: ChargerRequestWhereInput | boolean
    delete?: ChargerRequestWhereInput | boolean
    connect?: ChargerRequestWhereUniqueInput
    update?: XOR<XOR<ChargerRequestUpdateToOneWithWhereWithoutUserInput, ChargerRequestUpdateWithoutUserInput>, ChargerRequestUncheckedUpdateWithoutUserInput>
  }

  export type InfoRequestUpdateOneWithoutUserNestedInput = {
    create?: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: InfoRequestCreateOrConnectWithoutUserInput
    upsert?: InfoRequestUpsertWithoutUserInput
    disconnect?: InfoRequestWhereInput | boolean
    delete?: InfoRequestWhereInput | boolean
    connect?: InfoRequestWhereUniqueInput
    update?: XOR<XOR<InfoRequestUpdateToOneWithWhereWithoutUserInput, InfoRequestUpdateWithoutUserInput>, InfoRequestUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnergyRequestUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: EnergyRequestCreateOrConnectWithoutUserInput
    upsert?: EnergyRequestUpsertWithoutUserInput
    disconnect?: EnergyRequestWhereInput | boolean
    delete?: EnergyRequestWhereInput | boolean
    connect?: EnergyRequestWhereUniqueInput
    update?: XOR<XOR<EnergyRequestUpdateToOneWithWhereWithoutUserInput, EnergyRequestUpdateWithoutUserInput>, EnergyRequestUncheckedUpdateWithoutUserInput>
  }

  export type ChargerRequestUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutUserInput
    upsert?: ChargerRequestUpsertWithoutUserInput
    disconnect?: ChargerRequestWhereInput | boolean
    delete?: ChargerRequestWhereInput | boolean
    connect?: ChargerRequestWhereUniqueInput
    update?: XOR<XOR<ChargerRequestUpdateToOneWithWhereWithoutUserInput, ChargerRequestUpdateWithoutUserInput>, ChargerRequestUncheckedUpdateWithoutUserInput>
  }

  export type InfoRequestUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
    connectOrCreate?: InfoRequestCreateOrConnectWithoutUserInput
    upsert?: InfoRequestUpsertWithoutUserInput
    disconnect?: InfoRequestWhereInput | boolean
    delete?: InfoRequestWhereInput | boolean
    connect?: InfoRequestWhereUniqueInput
    update?: XOR<XOR<InfoRequestUpdateToOneWithWhereWithoutUserInput, InfoRequestUpdateWithoutUserInput>, InfoRequestUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutEnergyRequestInput = {
    create?: XOR<UserCreateWithoutEnergyRequestInput, UserUncheckedCreateWithoutEnergyRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnergyRequestInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutEnergyRequestNestedInput = {
    create?: XOR<UserCreateWithoutEnergyRequestInput, UserUncheckedCreateWithoutEnergyRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnergyRequestInput
    upsert?: UserUpsertWithoutEnergyRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnergyRequestInput, UserUpdateWithoutEnergyRequestInput>, UserUncheckedUpdateWithoutEnergyRequestInput>
  }

  export type UserCreateNestedOneWithoutInfoRequestInput = {
    create?: XOR<UserCreateWithoutInfoRequestInput, UserUncheckedCreateWithoutInfoRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutInfoRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInfoRequestNestedInput = {
    create?: XOR<UserCreateWithoutInfoRequestInput, UserUncheckedCreateWithoutInfoRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutInfoRequestInput
    upsert?: UserUpsertWithoutInfoRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInfoRequestInput, UserUpdateWithoutInfoRequestInput>, UserUncheckedUpdateWithoutInfoRequestInput>
  }

  export type UserCreateNestedOneWithoutChargerRequestInput = {
    create?: XOR<UserCreateWithoutChargerRequestInput, UserUncheckedCreateWithoutChargerRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutChargerRequestInput
    connect?: UserWhereUniqueInput
  }

  export type ManufacturerCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ManufacturerCreateWithoutRequestsInput, ManufacturerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutRequestsInput
    connect?: ManufacturerWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChargerRequestNestedInput = {
    create?: XOR<UserCreateWithoutChargerRequestInput, UserUncheckedCreateWithoutChargerRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutChargerRequestInput
    upsert?: UserUpsertWithoutChargerRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChargerRequestInput, UserUpdateWithoutChargerRequestInput>, UserUncheckedUpdateWithoutChargerRequestInput>
  }

  export type ManufacturerUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<ManufacturerCreateWithoutRequestsInput, ManufacturerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutRequestsInput
    upsert?: ManufacturerUpsertWithoutRequestsInput
    disconnect?: ManufacturerWhereInput | boolean
    delete?: ManufacturerWhereInput | boolean
    connect?: ManufacturerWhereUniqueInput
    update?: XOR<XOR<ManufacturerUpdateToOneWithWhereWithoutRequestsInput, ManufacturerUpdateWithoutRequestsInput>, ManufacturerUncheckedUpdateWithoutRequestsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChargerRequestCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput> | ChargerRequestCreateWithoutManufacturerInput[] | ChargerRequestUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutManufacturerInput | ChargerRequestCreateOrConnectWithoutManufacturerInput[]
    createMany?: ChargerRequestCreateManyManufacturerInputEnvelope
    connect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
  }

  export type ChargerRequestUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput> | ChargerRequestCreateWithoutManufacturerInput[] | ChargerRequestUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutManufacturerInput | ChargerRequestCreateOrConnectWithoutManufacturerInput[]
    createMany?: ChargerRequestCreateManyManufacturerInputEnvelope
    connect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
  }

  export type ChargerRequestUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput> | ChargerRequestCreateWithoutManufacturerInput[] | ChargerRequestUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutManufacturerInput | ChargerRequestCreateOrConnectWithoutManufacturerInput[]
    upsert?: ChargerRequestUpsertWithWhereUniqueWithoutManufacturerInput | ChargerRequestUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: ChargerRequestCreateManyManufacturerInputEnvelope
    set?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    disconnect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    delete?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    connect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    update?: ChargerRequestUpdateWithWhereUniqueWithoutManufacturerInput | ChargerRequestUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ChargerRequestUpdateManyWithWhereWithoutManufacturerInput | ChargerRequestUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ChargerRequestScalarWhereInput | ChargerRequestScalarWhereInput[]
  }

  export type ChargerRequestUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput> | ChargerRequestCreateWithoutManufacturerInput[] | ChargerRequestUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: ChargerRequestCreateOrConnectWithoutManufacturerInput | ChargerRequestCreateOrConnectWithoutManufacturerInput[]
    upsert?: ChargerRequestUpsertWithWhereUniqueWithoutManufacturerInput | ChargerRequestUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: ChargerRequestCreateManyManufacturerInputEnvelope
    set?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    disconnect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    delete?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    connect?: ChargerRequestWhereUniqueInput | ChargerRequestWhereUniqueInput[]
    update?: ChargerRequestUpdateWithWhereUniqueWithoutManufacturerInput | ChargerRequestUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: ChargerRequestUpdateManyWithWhereWithoutManufacturerInput | ChargerRequestUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: ChargerRequestScalarWhereInput | ChargerRequestScalarWhereInput[]
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
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnergyRequestCreateWithoutUserInput = {
    billName: string
    billUrl: string
    createdAt?: Date | string
    paquete: string
  }

  export type EnergyRequestUncheckedCreateWithoutUserInput = {
    id?: number
    billName: string
    billUrl: string
    createdAt?: Date | string
    paquete: string
  }

  export type EnergyRequestCreateOrConnectWithoutUserInput = {
    where: EnergyRequestWhereUniqueInput
    create: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
  }

  export type ChargerRequestCreateWithoutUserInput = {
    createdAt?: Date | string
    manufacturer?: ManufacturerCreateNestedOneWithoutRequestsInput
  }

  export type ChargerRequestUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    manufacturerName?: string | null
  }

  export type ChargerRequestCreateOrConnectWithoutUserInput = {
    where: ChargerRequestWhereUniqueInput
    create: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
  }

  export type InfoRequestCreateWithoutUserInput = {
    requestType: string
    comment: string
  }

  export type InfoRequestUncheckedCreateWithoutUserInput = {
    id?: number
    requestType: string
    comment: string
  }

  export type InfoRequestCreateOrConnectWithoutUserInput = {
    where: InfoRequestWhereUniqueInput
    create: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
  }

  export type EnergyRequestUpsertWithoutUserInput = {
    update: XOR<EnergyRequestUpdateWithoutUserInput, EnergyRequestUncheckedUpdateWithoutUserInput>
    create: XOR<EnergyRequestCreateWithoutUserInput, EnergyRequestUncheckedCreateWithoutUserInput>
    where?: EnergyRequestWhereInput
  }

  export type EnergyRequestUpdateToOneWithWhereWithoutUserInput = {
    where?: EnergyRequestWhereInput
    data: XOR<EnergyRequestUpdateWithoutUserInput, EnergyRequestUncheckedUpdateWithoutUserInput>
  }

  export type EnergyRequestUpdateWithoutUserInput = {
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
  }

  export type EnergyRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    billName?: StringFieldUpdateOperationsInput | string
    billUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paquete?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerRequestUpsertWithoutUserInput = {
    update: XOR<ChargerRequestUpdateWithoutUserInput, ChargerRequestUncheckedUpdateWithoutUserInput>
    create: XOR<ChargerRequestCreateWithoutUserInput, ChargerRequestUncheckedCreateWithoutUserInput>
    where?: ChargerRequestWhereInput
  }

  export type ChargerRequestUpdateToOneWithWhereWithoutUserInput = {
    where?: ChargerRequestWhereInput
    data: XOR<ChargerRequestUpdateWithoutUserInput, ChargerRequestUncheckedUpdateWithoutUserInput>
  }

  export type ChargerRequestUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturer?: ManufacturerUpdateOneWithoutRequestsNestedInput
  }

  export type ChargerRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfoRequestUpsertWithoutUserInput = {
    update: XOR<InfoRequestUpdateWithoutUserInput, InfoRequestUncheckedUpdateWithoutUserInput>
    create: XOR<InfoRequestCreateWithoutUserInput, InfoRequestUncheckedCreateWithoutUserInput>
    where?: InfoRequestWhereInput
  }

  export type InfoRequestUpdateToOneWithWhereWithoutUserInput = {
    where?: InfoRequestWhereInput
    data: XOR<InfoRequestUpdateWithoutUserInput, InfoRequestUncheckedUpdateWithoutUserInput>
  }

  export type InfoRequestUpdateWithoutUserInput = {
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type InfoRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestType?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutEnergyRequestInput = {
    name: string
    surname: string
    email: string
    chargerRequest?: ChargerRequestCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnergyRequestInput = {
    id?: number
    name: string
    surname: string
    email: string
    chargerRequest?: ChargerRequestUncheckedCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnergyRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnergyRequestInput, UserUncheckedCreateWithoutEnergyRequestInput>
  }

  export type UserUpsertWithoutEnergyRequestInput = {
    update: XOR<UserUpdateWithoutEnergyRequestInput, UserUncheckedUpdateWithoutEnergyRequestInput>
    create: XOR<UserCreateWithoutEnergyRequestInput, UserUncheckedCreateWithoutEnergyRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnergyRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnergyRequestInput, UserUncheckedUpdateWithoutEnergyRequestInput>
  }

  export type UserUpdateWithoutEnergyRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chargerRequest?: ChargerRequestUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnergyRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chargerRequest?: ChargerRequestUncheckedUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutInfoRequestInput = {
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestCreateNestedOneWithoutUserInput
    chargerRequest?: ChargerRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInfoRequestInput = {
    id?: number
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestUncheckedCreateNestedOneWithoutUserInput
    chargerRequest?: ChargerRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInfoRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInfoRequestInput, UserUncheckedCreateWithoutInfoRequestInput>
  }

  export type UserUpsertWithoutInfoRequestInput = {
    update: XOR<UserUpdateWithoutInfoRequestInput, UserUncheckedUpdateWithoutInfoRequestInput>
    create: XOR<UserCreateWithoutInfoRequestInput, UserUncheckedCreateWithoutInfoRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInfoRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInfoRequestInput, UserUncheckedUpdateWithoutInfoRequestInput>
  }

  export type UserUpdateWithoutInfoRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUpdateOneWithoutUserNestedInput
    chargerRequest?: ChargerRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInfoRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUncheckedUpdateOneWithoutUserNestedInput
    chargerRequest?: ChargerRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutChargerRequestInput = {
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChargerRequestInput = {
    id?: number
    name: string
    surname: string
    email: string
    energyRequest?: EnergyRequestUncheckedCreateNestedOneWithoutUserInput
    infoRequest?: InfoRequestUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChargerRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChargerRequestInput, UserUncheckedCreateWithoutChargerRequestInput>
  }

  export type ManufacturerCreateWithoutRequestsInput = {
    name: string
  }

  export type ManufacturerUncheckedCreateWithoutRequestsInput = {
    name: string
  }

  export type ManufacturerCreateOrConnectWithoutRequestsInput = {
    where: ManufacturerWhereUniqueInput
    create: XOR<ManufacturerCreateWithoutRequestsInput, ManufacturerUncheckedCreateWithoutRequestsInput>
  }

  export type UserUpsertWithoutChargerRequestInput = {
    update: XOR<UserUpdateWithoutChargerRequestInput, UserUncheckedUpdateWithoutChargerRequestInput>
    create: XOR<UserCreateWithoutChargerRequestInput, UserUncheckedCreateWithoutChargerRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChargerRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChargerRequestInput, UserUncheckedUpdateWithoutChargerRequestInput>
  }

  export type UserUpdateWithoutChargerRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChargerRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    energyRequest?: EnergyRequestUncheckedUpdateOneWithoutUserNestedInput
    infoRequest?: InfoRequestUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ManufacturerUpsertWithoutRequestsInput = {
    update: XOR<ManufacturerUpdateWithoutRequestsInput, ManufacturerUncheckedUpdateWithoutRequestsInput>
    create: XOR<ManufacturerCreateWithoutRequestsInput, ManufacturerUncheckedCreateWithoutRequestsInput>
    where?: ManufacturerWhereInput
  }

  export type ManufacturerUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ManufacturerWhereInput
    data: XOR<ManufacturerUpdateWithoutRequestsInput, ManufacturerUncheckedUpdateWithoutRequestsInput>
  }

  export type ManufacturerUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerUncheckedUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerRequestCreateWithoutManufacturerInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChargerRequestInput
  }

  export type ChargerRequestUncheckedCreateWithoutManufacturerInput = {
    id?: number
    createdAt?: Date | string
    userEmail: string
  }

  export type ChargerRequestCreateOrConnectWithoutManufacturerInput = {
    where: ChargerRequestWhereUniqueInput
    create: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput>
  }

  export type ChargerRequestCreateManyManufacturerInputEnvelope = {
    data: ChargerRequestCreateManyManufacturerInput | ChargerRequestCreateManyManufacturerInput[]
    skipDuplicates?: boolean
  }

  export type ChargerRequestUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: ChargerRequestWhereUniqueInput
    update: XOR<ChargerRequestUpdateWithoutManufacturerInput, ChargerRequestUncheckedUpdateWithoutManufacturerInput>
    create: XOR<ChargerRequestCreateWithoutManufacturerInput, ChargerRequestUncheckedCreateWithoutManufacturerInput>
  }

  export type ChargerRequestUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: ChargerRequestWhereUniqueInput
    data: XOR<ChargerRequestUpdateWithoutManufacturerInput, ChargerRequestUncheckedUpdateWithoutManufacturerInput>
  }

  export type ChargerRequestUpdateManyWithWhereWithoutManufacturerInput = {
    where: ChargerRequestScalarWhereInput
    data: XOR<ChargerRequestUpdateManyMutationInput, ChargerRequestUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type ChargerRequestScalarWhereInput = {
    AND?: ChargerRequestScalarWhereInput | ChargerRequestScalarWhereInput[]
    OR?: ChargerRequestScalarWhereInput[]
    NOT?: ChargerRequestScalarWhereInput | ChargerRequestScalarWhereInput[]
    id?: IntFilter<"ChargerRequest"> | number
    createdAt?: DateTimeFilter<"ChargerRequest"> | Date | string
    userEmail?: StringFilter<"ChargerRequest"> | string
    manufacturerName?: StringNullableFilter<"ChargerRequest"> | string | null
  }

  export type ChargerRequestCreateManyManufacturerInput = {
    id?: number
    createdAt?: Date | string
    userEmail: string
  }

  export type ChargerRequestUpdateWithoutManufacturerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChargerRequestNestedInput
  }

  export type ChargerRequestUncheckedUpdateWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ChargerRequestUncheckedUpdateManyWithoutManufacturerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userEmail?: StringFieldUpdateOperationsInput | string
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