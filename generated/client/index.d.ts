
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
 * Model UserBodyType
 * 
 */
export type UserBodyType = $Result.DefaultSelection<Prisma.$UserBodyTypePayload>
/**
 * Model UserAccessory
 * 
 */
export type UserAccessory = $Result.DefaultSelection<Prisma.$UserAccessoryPayload>
/**
 * Model UserFashionStyle
 * 
 */
export type UserFashionStyle = $Result.DefaultSelection<Prisma.$UserFashionStylePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model ColorPreference
 * 
 */
export type ColorPreference = $Result.DefaultSelection<Prisma.$ColorPreferencePayload>
/**
 * Model OutfitCategory
 * 
 */
export type OutfitCategory = $Result.DefaultSelection<Prisma.$OutfitCategoryPayload>
/**
 * Model OutfitElements
 * 
 */
export type OutfitElements = $Result.DefaultSelection<Prisma.$OutfitElementsPayload>
/**
 * Model WeatherType
 * 
 */
export type WeatherType = $Result.DefaultSelection<Prisma.$WeatherTypePayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model UserFavourite
 * 
 */
export type UserFavourite = $Result.DefaultSelection<Prisma.$UserFavouritePayload>
/**
 * Model OutfitInDigitalCloset
 * 
 */
export type OutfitInDigitalCloset = $Result.DefaultSelection<Prisma.$OutfitInDigitalClosetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female',
  unisex: 'unisex',
  prefer_not_to_say: 'prefer_not_to_say'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const PrivacyLevel: {
  minimal: 'minimal',
  standard: 'standard',
  enhanced: 'enhanced'
};

export type PrivacyLevel = (typeof PrivacyLevel)[keyof typeof PrivacyLevel]


export const PriceRange: {
  budget: 'budget',
  mid_range: 'mid_range',
  luxury: 'luxury'
};

export type PriceRange = (typeof PriceRange)[keyof typeof PriceRange]


export const FormalityLevel: {
  casual: 'casual',
  semi_formal: 'semi_formal',
  formal: 'formal',
  very_formal: 'very_formal',
  ultra_formal: 'ultra_formal'
};

export type FormalityLevel = (typeof FormalityLevel)[keyof typeof FormalityLevel]


export const BudgetRange: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type BudgetRange = (typeof BudgetRange)[keyof typeof BudgetRange]


export const SelectionReason: {
  liked: 'liked',
  disliked: 'disliked',
  neutral: 'neutral',
  purchased: 'purchased'
};

export type SelectionReason = (typeof SelectionReason)[keyof typeof SelectionReason]


export const AgeGroup: {
  teen: 'teen',
  young_adult: 'young_adult',
  adult: 'adult',
  mature: 'mature'
};

export type AgeGroup = (typeof AgeGroup)[keyof typeof AgeGroup]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type PrivacyLevel = $Enums.PrivacyLevel

export const PrivacyLevel: typeof $Enums.PrivacyLevel

export type PriceRange = $Enums.PriceRange

export const PriceRange: typeof $Enums.PriceRange

export type FormalityLevel = $Enums.FormalityLevel

export const FormalityLevel: typeof $Enums.FormalityLevel

export type BudgetRange = $Enums.BudgetRange

export const BudgetRange: typeof $Enums.BudgetRange

export type SelectionReason = $Enums.SelectionReason

export const SelectionReason: typeof $Enums.SelectionReason

export type AgeGroup = $Enums.AgeGroup

export const AgeGroup: typeof $Enums.AgeGroup

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
   * `prisma.userBodyType`: Exposes CRUD operations for the **UserBodyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBodyTypes
    * const userBodyTypes = await prisma.userBodyType.findMany()
    * ```
    */
  get userBodyType(): Prisma.UserBodyTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAccessory`: Exposes CRUD operations for the **UserAccessory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccessories
    * const userAccessories = await prisma.userAccessory.findMany()
    * ```
    */
  get userAccessory(): Prisma.UserAccessoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFashionStyle`: Exposes CRUD operations for the **UserFashionStyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFashionStyles
    * const userFashionStyles = await prisma.userFashionStyle.findMany()
    * ```
    */
  get userFashionStyle(): Prisma.UserFashionStyleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colorPreference`: Exposes CRUD operations for the **ColorPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColorPreferences
    * const colorPreferences = await prisma.colorPreference.findMany()
    * ```
    */
  get colorPreference(): Prisma.ColorPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitCategory`: Exposes CRUD operations for the **OutfitCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitCategories
    * const outfitCategories = await prisma.outfitCategory.findMany()
    * ```
    */
  get outfitCategory(): Prisma.OutfitCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitElements`: Exposes CRUD operations for the **OutfitElements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitElements
    * const outfitElements = await prisma.outfitElements.findMany()
    * ```
    */
  get outfitElements(): Prisma.OutfitElementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherType`: Exposes CRUD operations for the **WeatherType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherTypes
    * const weatherTypes = await prisma.weatherType.findMany()
    * ```
    */
  get weatherType(): Prisma.WeatherTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavourite`: Exposes CRUD operations for the **UserFavourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavourites
    * const userFavourites = await prisma.userFavourite.findMany()
    * ```
    */
  get userFavourite(): Prisma.UserFavouriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outfitInDigitalCloset`: Exposes CRUD operations for the **OutfitInDigitalCloset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutfitInDigitalClosets
    * const outfitInDigitalClosets = await prisma.outfitInDigitalCloset.findMany()
    * ```
    */
  get outfitInDigitalCloset(): Prisma.OutfitInDigitalClosetDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    UserBodyType: 'UserBodyType',
    UserAccessory: 'UserAccessory',
    UserFashionStyle: 'UserFashionStyle',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    ColorPreference: 'ColorPreference',
    OutfitCategory: 'OutfitCategory',
    OutfitElements: 'OutfitElements',
    WeatherType: 'WeatherType',
    UserPreference: 'UserPreference',
    UserFavourite: 'UserFavourite',
    OutfitInDigitalCloset: 'OutfitInDigitalCloset'
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
      modelProps: "user" | "userBodyType" | "userAccessory" | "userFashionStyle" | "session" | "account" | "verification" | "colorPreference" | "outfitCategory" | "outfitElements" | "weatherType" | "userPreference" | "userFavourite" | "outfitInDigitalCloset"
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
      UserBodyType: {
        payload: Prisma.$UserBodyTypePayload<ExtArgs>
        fields: Prisma.UserBodyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBodyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBodyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          findFirst: {
            args: Prisma.UserBodyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBodyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          findMany: {
            args: Prisma.UserBodyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>[]
          }
          create: {
            args: Prisma.UserBodyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          createMany: {
            args: Prisma.UserBodyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBodyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>[]
          }
          delete: {
            args: Prisma.UserBodyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          update: {
            args: Prisma.UserBodyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          deleteMany: {
            args: Prisma.UserBodyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBodyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBodyTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>[]
          }
          upsert: {
            args: Prisma.UserBodyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBodyTypePayload>
          }
          aggregate: {
            args: Prisma.UserBodyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBodyType>
          }
          groupBy: {
            args: Prisma.UserBodyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBodyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBodyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBodyTypeCountAggregateOutputType> | number
          }
        }
      }
      UserAccessory: {
        payload: Prisma.$UserAccessoryPayload<ExtArgs>
        fields: Prisma.UserAccessoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAccessoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAccessoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          findFirst: {
            args: Prisma.UserAccessoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAccessoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          findMany: {
            args: Prisma.UserAccessoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>[]
          }
          create: {
            args: Prisma.UserAccessoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          createMany: {
            args: Prisma.UserAccessoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAccessoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>[]
          }
          delete: {
            args: Prisma.UserAccessoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          update: {
            args: Prisma.UserAccessoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          deleteMany: {
            args: Prisma.UserAccessoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAccessoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAccessoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>[]
          }
          upsert: {
            args: Prisma.UserAccessoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessoryPayload>
          }
          aggregate: {
            args: Prisma.UserAccessoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAccessory>
          }
          groupBy: {
            args: Prisma.UserAccessoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAccessoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAccessoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserAccessoryCountAggregateOutputType> | number
          }
        }
      }
      UserFashionStyle: {
        payload: Prisma.$UserFashionStylePayload<ExtArgs>
        fields: Prisma.UserFashionStyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFashionStyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFashionStyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          findFirst: {
            args: Prisma.UserFashionStyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFashionStyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          findMany: {
            args: Prisma.UserFashionStyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>[]
          }
          create: {
            args: Prisma.UserFashionStyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          createMany: {
            args: Prisma.UserFashionStyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFashionStyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>[]
          }
          delete: {
            args: Prisma.UserFashionStyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          update: {
            args: Prisma.UserFashionStyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          deleteMany: {
            args: Prisma.UserFashionStyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFashionStyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFashionStyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>[]
          }
          upsert: {
            args: Prisma.UserFashionStyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFashionStylePayload>
          }
          aggregate: {
            args: Prisma.UserFashionStyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFashionStyle>
          }
          groupBy: {
            args: Prisma.UserFashionStyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFashionStyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFashionStyleCountArgs<ExtArgs>
            result: $Utils.Optional<UserFashionStyleCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      ColorPreference: {
        payload: Prisma.$ColorPreferencePayload<ExtArgs>
        fields: Prisma.ColorPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          findFirst: {
            args: Prisma.ColorPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          findMany: {
            args: Prisma.ColorPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>[]
          }
          create: {
            args: Prisma.ColorPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          createMany: {
            args: Prisma.ColorPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>[]
          }
          delete: {
            args: Prisma.ColorPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          update: {
            args: Prisma.ColorPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          deleteMany: {
            args: Prisma.ColorPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>[]
          }
          upsert: {
            args: Prisma.ColorPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPreferencePayload>
          }
          aggregate: {
            args: Prisma.ColorPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColorPreference>
          }
          groupBy: {
            args: Prisma.ColorPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ColorPreferenceCountAggregateOutputType> | number
          }
        }
      }
      OutfitCategory: {
        payload: Prisma.$OutfitCategoryPayload<ExtArgs>
        fields: Prisma.OutfitCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          findFirst: {
            args: Prisma.OutfitCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          findMany: {
            args: Prisma.OutfitCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>[]
          }
          create: {
            args: Prisma.OutfitCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          createMany: {
            args: Prisma.OutfitCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>[]
          }
          delete: {
            args: Prisma.OutfitCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          update: {
            args: Prisma.OutfitCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          deleteMany: {
            args: Prisma.OutfitCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>[]
          }
          upsert: {
            args: Prisma.OutfitCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitCategoryPayload>
          }
          aggregate: {
            args: Prisma.OutfitCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitCategory>
          }
          groupBy: {
            args: Prisma.OutfitCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitCategoryCountAggregateOutputType> | number
          }
        }
      }
      OutfitElements: {
        payload: Prisma.$OutfitElementsPayload<ExtArgs>
        fields: Prisma.OutfitElementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitElementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitElementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          findFirst: {
            args: Prisma.OutfitElementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitElementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          findMany: {
            args: Prisma.OutfitElementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>[]
          }
          create: {
            args: Prisma.OutfitElementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          createMany: {
            args: Prisma.OutfitElementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitElementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>[]
          }
          delete: {
            args: Prisma.OutfitElementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          update: {
            args: Prisma.OutfitElementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          deleteMany: {
            args: Prisma.OutfitElementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitElementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitElementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>[]
          }
          upsert: {
            args: Prisma.OutfitElementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitElementsPayload>
          }
          aggregate: {
            args: Prisma.OutfitElementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitElements>
          }
          groupBy: {
            args: Prisma.OutfitElementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitElementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitElementsCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitElementsCountAggregateOutputType> | number
          }
        }
      }
      WeatherType: {
        payload: Prisma.$WeatherTypePayload<ExtArgs>
        fields: Prisma.WeatherTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          findFirst: {
            args: Prisma.WeatherTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          findMany: {
            args: Prisma.WeatherTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>[]
          }
          create: {
            args: Prisma.WeatherTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          createMany: {
            args: Prisma.WeatherTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>[]
          }
          delete: {
            args: Prisma.WeatherTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          update: {
            args: Prisma.WeatherTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          deleteMany: {
            args: Prisma.WeatherTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>[]
          }
          upsert: {
            args: Prisma.WeatherTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherTypePayload>
          }
          aggregate: {
            args: Prisma.WeatherTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherType>
          }
          groupBy: {
            args: Prisma.WeatherTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherTypeCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherTypeCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      UserFavourite: {
        payload: Prisma.$UserFavouritePayload<ExtArgs>
        fields: Prisma.UserFavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          findFirst: {
            args: Prisma.UserFavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          findMany: {
            args: Prisma.UserFavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>[]
          }
          create: {
            args: Prisma.UserFavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          createMany: {
            args: Prisma.UserFavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavouriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>[]
          }
          delete: {
            args: Prisma.UserFavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          update: {
            args: Prisma.UserFavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          deleteMany: {
            args: Prisma.UserFavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavouriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>[]
          }
          upsert: {
            args: Prisma.UserFavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavouritePayload>
          }
          aggregate: {
            args: Prisma.UserFavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavourite>
          }
          groupBy: {
            args: Prisma.UserFavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavouriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavouriteCountAggregateOutputType> | number
          }
        }
      }
      OutfitInDigitalCloset: {
        payload: Prisma.$OutfitInDigitalClosetPayload<ExtArgs>
        fields: Prisma.OutfitInDigitalClosetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutfitInDigitalClosetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutfitInDigitalClosetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          findFirst: {
            args: Prisma.OutfitInDigitalClosetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutfitInDigitalClosetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          findMany: {
            args: Prisma.OutfitInDigitalClosetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>[]
          }
          create: {
            args: Prisma.OutfitInDigitalClosetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          createMany: {
            args: Prisma.OutfitInDigitalClosetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutfitInDigitalClosetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>[]
          }
          delete: {
            args: Prisma.OutfitInDigitalClosetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          update: {
            args: Prisma.OutfitInDigitalClosetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          deleteMany: {
            args: Prisma.OutfitInDigitalClosetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutfitInDigitalClosetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutfitInDigitalClosetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>[]
          }
          upsert: {
            args: Prisma.OutfitInDigitalClosetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutfitInDigitalClosetPayload>
          }
          aggregate: {
            args: Prisma.OutfitInDigitalClosetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutfitInDigitalCloset>
          }
          groupBy: {
            args: Prisma.OutfitInDigitalClosetGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutfitInDigitalClosetGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutfitInDigitalClosetCountArgs<ExtArgs>
            result: $Utils.Optional<OutfitInDigitalClosetCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    userBodyType?: UserBodyTypeOmit
    userAccessory?: UserAccessoryOmit
    userFashionStyle?: UserFashionStyleOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    colorPreference?: ColorPreferenceOmit
    outfitCategory?: OutfitCategoryOmit
    outfitElements?: OutfitElementsOmit
    weatherType?: WeatherTypeOmit
    userPreference?: UserPreferenceOmit
    userFavourite?: UserFavouriteOmit
    outfitInDigitalCloset?: OutfitInDigitalClosetOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accessories: number
    fashionStyles: number
    accounts: number
    favourites: number
    digitalClosets: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessories?: boolean | UserCountOutputTypeCountAccessoriesArgs
    fashionStyles?: boolean | UserCountOutputTypeCountFashionStylesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
    digitalClosets?: boolean | UserCountOutputTypeCountDigitalClosetsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFashionStylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFashionStyleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavouriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDigitalClosetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitInDigitalClosetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type OutfitCategoryCountOutputType
   */

  export type OutfitCategoryCountOutputType = {
    elements: number
  }

  export type OutfitCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | OutfitCategoryCountOutputTypeCountElementsArgs
  }

  // Custom InputTypes
  /**
   * OutfitCategoryCountOutputType without action
   */
  export type OutfitCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategoryCountOutputType
     */
    select?: OutfitCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutfitCategoryCountOutputType without action
   */
  export type OutfitCategoryCountOutputTypeCountElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitElementsWhereInput
  }


  /**
   * Count Type OutfitElementsCountOutputType
   */

  export type OutfitElementsCountOutputType = {
    favourites: number
  }

  export type OutfitElementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | OutfitElementsCountOutputTypeCountFavouritesArgs
  }

  // Custom InputTypes
  /**
   * OutfitElementsCountOutputType without action
   */
  export type OutfitElementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElementsCountOutputType
     */
    select?: OutfitElementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutfitElementsCountOutputType without action
   */
  export type OutfitElementsCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavouriteWhereInput
  }


  /**
   * Count Type WeatherTypeCountOutputType
   */

  export type WeatherTypeCountOutputType = {
    UserFavourite: number
  }

  export type WeatherTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFavourite?: boolean | WeatherTypeCountOutputTypeCountUserFavouriteArgs
  }

  // Custom InputTypes
  /**
   * WeatherTypeCountOutputType without action
   */
  export type WeatherTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherTypeCountOutputType
     */
    select?: WeatherTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeatherTypeCountOutputType without action
   */
  export type WeatherTypeCountOutputTypeCountUserFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavouriteWhereInput
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
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    height: number | null
    weight: number | null
    birthday: Date | null
    gender: $Enums.Gender | null
    isActive: boolean | null
    onboardingCompleted: boolean | null
    privacyLevel: $Enums.PrivacyLevel | null
    timezone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    height: number | null
    weight: number | null
    birthday: Date | null
    gender: $Enums.Gender | null
    isActive: boolean | null
    onboardingCompleted: boolean | null
    privacyLevel: $Enums.PrivacyLevel | null
    timezone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    height: number
    weight: number
    birthday: number
    gender: number
    color: number
    isActive: number
    onboardingCompleted: number
    privacyLevel: number
    timezone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    height?: true
    weight?: true
    birthday?: true
    gender?: true
    isActive?: true
    onboardingCompleted?: true
    privacyLevel?: true
    timezone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    height?: true
    weight?: true
    birthday?: true
    gender?: true
    isActive?: true
    onboardingCompleted?: true
    privacyLevel?: true
    timezone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    height?: true
    weight?: true
    birthday?: true
    gender?: true
    color?: true
    isActive?: true
    onboardingCompleted?: true
    privacyLevel?: true
    timezone?: true
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
    id: string
    name: string
    email: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    height: number | null
    weight: number | null
    birthday: Date | null
    gender: $Enums.Gender | null
    color: string[]
    isActive: boolean
    onboardingCompleted: boolean
    privacyLevel: $Enums.PrivacyLevel
    timezone: string
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
    email?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    height?: boolean
    weight?: boolean
    birthday?: boolean
    gender?: boolean
    color?: boolean
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: boolean
    timezone?: boolean
    bodyType?: boolean | User$bodyTypeArgs<ExtArgs>
    accessories?: boolean | User$accessoriesArgs<ExtArgs>
    fashionStyles?: boolean | User$fashionStylesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    digitalClosets?: boolean | User$digitalClosetsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    height?: boolean
    weight?: boolean
    birthday?: boolean
    gender?: boolean
    color?: boolean
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: boolean
    timezone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    height?: boolean
    weight?: boolean
    birthday?: boolean
    gender?: boolean
    color?: boolean
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: boolean
    timezone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    height?: boolean
    weight?: boolean
    birthday?: boolean
    gender?: boolean
    color?: boolean
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: boolean
    timezone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "createdAt" | "updatedAt" | "height" | "weight" | "birthday" | "gender" | "color" | "isActive" | "onboardingCompleted" | "privacyLevel" | "timezone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bodyType?: boolean | User$bodyTypeArgs<ExtArgs>
    accessories?: boolean | User$accessoriesArgs<ExtArgs>
    fashionStyles?: boolean | User$fashionStylesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    digitalClosets?: boolean | User$digitalClosetsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bodyType: Prisma.$UserBodyTypePayload<ExtArgs> | null
      accessories: Prisma.$UserAccessoryPayload<ExtArgs>[]
      fashionStyles: Prisma.$UserFashionStylePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null
      favourites: Prisma.$UserFavouritePayload<ExtArgs>[]
      digitalClosets: Prisma.$OutfitInDigitalClosetPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
      height: number | null
      weight: number | null
      birthday: Date | null
      gender: $Enums.Gender | null
      color: string[]
      isActive: boolean
      onboardingCompleted: boolean
      privacyLevel: $Enums.PrivacyLevel
      timezone: string
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
    bodyType<T extends User$bodyTypeArgs<ExtArgs> = {}>(args?: Subset<T, User$bodyTypeArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accessories<T extends User$accessoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$accessoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fashionStyles<T extends User$fashionStylesArgs<ExtArgs> = {}>(args?: Subset<T, User$fashionStylesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    digitalClosets<T extends User$digitalClosetsArgs<ExtArgs> = {}>(args?: Subset<T, User$digitalClosetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly height: FieldRef<"User", 'Int'>
    readonly weight: FieldRef<"User", 'Int'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly color: FieldRef<"User", 'String[]'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly onboardingCompleted: FieldRef<"User", 'Boolean'>
    readonly privacyLevel: FieldRef<"User", 'PrivacyLevel'>
    readonly timezone: FieldRef<"User", 'String'>
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
   * User.bodyType
   */
  export type User$bodyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    where?: UserBodyTypeWhereInput
  }

  /**
   * User.accessories
   */
  export type User$accessoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    where?: UserAccessoryWhereInput
    orderBy?: UserAccessoryOrderByWithRelationInput | UserAccessoryOrderByWithRelationInput[]
    cursor?: UserAccessoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAccessoryScalarFieldEnum | UserAccessoryScalarFieldEnum[]
  }

  /**
   * User.fashionStyles
   */
  export type User$fashionStylesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    where?: UserFashionStyleWhereInput
    orderBy?: UserFashionStyleOrderByWithRelationInput | UserFashionStyleOrderByWithRelationInput[]
    cursor?: UserFashionStyleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFashionStyleScalarFieldEnum | UserFashionStyleScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    where?: UserFavouriteWhereInput
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    cursor?: UserFavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * User.digitalClosets
   */
  export type User$digitalClosetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    where?: OutfitInDigitalClosetWhereInput
    orderBy?: OutfitInDigitalClosetOrderByWithRelationInput | OutfitInDigitalClosetOrderByWithRelationInput[]
    cursor?: OutfitInDigitalClosetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitInDigitalClosetScalarFieldEnum | OutfitInDigitalClosetScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model UserBodyType
   */

  export type AggregateUserBodyType = {
    _count: UserBodyTypeCountAggregateOutputType | null
    _min: UserBodyTypeMinAggregateOutputType | null
    _max: UserBodyTypeMaxAggregateOutputType | null
  }

  export type UserBodyTypeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBodyTypeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBodyTypeCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserBodyTypeMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBodyTypeMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBodyTypeCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBodyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBodyType to aggregate.
     */
    where?: UserBodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBodyTypes to fetch.
     */
    orderBy?: UserBodyTypeOrderByWithRelationInput | UserBodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBodyTypes
    **/
    _count?: true | UserBodyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBodyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBodyTypeMaxAggregateInputType
  }

  export type GetUserBodyTypeAggregateType<T extends UserBodyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBodyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBodyType[P]>
      : GetScalarType<T[P], AggregateUserBodyType[P]>
  }




  export type UserBodyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBodyTypeWhereInput
    orderBy?: UserBodyTypeOrderByWithAggregationInput | UserBodyTypeOrderByWithAggregationInput[]
    by: UserBodyTypeScalarFieldEnum[] | UserBodyTypeScalarFieldEnum
    having?: UserBodyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBodyTypeCountAggregateInputType | true
    _min?: UserBodyTypeMinAggregateInputType
    _max?: UserBodyTypeMaxAggregateInputType
  }

  export type UserBodyTypeGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: UserBodyTypeCountAggregateOutputType | null
    _min: UserBodyTypeMinAggregateOutputType | null
    _max: UserBodyTypeMaxAggregateOutputType | null
  }

  type GetUserBodyTypeGroupByPayload<T extends UserBodyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBodyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBodyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBodyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBodyTypeGroupByOutputType[P]>
        }
      >
    >


  export type UserBodyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBodyType"]>

  export type UserBodyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBodyType"]>

  export type UserBodyTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBodyType"]>

  export type UserBodyTypeSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserBodyTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userBodyType"]>
  export type UserBodyTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBodyTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBodyTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserBodyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBodyType"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBodyType"]>
    composites: {}
  }

  type UserBodyTypeGetPayload<S extends boolean | null | undefined | UserBodyTypeDefaultArgs> = $Result.GetResult<Prisma.$UserBodyTypePayload, S>

  type UserBodyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBodyTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBodyTypeCountAggregateInputType | true
    }

  export interface UserBodyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBodyType'], meta: { name: 'UserBodyType' } }
    /**
     * Find zero or one UserBodyType that matches the filter.
     * @param {UserBodyTypeFindUniqueArgs} args - Arguments to find a UserBodyType
     * @example
     * // Get one UserBodyType
     * const userBodyType = await prisma.userBodyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBodyTypeFindUniqueArgs>(args: SelectSubset<T, UserBodyTypeFindUniqueArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBodyType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBodyTypeFindUniqueOrThrowArgs} args - Arguments to find a UserBodyType
     * @example
     * // Get one UserBodyType
     * const userBodyType = await prisma.userBodyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBodyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBodyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBodyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeFindFirstArgs} args - Arguments to find a UserBodyType
     * @example
     * // Get one UserBodyType
     * const userBodyType = await prisma.userBodyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBodyTypeFindFirstArgs>(args?: SelectSubset<T, UserBodyTypeFindFirstArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBodyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeFindFirstOrThrowArgs} args - Arguments to find a UserBodyType
     * @example
     * // Get one UserBodyType
     * const userBodyType = await prisma.userBodyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBodyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBodyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBodyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBodyTypes
     * const userBodyTypes = await prisma.userBodyType.findMany()
     * 
     * // Get first 10 UserBodyTypes
     * const userBodyTypes = await prisma.userBodyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBodyTypeWithIdOnly = await prisma.userBodyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBodyTypeFindManyArgs>(args?: SelectSubset<T, UserBodyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBodyType.
     * @param {UserBodyTypeCreateArgs} args - Arguments to create a UserBodyType.
     * @example
     * // Create one UserBodyType
     * const UserBodyType = await prisma.userBodyType.create({
     *   data: {
     *     // ... data to create a UserBodyType
     *   }
     * })
     * 
     */
    create<T extends UserBodyTypeCreateArgs>(args: SelectSubset<T, UserBodyTypeCreateArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBodyTypes.
     * @param {UserBodyTypeCreateManyArgs} args - Arguments to create many UserBodyTypes.
     * @example
     * // Create many UserBodyTypes
     * const userBodyType = await prisma.userBodyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBodyTypeCreateManyArgs>(args?: SelectSubset<T, UserBodyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBodyTypes and returns the data saved in the database.
     * @param {UserBodyTypeCreateManyAndReturnArgs} args - Arguments to create many UserBodyTypes.
     * @example
     * // Create many UserBodyTypes
     * const userBodyType = await prisma.userBodyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBodyTypes and only return the `id`
     * const userBodyTypeWithIdOnly = await prisma.userBodyType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBodyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBodyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBodyType.
     * @param {UserBodyTypeDeleteArgs} args - Arguments to delete one UserBodyType.
     * @example
     * // Delete one UserBodyType
     * const UserBodyType = await prisma.userBodyType.delete({
     *   where: {
     *     // ... filter to delete one UserBodyType
     *   }
     * })
     * 
     */
    delete<T extends UserBodyTypeDeleteArgs>(args: SelectSubset<T, UserBodyTypeDeleteArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBodyType.
     * @param {UserBodyTypeUpdateArgs} args - Arguments to update one UserBodyType.
     * @example
     * // Update one UserBodyType
     * const userBodyType = await prisma.userBodyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBodyTypeUpdateArgs>(args: SelectSubset<T, UserBodyTypeUpdateArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBodyTypes.
     * @param {UserBodyTypeDeleteManyArgs} args - Arguments to filter UserBodyTypes to delete.
     * @example
     * // Delete a few UserBodyTypes
     * const { count } = await prisma.userBodyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBodyTypeDeleteManyArgs>(args?: SelectSubset<T, UserBodyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBodyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBodyTypes
     * const userBodyType = await prisma.userBodyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBodyTypeUpdateManyArgs>(args: SelectSubset<T, UserBodyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBodyTypes and returns the data updated in the database.
     * @param {UserBodyTypeUpdateManyAndReturnArgs} args - Arguments to update many UserBodyTypes.
     * @example
     * // Update many UserBodyTypes
     * const userBodyType = await prisma.userBodyType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBodyTypes and only return the `id`
     * const userBodyTypeWithIdOnly = await prisma.userBodyType.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserBodyTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBodyTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBodyType.
     * @param {UserBodyTypeUpsertArgs} args - Arguments to update or create a UserBodyType.
     * @example
     * // Update or create a UserBodyType
     * const userBodyType = await prisma.userBodyType.upsert({
     *   create: {
     *     // ... data to create a UserBodyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBodyType we want to update
     *   }
     * })
     */
    upsert<T extends UserBodyTypeUpsertArgs>(args: SelectSubset<T, UserBodyTypeUpsertArgs<ExtArgs>>): Prisma__UserBodyTypeClient<$Result.GetResult<Prisma.$UserBodyTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBodyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeCountArgs} args - Arguments to filter UserBodyTypes to count.
     * @example
     * // Count the number of UserBodyTypes
     * const count = await prisma.userBodyType.count({
     *   where: {
     *     // ... the filter for the UserBodyTypes we want to count
     *   }
     * })
    **/
    count<T extends UserBodyTypeCountArgs>(
      args?: Subset<T, UserBodyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBodyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBodyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBodyTypeAggregateArgs>(args: Subset<T, UserBodyTypeAggregateArgs>): Prisma.PrismaPromise<GetUserBodyTypeAggregateType<T>>

    /**
     * Group by UserBodyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBodyTypeGroupByArgs} args - Group by arguments.
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
      T extends UserBodyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBodyTypeGroupByArgs['orderBy'] }
        : { orderBy?: UserBodyTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBodyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBodyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBodyType model
   */
  readonly fields: UserBodyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBodyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBodyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserBodyType model
   */
  interface UserBodyTypeFieldRefs {
    readonly id: FieldRef<"UserBodyType", 'String'>
    readonly userId: FieldRef<"UserBodyType", 'String'>
    readonly name: FieldRef<"UserBodyType", 'String'>
    readonly description: FieldRef<"UserBodyType", 'String'>
    readonly createdAt: FieldRef<"UserBodyType", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBodyType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBodyType findUnique
   */
  export type UserBodyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserBodyType to fetch.
     */
    where: UserBodyTypeWhereUniqueInput
  }

  /**
   * UserBodyType findUniqueOrThrow
   */
  export type UserBodyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserBodyType to fetch.
     */
    where: UserBodyTypeWhereUniqueInput
  }

  /**
   * UserBodyType findFirst
   */
  export type UserBodyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserBodyType to fetch.
     */
    where?: UserBodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBodyTypes to fetch.
     */
    orderBy?: UserBodyTypeOrderByWithRelationInput | UserBodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBodyTypes.
     */
    cursor?: UserBodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBodyTypes.
     */
    distinct?: UserBodyTypeScalarFieldEnum | UserBodyTypeScalarFieldEnum[]
  }

  /**
   * UserBodyType findFirstOrThrow
   */
  export type UserBodyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserBodyType to fetch.
     */
    where?: UserBodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBodyTypes to fetch.
     */
    orderBy?: UserBodyTypeOrderByWithRelationInput | UserBodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBodyTypes.
     */
    cursor?: UserBodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBodyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBodyTypes.
     */
    distinct?: UserBodyTypeScalarFieldEnum | UserBodyTypeScalarFieldEnum[]
  }

  /**
   * UserBodyType findMany
   */
  export type UserBodyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter, which UserBodyTypes to fetch.
     */
    where?: UserBodyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBodyTypes to fetch.
     */
    orderBy?: UserBodyTypeOrderByWithRelationInput | UserBodyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBodyTypes.
     */
    cursor?: UserBodyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBodyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBodyTypes.
     */
    skip?: number
    distinct?: UserBodyTypeScalarFieldEnum | UserBodyTypeScalarFieldEnum[]
  }

  /**
   * UserBodyType create
   */
  export type UserBodyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBodyType.
     */
    data: XOR<UserBodyTypeCreateInput, UserBodyTypeUncheckedCreateInput>
  }

  /**
   * UserBodyType createMany
   */
  export type UserBodyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBodyTypes.
     */
    data: UserBodyTypeCreateManyInput | UserBodyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBodyType createManyAndReturn
   */
  export type UserBodyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBodyTypes.
     */
    data: UserBodyTypeCreateManyInput | UserBodyTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBodyType update
   */
  export type UserBodyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBodyType.
     */
    data: XOR<UserBodyTypeUpdateInput, UserBodyTypeUncheckedUpdateInput>
    /**
     * Choose, which UserBodyType to update.
     */
    where: UserBodyTypeWhereUniqueInput
  }

  /**
   * UserBodyType updateMany
   */
  export type UserBodyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBodyTypes.
     */
    data: XOR<UserBodyTypeUpdateManyMutationInput, UserBodyTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserBodyTypes to update
     */
    where?: UserBodyTypeWhereInput
    /**
     * Limit how many UserBodyTypes to update.
     */
    limit?: number
  }

  /**
   * UserBodyType updateManyAndReturn
   */
  export type UserBodyTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * The data used to update UserBodyTypes.
     */
    data: XOR<UserBodyTypeUpdateManyMutationInput, UserBodyTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserBodyTypes to update
     */
    where?: UserBodyTypeWhereInput
    /**
     * Limit how many UserBodyTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBodyType upsert
   */
  export type UserBodyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBodyType to update in case it exists.
     */
    where: UserBodyTypeWhereUniqueInput
    /**
     * In case the UserBodyType found by the `where` argument doesn't exist, create a new UserBodyType with this data.
     */
    create: XOR<UserBodyTypeCreateInput, UserBodyTypeUncheckedCreateInput>
    /**
     * In case the UserBodyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBodyTypeUpdateInput, UserBodyTypeUncheckedUpdateInput>
  }

  /**
   * UserBodyType delete
   */
  export type UserBodyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
    /**
     * Filter which UserBodyType to delete.
     */
    where: UserBodyTypeWhereUniqueInput
  }

  /**
   * UserBodyType deleteMany
   */
  export type UserBodyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBodyTypes to delete
     */
    where?: UserBodyTypeWhereInput
    /**
     * Limit how many UserBodyTypes to delete.
     */
    limit?: number
  }

  /**
   * UserBodyType without action
   */
  export type UserBodyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBodyType
     */
    select?: UserBodyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBodyType
     */
    omit?: UserBodyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBodyTypeInclude<ExtArgs> | null
  }


  /**
   * Model UserAccessory
   */

  export type AggregateUserAccessory = {
    _count: UserAccessoryCountAggregateOutputType | null
    _min: UserAccessoryMinAggregateOutputType | null
    _max: UserAccessoryMaxAggregateOutputType | null
  }

  export type UserAccessoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAccessoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAccessoryCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAccessoryMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAccessoryMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAccessoryCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAccessoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccessory to aggregate.
     */
    where?: UserAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessories to fetch.
     */
    orderBy?: UserAccessoryOrderByWithRelationInput | UserAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccessories
    **/
    _count?: true | UserAccessoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccessoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccessoryMaxAggregateInputType
  }

  export type GetUserAccessoryAggregateType<T extends UserAccessoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccessory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccessory[P]>
      : GetScalarType<T[P], AggregateUserAccessory[P]>
  }




  export type UserAccessoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessoryWhereInput
    orderBy?: UserAccessoryOrderByWithAggregationInput | UserAccessoryOrderByWithAggregationInput[]
    by: UserAccessoryScalarFieldEnum[] | UserAccessoryScalarFieldEnum
    having?: UserAccessoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccessoryCountAggregateInputType | true
    _min?: UserAccessoryMinAggregateInputType
    _max?: UserAccessoryMaxAggregateInputType
  }

  export type UserAccessoryGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: UserAccessoryCountAggregateOutputType | null
    _min: UserAccessoryMinAggregateOutputType | null
    _max: UserAccessoryMaxAggregateOutputType | null
  }

  type GetUserAccessoryGroupByPayload<T extends UserAccessoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccessoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccessoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccessoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccessoryGroupByOutputType[P]>
        }
      >
    >


  export type UserAccessorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccessory"]>

  export type UserAccessorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccessory"]>

  export type UserAccessorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccessory"]>

  export type UserAccessorySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAccessoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userAccessory"]>
  export type UserAccessoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAccessoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAccessoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAccessoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAccessory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAccessory"]>
    composites: {}
  }

  type UserAccessoryGetPayload<S extends boolean | null | undefined | UserAccessoryDefaultArgs> = $Result.GetResult<Prisma.$UserAccessoryPayload, S>

  type UserAccessoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAccessoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAccessoryCountAggregateInputType | true
    }

  export interface UserAccessoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAccessory'], meta: { name: 'UserAccessory' } }
    /**
     * Find zero or one UserAccessory that matches the filter.
     * @param {UserAccessoryFindUniqueArgs} args - Arguments to find a UserAccessory
     * @example
     * // Get one UserAccessory
     * const userAccessory = await prisma.userAccessory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAccessoryFindUniqueArgs>(args: SelectSubset<T, UserAccessoryFindUniqueArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAccessory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAccessoryFindUniqueOrThrowArgs} args - Arguments to find a UserAccessory
     * @example
     * // Get one UserAccessory
     * const userAccessory = await prisma.userAccessory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAccessoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAccessoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccessory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryFindFirstArgs} args - Arguments to find a UserAccessory
     * @example
     * // Get one UserAccessory
     * const userAccessory = await prisma.userAccessory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAccessoryFindFirstArgs>(args?: SelectSubset<T, UserAccessoryFindFirstArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccessory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryFindFirstOrThrowArgs} args - Arguments to find a UserAccessory
     * @example
     * // Get one UserAccessory
     * const userAccessory = await prisma.userAccessory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAccessoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAccessoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccessories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccessories
     * const userAccessories = await prisma.userAccessory.findMany()
     * 
     * // Get first 10 UserAccessories
     * const userAccessories = await prisma.userAccessory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAccessoryWithIdOnly = await prisma.userAccessory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAccessoryFindManyArgs>(args?: SelectSubset<T, UserAccessoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAccessory.
     * @param {UserAccessoryCreateArgs} args - Arguments to create a UserAccessory.
     * @example
     * // Create one UserAccessory
     * const UserAccessory = await prisma.userAccessory.create({
     *   data: {
     *     // ... data to create a UserAccessory
     *   }
     * })
     * 
     */
    create<T extends UserAccessoryCreateArgs>(args: SelectSubset<T, UserAccessoryCreateArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAccessories.
     * @param {UserAccessoryCreateManyArgs} args - Arguments to create many UserAccessories.
     * @example
     * // Create many UserAccessories
     * const userAccessory = await prisma.userAccessory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAccessoryCreateManyArgs>(args?: SelectSubset<T, UserAccessoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAccessories and returns the data saved in the database.
     * @param {UserAccessoryCreateManyAndReturnArgs} args - Arguments to create many UserAccessories.
     * @example
     * // Create many UserAccessories
     * const userAccessory = await prisma.userAccessory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAccessories and only return the `id`
     * const userAccessoryWithIdOnly = await prisma.userAccessory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAccessoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAccessoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAccessory.
     * @param {UserAccessoryDeleteArgs} args - Arguments to delete one UserAccessory.
     * @example
     * // Delete one UserAccessory
     * const UserAccessory = await prisma.userAccessory.delete({
     *   where: {
     *     // ... filter to delete one UserAccessory
     *   }
     * })
     * 
     */
    delete<T extends UserAccessoryDeleteArgs>(args: SelectSubset<T, UserAccessoryDeleteArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAccessory.
     * @param {UserAccessoryUpdateArgs} args - Arguments to update one UserAccessory.
     * @example
     * // Update one UserAccessory
     * const userAccessory = await prisma.userAccessory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAccessoryUpdateArgs>(args: SelectSubset<T, UserAccessoryUpdateArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAccessories.
     * @param {UserAccessoryDeleteManyArgs} args - Arguments to filter UserAccessories to delete.
     * @example
     * // Delete a few UserAccessories
     * const { count } = await prisma.userAccessory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAccessoryDeleteManyArgs>(args?: SelectSubset<T, UserAccessoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccessories
     * const userAccessory = await prisma.userAccessory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAccessoryUpdateManyArgs>(args: SelectSubset<T, UserAccessoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccessories and returns the data updated in the database.
     * @param {UserAccessoryUpdateManyAndReturnArgs} args - Arguments to update many UserAccessories.
     * @example
     * // Update many UserAccessories
     * const userAccessory = await prisma.userAccessory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAccessories and only return the `id`
     * const userAccessoryWithIdOnly = await prisma.userAccessory.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAccessoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAccessoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAccessory.
     * @param {UserAccessoryUpsertArgs} args - Arguments to update or create a UserAccessory.
     * @example
     * // Update or create a UserAccessory
     * const userAccessory = await prisma.userAccessory.upsert({
     *   create: {
     *     // ... data to create a UserAccessory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccessory we want to update
     *   }
     * })
     */
    upsert<T extends UserAccessoryUpsertArgs>(args: SelectSubset<T, UserAccessoryUpsertArgs<ExtArgs>>): Prisma__UserAccessoryClient<$Result.GetResult<Prisma.$UserAccessoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAccessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryCountArgs} args - Arguments to filter UserAccessories to count.
     * @example
     * // Count the number of UserAccessories
     * const count = await prisma.userAccessory.count({
     *   where: {
     *     // ... the filter for the UserAccessories we want to count
     *   }
     * })
    **/
    count<T extends UserAccessoryCountArgs>(
      args?: Subset<T, UserAccessoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccessoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAccessoryAggregateArgs>(args: Subset<T, UserAccessoryAggregateArgs>): Prisma.PrismaPromise<GetUserAccessoryAggregateType<T>>

    /**
     * Group by UserAccessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessoryGroupByArgs} args - Group by arguments.
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
      T extends UserAccessoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccessoryGroupByArgs['orderBy'] }
        : { orderBy?: UserAccessoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAccessoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccessoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAccessory model
   */
  readonly fields: UserAccessoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccessory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAccessoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAccessory model
   */
  interface UserAccessoryFieldRefs {
    readonly id: FieldRef<"UserAccessory", 'String'>
    readonly userId: FieldRef<"UserAccessory", 'String'>
    readonly name: FieldRef<"UserAccessory", 'String'>
    readonly description: FieldRef<"UserAccessory", 'String'>
    readonly createdAt: FieldRef<"UserAccessory", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAccessory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAccessory findUnique
   */
  export type UserAccessoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessory to fetch.
     */
    where: UserAccessoryWhereUniqueInput
  }

  /**
   * UserAccessory findUniqueOrThrow
   */
  export type UserAccessoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessory to fetch.
     */
    where: UserAccessoryWhereUniqueInput
  }

  /**
   * UserAccessory findFirst
   */
  export type UserAccessoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessory to fetch.
     */
    where?: UserAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessories to fetch.
     */
    orderBy?: UserAccessoryOrderByWithRelationInput | UserAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccessories.
     */
    cursor?: UserAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccessories.
     */
    distinct?: UserAccessoryScalarFieldEnum | UserAccessoryScalarFieldEnum[]
  }

  /**
   * UserAccessory findFirstOrThrow
   */
  export type UserAccessoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessory to fetch.
     */
    where?: UserAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessories to fetch.
     */
    orderBy?: UserAccessoryOrderByWithRelationInput | UserAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccessories.
     */
    cursor?: UserAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccessories.
     */
    distinct?: UserAccessoryScalarFieldEnum | UserAccessoryScalarFieldEnum[]
  }

  /**
   * UserAccessory findMany
   */
  export type UserAccessoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which UserAccessories to fetch.
     */
    where?: UserAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccessories to fetch.
     */
    orderBy?: UserAccessoryOrderByWithRelationInput | UserAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccessories.
     */
    cursor?: UserAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccessories.
     */
    skip?: number
    distinct?: UserAccessoryScalarFieldEnum | UserAccessoryScalarFieldEnum[]
  }

  /**
   * UserAccessory create
   */
  export type UserAccessoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAccessory.
     */
    data: XOR<UserAccessoryCreateInput, UserAccessoryUncheckedCreateInput>
  }

  /**
   * UserAccessory createMany
   */
  export type UserAccessoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAccessories.
     */
    data: UserAccessoryCreateManyInput | UserAccessoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAccessory createManyAndReturn
   */
  export type UserAccessoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserAccessories.
     */
    data: UserAccessoryCreateManyInput | UserAccessoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAccessory update
   */
  export type UserAccessoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAccessory.
     */
    data: XOR<UserAccessoryUpdateInput, UserAccessoryUncheckedUpdateInput>
    /**
     * Choose, which UserAccessory to update.
     */
    where: UserAccessoryWhereUniqueInput
  }

  /**
   * UserAccessory updateMany
   */
  export type UserAccessoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAccessories.
     */
    data: XOR<UserAccessoryUpdateManyMutationInput, UserAccessoryUncheckedUpdateManyInput>
    /**
     * Filter which UserAccessories to update
     */
    where?: UserAccessoryWhereInput
    /**
     * Limit how many UserAccessories to update.
     */
    limit?: number
  }

  /**
   * UserAccessory updateManyAndReturn
   */
  export type UserAccessoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * The data used to update UserAccessories.
     */
    data: XOR<UserAccessoryUpdateManyMutationInput, UserAccessoryUncheckedUpdateManyInput>
    /**
     * Filter which UserAccessories to update
     */
    where?: UserAccessoryWhereInput
    /**
     * Limit how many UserAccessories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAccessory upsert
   */
  export type UserAccessoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAccessory to update in case it exists.
     */
    where: UserAccessoryWhereUniqueInput
    /**
     * In case the UserAccessory found by the `where` argument doesn't exist, create a new UserAccessory with this data.
     */
    create: XOR<UserAccessoryCreateInput, UserAccessoryUncheckedCreateInput>
    /**
     * In case the UserAccessory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAccessoryUpdateInput, UserAccessoryUncheckedUpdateInput>
  }

  /**
   * UserAccessory delete
   */
  export type UserAccessoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
    /**
     * Filter which UserAccessory to delete.
     */
    where: UserAccessoryWhereUniqueInput
  }

  /**
   * UserAccessory deleteMany
   */
  export type UserAccessoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccessories to delete
     */
    where?: UserAccessoryWhereInput
    /**
     * Limit how many UserAccessories to delete.
     */
    limit?: number
  }

  /**
   * UserAccessory without action
   */
  export type UserAccessoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccessory
     */
    select?: UserAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccessory
     */
    omit?: UserAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessoryInclude<ExtArgs> | null
  }


  /**
   * Model UserFashionStyle
   */

  export type AggregateUserFashionStyle = {
    _count: UserFashionStyleCountAggregateOutputType | null
    _min: UserFashionStyleMinAggregateOutputType | null
    _max: UserFashionStyleMaxAggregateOutputType | null
  }

  export type UserFashionStyleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFashionStyleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFashionStyleCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserFashionStyleMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFashionStyleMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFashionStyleCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserFashionStyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFashionStyle to aggregate.
     */
    where?: UserFashionStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFashionStyles to fetch.
     */
    orderBy?: UserFashionStyleOrderByWithRelationInput | UserFashionStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFashionStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFashionStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFashionStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFashionStyles
    **/
    _count?: true | UserFashionStyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFashionStyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFashionStyleMaxAggregateInputType
  }

  export type GetUserFashionStyleAggregateType<T extends UserFashionStyleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFashionStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFashionStyle[P]>
      : GetScalarType<T[P], AggregateUserFashionStyle[P]>
  }




  export type UserFashionStyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFashionStyleWhereInput
    orderBy?: UserFashionStyleOrderByWithAggregationInput | UserFashionStyleOrderByWithAggregationInput[]
    by: UserFashionStyleScalarFieldEnum[] | UserFashionStyleScalarFieldEnum
    having?: UserFashionStyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFashionStyleCountAggregateInputType | true
    _min?: UserFashionStyleMinAggregateInputType
    _max?: UserFashionStyleMaxAggregateInputType
  }

  export type UserFashionStyleGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: UserFashionStyleCountAggregateOutputType | null
    _min: UserFashionStyleMinAggregateOutputType | null
    _max: UserFashionStyleMaxAggregateOutputType | null
  }

  type GetUserFashionStyleGroupByPayload<T extends UserFashionStyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFashionStyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFashionStyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFashionStyleGroupByOutputType[P]>
            : GetScalarType<T[P], UserFashionStyleGroupByOutputType[P]>
        }
      >
    >


  export type UserFashionStyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFashionStyle"]>

  export type UserFashionStyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFashionStyle"]>

  export type UserFashionStyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFashionStyle"]>

  export type UserFashionStyleSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserFashionStyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userFashionStyle"]>
  export type UserFashionStyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFashionStyleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFashionStyleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFashionStylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFashionStyle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userFashionStyle"]>
    composites: {}
  }

  type UserFashionStyleGetPayload<S extends boolean | null | undefined | UserFashionStyleDefaultArgs> = $Result.GetResult<Prisma.$UserFashionStylePayload, S>

  type UserFashionStyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFashionStyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFashionStyleCountAggregateInputType | true
    }

  export interface UserFashionStyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFashionStyle'], meta: { name: 'UserFashionStyle' } }
    /**
     * Find zero or one UserFashionStyle that matches the filter.
     * @param {UserFashionStyleFindUniqueArgs} args - Arguments to find a UserFashionStyle
     * @example
     * // Get one UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFashionStyleFindUniqueArgs>(args: SelectSubset<T, UserFashionStyleFindUniqueArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFashionStyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFashionStyleFindUniqueOrThrowArgs} args - Arguments to find a UserFashionStyle
     * @example
     * // Get one UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFashionStyleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFashionStyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFashionStyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleFindFirstArgs} args - Arguments to find a UserFashionStyle
     * @example
     * // Get one UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFashionStyleFindFirstArgs>(args?: SelectSubset<T, UserFashionStyleFindFirstArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFashionStyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleFindFirstOrThrowArgs} args - Arguments to find a UserFashionStyle
     * @example
     * // Get one UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFashionStyleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFashionStyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFashionStyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFashionStyles
     * const userFashionStyles = await prisma.userFashionStyle.findMany()
     * 
     * // Get first 10 UserFashionStyles
     * const userFashionStyles = await prisma.userFashionStyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFashionStyleWithIdOnly = await prisma.userFashionStyle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFashionStyleFindManyArgs>(args?: SelectSubset<T, UserFashionStyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFashionStyle.
     * @param {UserFashionStyleCreateArgs} args - Arguments to create a UserFashionStyle.
     * @example
     * // Create one UserFashionStyle
     * const UserFashionStyle = await prisma.userFashionStyle.create({
     *   data: {
     *     // ... data to create a UserFashionStyle
     *   }
     * })
     * 
     */
    create<T extends UserFashionStyleCreateArgs>(args: SelectSubset<T, UserFashionStyleCreateArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFashionStyles.
     * @param {UserFashionStyleCreateManyArgs} args - Arguments to create many UserFashionStyles.
     * @example
     * // Create many UserFashionStyles
     * const userFashionStyle = await prisma.userFashionStyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFashionStyleCreateManyArgs>(args?: SelectSubset<T, UserFashionStyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFashionStyles and returns the data saved in the database.
     * @param {UserFashionStyleCreateManyAndReturnArgs} args - Arguments to create many UserFashionStyles.
     * @example
     * // Create many UserFashionStyles
     * const userFashionStyle = await prisma.userFashionStyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFashionStyles and only return the `id`
     * const userFashionStyleWithIdOnly = await prisma.userFashionStyle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFashionStyleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFashionStyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFashionStyle.
     * @param {UserFashionStyleDeleteArgs} args - Arguments to delete one UserFashionStyle.
     * @example
     * // Delete one UserFashionStyle
     * const UserFashionStyle = await prisma.userFashionStyle.delete({
     *   where: {
     *     // ... filter to delete one UserFashionStyle
     *   }
     * })
     * 
     */
    delete<T extends UserFashionStyleDeleteArgs>(args: SelectSubset<T, UserFashionStyleDeleteArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFashionStyle.
     * @param {UserFashionStyleUpdateArgs} args - Arguments to update one UserFashionStyle.
     * @example
     * // Update one UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFashionStyleUpdateArgs>(args: SelectSubset<T, UserFashionStyleUpdateArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFashionStyles.
     * @param {UserFashionStyleDeleteManyArgs} args - Arguments to filter UserFashionStyles to delete.
     * @example
     * // Delete a few UserFashionStyles
     * const { count } = await prisma.userFashionStyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFashionStyleDeleteManyArgs>(args?: SelectSubset<T, UserFashionStyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFashionStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFashionStyles
     * const userFashionStyle = await prisma.userFashionStyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFashionStyleUpdateManyArgs>(args: SelectSubset<T, UserFashionStyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFashionStyles and returns the data updated in the database.
     * @param {UserFashionStyleUpdateManyAndReturnArgs} args - Arguments to update many UserFashionStyles.
     * @example
     * // Update many UserFashionStyles
     * const userFashionStyle = await prisma.userFashionStyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFashionStyles and only return the `id`
     * const userFashionStyleWithIdOnly = await prisma.userFashionStyle.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserFashionStyleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFashionStyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFashionStyle.
     * @param {UserFashionStyleUpsertArgs} args - Arguments to update or create a UserFashionStyle.
     * @example
     * // Update or create a UserFashionStyle
     * const userFashionStyle = await prisma.userFashionStyle.upsert({
     *   create: {
     *     // ... data to create a UserFashionStyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFashionStyle we want to update
     *   }
     * })
     */
    upsert<T extends UserFashionStyleUpsertArgs>(args: SelectSubset<T, UserFashionStyleUpsertArgs<ExtArgs>>): Prisma__UserFashionStyleClient<$Result.GetResult<Prisma.$UserFashionStylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFashionStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleCountArgs} args - Arguments to filter UserFashionStyles to count.
     * @example
     * // Count the number of UserFashionStyles
     * const count = await prisma.userFashionStyle.count({
     *   where: {
     *     // ... the filter for the UserFashionStyles we want to count
     *   }
     * })
    **/
    count<T extends UserFashionStyleCountArgs>(
      args?: Subset<T, UserFashionStyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFashionStyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFashionStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFashionStyleAggregateArgs>(args: Subset<T, UserFashionStyleAggregateArgs>): Prisma.PrismaPromise<GetUserFashionStyleAggregateType<T>>

    /**
     * Group by UserFashionStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFashionStyleGroupByArgs} args - Group by arguments.
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
      T extends UserFashionStyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFashionStyleGroupByArgs['orderBy'] }
        : { orderBy?: UserFashionStyleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFashionStyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFashionStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFashionStyle model
   */
  readonly fields: UserFashionStyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFashionStyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFashionStyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserFashionStyle model
   */
  interface UserFashionStyleFieldRefs {
    readonly id: FieldRef<"UserFashionStyle", 'String'>
    readonly userId: FieldRef<"UserFashionStyle", 'String'>
    readonly name: FieldRef<"UserFashionStyle", 'String'>
    readonly description: FieldRef<"UserFashionStyle", 'String'>
    readonly createdAt: FieldRef<"UserFashionStyle", 'DateTime'>
    readonly updatedAt: FieldRef<"UserFashionStyle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFashionStyle findUnique
   */
  export type UserFashionStyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter, which UserFashionStyle to fetch.
     */
    where: UserFashionStyleWhereUniqueInput
  }

  /**
   * UserFashionStyle findUniqueOrThrow
   */
  export type UserFashionStyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter, which UserFashionStyle to fetch.
     */
    where: UserFashionStyleWhereUniqueInput
  }

  /**
   * UserFashionStyle findFirst
   */
  export type UserFashionStyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter, which UserFashionStyle to fetch.
     */
    where?: UserFashionStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFashionStyles to fetch.
     */
    orderBy?: UserFashionStyleOrderByWithRelationInput | UserFashionStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFashionStyles.
     */
    cursor?: UserFashionStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFashionStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFashionStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFashionStyles.
     */
    distinct?: UserFashionStyleScalarFieldEnum | UserFashionStyleScalarFieldEnum[]
  }

  /**
   * UserFashionStyle findFirstOrThrow
   */
  export type UserFashionStyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter, which UserFashionStyle to fetch.
     */
    where?: UserFashionStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFashionStyles to fetch.
     */
    orderBy?: UserFashionStyleOrderByWithRelationInput | UserFashionStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFashionStyles.
     */
    cursor?: UserFashionStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFashionStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFashionStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFashionStyles.
     */
    distinct?: UserFashionStyleScalarFieldEnum | UserFashionStyleScalarFieldEnum[]
  }

  /**
   * UserFashionStyle findMany
   */
  export type UserFashionStyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter, which UserFashionStyles to fetch.
     */
    where?: UserFashionStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFashionStyles to fetch.
     */
    orderBy?: UserFashionStyleOrderByWithRelationInput | UserFashionStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFashionStyles.
     */
    cursor?: UserFashionStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFashionStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFashionStyles.
     */
    skip?: number
    distinct?: UserFashionStyleScalarFieldEnum | UserFashionStyleScalarFieldEnum[]
  }

  /**
   * UserFashionStyle create
   */
  export type UserFashionStyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFashionStyle.
     */
    data: XOR<UserFashionStyleCreateInput, UserFashionStyleUncheckedCreateInput>
  }

  /**
   * UserFashionStyle createMany
   */
  export type UserFashionStyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFashionStyles.
     */
    data: UserFashionStyleCreateManyInput | UserFashionStyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFashionStyle createManyAndReturn
   */
  export type UserFashionStyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * The data used to create many UserFashionStyles.
     */
    data: UserFashionStyleCreateManyInput | UserFashionStyleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFashionStyle update
   */
  export type UserFashionStyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFashionStyle.
     */
    data: XOR<UserFashionStyleUpdateInput, UserFashionStyleUncheckedUpdateInput>
    /**
     * Choose, which UserFashionStyle to update.
     */
    where: UserFashionStyleWhereUniqueInput
  }

  /**
   * UserFashionStyle updateMany
   */
  export type UserFashionStyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFashionStyles.
     */
    data: XOR<UserFashionStyleUpdateManyMutationInput, UserFashionStyleUncheckedUpdateManyInput>
    /**
     * Filter which UserFashionStyles to update
     */
    where?: UserFashionStyleWhereInput
    /**
     * Limit how many UserFashionStyles to update.
     */
    limit?: number
  }

  /**
   * UserFashionStyle updateManyAndReturn
   */
  export type UserFashionStyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * The data used to update UserFashionStyles.
     */
    data: XOR<UserFashionStyleUpdateManyMutationInput, UserFashionStyleUncheckedUpdateManyInput>
    /**
     * Filter which UserFashionStyles to update
     */
    where?: UserFashionStyleWhereInput
    /**
     * Limit how many UserFashionStyles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFashionStyle upsert
   */
  export type UserFashionStyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFashionStyle to update in case it exists.
     */
    where: UserFashionStyleWhereUniqueInput
    /**
     * In case the UserFashionStyle found by the `where` argument doesn't exist, create a new UserFashionStyle with this data.
     */
    create: XOR<UserFashionStyleCreateInput, UserFashionStyleUncheckedCreateInput>
    /**
     * In case the UserFashionStyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFashionStyleUpdateInput, UserFashionStyleUncheckedUpdateInput>
  }

  /**
   * UserFashionStyle delete
   */
  export type UserFashionStyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
    /**
     * Filter which UserFashionStyle to delete.
     */
    where: UserFashionStyleWhereUniqueInput
  }

  /**
   * UserFashionStyle deleteMany
   */
  export type UserFashionStyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFashionStyles to delete
     */
    where?: UserFashionStyleWhereInput
    /**
     * Limit how many UserFashionStyles to delete.
     */
    limit?: number
  }

  /**
   * UserFashionStyle without action
   */
  export type UserFashionStyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFashionStyle
     */
    select?: UserFashionStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFashionStyle
     */
    omit?: UserFashionStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFashionStyleInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    providerId: number
    accessToken: number
    refreshToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    idToken: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "providerId" | "accessToken" | "refreshToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "idToken" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      idToken: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    verificationType: string | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    verificationType: string | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    verificationType: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    verificationType?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    verificationType?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    verificationType?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    verificationType: string
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationType?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationType?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationType?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationType?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt" | "verificationType", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      verificationType: string
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
    readonly verificationType: FieldRef<"Verification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model ColorPreference
   */

  export type AggregateColorPreference = {
    _count: ColorPreferenceCountAggregateOutputType | null
    _avg: ColorPreferenceAvgAggregateOutputType | null
    _sum: ColorPreferenceSumAggregateOutputType | null
    _min: ColorPreferenceMinAggregateOutputType | null
    _max: ColorPreferenceMaxAggregateOutputType | null
  }

  export type ColorPreferenceAvgAggregateOutputType = {
    id: number | null
  }

  export type ColorPreferenceSumAggregateOutputType = {
    id: number | null
  }

  export type ColorPreferenceMinAggregateOutputType = {
    id: number | null
    colorName: string | null
    hexCode: string | null
    shortDescription: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type ColorPreferenceMaxAggregateOutputType = {
    id: number | null
    colorName: string | null
    hexCode: string | null
    shortDescription: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type ColorPreferenceCountAggregateOutputType = {
    id: number
    colorName: number
    hexCode: number
    shortDescription: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type ColorPreferenceAvgAggregateInputType = {
    id?: true
  }

  export type ColorPreferenceSumAggregateInputType = {
    id?: true
  }

  export type ColorPreferenceMinAggregateInputType = {
    id?: true
    colorName?: true
    hexCode?: true
    shortDescription?: true
    createdAt?: true
    isActive?: true
  }

  export type ColorPreferenceMaxAggregateInputType = {
    id?: true
    colorName?: true
    hexCode?: true
    shortDescription?: true
    createdAt?: true
    isActive?: true
  }

  export type ColorPreferenceCountAggregateInputType = {
    id?: true
    colorName?: true
    hexCode?: true
    shortDescription?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type ColorPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorPreference to aggregate.
     */
    where?: ColorPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorPreferences to fetch.
     */
    orderBy?: ColorPreferenceOrderByWithRelationInput | ColorPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColorPreferences
    **/
    _count?: true | ColorPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorPreferenceMaxAggregateInputType
  }

  export type GetColorPreferenceAggregateType<T extends ColorPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateColorPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColorPreference[P]>
      : GetScalarType<T[P], AggregateColorPreference[P]>
  }




  export type ColorPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorPreferenceWhereInput
    orderBy?: ColorPreferenceOrderByWithAggregationInput | ColorPreferenceOrderByWithAggregationInput[]
    by: ColorPreferenceScalarFieldEnum[] | ColorPreferenceScalarFieldEnum
    having?: ColorPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorPreferenceCountAggregateInputType | true
    _avg?: ColorPreferenceAvgAggregateInputType
    _sum?: ColorPreferenceSumAggregateInputType
    _min?: ColorPreferenceMinAggregateInputType
    _max?: ColorPreferenceMaxAggregateInputType
  }

  export type ColorPreferenceGroupByOutputType = {
    id: number
    colorName: string
    hexCode: string | null
    shortDescription: string | null
    createdAt: Date
    isActive: boolean
    _count: ColorPreferenceCountAggregateOutputType | null
    _avg: ColorPreferenceAvgAggregateOutputType | null
    _sum: ColorPreferenceSumAggregateOutputType | null
    _min: ColorPreferenceMinAggregateOutputType | null
    _max: ColorPreferenceMaxAggregateOutputType | null
  }

  type GetColorPreferenceGroupByPayload<T extends ColorPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ColorPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type ColorPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorName?: boolean
    hexCode?: boolean
    shortDescription?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["colorPreference"]>

  export type ColorPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorName?: boolean
    hexCode?: boolean
    shortDescription?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["colorPreference"]>

  export type ColorPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorName?: boolean
    hexCode?: boolean
    shortDescription?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["colorPreference"]>

  export type ColorPreferenceSelectScalar = {
    id?: boolean
    colorName?: boolean
    hexCode?: boolean
    shortDescription?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type ColorPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colorName" | "hexCode" | "shortDescription" | "createdAt" | "isActive", ExtArgs["result"]["colorPreference"]>

  export type $ColorPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColorPreference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      colorName: string
      hexCode: string | null
      shortDescription: string | null
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["colorPreference"]>
    composites: {}
  }

  type ColorPreferenceGetPayload<S extends boolean | null | undefined | ColorPreferenceDefaultArgs> = $Result.GetResult<Prisma.$ColorPreferencePayload, S>

  type ColorPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorPreferenceCountAggregateInputType | true
    }

  export interface ColorPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColorPreference'], meta: { name: 'ColorPreference' } }
    /**
     * Find zero or one ColorPreference that matches the filter.
     * @param {ColorPreferenceFindUniqueArgs} args - Arguments to find a ColorPreference
     * @example
     * // Get one ColorPreference
     * const colorPreference = await prisma.colorPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorPreferenceFindUniqueArgs>(args: SelectSubset<T, ColorPreferenceFindUniqueArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColorPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorPreferenceFindUniqueOrThrowArgs} args - Arguments to find a ColorPreference
     * @example
     * // Get one ColorPreference
     * const colorPreference = await prisma.colorPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceFindFirstArgs} args - Arguments to find a ColorPreference
     * @example
     * // Get one ColorPreference
     * const colorPreference = await prisma.colorPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorPreferenceFindFirstArgs>(args?: SelectSubset<T, ColorPreferenceFindFirstArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceFindFirstOrThrowArgs} args - Arguments to find a ColorPreference
     * @example
     * // Get one ColorPreference
     * const colorPreference = await prisma.colorPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColorPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColorPreferences
     * const colorPreferences = await prisma.colorPreference.findMany()
     * 
     * // Get first 10 ColorPreferences
     * const colorPreferences = await prisma.colorPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorPreferenceWithIdOnly = await prisma.colorPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorPreferenceFindManyArgs>(args?: SelectSubset<T, ColorPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColorPreference.
     * @param {ColorPreferenceCreateArgs} args - Arguments to create a ColorPreference.
     * @example
     * // Create one ColorPreference
     * const ColorPreference = await prisma.colorPreference.create({
     *   data: {
     *     // ... data to create a ColorPreference
     *   }
     * })
     * 
     */
    create<T extends ColorPreferenceCreateArgs>(args: SelectSubset<T, ColorPreferenceCreateArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColorPreferences.
     * @param {ColorPreferenceCreateManyArgs} args - Arguments to create many ColorPreferences.
     * @example
     * // Create many ColorPreferences
     * const colorPreference = await prisma.colorPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorPreferenceCreateManyArgs>(args?: SelectSubset<T, ColorPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColorPreferences and returns the data saved in the database.
     * @param {ColorPreferenceCreateManyAndReturnArgs} args - Arguments to create many ColorPreferences.
     * @example
     * // Create many ColorPreferences
     * const colorPreference = await prisma.colorPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColorPreferences and only return the `id`
     * const colorPreferenceWithIdOnly = await prisma.colorPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColorPreference.
     * @param {ColorPreferenceDeleteArgs} args - Arguments to delete one ColorPreference.
     * @example
     * // Delete one ColorPreference
     * const ColorPreference = await prisma.colorPreference.delete({
     *   where: {
     *     // ... filter to delete one ColorPreference
     *   }
     * })
     * 
     */
    delete<T extends ColorPreferenceDeleteArgs>(args: SelectSubset<T, ColorPreferenceDeleteArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColorPreference.
     * @param {ColorPreferenceUpdateArgs} args - Arguments to update one ColorPreference.
     * @example
     * // Update one ColorPreference
     * const colorPreference = await prisma.colorPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorPreferenceUpdateArgs>(args: SelectSubset<T, ColorPreferenceUpdateArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColorPreferences.
     * @param {ColorPreferenceDeleteManyArgs} args - Arguments to filter ColorPreferences to delete.
     * @example
     * // Delete a few ColorPreferences
     * const { count } = await prisma.colorPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorPreferenceDeleteManyArgs>(args?: SelectSubset<T, ColorPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColorPreferences
     * const colorPreference = await prisma.colorPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorPreferenceUpdateManyArgs>(args: SelectSubset<T, ColorPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorPreferences and returns the data updated in the database.
     * @param {ColorPreferenceUpdateManyAndReturnArgs} args - Arguments to update many ColorPreferences.
     * @example
     * // Update many ColorPreferences
     * const colorPreference = await prisma.colorPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColorPreferences and only return the `id`
     * const colorPreferenceWithIdOnly = await prisma.colorPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColorPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColorPreference.
     * @param {ColorPreferenceUpsertArgs} args - Arguments to update or create a ColorPreference.
     * @example
     * // Update or create a ColorPreference
     * const colorPreference = await prisma.colorPreference.upsert({
     *   create: {
     *     // ... data to create a ColorPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColorPreference we want to update
     *   }
     * })
     */
    upsert<T extends ColorPreferenceUpsertArgs>(args: SelectSubset<T, ColorPreferenceUpsertArgs<ExtArgs>>): Prisma__ColorPreferenceClient<$Result.GetResult<Prisma.$ColorPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColorPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceCountArgs} args - Arguments to filter ColorPreferences to count.
     * @example
     * // Count the number of ColorPreferences
     * const count = await prisma.colorPreference.count({
     *   where: {
     *     // ... the filter for the ColorPreferences we want to count
     *   }
     * })
    **/
    count<T extends ColorPreferenceCountArgs>(
      args?: Subset<T, ColorPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColorPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColorPreferenceAggregateArgs>(args: Subset<T, ColorPreferenceAggregateArgs>): Prisma.PrismaPromise<GetColorPreferenceAggregateType<T>>

    /**
     * Group by ColorPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorPreferenceGroupByArgs} args - Group by arguments.
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
      T extends ColorPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: ColorPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColorPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColorPreference model
   */
  readonly fields: ColorPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColorPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ColorPreference model
   */
  interface ColorPreferenceFieldRefs {
    readonly id: FieldRef<"ColorPreference", 'Int'>
    readonly colorName: FieldRef<"ColorPreference", 'String'>
    readonly hexCode: FieldRef<"ColorPreference", 'String'>
    readonly shortDescription: FieldRef<"ColorPreference", 'String'>
    readonly createdAt: FieldRef<"ColorPreference", 'DateTime'>
    readonly isActive: FieldRef<"ColorPreference", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ColorPreference findUnique
   */
  export type ColorPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which ColorPreference to fetch.
     */
    where: ColorPreferenceWhereUniqueInput
  }

  /**
   * ColorPreference findUniqueOrThrow
   */
  export type ColorPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which ColorPreference to fetch.
     */
    where: ColorPreferenceWhereUniqueInput
  }

  /**
   * ColorPreference findFirst
   */
  export type ColorPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which ColorPreference to fetch.
     */
    where?: ColorPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorPreferences to fetch.
     */
    orderBy?: ColorPreferenceOrderByWithRelationInput | ColorPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorPreferences.
     */
    cursor?: ColorPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorPreferences.
     */
    distinct?: ColorPreferenceScalarFieldEnum | ColorPreferenceScalarFieldEnum[]
  }

  /**
   * ColorPreference findFirstOrThrow
   */
  export type ColorPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which ColorPreference to fetch.
     */
    where?: ColorPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorPreferences to fetch.
     */
    orderBy?: ColorPreferenceOrderByWithRelationInput | ColorPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorPreferences.
     */
    cursor?: ColorPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorPreferences.
     */
    distinct?: ColorPreferenceScalarFieldEnum | ColorPreferenceScalarFieldEnum[]
  }

  /**
   * ColorPreference findMany
   */
  export type ColorPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter, which ColorPreferences to fetch.
     */
    where?: ColorPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorPreferences to fetch.
     */
    orderBy?: ColorPreferenceOrderByWithRelationInput | ColorPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColorPreferences.
     */
    cursor?: ColorPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorPreferences.
     */
    skip?: number
    distinct?: ColorPreferenceScalarFieldEnum | ColorPreferenceScalarFieldEnum[]
  }

  /**
   * ColorPreference create
   */
  export type ColorPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a ColorPreference.
     */
    data: XOR<ColorPreferenceCreateInput, ColorPreferenceUncheckedCreateInput>
  }

  /**
   * ColorPreference createMany
   */
  export type ColorPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColorPreferences.
     */
    data: ColorPreferenceCreateManyInput | ColorPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColorPreference createManyAndReturn
   */
  export type ColorPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many ColorPreferences.
     */
    data: ColorPreferenceCreateManyInput | ColorPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColorPreference update
   */
  export type ColorPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a ColorPreference.
     */
    data: XOR<ColorPreferenceUpdateInput, ColorPreferenceUncheckedUpdateInput>
    /**
     * Choose, which ColorPreference to update.
     */
    where: ColorPreferenceWhereUniqueInput
  }

  /**
   * ColorPreference updateMany
   */
  export type ColorPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColorPreferences.
     */
    data: XOR<ColorPreferenceUpdateManyMutationInput, ColorPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which ColorPreferences to update
     */
    where?: ColorPreferenceWhereInput
    /**
     * Limit how many ColorPreferences to update.
     */
    limit?: number
  }

  /**
   * ColorPreference updateManyAndReturn
   */
  export type ColorPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update ColorPreferences.
     */
    data: XOR<ColorPreferenceUpdateManyMutationInput, ColorPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which ColorPreferences to update
     */
    where?: ColorPreferenceWhereInput
    /**
     * Limit how many ColorPreferences to update.
     */
    limit?: number
  }

  /**
   * ColorPreference upsert
   */
  export type ColorPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the ColorPreference to update in case it exists.
     */
    where: ColorPreferenceWhereUniqueInput
    /**
     * In case the ColorPreference found by the `where` argument doesn't exist, create a new ColorPreference with this data.
     */
    create: XOR<ColorPreferenceCreateInput, ColorPreferenceUncheckedCreateInput>
    /**
     * In case the ColorPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorPreferenceUpdateInput, ColorPreferenceUncheckedUpdateInput>
  }

  /**
   * ColorPreference delete
   */
  export type ColorPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
    /**
     * Filter which ColorPreference to delete.
     */
    where: ColorPreferenceWhereUniqueInput
  }

  /**
   * ColorPreference deleteMany
   */
  export type ColorPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorPreferences to delete
     */
    where?: ColorPreferenceWhereInput
    /**
     * Limit how many ColorPreferences to delete.
     */
    limit?: number
  }

  /**
   * ColorPreference without action
   */
  export type ColorPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorPreference
     */
    select?: ColorPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorPreference
     */
    omit?: ColorPreferenceOmit<ExtArgs> | null
  }


  /**
   * Model OutfitCategory
   */

  export type AggregateOutfitCategory = {
    _count: OutfitCategoryCountAggregateOutputType | null
    _avg: OutfitCategoryAvgAggregateOutputType | null
    _sum: OutfitCategorySumAggregateOutputType | null
    _min: OutfitCategoryMinAggregateOutputType | null
    _max: OutfitCategoryMaxAggregateOutputType | null
  }

  export type OutfitCategoryAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type OutfitCategorySumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type OutfitCategoryMinAggregateOutputType = {
    id: number | null
    categoryName: string | null
    description: string | null
    displayOrder: number | null
  }

  export type OutfitCategoryMaxAggregateOutputType = {
    id: number | null
    categoryName: string | null
    description: string | null
    displayOrder: number | null
  }

  export type OutfitCategoryCountAggregateOutputType = {
    id: number
    categoryName: number
    description: number
    displayOrder: number
    _all: number
  }


  export type OutfitCategoryAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type OutfitCategorySumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type OutfitCategoryMinAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
    displayOrder?: true
  }

  export type OutfitCategoryMaxAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
    displayOrder?: true
  }

  export type OutfitCategoryCountAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
    displayOrder?: true
    _all?: true
  }

  export type OutfitCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitCategory to aggregate.
     */
    where?: OutfitCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCategories to fetch.
     */
    orderBy?: OutfitCategoryOrderByWithRelationInput | OutfitCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitCategories
    **/
    _count?: true | OutfitCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutfitCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutfitCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitCategoryMaxAggregateInputType
  }

  export type GetOutfitCategoryAggregateType<T extends OutfitCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitCategory[P]>
      : GetScalarType<T[P], AggregateOutfitCategory[P]>
  }




  export type OutfitCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitCategoryWhereInput
    orderBy?: OutfitCategoryOrderByWithAggregationInput | OutfitCategoryOrderByWithAggregationInput[]
    by: OutfitCategoryScalarFieldEnum[] | OutfitCategoryScalarFieldEnum
    having?: OutfitCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitCategoryCountAggregateInputType | true
    _avg?: OutfitCategoryAvgAggregateInputType
    _sum?: OutfitCategorySumAggregateInputType
    _min?: OutfitCategoryMinAggregateInputType
    _max?: OutfitCategoryMaxAggregateInputType
  }

  export type OutfitCategoryGroupByOutputType = {
    id: number
    categoryName: string
    description: string | null
    displayOrder: number
    _count: OutfitCategoryCountAggregateOutputType | null
    _avg: OutfitCategoryAvgAggregateOutputType | null
    _sum: OutfitCategorySumAggregateOutputType | null
    _min: OutfitCategoryMinAggregateOutputType | null
    _max: OutfitCategoryMaxAggregateOutputType | null
  }

  type GetOutfitCategoryGroupByPayload<T extends OutfitCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitCategoryGroupByOutputType[P]>
        }
      >
    >


  export type OutfitCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
    displayOrder?: boolean
    elements?: boolean | OutfitCategory$elementsArgs<ExtArgs>
    _count?: boolean | OutfitCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitCategory"]>

  export type OutfitCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["outfitCategory"]>

  export type OutfitCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["outfitCategory"]>

  export type OutfitCategorySelectScalar = {
    id?: boolean
    categoryName?: boolean
    description?: boolean
    displayOrder?: boolean
  }

  export type OutfitCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "description" | "displayOrder", ExtArgs["result"]["outfitCategory"]>
  export type OutfitCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elements?: boolean | OutfitCategory$elementsArgs<ExtArgs>
    _count?: boolean | OutfitCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutfitCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OutfitCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OutfitCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitCategory"
    objects: {
      elements: Prisma.$OutfitElementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryName: string
      description: string | null
      displayOrder: number
    }, ExtArgs["result"]["outfitCategory"]>
    composites: {}
  }

  type OutfitCategoryGetPayload<S extends boolean | null | undefined | OutfitCategoryDefaultArgs> = $Result.GetResult<Prisma.$OutfitCategoryPayload, S>

  type OutfitCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitCategoryCountAggregateInputType | true
    }

  export interface OutfitCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitCategory'], meta: { name: 'OutfitCategory' } }
    /**
     * Find zero or one OutfitCategory that matches the filter.
     * @param {OutfitCategoryFindUniqueArgs} args - Arguments to find a OutfitCategory
     * @example
     * // Get one OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitCategoryFindUniqueArgs>(args: SelectSubset<T, OutfitCategoryFindUniqueArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitCategoryFindUniqueOrThrowArgs} args - Arguments to find a OutfitCategory
     * @example
     * // Get one OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryFindFirstArgs} args - Arguments to find a OutfitCategory
     * @example
     * // Get one OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitCategoryFindFirstArgs>(args?: SelectSubset<T, OutfitCategoryFindFirstArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryFindFirstOrThrowArgs} args - Arguments to find a OutfitCategory
     * @example
     * // Get one OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitCategories
     * const outfitCategories = await prisma.outfitCategory.findMany()
     * 
     * // Get first 10 OutfitCategories
     * const outfitCategories = await prisma.outfitCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitCategoryWithIdOnly = await prisma.outfitCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitCategoryFindManyArgs>(args?: SelectSubset<T, OutfitCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitCategory.
     * @param {OutfitCategoryCreateArgs} args - Arguments to create a OutfitCategory.
     * @example
     * // Create one OutfitCategory
     * const OutfitCategory = await prisma.outfitCategory.create({
     *   data: {
     *     // ... data to create a OutfitCategory
     *   }
     * })
     * 
     */
    create<T extends OutfitCategoryCreateArgs>(args: SelectSubset<T, OutfitCategoryCreateArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitCategories.
     * @param {OutfitCategoryCreateManyArgs} args - Arguments to create many OutfitCategories.
     * @example
     * // Create many OutfitCategories
     * const outfitCategory = await prisma.outfitCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitCategoryCreateManyArgs>(args?: SelectSubset<T, OutfitCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitCategories and returns the data saved in the database.
     * @param {OutfitCategoryCreateManyAndReturnArgs} args - Arguments to create many OutfitCategories.
     * @example
     * // Create many OutfitCategories
     * const outfitCategory = await prisma.outfitCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitCategories and only return the `id`
     * const outfitCategoryWithIdOnly = await prisma.outfitCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitCategory.
     * @param {OutfitCategoryDeleteArgs} args - Arguments to delete one OutfitCategory.
     * @example
     * // Delete one OutfitCategory
     * const OutfitCategory = await prisma.outfitCategory.delete({
     *   where: {
     *     // ... filter to delete one OutfitCategory
     *   }
     * })
     * 
     */
    delete<T extends OutfitCategoryDeleteArgs>(args: SelectSubset<T, OutfitCategoryDeleteArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitCategory.
     * @param {OutfitCategoryUpdateArgs} args - Arguments to update one OutfitCategory.
     * @example
     * // Update one OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitCategoryUpdateArgs>(args: SelectSubset<T, OutfitCategoryUpdateArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitCategories.
     * @param {OutfitCategoryDeleteManyArgs} args - Arguments to filter OutfitCategories to delete.
     * @example
     * // Delete a few OutfitCategories
     * const { count } = await prisma.outfitCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitCategoryDeleteManyArgs>(args?: SelectSubset<T, OutfitCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitCategories
     * const outfitCategory = await prisma.outfitCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitCategoryUpdateManyArgs>(args: SelectSubset<T, OutfitCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitCategories and returns the data updated in the database.
     * @param {OutfitCategoryUpdateManyAndReturnArgs} args - Arguments to update many OutfitCategories.
     * @example
     * // Update many OutfitCategories
     * const outfitCategory = await prisma.outfitCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitCategories and only return the `id`
     * const outfitCategoryWithIdOnly = await prisma.outfitCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutfitCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitCategory.
     * @param {OutfitCategoryUpsertArgs} args - Arguments to update or create a OutfitCategory.
     * @example
     * // Update or create a OutfitCategory
     * const outfitCategory = await prisma.outfitCategory.upsert({
     *   create: {
     *     // ... data to create a OutfitCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitCategory we want to update
     *   }
     * })
     */
    upsert<T extends OutfitCategoryUpsertArgs>(args: SelectSubset<T, OutfitCategoryUpsertArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryCountArgs} args - Arguments to filter OutfitCategories to count.
     * @example
     * // Count the number of OutfitCategories
     * const count = await prisma.outfitCategory.count({
     *   where: {
     *     // ... the filter for the OutfitCategories we want to count
     *   }
     * })
    **/
    count<T extends OutfitCategoryCountArgs>(
      args?: Subset<T, OutfitCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitCategoryAggregateArgs>(args: Subset<T, OutfitCategoryAggregateArgs>): Prisma.PrismaPromise<GetOutfitCategoryAggregateType<T>>

    /**
     * Group by OutfitCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitCategoryGroupByArgs} args - Group by arguments.
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
      T extends OutfitCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitCategoryGroupByArgs['orderBy'] }
        : { orderBy?: OutfitCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutfitCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitCategory model
   */
  readonly fields: OutfitCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elements<T extends OutfitCategory$elementsArgs<ExtArgs> = {}>(args?: Subset<T, OutfitCategory$elementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OutfitCategory model
   */
  interface OutfitCategoryFieldRefs {
    readonly id: FieldRef<"OutfitCategory", 'Int'>
    readonly categoryName: FieldRef<"OutfitCategory", 'String'>
    readonly description: FieldRef<"OutfitCategory", 'String'>
    readonly displayOrder: FieldRef<"OutfitCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OutfitCategory findUnique
   */
  export type OutfitCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCategory to fetch.
     */
    where: OutfitCategoryWhereUniqueInput
  }

  /**
   * OutfitCategory findUniqueOrThrow
   */
  export type OutfitCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCategory to fetch.
     */
    where: OutfitCategoryWhereUniqueInput
  }

  /**
   * OutfitCategory findFirst
   */
  export type OutfitCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCategory to fetch.
     */
    where?: OutfitCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCategories to fetch.
     */
    orderBy?: OutfitCategoryOrderByWithRelationInput | OutfitCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitCategories.
     */
    cursor?: OutfitCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitCategories.
     */
    distinct?: OutfitCategoryScalarFieldEnum | OutfitCategoryScalarFieldEnum[]
  }

  /**
   * OutfitCategory findFirstOrThrow
   */
  export type OutfitCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCategory to fetch.
     */
    where?: OutfitCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCategories to fetch.
     */
    orderBy?: OutfitCategoryOrderByWithRelationInput | OutfitCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitCategories.
     */
    cursor?: OutfitCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitCategories.
     */
    distinct?: OutfitCategoryScalarFieldEnum | OutfitCategoryScalarFieldEnum[]
  }

  /**
   * OutfitCategory findMany
   */
  export type OutfitCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter, which OutfitCategories to fetch.
     */
    where?: OutfitCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitCategories to fetch.
     */
    orderBy?: OutfitCategoryOrderByWithRelationInput | OutfitCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitCategories.
     */
    cursor?: OutfitCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitCategories.
     */
    skip?: number
    distinct?: OutfitCategoryScalarFieldEnum | OutfitCategoryScalarFieldEnum[]
  }

  /**
   * OutfitCategory create
   */
  export type OutfitCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitCategory.
     */
    data: XOR<OutfitCategoryCreateInput, OutfitCategoryUncheckedCreateInput>
  }

  /**
   * OutfitCategory createMany
   */
  export type OutfitCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitCategories.
     */
    data: OutfitCategoryCreateManyInput | OutfitCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitCategory createManyAndReturn
   */
  export type OutfitCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitCategories.
     */
    data: OutfitCategoryCreateManyInput | OutfitCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitCategory update
   */
  export type OutfitCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitCategory.
     */
    data: XOR<OutfitCategoryUpdateInput, OutfitCategoryUncheckedUpdateInput>
    /**
     * Choose, which OutfitCategory to update.
     */
    where: OutfitCategoryWhereUniqueInput
  }

  /**
   * OutfitCategory updateMany
   */
  export type OutfitCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitCategories.
     */
    data: XOR<OutfitCategoryUpdateManyMutationInput, OutfitCategoryUncheckedUpdateManyInput>
    /**
     * Filter which OutfitCategories to update
     */
    where?: OutfitCategoryWhereInput
    /**
     * Limit how many OutfitCategories to update.
     */
    limit?: number
  }

  /**
   * OutfitCategory updateManyAndReturn
   */
  export type OutfitCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * The data used to update OutfitCategories.
     */
    data: XOR<OutfitCategoryUpdateManyMutationInput, OutfitCategoryUncheckedUpdateManyInput>
    /**
     * Filter which OutfitCategories to update
     */
    where?: OutfitCategoryWhereInput
    /**
     * Limit how many OutfitCategories to update.
     */
    limit?: number
  }

  /**
   * OutfitCategory upsert
   */
  export type OutfitCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitCategory to update in case it exists.
     */
    where: OutfitCategoryWhereUniqueInput
    /**
     * In case the OutfitCategory found by the `where` argument doesn't exist, create a new OutfitCategory with this data.
     */
    create: XOR<OutfitCategoryCreateInput, OutfitCategoryUncheckedCreateInput>
    /**
     * In case the OutfitCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitCategoryUpdateInput, OutfitCategoryUncheckedUpdateInput>
  }

  /**
   * OutfitCategory delete
   */
  export type OutfitCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
    /**
     * Filter which OutfitCategory to delete.
     */
    where: OutfitCategoryWhereUniqueInput
  }

  /**
   * OutfitCategory deleteMany
   */
  export type OutfitCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitCategories to delete
     */
    where?: OutfitCategoryWhereInput
    /**
     * Limit how many OutfitCategories to delete.
     */
    limit?: number
  }

  /**
   * OutfitCategory.elements
   */
  export type OutfitCategory$elementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    where?: OutfitElementsWhereInput
    orderBy?: OutfitElementsOrderByWithRelationInput | OutfitElementsOrderByWithRelationInput[]
    cursor?: OutfitElementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutfitElementsScalarFieldEnum | OutfitElementsScalarFieldEnum[]
  }

  /**
   * OutfitCategory without action
   */
  export type OutfitCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitCategory
     */
    select?: OutfitCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitCategory
     */
    omit?: OutfitCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitCategoryInclude<ExtArgs> | null
  }


  /**
   * Model OutfitElements
   */

  export type AggregateOutfitElements = {
    _count: OutfitElementsCountAggregateOutputType | null
    _avg: OutfitElementsAvgAggregateOutputType | null
    _sum: OutfitElementsSumAggregateOutputType | null
    _min: OutfitElementsMinAggregateOutputType | null
    _max: OutfitElementsMaxAggregateOutputType | null
  }

  export type OutfitElementsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    formalityLevel: number | null
  }

  export type OutfitElementsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    formalityLevel: number | null
  }

  export type OutfitElementsMinAggregateOutputType = {
    id: number | null
    gender: $Enums.Gender | null
    categoryId: number | null
    elementName: string | null
    brandName: string | null
    priceRange: $Enums.PriceRange | null
    materialType: string | null
    careInstructions: string | null
    formalityLevel: number | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type OutfitElementsMaxAggregateOutputType = {
    id: number | null
    gender: $Enums.Gender | null
    categoryId: number | null
    elementName: string | null
    brandName: string | null
    priceRange: $Enums.PriceRange | null
    materialType: string | null
    careInstructions: string | null
    formalityLevel: number | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type OutfitElementsCountAggregateOutputType = {
    id: number
    gender: number
    categoryId: number
    elementName: number
    brandName: number
    priceRange: number
    materialType: number
    careInstructions: number
    seasonSuitability: number
    formalityLevel: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type OutfitElementsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    formalityLevel?: true
  }

  export type OutfitElementsSumAggregateInputType = {
    id?: true
    categoryId?: true
    formalityLevel?: true
  }

  export type OutfitElementsMinAggregateInputType = {
    id?: true
    gender?: true
    categoryId?: true
    elementName?: true
    brandName?: true
    priceRange?: true
    materialType?: true
    careInstructions?: true
    formalityLevel?: true
    createdAt?: true
    isActive?: true
  }

  export type OutfitElementsMaxAggregateInputType = {
    id?: true
    gender?: true
    categoryId?: true
    elementName?: true
    brandName?: true
    priceRange?: true
    materialType?: true
    careInstructions?: true
    formalityLevel?: true
    createdAt?: true
    isActive?: true
  }

  export type OutfitElementsCountAggregateInputType = {
    id?: true
    gender?: true
    categoryId?: true
    elementName?: true
    brandName?: true
    priceRange?: true
    materialType?: true
    careInstructions?: true
    seasonSuitability?: true
    formalityLevel?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type OutfitElementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitElements to aggregate.
     */
    where?: OutfitElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitElements to fetch.
     */
    orderBy?: OutfitElementsOrderByWithRelationInput | OutfitElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitElements
    **/
    _count?: true | OutfitElementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutfitElementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutfitElementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitElementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitElementsMaxAggregateInputType
  }

  export type GetOutfitElementsAggregateType<T extends OutfitElementsAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitElements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitElements[P]>
      : GetScalarType<T[P], AggregateOutfitElements[P]>
  }




  export type OutfitElementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitElementsWhereInput
    orderBy?: OutfitElementsOrderByWithAggregationInput | OutfitElementsOrderByWithAggregationInput[]
    by: OutfitElementsScalarFieldEnum[] | OutfitElementsScalarFieldEnum
    having?: OutfitElementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitElementsCountAggregateInputType | true
    _avg?: OutfitElementsAvgAggregateInputType
    _sum?: OutfitElementsSumAggregateInputType
    _min?: OutfitElementsMinAggregateInputType
    _max?: OutfitElementsMaxAggregateInputType
  }

  export type OutfitElementsGroupByOutputType = {
    id: number
    gender: $Enums.Gender
    categoryId: number
    elementName: string
    brandName: string | null
    priceRange: $Enums.PriceRange | null
    materialType: string | null
    careInstructions: string | null
    seasonSuitability: string[]
    formalityLevel: number
    createdAt: Date
    isActive: boolean
    _count: OutfitElementsCountAggregateOutputType | null
    _avg: OutfitElementsAvgAggregateOutputType | null
    _sum: OutfitElementsSumAggregateOutputType | null
    _min: OutfitElementsMinAggregateOutputType | null
    _max: OutfitElementsMaxAggregateOutputType | null
  }

  type GetOutfitElementsGroupByPayload<T extends OutfitElementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitElementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitElementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitElementsGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitElementsGroupByOutputType[P]>
        }
      >
    >


  export type OutfitElementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    categoryId?: boolean
    elementName?: boolean
    brandName?: boolean
    priceRange?: boolean
    materialType?: boolean
    careInstructions?: boolean
    seasonSuitability?: boolean
    formalityLevel?: boolean
    createdAt?: boolean
    isActive?: boolean
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
    favourites?: boolean | OutfitElements$favouritesArgs<ExtArgs>
    _count?: boolean | OutfitElementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitElements"]>

  export type OutfitElementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    categoryId?: boolean
    elementName?: boolean
    brandName?: boolean
    priceRange?: boolean
    materialType?: boolean
    careInstructions?: boolean
    seasonSuitability?: boolean
    formalityLevel?: boolean
    createdAt?: boolean
    isActive?: boolean
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitElements"]>

  export type OutfitElementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    categoryId?: boolean
    elementName?: boolean
    brandName?: boolean
    priceRange?: boolean
    materialType?: boolean
    careInstructions?: boolean
    seasonSuitability?: boolean
    formalityLevel?: boolean
    createdAt?: boolean
    isActive?: boolean
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitElements"]>

  export type OutfitElementsSelectScalar = {
    id?: boolean
    gender?: boolean
    categoryId?: boolean
    elementName?: boolean
    brandName?: boolean
    priceRange?: boolean
    materialType?: boolean
    careInstructions?: boolean
    seasonSuitability?: boolean
    formalityLevel?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type OutfitElementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gender" | "categoryId" | "elementName" | "brandName" | "priceRange" | "materialType" | "careInstructions" | "seasonSuitability" | "formalityLevel" | "createdAt" | "isActive", ExtArgs["result"]["outfitElements"]>
  export type OutfitElementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
    favourites?: boolean | OutfitElements$favouritesArgs<ExtArgs>
    _count?: boolean | OutfitElementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutfitElementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
  }
  export type OutfitElementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | OutfitCategoryDefaultArgs<ExtArgs>
  }

  export type $OutfitElementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitElements"
    objects: {
      category: Prisma.$OutfitCategoryPayload<ExtArgs>
      favourites: Prisma.$UserFavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gender: $Enums.Gender
      categoryId: number
      elementName: string
      brandName: string | null
      priceRange: $Enums.PriceRange | null
      materialType: string | null
      careInstructions: string | null
      seasonSuitability: string[]
      formalityLevel: number
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["outfitElements"]>
    composites: {}
  }

  type OutfitElementsGetPayload<S extends boolean | null | undefined | OutfitElementsDefaultArgs> = $Result.GetResult<Prisma.$OutfitElementsPayload, S>

  type OutfitElementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitElementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitElementsCountAggregateInputType | true
    }

  export interface OutfitElementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitElements'], meta: { name: 'OutfitElements' } }
    /**
     * Find zero or one OutfitElements that matches the filter.
     * @param {OutfitElementsFindUniqueArgs} args - Arguments to find a OutfitElements
     * @example
     * // Get one OutfitElements
     * const outfitElements = await prisma.outfitElements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitElementsFindUniqueArgs>(args: SelectSubset<T, OutfitElementsFindUniqueArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitElements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitElementsFindUniqueOrThrowArgs} args - Arguments to find a OutfitElements
     * @example
     * // Get one OutfitElements
     * const outfitElements = await prisma.outfitElements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitElementsFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitElementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsFindFirstArgs} args - Arguments to find a OutfitElements
     * @example
     * // Get one OutfitElements
     * const outfitElements = await prisma.outfitElements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitElementsFindFirstArgs>(args?: SelectSubset<T, OutfitElementsFindFirstArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitElements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsFindFirstOrThrowArgs} args - Arguments to find a OutfitElements
     * @example
     * // Get one OutfitElements
     * const outfitElements = await prisma.outfitElements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitElementsFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitElementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitElements
     * const outfitElements = await prisma.outfitElements.findMany()
     * 
     * // Get first 10 OutfitElements
     * const outfitElements = await prisma.outfitElements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitElementsWithIdOnly = await prisma.outfitElements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitElementsFindManyArgs>(args?: SelectSubset<T, OutfitElementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitElements.
     * @param {OutfitElementsCreateArgs} args - Arguments to create a OutfitElements.
     * @example
     * // Create one OutfitElements
     * const OutfitElements = await prisma.outfitElements.create({
     *   data: {
     *     // ... data to create a OutfitElements
     *   }
     * })
     * 
     */
    create<T extends OutfitElementsCreateArgs>(args: SelectSubset<T, OutfitElementsCreateArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitElements.
     * @param {OutfitElementsCreateManyArgs} args - Arguments to create many OutfitElements.
     * @example
     * // Create many OutfitElements
     * const outfitElements = await prisma.outfitElements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitElementsCreateManyArgs>(args?: SelectSubset<T, OutfitElementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitElements and returns the data saved in the database.
     * @param {OutfitElementsCreateManyAndReturnArgs} args - Arguments to create many OutfitElements.
     * @example
     * // Create many OutfitElements
     * const outfitElements = await prisma.outfitElements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitElements and only return the `id`
     * const outfitElementsWithIdOnly = await prisma.outfitElements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitElementsCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitElementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitElements.
     * @param {OutfitElementsDeleteArgs} args - Arguments to delete one OutfitElements.
     * @example
     * // Delete one OutfitElements
     * const OutfitElements = await prisma.outfitElements.delete({
     *   where: {
     *     // ... filter to delete one OutfitElements
     *   }
     * })
     * 
     */
    delete<T extends OutfitElementsDeleteArgs>(args: SelectSubset<T, OutfitElementsDeleteArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitElements.
     * @param {OutfitElementsUpdateArgs} args - Arguments to update one OutfitElements.
     * @example
     * // Update one OutfitElements
     * const outfitElements = await prisma.outfitElements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitElementsUpdateArgs>(args: SelectSubset<T, OutfitElementsUpdateArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitElements.
     * @param {OutfitElementsDeleteManyArgs} args - Arguments to filter OutfitElements to delete.
     * @example
     * // Delete a few OutfitElements
     * const { count } = await prisma.outfitElements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitElementsDeleteManyArgs>(args?: SelectSubset<T, OutfitElementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitElements
     * const outfitElements = await prisma.outfitElements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitElementsUpdateManyArgs>(args: SelectSubset<T, OutfitElementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitElements and returns the data updated in the database.
     * @param {OutfitElementsUpdateManyAndReturnArgs} args - Arguments to update many OutfitElements.
     * @example
     * // Update many OutfitElements
     * const outfitElements = await prisma.outfitElements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitElements and only return the `id`
     * const outfitElementsWithIdOnly = await prisma.outfitElements.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutfitElementsUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitElementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitElements.
     * @param {OutfitElementsUpsertArgs} args - Arguments to update or create a OutfitElements.
     * @example
     * // Update or create a OutfitElements
     * const outfitElements = await prisma.outfitElements.upsert({
     *   create: {
     *     // ... data to create a OutfitElements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitElements we want to update
     *   }
     * })
     */
    upsert<T extends OutfitElementsUpsertArgs>(args: SelectSubset<T, OutfitElementsUpsertArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsCountArgs} args - Arguments to filter OutfitElements to count.
     * @example
     * // Count the number of OutfitElements
     * const count = await prisma.outfitElements.count({
     *   where: {
     *     // ... the filter for the OutfitElements we want to count
     *   }
     * })
    **/
    count<T extends OutfitElementsCountArgs>(
      args?: Subset<T, OutfitElementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitElementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitElementsAggregateArgs>(args: Subset<T, OutfitElementsAggregateArgs>): Prisma.PrismaPromise<GetOutfitElementsAggregateType<T>>

    /**
     * Group by OutfitElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitElementsGroupByArgs} args - Group by arguments.
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
      T extends OutfitElementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitElementsGroupByArgs['orderBy'] }
        : { orderBy?: OutfitElementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutfitElementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitElementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitElements model
   */
  readonly fields: OutfitElementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitElements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitElementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends OutfitCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutfitCategoryDefaultArgs<ExtArgs>>): Prisma__OutfitCategoryClient<$Result.GetResult<Prisma.$OutfitCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favourites<T extends OutfitElements$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, OutfitElements$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OutfitElements model
   */
  interface OutfitElementsFieldRefs {
    readonly id: FieldRef<"OutfitElements", 'Int'>
    readonly gender: FieldRef<"OutfitElements", 'Gender'>
    readonly categoryId: FieldRef<"OutfitElements", 'Int'>
    readonly elementName: FieldRef<"OutfitElements", 'String'>
    readonly brandName: FieldRef<"OutfitElements", 'String'>
    readonly priceRange: FieldRef<"OutfitElements", 'PriceRange'>
    readonly materialType: FieldRef<"OutfitElements", 'String'>
    readonly careInstructions: FieldRef<"OutfitElements", 'String'>
    readonly seasonSuitability: FieldRef<"OutfitElements", 'String[]'>
    readonly formalityLevel: FieldRef<"OutfitElements", 'Int'>
    readonly createdAt: FieldRef<"OutfitElements", 'DateTime'>
    readonly isActive: FieldRef<"OutfitElements", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OutfitElements findUnique
   */
  export type OutfitElementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter, which OutfitElements to fetch.
     */
    where: OutfitElementsWhereUniqueInput
  }

  /**
   * OutfitElements findUniqueOrThrow
   */
  export type OutfitElementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter, which OutfitElements to fetch.
     */
    where: OutfitElementsWhereUniqueInput
  }

  /**
   * OutfitElements findFirst
   */
  export type OutfitElementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter, which OutfitElements to fetch.
     */
    where?: OutfitElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitElements to fetch.
     */
    orderBy?: OutfitElementsOrderByWithRelationInput | OutfitElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitElements.
     */
    cursor?: OutfitElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitElements.
     */
    distinct?: OutfitElementsScalarFieldEnum | OutfitElementsScalarFieldEnum[]
  }

  /**
   * OutfitElements findFirstOrThrow
   */
  export type OutfitElementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter, which OutfitElements to fetch.
     */
    where?: OutfitElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitElements to fetch.
     */
    orderBy?: OutfitElementsOrderByWithRelationInput | OutfitElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitElements.
     */
    cursor?: OutfitElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitElements.
     */
    distinct?: OutfitElementsScalarFieldEnum | OutfitElementsScalarFieldEnum[]
  }

  /**
   * OutfitElements findMany
   */
  export type OutfitElementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter, which OutfitElements to fetch.
     */
    where?: OutfitElementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitElements to fetch.
     */
    orderBy?: OutfitElementsOrderByWithRelationInput | OutfitElementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitElements.
     */
    cursor?: OutfitElementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitElements.
     */
    skip?: number
    distinct?: OutfitElementsScalarFieldEnum | OutfitElementsScalarFieldEnum[]
  }

  /**
   * OutfitElements create
   */
  export type OutfitElementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitElements.
     */
    data: XOR<OutfitElementsCreateInput, OutfitElementsUncheckedCreateInput>
  }

  /**
   * OutfitElements createMany
   */
  export type OutfitElementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitElements.
     */
    data: OutfitElementsCreateManyInput | OutfitElementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitElements createManyAndReturn
   */
  export type OutfitElementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitElements.
     */
    data: OutfitElementsCreateManyInput | OutfitElementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitElements update
   */
  export type OutfitElementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitElements.
     */
    data: XOR<OutfitElementsUpdateInput, OutfitElementsUncheckedUpdateInput>
    /**
     * Choose, which OutfitElements to update.
     */
    where: OutfitElementsWhereUniqueInput
  }

  /**
   * OutfitElements updateMany
   */
  export type OutfitElementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitElements.
     */
    data: XOR<OutfitElementsUpdateManyMutationInput, OutfitElementsUncheckedUpdateManyInput>
    /**
     * Filter which OutfitElements to update
     */
    where?: OutfitElementsWhereInput
    /**
     * Limit how many OutfitElements to update.
     */
    limit?: number
  }

  /**
   * OutfitElements updateManyAndReturn
   */
  export type OutfitElementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * The data used to update OutfitElements.
     */
    data: XOR<OutfitElementsUpdateManyMutationInput, OutfitElementsUncheckedUpdateManyInput>
    /**
     * Filter which OutfitElements to update
     */
    where?: OutfitElementsWhereInput
    /**
     * Limit how many OutfitElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitElements upsert
   */
  export type OutfitElementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitElements to update in case it exists.
     */
    where: OutfitElementsWhereUniqueInput
    /**
     * In case the OutfitElements found by the `where` argument doesn't exist, create a new OutfitElements with this data.
     */
    create: XOR<OutfitElementsCreateInput, OutfitElementsUncheckedCreateInput>
    /**
     * In case the OutfitElements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitElementsUpdateInput, OutfitElementsUncheckedUpdateInput>
  }

  /**
   * OutfitElements delete
   */
  export type OutfitElementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
    /**
     * Filter which OutfitElements to delete.
     */
    where: OutfitElementsWhereUniqueInput
  }

  /**
   * OutfitElements deleteMany
   */
  export type OutfitElementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitElements to delete
     */
    where?: OutfitElementsWhereInput
    /**
     * Limit how many OutfitElements to delete.
     */
    limit?: number
  }

  /**
   * OutfitElements.favourites
   */
  export type OutfitElements$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    where?: UserFavouriteWhereInput
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    cursor?: UserFavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * OutfitElements without action
   */
  export type OutfitElementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitElements
     */
    select?: OutfitElementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitElements
     */
    omit?: OutfitElementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitElementsInclude<ExtArgs> | null
  }


  /**
   * Model WeatherType
   */

  export type AggregateWeatherType = {
    _count: WeatherTypeCountAggregateOutputType | null
    _avg: WeatherTypeAvgAggregateOutputType | null
    _sum: WeatherTypeSumAggregateOutputType | null
    _min: WeatherTypeMinAggregateOutputType | null
    _max: WeatherTypeMaxAggregateOutputType | null
  }

  export type WeatherTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type WeatherTypeSumAggregateOutputType = {
    id: number | null
  }

  export type WeatherTypeMinAggregateOutputType = {
    id: number | null
    weatherName: string | null
    description: string | null
  }

  export type WeatherTypeMaxAggregateOutputType = {
    id: number | null
    weatherName: string | null
    description: string | null
  }

  export type WeatherTypeCountAggregateOutputType = {
    id: number
    weatherName: number
    description: number
    _all: number
  }


  export type WeatherTypeAvgAggregateInputType = {
    id?: true
  }

  export type WeatherTypeSumAggregateInputType = {
    id?: true
  }

  export type WeatherTypeMinAggregateInputType = {
    id?: true
    weatherName?: true
    description?: true
  }

  export type WeatherTypeMaxAggregateInputType = {
    id?: true
    weatherName?: true
    description?: true
  }

  export type WeatherTypeCountAggregateInputType = {
    id?: true
    weatherName?: true
    description?: true
    _all?: true
  }

  export type WeatherTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherType to aggregate.
     */
    where?: WeatherTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherTypes to fetch.
     */
    orderBy?: WeatherTypeOrderByWithRelationInput | WeatherTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherTypes
    **/
    _count?: true | WeatherTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherTypeMaxAggregateInputType
  }

  export type GetWeatherTypeAggregateType<T extends WeatherTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherType[P]>
      : GetScalarType<T[P], AggregateWeatherType[P]>
  }




  export type WeatherTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherTypeWhereInput
    orderBy?: WeatherTypeOrderByWithAggregationInput | WeatherTypeOrderByWithAggregationInput[]
    by: WeatherTypeScalarFieldEnum[] | WeatherTypeScalarFieldEnum
    having?: WeatherTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherTypeCountAggregateInputType | true
    _avg?: WeatherTypeAvgAggregateInputType
    _sum?: WeatherTypeSumAggregateInputType
    _min?: WeatherTypeMinAggregateInputType
    _max?: WeatherTypeMaxAggregateInputType
  }

  export type WeatherTypeGroupByOutputType = {
    id: number
    weatherName: string
    description: string
    _count: WeatherTypeCountAggregateOutputType | null
    _avg: WeatherTypeAvgAggregateOutputType | null
    _sum: WeatherTypeSumAggregateOutputType | null
    _min: WeatherTypeMinAggregateOutputType | null
    _max: WeatherTypeMaxAggregateOutputType | null
  }

  type GetWeatherTypeGroupByPayload<T extends WeatherTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherTypeGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherTypeGroupByOutputType[P]>
        }
      >
    >


  export type WeatherTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherName?: boolean
    description?: boolean
    UserFavourite?: boolean | WeatherType$UserFavouriteArgs<ExtArgs>
    _count?: boolean | WeatherTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherType"]>

  export type WeatherTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherName?: boolean
    description?: boolean
  }, ExtArgs["result"]["weatherType"]>

  export type WeatherTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherName?: boolean
    description?: boolean
  }, ExtArgs["result"]["weatherType"]>

  export type WeatherTypeSelectScalar = {
    id?: boolean
    weatherName?: boolean
    description?: boolean
  }

  export type WeatherTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weatherName" | "description", ExtArgs["result"]["weatherType"]>
  export type WeatherTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserFavourite?: boolean | WeatherType$UserFavouriteArgs<ExtArgs>
    _count?: boolean | WeatherTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeatherTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeatherTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeatherTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherType"
    objects: {
      UserFavourite: Prisma.$UserFavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weatherName: string
      description: string
    }, ExtArgs["result"]["weatherType"]>
    composites: {}
  }

  type WeatherTypeGetPayload<S extends boolean | null | undefined | WeatherTypeDefaultArgs> = $Result.GetResult<Prisma.$WeatherTypePayload, S>

  type WeatherTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherTypeCountAggregateInputType | true
    }

  export interface WeatherTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherType'], meta: { name: 'WeatherType' } }
    /**
     * Find zero or one WeatherType that matches the filter.
     * @param {WeatherTypeFindUniqueArgs} args - Arguments to find a WeatherType
     * @example
     * // Get one WeatherType
     * const weatherType = await prisma.weatherType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherTypeFindUniqueArgs>(args: SelectSubset<T, WeatherTypeFindUniqueArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherTypeFindUniqueOrThrowArgs} args - Arguments to find a WeatherType
     * @example
     * // Get one WeatherType
     * const weatherType = await prisma.weatherType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeFindFirstArgs} args - Arguments to find a WeatherType
     * @example
     * // Get one WeatherType
     * const weatherType = await prisma.weatherType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherTypeFindFirstArgs>(args?: SelectSubset<T, WeatherTypeFindFirstArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeFindFirstOrThrowArgs} args - Arguments to find a WeatherType
     * @example
     * // Get one WeatherType
     * const weatherType = await prisma.weatherType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherTypes
     * const weatherTypes = await prisma.weatherType.findMany()
     * 
     * // Get first 10 WeatherTypes
     * const weatherTypes = await prisma.weatherType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherTypeWithIdOnly = await prisma.weatherType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherTypeFindManyArgs>(args?: SelectSubset<T, WeatherTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherType.
     * @param {WeatherTypeCreateArgs} args - Arguments to create a WeatherType.
     * @example
     * // Create one WeatherType
     * const WeatherType = await prisma.weatherType.create({
     *   data: {
     *     // ... data to create a WeatherType
     *   }
     * })
     * 
     */
    create<T extends WeatherTypeCreateArgs>(args: SelectSubset<T, WeatherTypeCreateArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherTypes.
     * @param {WeatherTypeCreateManyArgs} args - Arguments to create many WeatherTypes.
     * @example
     * // Create many WeatherTypes
     * const weatherType = await prisma.weatherType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherTypeCreateManyArgs>(args?: SelectSubset<T, WeatherTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeatherTypes and returns the data saved in the database.
     * @param {WeatherTypeCreateManyAndReturnArgs} args - Arguments to create many WeatherTypes.
     * @example
     * // Create many WeatherTypes
     * const weatherType = await prisma.weatherType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeatherTypes and only return the `id`
     * const weatherTypeWithIdOnly = await prisma.weatherType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeatherType.
     * @param {WeatherTypeDeleteArgs} args - Arguments to delete one WeatherType.
     * @example
     * // Delete one WeatherType
     * const WeatherType = await prisma.weatherType.delete({
     *   where: {
     *     // ... filter to delete one WeatherType
     *   }
     * })
     * 
     */
    delete<T extends WeatherTypeDeleteArgs>(args: SelectSubset<T, WeatherTypeDeleteArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherType.
     * @param {WeatherTypeUpdateArgs} args - Arguments to update one WeatherType.
     * @example
     * // Update one WeatherType
     * const weatherType = await prisma.weatherType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherTypeUpdateArgs>(args: SelectSubset<T, WeatherTypeUpdateArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherTypes.
     * @param {WeatherTypeDeleteManyArgs} args - Arguments to filter WeatherTypes to delete.
     * @example
     * // Delete a few WeatherTypes
     * const { count } = await prisma.weatherType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherTypeDeleteManyArgs>(args?: SelectSubset<T, WeatherTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherTypes
     * const weatherType = await prisma.weatherType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherTypeUpdateManyArgs>(args: SelectSubset<T, WeatherTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherTypes and returns the data updated in the database.
     * @param {WeatherTypeUpdateManyAndReturnArgs} args - Arguments to update many WeatherTypes.
     * @example
     * // Update many WeatherTypes
     * const weatherType = await prisma.weatherType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeatherTypes and only return the `id`
     * const weatherTypeWithIdOnly = await prisma.weatherType.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeatherTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeatherType.
     * @param {WeatherTypeUpsertArgs} args - Arguments to update or create a WeatherType.
     * @example
     * // Update or create a WeatherType
     * const weatherType = await prisma.weatherType.upsert({
     *   create: {
     *     // ... data to create a WeatherType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherType we want to update
     *   }
     * })
     */
    upsert<T extends WeatherTypeUpsertArgs>(args: SelectSubset<T, WeatherTypeUpsertArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeCountArgs} args - Arguments to filter WeatherTypes to count.
     * @example
     * // Count the number of WeatherTypes
     * const count = await prisma.weatherType.count({
     *   where: {
     *     // ... the filter for the WeatherTypes we want to count
     *   }
     * })
    **/
    count<T extends WeatherTypeCountArgs>(
      args?: Subset<T, WeatherTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeatherTypeAggregateArgs>(args: Subset<T, WeatherTypeAggregateArgs>): Prisma.PrismaPromise<GetWeatherTypeAggregateType<T>>

    /**
     * Group by WeatherType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherTypeGroupByArgs} args - Group by arguments.
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
      T extends WeatherTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherTypeGroupByArgs['orderBy'] }
        : { orderBy?: WeatherTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeatherTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherType model
   */
  readonly fields: WeatherTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserFavourite<T extends WeatherType$UserFavouriteArgs<ExtArgs> = {}>(args?: Subset<T, WeatherType$UserFavouriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeatherType model
   */
  interface WeatherTypeFieldRefs {
    readonly id: FieldRef<"WeatherType", 'Int'>
    readonly weatherName: FieldRef<"WeatherType", 'String'>
    readonly description: FieldRef<"WeatherType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WeatherType findUnique
   */
  export type WeatherTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeatherType to fetch.
     */
    where: WeatherTypeWhereUniqueInput
  }

  /**
   * WeatherType findUniqueOrThrow
   */
  export type WeatherTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeatherType to fetch.
     */
    where: WeatherTypeWhereUniqueInput
  }

  /**
   * WeatherType findFirst
   */
  export type WeatherTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeatherType to fetch.
     */
    where?: WeatherTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherTypes to fetch.
     */
    orderBy?: WeatherTypeOrderByWithRelationInput | WeatherTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherTypes.
     */
    cursor?: WeatherTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherTypes.
     */
    distinct?: WeatherTypeScalarFieldEnum | WeatherTypeScalarFieldEnum[]
  }

  /**
   * WeatherType findFirstOrThrow
   */
  export type WeatherTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeatherType to fetch.
     */
    where?: WeatherTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherTypes to fetch.
     */
    orderBy?: WeatherTypeOrderByWithRelationInput | WeatherTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherTypes.
     */
    cursor?: WeatherTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherTypes.
     */
    distinct?: WeatherTypeScalarFieldEnum | WeatherTypeScalarFieldEnum[]
  }

  /**
   * WeatherType findMany
   */
  export type WeatherTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter, which WeatherTypes to fetch.
     */
    where?: WeatherTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherTypes to fetch.
     */
    orderBy?: WeatherTypeOrderByWithRelationInput | WeatherTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherTypes.
     */
    cursor?: WeatherTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherTypes.
     */
    skip?: number
    distinct?: WeatherTypeScalarFieldEnum | WeatherTypeScalarFieldEnum[]
  }

  /**
   * WeatherType create
   */
  export type WeatherTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a WeatherType.
     */
    data: XOR<WeatherTypeCreateInput, WeatherTypeUncheckedCreateInput>
  }

  /**
   * WeatherType createMany
   */
  export type WeatherTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherTypes.
     */
    data: WeatherTypeCreateManyInput | WeatherTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherType createManyAndReturn
   */
  export type WeatherTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * The data used to create many WeatherTypes.
     */
    data: WeatherTypeCreateManyInput | WeatherTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherType update
   */
  export type WeatherTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a WeatherType.
     */
    data: XOR<WeatherTypeUpdateInput, WeatherTypeUncheckedUpdateInput>
    /**
     * Choose, which WeatherType to update.
     */
    where: WeatherTypeWhereUniqueInput
  }

  /**
   * WeatherType updateMany
   */
  export type WeatherTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherTypes.
     */
    data: XOR<WeatherTypeUpdateManyMutationInput, WeatherTypeUncheckedUpdateManyInput>
    /**
     * Filter which WeatherTypes to update
     */
    where?: WeatherTypeWhereInput
    /**
     * Limit how many WeatherTypes to update.
     */
    limit?: number
  }

  /**
   * WeatherType updateManyAndReturn
   */
  export type WeatherTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * The data used to update WeatherTypes.
     */
    data: XOR<WeatherTypeUpdateManyMutationInput, WeatherTypeUncheckedUpdateManyInput>
    /**
     * Filter which WeatherTypes to update
     */
    where?: WeatherTypeWhereInput
    /**
     * Limit how many WeatherTypes to update.
     */
    limit?: number
  }

  /**
   * WeatherType upsert
   */
  export type WeatherTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the WeatherType to update in case it exists.
     */
    where: WeatherTypeWhereUniqueInput
    /**
     * In case the WeatherType found by the `where` argument doesn't exist, create a new WeatherType with this data.
     */
    create: XOR<WeatherTypeCreateInput, WeatherTypeUncheckedCreateInput>
    /**
     * In case the WeatherType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherTypeUpdateInput, WeatherTypeUncheckedUpdateInput>
  }

  /**
   * WeatherType delete
   */
  export type WeatherTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    /**
     * Filter which WeatherType to delete.
     */
    where: WeatherTypeWhereUniqueInput
  }

  /**
   * WeatherType deleteMany
   */
  export type WeatherTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherTypes to delete
     */
    where?: WeatherTypeWhereInput
    /**
     * Limit how many WeatherTypes to delete.
     */
    limit?: number
  }

  /**
   * WeatherType.UserFavourite
   */
  export type WeatherType$UserFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    where?: UserFavouriteWhereInput
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    cursor?: UserFavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * WeatherType without action
   */
  export type WeatherTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceAvgAggregateOutputType = {
    id: number | null
    favoriteColors: number | null
    bodyTypeId: number | null
    favoriteStyles: number | null
    styleConfidenceLevel: number | null
    preferredWeatherTypes: number | null
  }

  export type UserPreferenceSumAggregateOutputType = {
    id: number | null
    favoriteColors: number[]
    bodyTypeId: number | null
    favoriteStyles: number[]
    styleConfidenceLevel: number | null
    preferredWeatherTypes: number[]
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: number | null
    userId: string | null
    bodyTypeId: number | null
    budgetRange: $Enums.BudgetRange | null
    styleConfidenceLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    bodyTypeId: number | null
    budgetRange: $Enums.BudgetRange | null
    styleConfidenceLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    favoriteColors: number
    bodyTypeId: number
    favoriteStyles: number
    budgetRange: number
    preferredBrands: number
    styleConfidenceLevel: number
    preferredWeatherTypes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceAvgAggregateInputType = {
    id?: true
    favoriteColors?: true
    bodyTypeId?: true
    favoriteStyles?: true
    styleConfidenceLevel?: true
    preferredWeatherTypes?: true
  }

  export type UserPreferenceSumAggregateInputType = {
    id?: true
    favoriteColors?: true
    bodyTypeId?: true
    favoriteStyles?: true
    styleConfidenceLevel?: true
    preferredWeatherTypes?: true
  }

  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    bodyTypeId?: true
    budgetRange?: true
    styleConfidenceLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    bodyTypeId?: true
    budgetRange?: true
    styleConfidenceLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    favoriteColors?: true
    bodyTypeId?: true
    favoriteStyles?: true
    budgetRange?: true
    preferredBrands?: true
    styleConfidenceLevel?: true
    preferredWeatherTypes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _avg?: UserPreferenceAvgAggregateInputType
    _sum?: UserPreferenceSumAggregateInputType
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: number
    userId: string
    favoriteColors: number[]
    bodyTypeId: number | null
    favoriteStyles: number[]
    budgetRange: $Enums.BudgetRange
    preferredBrands: string[]
    styleConfidenceLevel: number | null
    preferredWeatherTypes: number[]
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _avg: UserPreferenceAvgAggregateOutputType | null
    _sum: UserPreferenceSumAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteColors?: boolean
    bodyTypeId?: boolean
    favoriteStyles?: boolean
    budgetRange?: boolean
    preferredBrands?: boolean
    styleConfidenceLevel?: boolean
    preferredWeatherTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteColors?: boolean
    bodyTypeId?: boolean
    favoriteStyles?: boolean
    budgetRange?: boolean
    preferredBrands?: boolean
    styleConfidenceLevel?: boolean
    preferredWeatherTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    favoriteColors?: boolean
    bodyTypeId?: boolean
    favoriteStyles?: boolean
    budgetRange?: boolean
    preferredBrands?: boolean
    styleConfidenceLevel?: boolean
    preferredWeatherTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    favoriteColors?: boolean
    bodyTypeId?: boolean
    favoriteStyles?: boolean
    budgetRange?: boolean
    preferredBrands?: boolean
    styleConfidenceLevel?: boolean
    preferredWeatherTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "favoriteColors" | "bodyTypeId" | "favoriteStyles" | "budgetRange" | "preferredBrands" | "styleConfidenceLevel" | "preferredWeatherTypes" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      favoriteColors: number[]
      bodyTypeId: number | null
      favoriteStyles: number[]
      budgetRange: $Enums.BudgetRange
      preferredBrands: string[]
      styleConfidenceLevel: number | null
      preferredWeatherTypes: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'Int'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly favoriteColors: FieldRef<"UserPreference", 'Int[]'>
    readonly bodyTypeId: FieldRef<"UserPreference", 'Int'>
    readonly favoriteStyles: FieldRef<"UserPreference", 'Int[]'>
    readonly budgetRange: FieldRef<"UserPreference", 'BudgetRange'>
    readonly preferredBrands: FieldRef<"UserPreference", 'String[]'>
    readonly styleConfidenceLevel: FieldRef<"UserPreference", 'Int'>
    readonly preferredWeatherTypes: FieldRef<"UserPreference", 'Int[]'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model UserFavourite
   */

  export type AggregateUserFavourite = {
    _count: UserFavouriteCountAggregateOutputType | null
    _avg: UserFavouriteAvgAggregateOutputType | null
    _sum: UserFavouriteSumAggregateOutputType | null
    _min: UserFavouriteMinAggregateOutputType | null
    _max: UserFavouriteMaxAggregateOutputType | null
  }

  export type UserFavouriteAvgAggregateOutputType = {
    id: number | null
    outfitElementsId: number | null
    weatherConditionId: number | null
    userRating: number | null
  }

  export type UserFavouriteSumAggregateOutputType = {
    id: number | null
    outfitElementsId: number | null
    weatherConditionId: number | null
    userRating: number | null
  }

  export type UserFavouriteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    outfitElementsId: number | null
    selectionReason: $Enums.SelectionReason | null
    occasion: string | null
    weatherConditionId: number | null
    userRating: number | null
    feedbackNotes: string | null
    selectedAt: Date | null
  }

  export type UserFavouriteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    outfitElementsId: number | null
    selectionReason: $Enums.SelectionReason | null
    occasion: string | null
    weatherConditionId: number | null
    userRating: number | null
    feedbackNotes: string | null
    selectedAt: Date | null
  }

  export type UserFavouriteCountAggregateOutputType = {
    id: number
    userId: number
    outfitElementsId: number
    selectionReason: number
    occasion: number
    weatherConditionId: number
    userRating: number
    feedbackNotes: number
    selectedAt: number
    _all: number
  }


  export type UserFavouriteAvgAggregateInputType = {
    id?: true
    outfitElementsId?: true
    weatherConditionId?: true
    userRating?: true
  }

  export type UserFavouriteSumAggregateInputType = {
    id?: true
    outfitElementsId?: true
    weatherConditionId?: true
    userRating?: true
  }

  export type UserFavouriteMinAggregateInputType = {
    id?: true
    userId?: true
    outfitElementsId?: true
    selectionReason?: true
    occasion?: true
    weatherConditionId?: true
    userRating?: true
    feedbackNotes?: true
    selectedAt?: true
  }

  export type UserFavouriteMaxAggregateInputType = {
    id?: true
    userId?: true
    outfitElementsId?: true
    selectionReason?: true
    occasion?: true
    weatherConditionId?: true
    userRating?: true
    feedbackNotes?: true
    selectedAt?: true
  }

  export type UserFavouriteCountAggregateInputType = {
    id?: true
    userId?: true
    outfitElementsId?: true
    selectionReason?: true
    occasion?: true
    weatherConditionId?: true
    userRating?: true
    feedbackNotes?: true
    selectedAt?: true
    _all?: true
  }

  export type UserFavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavourite to aggregate.
     */
    where?: UserFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavourites to fetch.
     */
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavourites
    **/
    _count?: true | UserFavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFavouriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFavouriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavouriteMaxAggregateInputType
  }

  export type GetUserFavouriteAggregateType<T extends UserFavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavourite[P]>
      : GetScalarType<T[P], AggregateUserFavourite[P]>
  }




  export type UserFavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavouriteWhereInput
    orderBy?: UserFavouriteOrderByWithAggregationInput | UserFavouriteOrderByWithAggregationInput[]
    by: UserFavouriteScalarFieldEnum[] | UserFavouriteScalarFieldEnum
    having?: UserFavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavouriteCountAggregateInputType | true
    _avg?: UserFavouriteAvgAggregateInputType
    _sum?: UserFavouriteSumAggregateInputType
    _min?: UserFavouriteMinAggregateInputType
    _max?: UserFavouriteMaxAggregateInputType
  }

  export type UserFavouriteGroupByOutputType = {
    id: number
    userId: string
    outfitElementsId: number
    selectionReason: $Enums.SelectionReason | null
    occasion: string | null
    weatherConditionId: number | null
    userRating: number | null
    feedbackNotes: string | null
    selectedAt: Date
    _count: UserFavouriteCountAggregateOutputType | null
    _avg: UserFavouriteAvgAggregateOutputType | null
    _sum: UserFavouriteSumAggregateOutputType | null
    _min: UserFavouriteMinAggregateOutputType | null
    _max: UserFavouriteMaxAggregateOutputType | null
  }

  type GetUserFavouriteGroupByPayload<T extends UserFavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavouriteGroupByOutputType[P]>
        }
      >
    >


  export type UserFavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitElementsId?: boolean
    selectionReason?: boolean
    occasion?: boolean
    weatherConditionId?: boolean
    userRating?: boolean
    feedbackNotes?: boolean
    selectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }, ExtArgs["result"]["userFavourite"]>

  export type UserFavouriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitElementsId?: boolean
    selectionReason?: boolean
    occasion?: boolean
    weatherConditionId?: boolean
    userRating?: boolean
    feedbackNotes?: boolean
    selectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }, ExtArgs["result"]["userFavourite"]>

  export type UserFavouriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitElementsId?: boolean
    selectionReason?: boolean
    occasion?: boolean
    weatherConditionId?: boolean
    userRating?: boolean
    feedbackNotes?: boolean
    selectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }, ExtArgs["result"]["userFavourite"]>

  export type UserFavouriteSelectScalar = {
    id?: boolean
    userId?: boolean
    outfitElementsId?: boolean
    selectionReason?: boolean
    occasion?: boolean
    weatherConditionId?: boolean
    userRating?: boolean
    feedbackNotes?: boolean
    selectedAt?: boolean
  }

  export type UserFavouriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "outfitElementsId" | "selectionReason" | "occasion" | "weatherConditionId" | "userRating" | "feedbackNotes" | "selectedAt", ExtArgs["result"]["userFavourite"]>
  export type UserFavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }
  export type UserFavouriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }
  export type UserFavouriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    outfitElement?: boolean | OutfitElementsDefaultArgs<ExtArgs>
    weatherCondition?: boolean | UserFavourite$weatherConditionArgs<ExtArgs>
  }

  export type $UserFavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavourite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      outfitElement: Prisma.$OutfitElementsPayload<ExtArgs>
      weatherCondition: Prisma.$WeatherTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      outfitElementsId: number
      selectionReason: $Enums.SelectionReason | null
      occasion: string | null
      weatherConditionId: number | null
      userRating: number | null
      feedbackNotes: string | null
      selectedAt: Date
    }, ExtArgs["result"]["userFavourite"]>
    composites: {}
  }

  type UserFavouriteGetPayload<S extends boolean | null | undefined | UserFavouriteDefaultArgs> = $Result.GetResult<Prisma.$UserFavouritePayload, S>

  type UserFavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavouriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavouriteCountAggregateInputType | true
    }

  export interface UserFavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavourite'], meta: { name: 'UserFavourite' } }
    /**
     * Find zero or one UserFavourite that matches the filter.
     * @param {UserFavouriteFindUniqueArgs} args - Arguments to find a UserFavourite
     * @example
     * // Get one UserFavourite
     * const userFavourite = await prisma.userFavourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavouriteFindUniqueArgs>(args: SelectSubset<T, UserFavouriteFindUniqueArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavourite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavouriteFindUniqueOrThrowArgs} args - Arguments to find a UserFavourite
     * @example
     * // Get one UserFavourite
     * const userFavourite = await prisma.userFavourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteFindFirstArgs} args - Arguments to find a UserFavourite
     * @example
     * // Get one UserFavourite
     * const userFavourite = await prisma.userFavourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavouriteFindFirstArgs>(args?: SelectSubset<T, UserFavouriteFindFirstArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteFindFirstOrThrowArgs} args - Arguments to find a UserFavourite
     * @example
     * // Get one UserFavourite
     * const userFavourite = await prisma.userFavourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavourites
     * const userFavourites = await prisma.userFavourite.findMany()
     * 
     * // Get first 10 UserFavourites
     * const userFavourites = await prisma.userFavourite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavouriteWithIdOnly = await prisma.userFavourite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavouriteFindManyArgs>(args?: SelectSubset<T, UserFavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavourite.
     * @param {UserFavouriteCreateArgs} args - Arguments to create a UserFavourite.
     * @example
     * // Create one UserFavourite
     * const UserFavourite = await prisma.userFavourite.create({
     *   data: {
     *     // ... data to create a UserFavourite
     *   }
     * })
     * 
     */
    create<T extends UserFavouriteCreateArgs>(args: SelectSubset<T, UserFavouriteCreateArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavourites.
     * @param {UserFavouriteCreateManyArgs} args - Arguments to create many UserFavourites.
     * @example
     * // Create many UserFavourites
     * const userFavourite = await prisma.userFavourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavouriteCreateManyArgs>(args?: SelectSubset<T, UserFavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavourites and returns the data saved in the database.
     * @param {UserFavouriteCreateManyAndReturnArgs} args - Arguments to create many UserFavourites.
     * @example
     * // Create many UserFavourites
     * const userFavourite = await prisma.userFavourite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavourites and only return the `id`
     * const userFavouriteWithIdOnly = await prisma.userFavourite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavouriteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavouriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavourite.
     * @param {UserFavouriteDeleteArgs} args - Arguments to delete one UserFavourite.
     * @example
     * // Delete one UserFavourite
     * const UserFavourite = await prisma.userFavourite.delete({
     *   where: {
     *     // ... filter to delete one UserFavourite
     *   }
     * })
     * 
     */
    delete<T extends UserFavouriteDeleteArgs>(args: SelectSubset<T, UserFavouriteDeleteArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavourite.
     * @param {UserFavouriteUpdateArgs} args - Arguments to update one UserFavourite.
     * @example
     * // Update one UserFavourite
     * const userFavourite = await prisma.userFavourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavouriteUpdateArgs>(args: SelectSubset<T, UserFavouriteUpdateArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavourites.
     * @param {UserFavouriteDeleteManyArgs} args - Arguments to filter UserFavourites to delete.
     * @example
     * // Delete a few UserFavourites
     * const { count } = await prisma.userFavourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavouriteDeleteManyArgs>(args?: SelectSubset<T, UserFavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavourites
     * const userFavourite = await prisma.userFavourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavouriteUpdateManyArgs>(args: SelectSubset<T, UserFavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavourites and returns the data updated in the database.
     * @param {UserFavouriteUpdateManyAndReturnArgs} args - Arguments to update many UserFavourites.
     * @example
     * // Update many UserFavourites
     * const userFavourite = await prisma.userFavourite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavourites and only return the `id`
     * const userFavouriteWithIdOnly = await prisma.userFavourite.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserFavouriteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavouriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavourite.
     * @param {UserFavouriteUpsertArgs} args - Arguments to update or create a UserFavourite.
     * @example
     * // Update or create a UserFavourite
     * const userFavourite = await prisma.userFavourite.upsert({
     *   create: {
     *     // ... data to create a UserFavourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavourite we want to update
     *   }
     * })
     */
    upsert<T extends UserFavouriteUpsertArgs>(args: SelectSubset<T, UserFavouriteUpsertArgs<ExtArgs>>): Prisma__UserFavouriteClient<$Result.GetResult<Prisma.$UserFavouritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteCountArgs} args - Arguments to filter UserFavourites to count.
     * @example
     * // Count the number of UserFavourites
     * const count = await prisma.userFavourite.count({
     *   where: {
     *     // ... the filter for the UserFavourites we want to count
     *   }
     * })
    **/
    count<T extends UserFavouriteCountArgs>(
      args?: Subset<T, UserFavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFavouriteAggregateArgs>(args: Subset<T, UserFavouriteAggregateArgs>): Prisma.PrismaPromise<GetUserFavouriteAggregateType<T>>

    /**
     * Group by UserFavourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavouriteGroupByArgs} args - Group by arguments.
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
      T extends UserFavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavouriteGroupByArgs['orderBy'] }
        : { orderBy?: UserFavouriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavourite model
   */
  readonly fields: UserFavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outfitElement<T extends OutfitElementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutfitElementsDefaultArgs<ExtArgs>>): Prisma__OutfitElementsClient<$Result.GetResult<Prisma.$OutfitElementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weatherCondition<T extends UserFavourite$weatherConditionArgs<ExtArgs> = {}>(args?: Subset<T, UserFavourite$weatherConditionArgs<ExtArgs>>): Prisma__WeatherTypeClient<$Result.GetResult<Prisma.$WeatherTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserFavourite model
   */
  interface UserFavouriteFieldRefs {
    readonly id: FieldRef<"UserFavourite", 'Int'>
    readonly userId: FieldRef<"UserFavourite", 'String'>
    readonly outfitElementsId: FieldRef<"UserFavourite", 'Int'>
    readonly selectionReason: FieldRef<"UserFavourite", 'SelectionReason'>
    readonly occasion: FieldRef<"UserFavourite", 'String'>
    readonly weatherConditionId: FieldRef<"UserFavourite", 'Int'>
    readonly userRating: FieldRef<"UserFavourite", 'Int'>
    readonly feedbackNotes: FieldRef<"UserFavourite", 'String'>
    readonly selectedAt: FieldRef<"UserFavourite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFavourite findUnique
   */
  export type UserFavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavourite to fetch.
     */
    where: UserFavouriteWhereUniqueInput
  }

  /**
   * UserFavourite findUniqueOrThrow
   */
  export type UserFavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavourite to fetch.
     */
    where: UserFavouriteWhereUniqueInput
  }

  /**
   * UserFavourite findFirst
   */
  export type UserFavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavourite to fetch.
     */
    where?: UserFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavourites to fetch.
     */
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavourites.
     */
    cursor?: UserFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavourites.
     */
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * UserFavourite findFirstOrThrow
   */
  export type UserFavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavourite to fetch.
     */
    where?: UserFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavourites to fetch.
     */
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavourites.
     */
    cursor?: UserFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavourites.
     */
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * UserFavourite findMany
   */
  export type UserFavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavourites to fetch.
     */
    where?: UserFavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavourites to fetch.
     */
    orderBy?: UserFavouriteOrderByWithRelationInput | UserFavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavourites.
     */
    cursor?: UserFavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavourites.
     */
    skip?: number
    distinct?: UserFavouriteScalarFieldEnum | UserFavouriteScalarFieldEnum[]
  }

  /**
   * UserFavourite create
   */
  export type UserFavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavourite.
     */
    data: XOR<UserFavouriteCreateInput, UserFavouriteUncheckedCreateInput>
  }

  /**
   * UserFavourite createMany
   */
  export type UserFavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavourites.
     */
    data: UserFavouriteCreateManyInput | UserFavouriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavourite createManyAndReturn
   */
  export type UserFavouriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavourites.
     */
    data: UserFavouriteCreateManyInput | UserFavouriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavourite update
   */
  export type UserFavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavourite.
     */
    data: XOR<UserFavouriteUpdateInput, UserFavouriteUncheckedUpdateInput>
    /**
     * Choose, which UserFavourite to update.
     */
    where: UserFavouriteWhereUniqueInput
  }

  /**
   * UserFavourite updateMany
   */
  export type UserFavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavourites.
     */
    data: XOR<UserFavouriteUpdateManyMutationInput, UserFavouriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavourites to update
     */
    where?: UserFavouriteWhereInput
    /**
     * Limit how many UserFavourites to update.
     */
    limit?: number
  }

  /**
   * UserFavourite updateManyAndReturn
   */
  export type UserFavouriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * The data used to update UserFavourites.
     */
    data: XOR<UserFavouriteUpdateManyMutationInput, UserFavouriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavourites to update
     */
    where?: UserFavouriteWhereInput
    /**
     * Limit how many UserFavourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavourite upsert
   */
  export type UserFavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavourite to update in case it exists.
     */
    where: UserFavouriteWhereUniqueInput
    /**
     * In case the UserFavourite found by the `where` argument doesn't exist, create a new UserFavourite with this data.
     */
    create: XOR<UserFavouriteCreateInput, UserFavouriteUncheckedCreateInput>
    /**
     * In case the UserFavourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavouriteUpdateInput, UserFavouriteUncheckedUpdateInput>
  }

  /**
   * UserFavourite delete
   */
  export type UserFavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
    /**
     * Filter which UserFavourite to delete.
     */
    where: UserFavouriteWhereUniqueInput
  }

  /**
   * UserFavourite deleteMany
   */
  export type UserFavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavourites to delete
     */
    where?: UserFavouriteWhereInput
    /**
     * Limit how many UserFavourites to delete.
     */
    limit?: number
  }

  /**
   * UserFavourite.weatherCondition
   */
  export type UserFavourite$weatherConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherType
     */
    select?: WeatherTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherType
     */
    omit?: WeatherTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherTypeInclude<ExtArgs> | null
    where?: WeatherTypeWhereInput
  }

  /**
   * UserFavourite without action
   */
  export type UserFavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavourite
     */
    select?: UserFavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavourite
     */
    omit?: UserFavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavouriteInclude<ExtArgs> | null
  }


  /**
   * Model OutfitInDigitalCloset
   */

  export type AggregateOutfitInDigitalCloset = {
    _count: OutfitInDigitalClosetCountAggregateOutputType | null
    _avg: OutfitInDigitalClosetAvgAggregateOutputType | null
    _sum: OutfitInDigitalClosetSumAggregateOutputType | null
    _min: OutfitInDigitalClosetMinAggregateOutputType | null
    _max: OutfitInDigitalClosetMaxAggregateOutputType | null
  }

  export type OutfitInDigitalClosetAvgAggregateOutputType = {
    id: number | null
    dominantColors: number | null
    suitableWeather: number | null
    seasonRelevance: Decimal | null
    trendRelevance: Decimal | null
  }

  export type OutfitInDigitalClosetSumAggregateOutputType = {
    id: number | null
    dominantColors: number[]
    suitableWeather: number[]
    seasonRelevance: Decimal | null
    trendRelevance: Decimal | null
  }

  export type OutfitInDigitalClosetMinAggregateOutputType = {
    id: number | null
    userId: string | null
    outfitName: string | null
    styleDescription: string | null
    isFavorite: boolean | null
    suggestedAt: Date | null
    seasonRelevance: Decimal | null
    trendRelevance: Decimal | null
  }

  export type OutfitInDigitalClosetMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    outfitName: string | null
    styleDescription: string | null
    isFavorite: boolean | null
    suggestedAt: Date | null
    seasonRelevance: Decimal | null
    trendRelevance: Decimal | null
  }

  export type OutfitInDigitalClosetCountAggregateOutputType = {
    id: number
    userId: number
    outfitComposition: number
    outfitName: number
    dominantColors: number
    styleTags: number
    suitableOccasions: number
    suitableWeather: number
    styleDescription: number
    isFavorite: number
    suggestedAt: number
    seasonRelevance: number
    trendRelevance: number
    _all: number
  }


  export type OutfitInDigitalClosetAvgAggregateInputType = {
    id?: true
    dominantColors?: true
    suitableWeather?: true
    seasonRelevance?: true
    trendRelevance?: true
  }

  export type OutfitInDigitalClosetSumAggregateInputType = {
    id?: true
    dominantColors?: true
    suitableWeather?: true
    seasonRelevance?: true
    trendRelevance?: true
  }

  export type OutfitInDigitalClosetMinAggregateInputType = {
    id?: true
    userId?: true
    outfitName?: true
    styleDescription?: true
    isFavorite?: true
    suggestedAt?: true
    seasonRelevance?: true
    trendRelevance?: true
  }

  export type OutfitInDigitalClosetMaxAggregateInputType = {
    id?: true
    userId?: true
    outfitName?: true
    styleDescription?: true
    isFavorite?: true
    suggestedAt?: true
    seasonRelevance?: true
    trendRelevance?: true
  }

  export type OutfitInDigitalClosetCountAggregateInputType = {
    id?: true
    userId?: true
    outfitComposition?: true
    outfitName?: true
    dominantColors?: true
    styleTags?: true
    suitableOccasions?: true
    suitableWeather?: true
    styleDescription?: true
    isFavorite?: true
    suggestedAt?: true
    seasonRelevance?: true
    trendRelevance?: true
    _all?: true
  }

  export type OutfitInDigitalClosetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitInDigitalCloset to aggregate.
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitInDigitalClosets to fetch.
     */
    orderBy?: OutfitInDigitalClosetOrderByWithRelationInput | OutfitInDigitalClosetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutfitInDigitalClosetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitInDigitalClosets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitInDigitalClosets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutfitInDigitalClosets
    **/
    _count?: true | OutfitInDigitalClosetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutfitInDigitalClosetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutfitInDigitalClosetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutfitInDigitalClosetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutfitInDigitalClosetMaxAggregateInputType
  }

  export type GetOutfitInDigitalClosetAggregateType<T extends OutfitInDigitalClosetAggregateArgs> = {
        [P in keyof T & keyof AggregateOutfitInDigitalCloset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutfitInDigitalCloset[P]>
      : GetScalarType<T[P], AggregateOutfitInDigitalCloset[P]>
  }




  export type OutfitInDigitalClosetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutfitInDigitalClosetWhereInput
    orderBy?: OutfitInDigitalClosetOrderByWithAggregationInput | OutfitInDigitalClosetOrderByWithAggregationInput[]
    by: OutfitInDigitalClosetScalarFieldEnum[] | OutfitInDigitalClosetScalarFieldEnum
    having?: OutfitInDigitalClosetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutfitInDigitalClosetCountAggregateInputType | true
    _avg?: OutfitInDigitalClosetAvgAggregateInputType
    _sum?: OutfitInDigitalClosetSumAggregateInputType
    _min?: OutfitInDigitalClosetMinAggregateInputType
    _max?: OutfitInDigitalClosetMaxAggregateInputType
  }

  export type OutfitInDigitalClosetGroupByOutputType = {
    id: number
    userId: string
    outfitComposition: JsonValue
    outfitName: string
    dominantColors: number[]
    styleTags: string[]
    suitableOccasions: string[]
    suitableWeather: number[]
    styleDescription: string | null
    isFavorite: boolean
    suggestedAt: Date
    seasonRelevance: Decimal
    trendRelevance: Decimal
    _count: OutfitInDigitalClosetCountAggregateOutputType | null
    _avg: OutfitInDigitalClosetAvgAggregateOutputType | null
    _sum: OutfitInDigitalClosetSumAggregateOutputType | null
    _min: OutfitInDigitalClosetMinAggregateOutputType | null
    _max: OutfitInDigitalClosetMaxAggregateOutputType | null
  }

  type GetOutfitInDigitalClosetGroupByPayload<T extends OutfitInDigitalClosetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutfitInDigitalClosetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutfitInDigitalClosetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutfitInDigitalClosetGroupByOutputType[P]>
            : GetScalarType<T[P], OutfitInDigitalClosetGroupByOutputType[P]>
        }
      >
    >


  export type OutfitInDigitalClosetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitComposition?: boolean
    outfitName?: boolean
    dominantColors?: boolean
    styleTags?: boolean
    suitableOccasions?: boolean
    suitableWeather?: boolean
    styleDescription?: boolean
    isFavorite?: boolean
    suggestedAt?: boolean
    seasonRelevance?: boolean
    trendRelevance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitInDigitalCloset"]>

  export type OutfitInDigitalClosetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitComposition?: boolean
    outfitName?: boolean
    dominantColors?: boolean
    styleTags?: boolean
    suitableOccasions?: boolean
    suitableWeather?: boolean
    styleDescription?: boolean
    isFavorite?: boolean
    suggestedAt?: boolean
    seasonRelevance?: boolean
    trendRelevance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitInDigitalCloset"]>

  export type OutfitInDigitalClosetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    outfitComposition?: boolean
    outfitName?: boolean
    dominantColors?: boolean
    styleTags?: boolean
    suitableOccasions?: boolean
    suitableWeather?: boolean
    styleDescription?: boolean
    isFavorite?: boolean
    suggestedAt?: boolean
    seasonRelevance?: boolean
    trendRelevance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outfitInDigitalCloset"]>

  export type OutfitInDigitalClosetSelectScalar = {
    id?: boolean
    userId?: boolean
    outfitComposition?: boolean
    outfitName?: boolean
    dominantColors?: boolean
    styleTags?: boolean
    suitableOccasions?: boolean
    suitableWeather?: boolean
    styleDescription?: boolean
    isFavorite?: boolean
    suggestedAt?: boolean
    seasonRelevance?: boolean
    trendRelevance?: boolean
  }

  export type OutfitInDigitalClosetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "outfitComposition" | "outfitName" | "dominantColors" | "styleTags" | "suitableOccasions" | "suitableWeather" | "styleDescription" | "isFavorite" | "suggestedAt" | "seasonRelevance" | "trendRelevance", ExtArgs["result"]["outfitInDigitalCloset"]>
  export type OutfitInDigitalClosetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutfitInDigitalClosetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OutfitInDigitalClosetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OutfitInDigitalClosetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutfitInDigitalCloset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      outfitComposition: Prisma.JsonValue
      outfitName: string
      dominantColors: number[]
      styleTags: string[]
      suitableOccasions: string[]
      suitableWeather: number[]
      styleDescription: string | null
      isFavorite: boolean
      suggestedAt: Date
      seasonRelevance: Prisma.Decimal
      trendRelevance: Prisma.Decimal
    }, ExtArgs["result"]["outfitInDigitalCloset"]>
    composites: {}
  }

  type OutfitInDigitalClosetGetPayload<S extends boolean | null | undefined | OutfitInDigitalClosetDefaultArgs> = $Result.GetResult<Prisma.$OutfitInDigitalClosetPayload, S>

  type OutfitInDigitalClosetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutfitInDigitalClosetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutfitInDigitalClosetCountAggregateInputType | true
    }

  export interface OutfitInDigitalClosetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutfitInDigitalCloset'], meta: { name: 'OutfitInDigitalCloset' } }
    /**
     * Find zero or one OutfitInDigitalCloset that matches the filter.
     * @param {OutfitInDigitalClosetFindUniqueArgs} args - Arguments to find a OutfitInDigitalCloset
     * @example
     * // Get one OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutfitInDigitalClosetFindUniqueArgs>(args: SelectSubset<T, OutfitInDigitalClosetFindUniqueArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutfitInDigitalCloset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutfitInDigitalClosetFindUniqueOrThrowArgs} args - Arguments to find a OutfitInDigitalCloset
     * @example
     * // Get one OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutfitInDigitalClosetFindUniqueOrThrowArgs>(args: SelectSubset<T, OutfitInDigitalClosetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitInDigitalCloset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetFindFirstArgs} args - Arguments to find a OutfitInDigitalCloset
     * @example
     * // Get one OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutfitInDigitalClosetFindFirstArgs>(args?: SelectSubset<T, OutfitInDigitalClosetFindFirstArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutfitInDigitalCloset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetFindFirstOrThrowArgs} args - Arguments to find a OutfitInDigitalCloset
     * @example
     * // Get one OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutfitInDigitalClosetFindFirstOrThrowArgs>(args?: SelectSubset<T, OutfitInDigitalClosetFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutfitInDigitalClosets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutfitInDigitalClosets
     * const outfitInDigitalClosets = await prisma.outfitInDigitalCloset.findMany()
     * 
     * // Get first 10 OutfitInDigitalClosets
     * const outfitInDigitalClosets = await prisma.outfitInDigitalCloset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outfitInDigitalClosetWithIdOnly = await prisma.outfitInDigitalCloset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutfitInDigitalClosetFindManyArgs>(args?: SelectSubset<T, OutfitInDigitalClosetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutfitInDigitalCloset.
     * @param {OutfitInDigitalClosetCreateArgs} args - Arguments to create a OutfitInDigitalCloset.
     * @example
     * // Create one OutfitInDigitalCloset
     * const OutfitInDigitalCloset = await prisma.outfitInDigitalCloset.create({
     *   data: {
     *     // ... data to create a OutfitInDigitalCloset
     *   }
     * })
     * 
     */
    create<T extends OutfitInDigitalClosetCreateArgs>(args: SelectSubset<T, OutfitInDigitalClosetCreateArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutfitInDigitalClosets.
     * @param {OutfitInDigitalClosetCreateManyArgs} args - Arguments to create many OutfitInDigitalClosets.
     * @example
     * // Create many OutfitInDigitalClosets
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutfitInDigitalClosetCreateManyArgs>(args?: SelectSubset<T, OutfitInDigitalClosetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutfitInDigitalClosets and returns the data saved in the database.
     * @param {OutfitInDigitalClosetCreateManyAndReturnArgs} args - Arguments to create many OutfitInDigitalClosets.
     * @example
     * // Create many OutfitInDigitalClosets
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutfitInDigitalClosets and only return the `id`
     * const outfitInDigitalClosetWithIdOnly = await prisma.outfitInDigitalCloset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutfitInDigitalClosetCreateManyAndReturnArgs>(args?: SelectSubset<T, OutfitInDigitalClosetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutfitInDigitalCloset.
     * @param {OutfitInDigitalClosetDeleteArgs} args - Arguments to delete one OutfitInDigitalCloset.
     * @example
     * // Delete one OutfitInDigitalCloset
     * const OutfitInDigitalCloset = await prisma.outfitInDigitalCloset.delete({
     *   where: {
     *     // ... filter to delete one OutfitInDigitalCloset
     *   }
     * })
     * 
     */
    delete<T extends OutfitInDigitalClosetDeleteArgs>(args: SelectSubset<T, OutfitInDigitalClosetDeleteArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutfitInDigitalCloset.
     * @param {OutfitInDigitalClosetUpdateArgs} args - Arguments to update one OutfitInDigitalCloset.
     * @example
     * // Update one OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutfitInDigitalClosetUpdateArgs>(args: SelectSubset<T, OutfitInDigitalClosetUpdateArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutfitInDigitalClosets.
     * @param {OutfitInDigitalClosetDeleteManyArgs} args - Arguments to filter OutfitInDigitalClosets to delete.
     * @example
     * // Delete a few OutfitInDigitalClosets
     * const { count } = await prisma.outfitInDigitalCloset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutfitInDigitalClosetDeleteManyArgs>(args?: SelectSubset<T, OutfitInDigitalClosetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitInDigitalClosets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutfitInDigitalClosets
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutfitInDigitalClosetUpdateManyArgs>(args: SelectSubset<T, OutfitInDigitalClosetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutfitInDigitalClosets and returns the data updated in the database.
     * @param {OutfitInDigitalClosetUpdateManyAndReturnArgs} args - Arguments to update many OutfitInDigitalClosets.
     * @example
     * // Update many OutfitInDigitalClosets
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutfitInDigitalClosets and only return the `id`
     * const outfitInDigitalClosetWithIdOnly = await prisma.outfitInDigitalCloset.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutfitInDigitalClosetUpdateManyAndReturnArgs>(args: SelectSubset<T, OutfitInDigitalClosetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutfitInDigitalCloset.
     * @param {OutfitInDigitalClosetUpsertArgs} args - Arguments to update or create a OutfitInDigitalCloset.
     * @example
     * // Update or create a OutfitInDigitalCloset
     * const outfitInDigitalCloset = await prisma.outfitInDigitalCloset.upsert({
     *   create: {
     *     // ... data to create a OutfitInDigitalCloset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutfitInDigitalCloset we want to update
     *   }
     * })
     */
    upsert<T extends OutfitInDigitalClosetUpsertArgs>(args: SelectSubset<T, OutfitInDigitalClosetUpsertArgs<ExtArgs>>): Prisma__OutfitInDigitalClosetClient<$Result.GetResult<Prisma.$OutfitInDigitalClosetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutfitInDigitalClosets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetCountArgs} args - Arguments to filter OutfitInDigitalClosets to count.
     * @example
     * // Count the number of OutfitInDigitalClosets
     * const count = await prisma.outfitInDigitalCloset.count({
     *   where: {
     *     // ... the filter for the OutfitInDigitalClosets we want to count
     *   }
     * })
    **/
    count<T extends OutfitInDigitalClosetCountArgs>(
      args?: Subset<T, OutfitInDigitalClosetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutfitInDigitalClosetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutfitInDigitalCloset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutfitInDigitalClosetAggregateArgs>(args: Subset<T, OutfitInDigitalClosetAggregateArgs>): Prisma.PrismaPromise<GetOutfitInDigitalClosetAggregateType<T>>

    /**
     * Group by OutfitInDigitalCloset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutfitInDigitalClosetGroupByArgs} args - Group by arguments.
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
      T extends OutfitInDigitalClosetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutfitInDigitalClosetGroupByArgs['orderBy'] }
        : { orderBy?: OutfitInDigitalClosetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutfitInDigitalClosetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutfitInDigitalClosetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutfitInDigitalCloset model
   */
  readonly fields: OutfitInDigitalClosetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutfitInDigitalCloset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutfitInDigitalClosetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OutfitInDigitalCloset model
   */
  interface OutfitInDigitalClosetFieldRefs {
    readonly id: FieldRef<"OutfitInDigitalCloset", 'Int'>
    readonly userId: FieldRef<"OutfitInDigitalCloset", 'String'>
    readonly outfitComposition: FieldRef<"OutfitInDigitalCloset", 'Json'>
    readonly outfitName: FieldRef<"OutfitInDigitalCloset", 'String'>
    readonly dominantColors: FieldRef<"OutfitInDigitalCloset", 'Int[]'>
    readonly styleTags: FieldRef<"OutfitInDigitalCloset", 'String[]'>
    readonly suitableOccasions: FieldRef<"OutfitInDigitalCloset", 'String[]'>
    readonly suitableWeather: FieldRef<"OutfitInDigitalCloset", 'Int[]'>
    readonly styleDescription: FieldRef<"OutfitInDigitalCloset", 'String'>
    readonly isFavorite: FieldRef<"OutfitInDigitalCloset", 'Boolean'>
    readonly suggestedAt: FieldRef<"OutfitInDigitalCloset", 'DateTime'>
    readonly seasonRelevance: FieldRef<"OutfitInDigitalCloset", 'Decimal'>
    readonly trendRelevance: FieldRef<"OutfitInDigitalCloset", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OutfitInDigitalCloset findUnique
   */
  export type OutfitInDigitalClosetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter, which OutfitInDigitalCloset to fetch.
     */
    where: OutfitInDigitalClosetWhereUniqueInput
  }

  /**
   * OutfitInDigitalCloset findUniqueOrThrow
   */
  export type OutfitInDigitalClosetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter, which OutfitInDigitalCloset to fetch.
     */
    where: OutfitInDigitalClosetWhereUniqueInput
  }

  /**
   * OutfitInDigitalCloset findFirst
   */
  export type OutfitInDigitalClosetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter, which OutfitInDigitalCloset to fetch.
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitInDigitalClosets to fetch.
     */
    orderBy?: OutfitInDigitalClosetOrderByWithRelationInput | OutfitInDigitalClosetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitInDigitalClosets.
     */
    cursor?: OutfitInDigitalClosetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitInDigitalClosets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitInDigitalClosets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitInDigitalClosets.
     */
    distinct?: OutfitInDigitalClosetScalarFieldEnum | OutfitInDigitalClosetScalarFieldEnum[]
  }

  /**
   * OutfitInDigitalCloset findFirstOrThrow
   */
  export type OutfitInDigitalClosetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter, which OutfitInDigitalCloset to fetch.
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitInDigitalClosets to fetch.
     */
    orderBy?: OutfitInDigitalClosetOrderByWithRelationInput | OutfitInDigitalClosetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutfitInDigitalClosets.
     */
    cursor?: OutfitInDigitalClosetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitInDigitalClosets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitInDigitalClosets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutfitInDigitalClosets.
     */
    distinct?: OutfitInDigitalClosetScalarFieldEnum | OutfitInDigitalClosetScalarFieldEnum[]
  }

  /**
   * OutfitInDigitalCloset findMany
   */
  export type OutfitInDigitalClosetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter, which OutfitInDigitalClosets to fetch.
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutfitInDigitalClosets to fetch.
     */
    orderBy?: OutfitInDigitalClosetOrderByWithRelationInput | OutfitInDigitalClosetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutfitInDigitalClosets.
     */
    cursor?: OutfitInDigitalClosetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutfitInDigitalClosets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutfitInDigitalClosets.
     */
    skip?: number
    distinct?: OutfitInDigitalClosetScalarFieldEnum | OutfitInDigitalClosetScalarFieldEnum[]
  }

  /**
   * OutfitInDigitalCloset create
   */
  export type OutfitInDigitalClosetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * The data needed to create a OutfitInDigitalCloset.
     */
    data: XOR<OutfitInDigitalClosetCreateInput, OutfitInDigitalClosetUncheckedCreateInput>
  }

  /**
   * OutfitInDigitalCloset createMany
   */
  export type OutfitInDigitalClosetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutfitInDigitalClosets.
     */
    data: OutfitInDigitalClosetCreateManyInput | OutfitInDigitalClosetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutfitInDigitalCloset createManyAndReturn
   */
  export type OutfitInDigitalClosetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * The data used to create many OutfitInDigitalClosets.
     */
    data: OutfitInDigitalClosetCreateManyInput | OutfitInDigitalClosetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitInDigitalCloset update
   */
  export type OutfitInDigitalClosetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * The data needed to update a OutfitInDigitalCloset.
     */
    data: XOR<OutfitInDigitalClosetUpdateInput, OutfitInDigitalClosetUncheckedUpdateInput>
    /**
     * Choose, which OutfitInDigitalCloset to update.
     */
    where: OutfitInDigitalClosetWhereUniqueInput
  }

  /**
   * OutfitInDigitalCloset updateMany
   */
  export type OutfitInDigitalClosetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutfitInDigitalClosets.
     */
    data: XOR<OutfitInDigitalClosetUpdateManyMutationInput, OutfitInDigitalClosetUncheckedUpdateManyInput>
    /**
     * Filter which OutfitInDigitalClosets to update
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * Limit how many OutfitInDigitalClosets to update.
     */
    limit?: number
  }

  /**
   * OutfitInDigitalCloset updateManyAndReturn
   */
  export type OutfitInDigitalClosetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * The data used to update OutfitInDigitalClosets.
     */
    data: XOR<OutfitInDigitalClosetUpdateManyMutationInput, OutfitInDigitalClosetUncheckedUpdateManyInput>
    /**
     * Filter which OutfitInDigitalClosets to update
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * Limit how many OutfitInDigitalClosets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutfitInDigitalCloset upsert
   */
  export type OutfitInDigitalClosetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * The filter to search for the OutfitInDigitalCloset to update in case it exists.
     */
    where: OutfitInDigitalClosetWhereUniqueInput
    /**
     * In case the OutfitInDigitalCloset found by the `where` argument doesn't exist, create a new OutfitInDigitalCloset with this data.
     */
    create: XOR<OutfitInDigitalClosetCreateInput, OutfitInDigitalClosetUncheckedCreateInput>
    /**
     * In case the OutfitInDigitalCloset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutfitInDigitalClosetUpdateInput, OutfitInDigitalClosetUncheckedUpdateInput>
  }

  /**
   * OutfitInDigitalCloset delete
   */
  export type OutfitInDigitalClosetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
    /**
     * Filter which OutfitInDigitalCloset to delete.
     */
    where: OutfitInDigitalClosetWhereUniqueInput
  }

  /**
   * OutfitInDigitalCloset deleteMany
   */
  export type OutfitInDigitalClosetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutfitInDigitalClosets to delete
     */
    where?: OutfitInDigitalClosetWhereInput
    /**
     * Limit how many OutfitInDigitalClosets to delete.
     */
    limit?: number
  }

  /**
   * OutfitInDigitalCloset without action
   */
  export type OutfitInDigitalClosetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutfitInDigitalCloset
     */
    select?: OutfitInDigitalClosetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutfitInDigitalCloset
     */
    omit?: OutfitInDigitalClosetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutfitInDigitalClosetInclude<ExtArgs> | null
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
    email: 'email',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    height: 'height',
    weight: 'weight',
    birthday: 'birthday',
    gender: 'gender',
    color: 'color',
    isActive: 'isActive',
    onboardingCompleted: 'onboardingCompleted',
    privacyLevel: 'privacyLevel',
    timezone: 'timezone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserBodyTypeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserBodyTypeScalarFieldEnum = (typeof UserBodyTypeScalarFieldEnum)[keyof typeof UserBodyTypeScalarFieldEnum]


  export const UserAccessoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAccessoryScalarFieldEnum = (typeof UserAccessoryScalarFieldEnum)[keyof typeof UserAccessoryScalarFieldEnum]


  export const UserFashionStyleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserFashionStyleScalarFieldEnum = (typeof UserFashionStyleScalarFieldEnum)[keyof typeof UserFashionStyleScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    idToken: 'idToken',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    verificationType: 'verificationType'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const ColorPreferenceScalarFieldEnum: {
    id: 'id',
    colorName: 'colorName',
    hexCode: 'hexCode',
    shortDescription: 'shortDescription',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type ColorPreferenceScalarFieldEnum = (typeof ColorPreferenceScalarFieldEnum)[keyof typeof ColorPreferenceScalarFieldEnum]


  export const OutfitCategoryScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    description: 'description',
    displayOrder: 'displayOrder'
  };

  export type OutfitCategoryScalarFieldEnum = (typeof OutfitCategoryScalarFieldEnum)[keyof typeof OutfitCategoryScalarFieldEnum]


  export const OutfitElementsScalarFieldEnum: {
    id: 'id',
    gender: 'gender',
    categoryId: 'categoryId',
    elementName: 'elementName',
    brandName: 'brandName',
    priceRange: 'priceRange',
    materialType: 'materialType',
    careInstructions: 'careInstructions',
    seasonSuitability: 'seasonSuitability',
    formalityLevel: 'formalityLevel',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type OutfitElementsScalarFieldEnum = (typeof OutfitElementsScalarFieldEnum)[keyof typeof OutfitElementsScalarFieldEnum]


  export const WeatherTypeScalarFieldEnum: {
    id: 'id',
    weatherName: 'weatherName',
    description: 'description'
  };

  export type WeatherTypeScalarFieldEnum = (typeof WeatherTypeScalarFieldEnum)[keyof typeof WeatherTypeScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    favoriteColors: 'favoriteColors',
    bodyTypeId: 'bodyTypeId',
    favoriteStyles: 'favoriteStyles',
    budgetRange: 'budgetRange',
    preferredBrands: 'preferredBrands',
    styleConfidenceLevel: 'styleConfidenceLevel',
    preferredWeatherTypes: 'preferredWeatherTypes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const UserFavouriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    outfitElementsId: 'outfitElementsId',
    selectionReason: 'selectionReason',
    occasion: 'occasion',
    weatherConditionId: 'weatherConditionId',
    userRating: 'userRating',
    feedbackNotes: 'feedbackNotes',
    selectedAt: 'selectedAt'
  };

  export type UserFavouriteScalarFieldEnum = (typeof UserFavouriteScalarFieldEnum)[keyof typeof UserFavouriteScalarFieldEnum]


  export const OutfitInDigitalClosetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    outfitComposition: 'outfitComposition',
    outfitName: 'outfitName',
    dominantColors: 'dominantColors',
    styleTags: 'styleTags',
    suitableOccasions: 'suitableOccasions',
    suitableWeather: 'suitableWeather',
    styleDescription: 'styleDescription',
    isFavorite: 'isFavorite',
    suggestedAt: 'suggestedAt',
    seasonRelevance: 'seasonRelevance',
    trendRelevance: 'trendRelevance'
  };

  export type OutfitInDigitalClosetScalarFieldEnum = (typeof OutfitInDigitalClosetScalarFieldEnum)[keyof typeof OutfitInDigitalClosetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'PrivacyLevel'
   */
  export type EnumPrivacyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyLevel'>
    


  /**
   * Reference to a field of type 'PrivacyLevel[]'
   */
  export type ListEnumPrivacyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivacyLevel[]'>
    


  /**
   * Reference to a field of type 'PriceRange'
   */
  export type EnumPriceRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceRange'>
    


  /**
   * Reference to a field of type 'PriceRange[]'
   */
  export type ListEnumPriceRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceRange[]'>
    


  /**
   * Reference to a field of type 'BudgetRange'
   */
  export type EnumBudgetRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetRange'>
    


  /**
   * Reference to a field of type 'BudgetRange[]'
   */
  export type ListEnumBudgetRangeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetRange[]'>
    


  /**
   * Reference to a field of type 'SelectionReason'
   */
  export type EnumSelectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionReason'>
    


  /**
   * Reference to a field of type 'SelectionReason[]'
   */
  export type ListEnumSelectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionReason[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    height?: IntNullableFilter<"User"> | number | null
    weight?: IntNullableFilter<"User"> | number | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    color?: StringNullableListFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    onboardingCompleted?: BoolFilter<"User"> | boolean
    privacyLevel?: EnumPrivacyLevelFilter<"User"> | $Enums.PrivacyLevel
    timezone?: StringFilter<"User"> | string
    bodyType?: XOR<UserBodyTypeNullableScalarRelationFilter, UserBodyTypeWhereInput> | null
    accessories?: UserAccessoryListRelationFilter
    fashionStyles?: UserFashionStyleListRelationFilter
    accounts?: AccountListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    favourites?: UserFavouriteListRelationFilter
    digitalClosets?: OutfitInDigitalClosetListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    onboardingCompleted?: SortOrder
    privacyLevel?: SortOrder
    timezone?: SortOrder
    bodyType?: UserBodyTypeOrderByWithRelationInput
    accessories?: UserAccessoryOrderByRelationAggregateInput
    fashionStyles?: UserFashionStyleOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    preferences?: UserPreferenceOrderByWithRelationInput
    favourites?: UserFavouriteOrderByRelationAggregateInput
    digitalClosets?: OutfitInDigitalClosetOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    height?: IntNullableFilter<"User"> | number | null
    weight?: IntNullableFilter<"User"> | number | null
    birthday?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    color?: StringNullableListFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    onboardingCompleted?: BoolFilter<"User"> | boolean
    privacyLevel?: EnumPrivacyLevelFilter<"User"> | $Enums.PrivacyLevel
    timezone?: StringFilter<"User"> | string
    bodyType?: XOR<UserBodyTypeNullableScalarRelationFilter, UserBodyTypeWhereInput> | null
    accessories?: UserAccessoryListRelationFilter
    fashionStyles?: UserFashionStyleListRelationFilter
    accounts?: AccountListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    favourites?: UserFavouriteListRelationFilter
    digitalClosets?: OutfitInDigitalClosetListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    onboardingCompleted?: SortOrder
    privacyLevel?: SortOrder
    timezone?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    height?: IntNullableWithAggregatesFilter<"User"> | number | null
    weight?: IntNullableWithAggregatesFilter<"User"> | number | null
    birthday?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    color?: StringNullableListFilter<"User">
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    onboardingCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    privacyLevel?: EnumPrivacyLevelWithAggregatesFilter<"User"> | $Enums.PrivacyLevel
    timezone?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserBodyTypeWhereInput = {
    AND?: UserBodyTypeWhereInput | UserBodyTypeWhereInput[]
    OR?: UserBodyTypeWhereInput[]
    NOT?: UserBodyTypeWhereInput | UserBodyTypeWhereInput[]
    id?: StringFilter<"UserBodyType"> | string
    userId?: StringFilter<"UserBodyType"> | string
    name?: StringFilter<"UserBodyType"> | string
    description?: StringFilter<"UserBodyType"> | string
    createdAt?: DateTimeFilter<"UserBodyType"> | Date | string
    updatedAt?: DateTimeFilter<"UserBodyType"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserBodyTypeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserBodyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserBodyTypeWhereInput | UserBodyTypeWhereInput[]
    OR?: UserBodyTypeWhereInput[]
    NOT?: UserBodyTypeWhereInput | UserBodyTypeWhereInput[]
    name?: StringFilter<"UserBodyType"> | string
    description?: StringFilter<"UserBodyType"> | string
    createdAt?: DateTimeFilter<"UserBodyType"> | Date | string
    updatedAt?: DateTimeFilter<"UserBodyType"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserBodyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBodyTypeCountOrderByAggregateInput
    _max?: UserBodyTypeMaxOrderByAggregateInput
    _min?: UserBodyTypeMinOrderByAggregateInput
  }

  export type UserBodyTypeScalarWhereWithAggregatesInput = {
    AND?: UserBodyTypeScalarWhereWithAggregatesInput | UserBodyTypeScalarWhereWithAggregatesInput[]
    OR?: UserBodyTypeScalarWhereWithAggregatesInput[]
    NOT?: UserBodyTypeScalarWhereWithAggregatesInput | UserBodyTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBodyType"> | string
    userId?: StringWithAggregatesFilter<"UserBodyType"> | string
    name?: StringWithAggregatesFilter<"UserBodyType"> | string
    description?: StringWithAggregatesFilter<"UserBodyType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserBodyType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBodyType"> | Date | string
  }

  export type UserAccessoryWhereInput = {
    AND?: UserAccessoryWhereInput | UserAccessoryWhereInput[]
    OR?: UserAccessoryWhereInput[]
    NOT?: UserAccessoryWhereInput | UserAccessoryWhereInput[]
    id?: StringFilter<"UserAccessory"> | string
    userId?: StringFilter<"UserAccessory"> | string
    name?: StringFilter<"UserAccessory"> | string
    description?: StringFilter<"UserAccessory"> | string
    createdAt?: DateTimeFilter<"UserAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"UserAccessory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAccessoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAccessoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAccessoryWhereInput | UserAccessoryWhereInput[]
    OR?: UserAccessoryWhereInput[]
    NOT?: UserAccessoryWhereInput | UserAccessoryWhereInput[]
    userId?: StringFilter<"UserAccessory"> | string
    name?: StringFilter<"UserAccessory"> | string
    description?: StringFilter<"UserAccessory"> | string
    createdAt?: DateTimeFilter<"UserAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"UserAccessory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAccessoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAccessoryCountOrderByAggregateInput
    _max?: UserAccessoryMaxOrderByAggregateInput
    _min?: UserAccessoryMinOrderByAggregateInput
  }

  export type UserAccessoryScalarWhereWithAggregatesInput = {
    AND?: UserAccessoryScalarWhereWithAggregatesInput | UserAccessoryScalarWhereWithAggregatesInput[]
    OR?: UserAccessoryScalarWhereWithAggregatesInput[]
    NOT?: UserAccessoryScalarWhereWithAggregatesInput | UserAccessoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAccessory"> | string
    userId?: StringWithAggregatesFilter<"UserAccessory"> | string
    name?: StringWithAggregatesFilter<"UserAccessory"> | string
    description?: StringWithAggregatesFilter<"UserAccessory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAccessory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAccessory"> | Date | string
  }

  export type UserFashionStyleWhereInput = {
    AND?: UserFashionStyleWhereInput | UserFashionStyleWhereInput[]
    OR?: UserFashionStyleWhereInput[]
    NOT?: UserFashionStyleWhereInput | UserFashionStyleWhereInput[]
    id?: StringFilter<"UserFashionStyle"> | string
    userId?: StringFilter<"UserFashionStyle"> | string
    name?: StringFilter<"UserFashionStyle"> | string
    description?: StringFilter<"UserFashionStyle"> | string
    createdAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
    updatedAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFashionStyleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserFashionStyleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserFashionStyleWhereInput | UserFashionStyleWhereInput[]
    OR?: UserFashionStyleWhereInput[]
    NOT?: UserFashionStyleWhereInput | UserFashionStyleWhereInput[]
    userId?: StringFilter<"UserFashionStyle"> | string
    name?: StringFilter<"UserFashionStyle"> | string
    description?: StringFilter<"UserFashionStyle"> | string
    createdAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
    updatedAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserFashionStyleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserFashionStyleCountOrderByAggregateInput
    _max?: UserFashionStyleMaxOrderByAggregateInput
    _min?: UserFashionStyleMinOrderByAggregateInput
  }

  export type UserFashionStyleScalarWhereWithAggregatesInput = {
    AND?: UserFashionStyleScalarWhereWithAggregatesInput | UserFashionStyleScalarWhereWithAggregatesInput[]
    OR?: UserFashionStyleScalarWhereWithAggregatesInput[]
    NOT?: UserFashionStyleScalarWhereWithAggregatesInput | UserFashionStyleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFashionStyle"> | string
    userId?: StringWithAggregatesFilter<"UserFashionStyle"> | string
    name?: StringWithAggregatesFilter<"UserFashionStyle"> | string
    description?: StringWithAggregatesFilter<"UserFashionStyle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFashionStyle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserFashionStyle"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
    verificationType?: StringFilter<"Verification"> | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationType?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
    verificationType?: StringFilter<"Verification"> | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationType?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    verificationType?: StringWithAggregatesFilter<"Verification"> | string
  }

  export type ColorPreferenceWhereInput = {
    AND?: ColorPreferenceWhereInput | ColorPreferenceWhereInput[]
    OR?: ColorPreferenceWhereInput[]
    NOT?: ColorPreferenceWhereInput | ColorPreferenceWhereInput[]
    id?: IntFilter<"ColorPreference"> | number
    colorName?: StringFilter<"ColorPreference"> | string
    hexCode?: StringNullableFilter<"ColorPreference"> | string | null
    shortDescription?: StringNullableFilter<"ColorPreference"> | string | null
    createdAt?: DateTimeFilter<"ColorPreference"> | Date | string
    isActive?: BoolFilter<"ColorPreference"> | boolean
  }

  export type ColorPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    colorName?: SortOrder
    hexCode?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type ColorPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    colorName?: string
    AND?: ColorPreferenceWhereInput | ColorPreferenceWhereInput[]
    OR?: ColorPreferenceWhereInput[]
    NOT?: ColorPreferenceWhereInput | ColorPreferenceWhereInput[]
    hexCode?: StringNullableFilter<"ColorPreference"> | string | null
    shortDescription?: StringNullableFilter<"ColorPreference"> | string | null
    createdAt?: DateTimeFilter<"ColorPreference"> | Date | string
    isActive?: BoolFilter<"ColorPreference"> | boolean
  }, "id" | "colorName">

  export type ColorPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    colorName?: SortOrder
    hexCode?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: ColorPreferenceCountOrderByAggregateInput
    _avg?: ColorPreferenceAvgOrderByAggregateInput
    _max?: ColorPreferenceMaxOrderByAggregateInput
    _min?: ColorPreferenceMinOrderByAggregateInput
    _sum?: ColorPreferenceSumOrderByAggregateInput
  }

  export type ColorPreferenceScalarWhereWithAggregatesInput = {
    AND?: ColorPreferenceScalarWhereWithAggregatesInput | ColorPreferenceScalarWhereWithAggregatesInput[]
    OR?: ColorPreferenceScalarWhereWithAggregatesInput[]
    NOT?: ColorPreferenceScalarWhereWithAggregatesInput | ColorPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColorPreference"> | number
    colorName?: StringWithAggregatesFilter<"ColorPreference"> | string
    hexCode?: StringNullableWithAggregatesFilter<"ColorPreference"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"ColorPreference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ColorPreference"> | Date | string
    isActive?: BoolWithAggregatesFilter<"ColorPreference"> | boolean
  }

  export type OutfitCategoryWhereInput = {
    AND?: OutfitCategoryWhereInput | OutfitCategoryWhereInput[]
    OR?: OutfitCategoryWhereInput[]
    NOT?: OutfitCategoryWhereInput | OutfitCategoryWhereInput[]
    id?: IntFilter<"OutfitCategory"> | number
    categoryName?: StringFilter<"OutfitCategory"> | string
    description?: StringNullableFilter<"OutfitCategory"> | string | null
    displayOrder?: IntFilter<"OutfitCategory"> | number
    elements?: OutfitElementsListRelationFilter
  }

  export type OutfitCategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    elements?: OutfitElementsOrderByRelationAggregateInput
  }

  export type OutfitCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoryName?: string
    AND?: OutfitCategoryWhereInput | OutfitCategoryWhereInput[]
    OR?: OutfitCategoryWhereInput[]
    NOT?: OutfitCategoryWhereInput | OutfitCategoryWhereInput[]
    description?: StringNullableFilter<"OutfitCategory"> | string | null
    displayOrder?: IntFilter<"OutfitCategory"> | number
    elements?: OutfitElementsListRelationFilter
  }, "id" | "categoryName">

  export type OutfitCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    _count?: OutfitCategoryCountOrderByAggregateInput
    _avg?: OutfitCategoryAvgOrderByAggregateInput
    _max?: OutfitCategoryMaxOrderByAggregateInput
    _min?: OutfitCategoryMinOrderByAggregateInput
    _sum?: OutfitCategorySumOrderByAggregateInput
  }

  export type OutfitCategoryScalarWhereWithAggregatesInput = {
    AND?: OutfitCategoryScalarWhereWithAggregatesInput | OutfitCategoryScalarWhereWithAggregatesInput[]
    OR?: OutfitCategoryScalarWhereWithAggregatesInput[]
    NOT?: OutfitCategoryScalarWhereWithAggregatesInput | OutfitCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OutfitCategory"> | number
    categoryName?: StringWithAggregatesFilter<"OutfitCategory"> | string
    description?: StringNullableWithAggregatesFilter<"OutfitCategory"> | string | null
    displayOrder?: IntWithAggregatesFilter<"OutfitCategory"> | number
  }

  export type OutfitElementsWhereInput = {
    AND?: OutfitElementsWhereInput | OutfitElementsWhereInput[]
    OR?: OutfitElementsWhereInput[]
    NOT?: OutfitElementsWhereInput | OutfitElementsWhereInput[]
    id?: IntFilter<"OutfitElements"> | number
    gender?: EnumGenderFilter<"OutfitElements"> | $Enums.Gender
    categoryId?: IntFilter<"OutfitElements"> | number
    elementName?: StringFilter<"OutfitElements"> | string
    brandName?: StringNullableFilter<"OutfitElements"> | string | null
    priceRange?: EnumPriceRangeNullableFilter<"OutfitElements"> | $Enums.PriceRange | null
    materialType?: StringNullableFilter<"OutfitElements"> | string | null
    careInstructions?: StringNullableFilter<"OutfitElements"> | string | null
    seasonSuitability?: StringNullableListFilter<"OutfitElements">
    formalityLevel?: IntFilter<"OutfitElements"> | number
    createdAt?: DateTimeFilter<"OutfitElements"> | Date | string
    isActive?: BoolFilter<"OutfitElements"> | boolean
    category?: XOR<OutfitCategoryScalarRelationFilter, OutfitCategoryWhereInput>
    favourites?: UserFavouriteListRelationFilter
  }

  export type OutfitElementsOrderByWithRelationInput = {
    id?: SortOrder
    gender?: SortOrder
    categoryId?: SortOrder
    elementName?: SortOrder
    brandName?: SortOrderInput | SortOrder
    priceRange?: SortOrderInput | SortOrder
    materialType?: SortOrderInput | SortOrder
    careInstructions?: SortOrderInput | SortOrder
    seasonSuitability?: SortOrder
    formalityLevel?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    category?: OutfitCategoryOrderByWithRelationInput
    favourites?: UserFavouriteOrderByRelationAggregateInput
  }

  export type OutfitElementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gender_categoryId_elementName?: OutfitElementsGenderCategoryIdElementNameCompoundUniqueInput
    AND?: OutfitElementsWhereInput | OutfitElementsWhereInput[]
    OR?: OutfitElementsWhereInput[]
    NOT?: OutfitElementsWhereInput | OutfitElementsWhereInput[]
    gender?: EnumGenderFilter<"OutfitElements"> | $Enums.Gender
    categoryId?: IntFilter<"OutfitElements"> | number
    elementName?: StringFilter<"OutfitElements"> | string
    brandName?: StringNullableFilter<"OutfitElements"> | string | null
    priceRange?: EnumPriceRangeNullableFilter<"OutfitElements"> | $Enums.PriceRange | null
    materialType?: StringNullableFilter<"OutfitElements"> | string | null
    careInstructions?: StringNullableFilter<"OutfitElements"> | string | null
    seasonSuitability?: StringNullableListFilter<"OutfitElements">
    formalityLevel?: IntFilter<"OutfitElements"> | number
    createdAt?: DateTimeFilter<"OutfitElements"> | Date | string
    isActive?: BoolFilter<"OutfitElements"> | boolean
    category?: XOR<OutfitCategoryScalarRelationFilter, OutfitCategoryWhereInput>
    favourites?: UserFavouriteListRelationFilter
  }, "id" | "gender_categoryId_elementName">

  export type OutfitElementsOrderByWithAggregationInput = {
    id?: SortOrder
    gender?: SortOrder
    categoryId?: SortOrder
    elementName?: SortOrder
    brandName?: SortOrderInput | SortOrder
    priceRange?: SortOrderInput | SortOrder
    materialType?: SortOrderInput | SortOrder
    careInstructions?: SortOrderInput | SortOrder
    seasonSuitability?: SortOrder
    formalityLevel?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: OutfitElementsCountOrderByAggregateInput
    _avg?: OutfitElementsAvgOrderByAggregateInput
    _max?: OutfitElementsMaxOrderByAggregateInput
    _min?: OutfitElementsMinOrderByAggregateInput
    _sum?: OutfitElementsSumOrderByAggregateInput
  }

  export type OutfitElementsScalarWhereWithAggregatesInput = {
    AND?: OutfitElementsScalarWhereWithAggregatesInput | OutfitElementsScalarWhereWithAggregatesInput[]
    OR?: OutfitElementsScalarWhereWithAggregatesInput[]
    NOT?: OutfitElementsScalarWhereWithAggregatesInput | OutfitElementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OutfitElements"> | number
    gender?: EnumGenderWithAggregatesFilter<"OutfitElements"> | $Enums.Gender
    categoryId?: IntWithAggregatesFilter<"OutfitElements"> | number
    elementName?: StringWithAggregatesFilter<"OutfitElements"> | string
    brandName?: StringNullableWithAggregatesFilter<"OutfitElements"> | string | null
    priceRange?: EnumPriceRangeNullableWithAggregatesFilter<"OutfitElements"> | $Enums.PriceRange | null
    materialType?: StringNullableWithAggregatesFilter<"OutfitElements"> | string | null
    careInstructions?: StringNullableWithAggregatesFilter<"OutfitElements"> | string | null
    seasonSuitability?: StringNullableListFilter<"OutfitElements">
    formalityLevel?: IntWithAggregatesFilter<"OutfitElements"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OutfitElements"> | Date | string
    isActive?: BoolWithAggregatesFilter<"OutfitElements"> | boolean
  }

  export type WeatherTypeWhereInput = {
    AND?: WeatherTypeWhereInput | WeatherTypeWhereInput[]
    OR?: WeatherTypeWhereInput[]
    NOT?: WeatherTypeWhereInput | WeatherTypeWhereInput[]
    id?: IntFilter<"WeatherType"> | number
    weatherName?: StringFilter<"WeatherType"> | string
    description?: StringFilter<"WeatherType"> | string
    UserFavourite?: UserFavouriteListRelationFilter
  }

  export type WeatherTypeOrderByWithRelationInput = {
    id?: SortOrder
    weatherName?: SortOrder
    description?: SortOrder
    UserFavourite?: UserFavouriteOrderByRelationAggregateInput
  }

  export type WeatherTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    weatherName?: string
    AND?: WeatherTypeWhereInput | WeatherTypeWhereInput[]
    OR?: WeatherTypeWhereInput[]
    NOT?: WeatherTypeWhereInput | WeatherTypeWhereInput[]
    description?: StringFilter<"WeatherType"> | string
    UserFavourite?: UserFavouriteListRelationFilter
  }, "id" | "weatherName">

  export type WeatherTypeOrderByWithAggregationInput = {
    id?: SortOrder
    weatherName?: SortOrder
    description?: SortOrder
    _count?: WeatherTypeCountOrderByAggregateInput
    _avg?: WeatherTypeAvgOrderByAggregateInput
    _max?: WeatherTypeMaxOrderByAggregateInput
    _min?: WeatherTypeMinOrderByAggregateInput
    _sum?: WeatherTypeSumOrderByAggregateInput
  }

  export type WeatherTypeScalarWhereWithAggregatesInput = {
    AND?: WeatherTypeScalarWhereWithAggregatesInput | WeatherTypeScalarWhereWithAggregatesInput[]
    OR?: WeatherTypeScalarWhereWithAggregatesInput[]
    NOT?: WeatherTypeScalarWhereWithAggregatesInput | WeatherTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeatherType"> | number
    weatherName?: StringWithAggregatesFilter<"WeatherType"> | string
    description?: StringWithAggregatesFilter<"WeatherType"> | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: IntFilter<"UserPreference"> | number
    userId?: StringFilter<"UserPreference"> | string
    favoriteColors?: IntNullableListFilter<"UserPreference">
    bodyTypeId?: IntNullableFilter<"UserPreference"> | number | null
    favoriteStyles?: IntNullableListFilter<"UserPreference">
    budgetRange?: EnumBudgetRangeFilter<"UserPreference"> | $Enums.BudgetRange
    preferredBrands?: StringNullableListFilter<"UserPreference">
    styleConfidenceLevel?: IntNullableFilter<"UserPreference"> | number | null
    preferredWeatherTypes?: IntNullableListFilter<"UserPreference">
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteColors?: SortOrder
    bodyTypeId?: SortOrderInput | SortOrder
    favoriteStyles?: SortOrder
    budgetRange?: SortOrder
    preferredBrands?: SortOrder
    styleConfidenceLevel?: SortOrderInput | SortOrder
    preferredWeatherTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    favoriteColors?: IntNullableListFilter<"UserPreference">
    bodyTypeId?: IntNullableFilter<"UserPreference"> | number | null
    favoriteStyles?: IntNullableListFilter<"UserPreference">
    budgetRange?: EnumBudgetRangeFilter<"UserPreference"> | $Enums.BudgetRange
    preferredBrands?: StringNullableListFilter<"UserPreference">
    styleConfidenceLevel?: IntNullableFilter<"UserPreference"> | number | null
    preferredWeatherTypes?: IntNullableListFilter<"UserPreference">
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteColors?: SortOrder
    bodyTypeId?: SortOrderInput | SortOrder
    favoriteStyles?: SortOrder
    budgetRange?: SortOrder
    preferredBrands?: SortOrder
    styleConfidenceLevel?: SortOrderInput | SortOrder
    preferredWeatherTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _avg?: UserPreferenceAvgOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
    _sum?: UserPreferenceSumOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPreference"> | number
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    favoriteColors?: IntNullableListFilter<"UserPreference">
    bodyTypeId?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    favoriteStyles?: IntNullableListFilter<"UserPreference">
    budgetRange?: EnumBudgetRangeWithAggregatesFilter<"UserPreference"> | $Enums.BudgetRange
    preferredBrands?: StringNullableListFilter<"UserPreference">
    styleConfidenceLevel?: IntNullableWithAggregatesFilter<"UserPreference"> | number | null
    preferredWeatherTypes?: IntNullableListFilter<"UserPreference">
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type UserFavouriteWhereInput = {
    AND?: UserFavouriteWhereInput | UserFavouriteWhereInput[]
    OR?: UserFavouriteWhereInput[]
    NOT?: UserFavouriteWhereInput | UserFavouriteWhereInput[]
    id?: IntFilter<"UserFavourite"> | number
    userId?: StringFilter<"UserFavourite"> | string
    outfitElementsId?: IntFilter<"UserFavourite"> | number
    selectionReason?: EnumSelectionReasonNullableFilter<"UserFavourite"> | $Enums.SelectionReason | null
    occasion?: StringNullableFilter<"UserFavourite"> | string | null
    weatherConditionId?: IntNullableFilter<"UserFavourite"> | number | null
    userRating?: IntNullableFilter<"UserFavourite"> | number | null
    feedbackNotes?: StringNullableFilter<"UserFavourite"> | string | null
    selectedAt?: DateTimeFilter<"UserFavourite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfitElement?: XOR<OutfitElementsScalarRelationFilter, OutfitElementsWhereInput>
    weatherCondition?: XOR<WeatherTypeNullableScalarRelationFilter, WeatherTypeWhereInput> | null
  }

  export type UserFavouriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitElementsId?: SortOrder
    selectionReason?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    weatherConditionId?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    feedbackNotes?: SortOrderInput | SortOrder
    selectedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    outfitElement?: OutfitElementsOrderByWithRelationInput
    weatherCondition?: WeatherTypeOrderByWithRelationInput
  }

  export type UserFavouriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_outfitElementsId_selectedAt?: UserFavouriteUserIdOutfitElementsIdSelectedAtCompoundUniqueInput
    AND?: UserFavouriteWhereInput | UserFavouriteWhereInput[]
    OR?: UserFavouriteWhereInput[]
    NOT?: UserFavouriteWhereInput | UserFavouriteWhereInput[]
    userId?: StringFilter<"UserFavourite"> | string
    outfitElementsId?: IntFilter<"UserFavourite"> | number
    selectionReason?: EnumSelectionReasonNullableFilter<"UserFavourite"> | $Enums.SelectionReason | null
    occasion?: StringNullableFilter<"UserFavourite"> | string | null
    weatherConditionId?: IntNullableFilter<"UserFavourite"> | number | null
    userRating?: IntNullableFilter<"UserFavourite"> | number | null
    feedbackNotes?: StringNullableFilter<"UserFavourite"> | string | null
    selectedAt?: DateTimeFilter<"UserFavourite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    outfitElement?: XOR<OutfitElementsScalarRelationFilter, OutfitElementsWhereInput>
    weatherCondition?: XOR<WeatherTypeNullableScalarRelationFilter, WeatherTypeWhereInput> | null
  }, "id" | "userId_outfitElementsId_selectedAt">

  export type UserFavouriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitElementsId?: SortOrder
    selectionReason?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    weatherConditionId?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    feedbackNotes?: SortOrderInput | SortOrder
    selectedAt?: SortOrder
    _count?: UserFavouriteCountOrderByAggregateInput
    _avg?: UserFavouriteAvgOrderByAggregateInput
    _max?: UserFavouriteMaxOrderByAggregateInput
    _min?: UserFavouriteMinOrderByAggregateInput
    _sum?: UserFavouriteSumOrderByAggregateInput
  }

  export type UserFavouriteScalarWhereWithAggregatesInput = {
    AND?: UserFavouriteScalarWhereWithAggregatesInput | UserFavouriteScalarWhereWithAggregatesInput[]
    OR?: UserFavouriteScalarWhereWithAggregatesInput[]
    NOT?: UserFavouriteScalarWhereWithAggregatesInput | UserFavouriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserFavourite"> | number
    userId?: StringWithAggregatesFilter<"UserFavourite"> | string
    outfitElementsId?: IntWithAggregatesFilter<"UserFavourite"> | number
    selectionReason?: EnumSelectionReasonNullableWithAggregatesFilter<"UserFavourite"> | $Enums.SelectionReason | null
    occasion?: StringNullableWithAggregatesFilter<"UserFavourite"> | string | null
    weatherConditionId?: IntNullableWithAggregatesFilter<"UserFavourite"> | number | null
    userRating?: IntNullableWithAggregatesFilter<"UserFavourite"> | number | null
    feedbackNotes?: StringNullableWithAggregatesFilter<"UserFavourite"> | string | null
    selectedAt?: DateTimeWithAggregatesFilter<"UserFavourite"> | Date | string
  }

  export type OutfitInDigitalClosetWhereInput = {
    AND?: OutfitInDigitalClosetWhereInput | OutfitInDigitalClosetWhereInput[]
    OR?: OutfitInDigitalClosetWhereInput[]
    NOT?: OutfitInDigitalClosetWhereInput | OutfitInDigitalClosetWhereInput[]
    id?: IntFilter<"OutfitInDigitalCloset"> | number
    userId?: StringFilter<"OutfitInDigitalCloset"> | string
    outfitComposition?: JsonFilter<"OutfitInDigitalCloset">
    outfitName?: StringFilter<"OutfitInDigitalCloset"> | string
    dominantColors?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleTags?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableOccasions?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableWeather?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleDescription?: StringNullableFilter<"OutfitInDigitalCloset"> | string | null
    isFavorite?: BoolFilter<"OutfitInDigitalCloset"> | boolean
    suggestedAt?: DateTimeFilter<"OutfitInDigitalCloset"> | Date | string
    seasonRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OutfitInDigitalClosetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitComposition?: SortOrder
    outfitName?: SortOrder
    dominantColors?: SortOrder
    styleTags?: SortOrder
    suitableOccasions?: SortOrder
    suitableWeather?: SortOrder
    styleDescription?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    suggestedAt?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OutfitInDigitalClosetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OutfitInDigitalClosetWhereInput | OutfitInDigitalClosetWhereInput[]
    OR?: OutfitInDigitalClosetWhereInput[]
    NOT?: OutfitInDigitalClosetWhereInput | OutfitInDigitalClosetWhereInput[]
    userId?: StringFilter<"OutfitInDigitalCloset"> | string
    outfitComposition?: JsonFilter<"OutfitInDigitalCloset">
    outfitName?: StringFilter<"OutfitInDigitalCloset"> | string
    dominantColors?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleTags?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableOccasions?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableWeather?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleDescription?: StringNullableFilter<"OutfitInDigitalCloset"> | string | null
    isFavorite?: BoolFilter<"OutfitInDigitalCloset"> | boolean
    suggestedAt?: DateTimeFilter<"OutfitInDigitalCloset"> | Date | string
    seasonRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OutfitInDigitalClosetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitComposition?: SortOrder
    outfitName?: SortOrder
    dominantColors?: SortOrder
    styleTags?: SortOrder
    suitableOccasions?: SortOrder
    suitableWeather?: SortOrder
    styleDescription?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    suggestedAt?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
    _count?: OutfitInDigitalClosetCountOrderByAggregateInput
    _avg?: OutfitInDigitalClosetAvgOrderByAggregateInput
    _max?: OutfitInDigitalClosetMaxOrderByAggregateInput
    _min?: OutfitInDigitalClosetMinOrderByAggregateInput
    _sum?: OutfitInDigitalClosetSumOrderByAggregateInput
  }

  export type OutfitInDigitalClosetScalarWhereWithAggregatesInput = {
    AND?: OutfitInDigitalClosetScalarWhereWithAggregatesInput | OutfitInDigitalClosetScalarWhereWithAggregatesInput[]
    OR?: OutfitInDigitalClosetScalarWhereWithAggregatesInput[]
    NOT?: OutfitInDigitalClosetScalarWhereWithAggregatesInput | OutfitInDigitalClosetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OutfitInDigitalCloset"> | number
    userId?: StringWithAggregatesFilter<"OutfitInDigitalCloset"> | string
    outfitComposition?: JsonWithAggregatesFilter<"OutfitInDigitalCloset">
    outfitName?: StringWithAggregatesFilter<"OutfitInDigitalCloset"> | string
    dominantColors?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleTags?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableOccasions?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableWeather?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleDescription?: StringNullableWithAggregatesFilter<"OutfitInDigitalCloset"> | string | null
    isFavorite?: BoolWithAggregatesFilter<"OutfitInDigitalCloset"> | boolean
    suggestedAt?: DateTimeWithAggregatesFilter<"OutfitInDigitalCloset"> | Date | string
    seasonRelevance?: DecimalWithAggregatesFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalWithAggregatesFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserBodyTypeCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBodyTypeInput
  }

  export type UserBodyTypeUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBodyTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBodyTypeNestedInput
  }

  export type UserBodyTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBodyTypeCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBodyTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBodyTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccessoriesInput
  }

  export type UserAccessoryUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAccessoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessoriesNestedInput
  }

  export type UserAccessoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAccessoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFashionStylesInput
  }

  export type UserFashionStyleUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFashionStyleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFashionStylesNestedInput
  }

  export type UserFashionStyleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFashionStyleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationType?: string
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationType?: string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationType?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationType?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationType?: string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationType?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationType?: StringFieldUpdateOperationsInput | string
  }

  export type ColorPreferenceCreateInput = {
    colorName: string
    hexCode?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    isActive?: boolean
  }

  export type ColorPreferenceUncheckedCreateInput = {
    id?: number
    colorName: string
    hexCode?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    isActive?: boolean
  }

  export type ColorPreferenceUpdateInput = {
    colorName?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorName?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorPreferenceCreateManyInput = {
    id?: number
    colorName: string
    hexCode?: string | null
    shortDescription?: string | null
    createdAt?: Date | string
    isActive?: boolean
  }

  export type ColorPreferenceUpdateManyMutationInput = {
    colorName?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorName?: StringFieldUpdateOperationsInput | string
    hexCode?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutfitCategoryCreateInput = {
    categoryName: string
    description?: string | null
    displayOrder?: number
    elements?: OutfitElementsCreateNestedManyWithoutCategoryInput
  }

  export type OutfitCategoryUncheckedCreateInput = {
    id?: number
    categoryName: string
    description?: string | null
    displayOrder?: number
    elements?: OutfitElementsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type OutfitCategoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    elements?: OutfitElementsUpdateManyWithoutCategoryNestedInput
  }

  export type OutfitCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    elements?: OutfitElementsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OutfitCategoryCreateManyInput = {
    id?: number
    categoryName: string
    description?: string | null
    displayOrder?: number
  }

  export type OutfitCategoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OutfitCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OutfitElementsCreateInput = {
    gender?: $Enums.Gender
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
    category: OutfitCategoryCreateNestedOneWithoutElementsInput
    favourites?: UserFavouriteCreateNestedManyWithoutOutfitElementInput
  }

  export type OutfitElementsUncheckedCreateInput = {
    id?: number
    gender?: $Enums.Gender
    categoryId: number
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutOutfitElementInput
  }

  export type OutfitElementsUpdateInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    category?: OutfitCategoryUpdateOneRequiredWithoutElementsNestedInput
    favourites?: UserFavouriteUpdateManyWithoutOutfitElementNestedInput
  }

  export type OutfitElementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    categoryId?: IntFieldUpdateOperationsInput | number
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    favourites?: UserFavouriteUncheckedUpdateManyWithoutOutfitElementNestedInput
  }

  export type OutfitElementsCreateManyInput = {
    id?: number
    gender?: $Enums.Gender
    categoryId: number
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
  }

  export type OutfitElementsUpdateManyMutationInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutfitElementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    categoryId?: IntFieldUpdateOperationsInput | number
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeatherTypeCreateInput = {
    weatherName: string
    description: string
    UserFavourite?: UserFavouriteCreateNestedManyWithoutWeatherConditionInput
  }

  export type WeatherTypeUncheckedCreateInput = {
    id?: number
    weatherName: string
    description: string
    UserFavourite?: UserFavouriteUncheckedCreateNestedManyWithoutWeatherConditionInput
  }

  export type WeatherTypeUpdateInput = {
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    UserFavourite?: UserFavouriteUpdateManyWithoutWeatherConditionNestedInput
  }

  export type WeatherTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    UserFavourite?: UserFavouriteUncheckedUpdateManyWithoutWeatherConditionNestedInput
  }

  export type WeatherTypeCreateManyInput = {
    id?: number
    weatherName: string
    description: string
  }

  export type WeatherTypeUpdateManyMutationInput = {
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WeatherTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferenceCreateInput = {
    favoriteColors?: UserPreferenceCreatefavoriteColorsInput | number[]
    bodyTypeId?: number | null
    favoriteStyles?: UserPreferenceCreatefavoriteStylesInput | number[]
    budgetRange?: $Enums.BudgetRange
    preferredBrands?: UserPreferenceCreatepreferredBrandsInput | string[]
    styleConfidenceLevel?: number | null
    preferredWeatherTypes?: UserPreferenceCreatepreferredWeatherTypesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: number
    userId: string
    favoriteColors?: UserPreferenceCreatefavoriteColorsInput | number[]
    bodyTypeId?: number | null
    favoriteStyles?: UserPreferenceCreatefavoriteStylesInput | number[]
    budgetRange?: $Enums.BudgetRange
    preferredBrands?: UserPreferenceCreatepreferredBrandsInput | string[]
    styleConfidenceLevel?: number | null
    preferredWeatherTypes?: UserPreferenceCreatepreferredWeatherTypesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: number
    userId: string
    favoriteColors?: UserPreferenceCreatefavoriteColorsInput | number[]
    bodyTypeId?: number | null
    favoriteStyles?: UserPreferenceCreatefavoriteStylesInput | number[]
    budgetRange?: $Enums.BudgetRange
    preferredBrands?: UserPreferenceCreatepreferredBrandsInput | string[]
    styleConfidenceLevel?: number | null
    preferredWeatherTypes?: UserPreferenceCreatepreferredWeatherTypesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteCreateInput = {
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
    outfitElement: OutfitElementsCreateNestedOneWithoutFavouritesInput
    weatherCondition?: WeatherTypeCreateNestedOneWithoutUserFavouriteInput
  }

  export type UserFavouriteUncheckedCreateInput = {
    id?: number
    userId: string
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteUpdateInput = {
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    outfitElement?: OutfitElementsUpdateOneRequiredWithoutFavouritesNestedInput
    weatherCondition?: WeatherTypeUpdateOneWithoutUserFavouriteNestedInput
  }

  export type UserFavouriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteCreateManyInput = {
    id?: number
    userId: string
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteUpdateManyMutationInput = {
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitInDigitalClosetCreateInput = {
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutDigitalClosetsInput
  }

  export type OutfitInDigitalClosetUncheckedCreateInput = {
    id?: number
    userId: string
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUpdateInput = {
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutDigitalClosetsNestedInput
  }

  export type OutfitInDigitalClosetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetCreateManyInput = {
    id?: number
    userId: string
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUpdateManyMutationInput = {
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel
  }

  export type UserBodyTypeNullableScalarRelationFilter = {
    is?: UserBodyTypeWhereInput | null
    isNot?: UserBodyTypeWhereInput | null
  }

  export type UserAccessoryListRelationFilter = {
    every?: UserAccessoryWhereInput
    some?: UserAccessoryWhereInput
    none?: UserAccessoryWhereInput
  }

  export type UserFashionStyleListRelationFilter = {
    every?: UserFashionStyleWhereInput
    some?: UserFashionStyleWhereInput
    none?: UserFashionStyleWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null
    isNot?: UserPreferenceWhereInput | null
  }

  export type UserFavouriteListRelationFilter = {
    every?: UserFavouriteWhereInput
    some?: UserFavouriteWhereInput
    none?: UserFavouriteWhereInput
  }

  export type OutfitInDigitalClosetListRelationFilter = {
    every?: OutfitInDigitalClosetWhereInput
    some?: OutfitInDigitalClosetWhereInput
    none?: OutfitInDigitalClosetWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAccessoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFashionStyleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitInDigitalClosetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    onboardingCompleted?: SortOrder
    privacyLevel?: SortOrder
    timezone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    onboardingCompleted?: SortOrder
    privacyLevel?: SortOrder
    timezone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    onboardingCompleted?: SortOrder
    privacyLevel?: SortOrder
    timezone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>
    _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserBodyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBodyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBodyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAccessoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAccessoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAccessoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFashionStyleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFashionStyleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFashionStyleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
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

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationType?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationType?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationType?: SortOrder
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

  export type ColorPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    colorName?: SortOrder
    hexCode?: SortOrder
    shortDescription?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type ColorPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    colorName?: SortOrder
    hexCode?: SortOrder
    shortDescription?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type ColorPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    colorName?: SortOrder
    hexCode?: SortOrder
    shortDescription?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type ColorPreferenceSumOrderByAggregateInput = {
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

  export type OutfitElementsListRelationFilter = {
    every?: OutfitElementsWhereInput
    some?: OutfitElementsWhereInput
    none?: OutfitElementsWhereInput
  }

  export type OutfitElementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutfitCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
  }

  export type OutfitCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type OutfitCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
  }

  export type OutfitCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
  }

  export type OutfitCategorySumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumPriceRangeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriceRangeNullableFilter<$PrismaModel> | $Enums.PriceRange | null
  }

  export type OutfitCategoryScalarRelationFilter = {
    is?: OutfitCategoryWhereInput
    isNot?: OutfitCategoryWhereInput
  }

  export type OutfitElementsGenderCategoryIdElementNameCompoundUniqueInput = {
    gender: $Enums.Gender
    categoryId: number
    elementName: string
  }

  export type OutfitElementsCountOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    categoryId?: SortOrder
    elementName?: SortOrder
    brandName?: SortOrder
    priceRange?: SortOrder
    materialType?: SortOrder
    careInstructions?: SortOrder
    seasonSuitability?: SortOrder
    formalityLevel?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type OutfitElementsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    formalityLevel?: SortOrder
  }

  export type OutfitElementsMaxOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    categoryId?: SortOrder
    elementName?: SortOrder
    brandName?: SortOrder
    priceRange?: SortOrder
    materialType?: SortOrder
    careInstructions?: SortOrder
    formalityLevel?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type OutfitElementsMinOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    categoryId?: SortOrder
    elementName?: SortOrder
    brandName?: SortOrder
    priceRange?: SortOrder
    materialType?: SortOrder
    careInstructions?: SortOrder
    formalityLevel?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type OutfitElementsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    formalityLevel?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumPriceRangeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriceRangeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PriceRange | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriceRangeNullableFilter<$PrismaModel>
    _max?: NestedEnumPriceRangeNullableFilter<$PrismaModel>
  }

  export type WeatherTypeCountOrderByAggregateInput = {
    id?: SortOrder
    weatherName?: SortOrder
    description?: SortOrder
  }

  export type WeatherTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeatherTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    weatherName?: SortOrder
    description?: SortOrder
  }

  export type WeatherTypeMinOrderByAggregateInput = {
    id?: SortOrder
    weatherName?: SortOrder
    description?: SortOrder
  }

  export type WeatherTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumBudgetRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetRange | EnumBudgetRangeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetRangeFilter<$PrismaModel> | $Enums.BudgetRange
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    favoriteColors?: SortOrder
    bodyTypeId?: SortOrder
    favoriteStyles?: SortOrder
    budgetRange?: SortOrder
    preferredBrands?: SortOrder
    styleConfidenceLevel?: SortOrder
    preferredWeatherTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    favoriteColors?: SortOrder
    bodyTypeId?: SortOrder
    favoriteStyles?: SortOrder
    styleConfidenceLevel?: SortOrder
    preferredWeatherTypes?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bodyTypeId?: SortOrder
    budgetRange?: SortOrder
    styleConfidenceLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bodyTypeId?: SortOrder
    budgetRange?: SortOrder
    styleConfidenceLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
    favoriteColors?: SortOrder
    bodyTypeId?: SortOrder
    favoriteStyles?: SortOrder
    styleConfidenceLevel?: SortOrder
    preferredWeatherTypes?: SortOrder
  }

  export type EnumBudgetRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetRange | EnumBudgetRangeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetRangeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetRangeFilter<$PrismaModel>
    _max?: NestedEnumBudgetRangeFilter<$PrismaModel>
  }

  export type EnumSelectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionReason | EnumSelectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSelectionReasonNullableFilter<$PrismaModel> | $Enums.SelectionReason | null
  }

  export type OutfitElementsScalarRelationFilter = {
    is?: OutfitElementsWhereInput
    isNot?: OutfitElementsWhereInput
  }

  export type WeatherTypeNullableScalarRelationFilter = {
    is?: WeatherTypeWhereInput | null
    isNot?: WeatherTypeWhereInput | null
  }

  export type UserFavouriteUserIdOutfitElementsIdSelectedAtCompoundUniqueInput = {
    userId: string
    outfitElementsId: number
    selectedAt: Date | string
  }

  export type UserFavouriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitElementsId?: SortOrder
    selectionReason?: SortOrder
    occasion?: SortOrder
    weatherConditionId?: SortOrder
    userRating?: SortOrder
    feedbackNotes?: SortOrder
    selectedAt?: SortOrder
  }

  export type UserFavouriteAvgOrderByAggregateInput = {
    id?: SortOrder
    outfitElementsId?: SortOrder
    weatherConditionId?: SortOrder
    userRating?: SortOrder
  }

  export type UserFavouriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitElementsId?: SortOrder
    selectionReason?: SortOrder
    occasion?: SortOrder
    weatherConditionId?: SortOrder
    userRating?: SortOrder
    feedbackNotes?: SortOrder
    selectedAt?: SortOrder
  }

  export type UserFavouriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitElementsId?: SortOrder
    selectionReason?: SortOrder
    occasion?: SortOrder
    weatherConditionId?: SortOrder
    userRating?: SortOrder
    feedbackNotes?: SortOrder
    selectedAt?: SortOrder
  }

  export type UserFavouriteSumOrderByAggregateInput = {
    id?: SortOrder
    outfitElementsId?: SortOrder
    weatherConditionId?: SortOrder
    userRating?: SortOrder
  }

  export type EnumSelectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionReason | EnumSelectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSelectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.SelectionReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSelectionReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumSelectionReasonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitComposition?: SortOrder
    outfitName?: SortOrder
    dominantColors?: SortOrder
    styleTags?: SortOrder
    suitableOccasions?: SortOrder
    suitableWeather?: SortOrder
    styleDescription?: SortOrder
    isFavorite?: SortOrder
    suggestedAt?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
  }

  export type OutfitInDigitalClosetAvgOrderByAggregateInput = {
    id?: SortOrder
    dominantColors?: SortOrder
    suitableWeather?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
  }

  export type OutfitInDigitalClosetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitName?: SortOrder
    styleDescription?: SortOrder
    isFavorite?: SortOrder
    suggestedAt?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
  }

  export type OutfitInDigitalClosetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    outfitName?: SortOrder
    styleDescription?: SortOrder
    isFavorite?: SortOrder
    suggestedAt?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
  }

  export type OutfitInDigitalClosetSumOrderByAggregateInput = {
    id?: SortOrder
    dominantColors?: SortOrder
    suitableWeather?: SortOrder
    seasonRelevance?: SortOrder
    trendRelevance?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreatecolorInput = {
    set: string[]
  }

  export type UserBodyTypeCreateNestedOneWithoutUserInput = {
    create?: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserBodyTypeCreateOrConnectWithoutUserInput
    connect?: UserBodyTypeWhereUniqueInput
  }

  export type UserAccessoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput> | UserAccessoryCreateWithoutUserInput[] | UserAccessoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessoryCreateOrConnectWithoutUserInput | UserAccessoryCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessoryCreateManyUserInputEnvelope
    connect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
  }

  export type UserFashionStyleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput> | UserFashionStyleCreateWithoutUserInput[] | UserFashionStyleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFashionStyleCreateOrConnectWithoutUserInput | UserFashionStyleCreateOrConnectWithoutUserInput[]
    createMany?: UserFashionStyleCreateManyUserInputEnvelope
    connect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type UserFavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput> | UserFavouriteCreateWithoutUserInput[] | UserFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutUserInput | UserFavouriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavouriteCreateManyUserInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type OutfitInDigitalClosetCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput> | OutfitInDigitalClosetCreateWithoutUserInput[] | OutfitInDigitalClosetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitInDigitalClosetCreateOrConnectWithoutUserInput | OutfitInDigitalClosetCreateOrConnectWithoutUserInput[]
    createMany?: OutfitInDigitalClosetCreateManyUserInputEnvelope
    connect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserBodyTypeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserBodyTypeCreateOrConnectWithoutUserInput
    connect?: UserBodyTypeWhereUniqueInput
  }

  export type UserAccessoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput> | UserAccessoryCreateWithoutUserInput[] | UserAccessoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessoryCreateOrConnectWithoutUserInput | UserAccessoryCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessoryCreateManyUserInputEnvelope
    connect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
  }

  export type UserFashionStyleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput> | UserFashionStyleCreateWithoutUserInput[] | UserFashionStyleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFashionStyleCreateOrConnectWithoutUserInput | UserFashionStyleCreateOrConnectWithoutUserInput[]
    createMany?: UserFashionStyleCreateManyUserInputEnvelope
    connect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type UserFavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput> | UserFavouriteCreateWithoutUserInput[] | UserFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutUserInput | UserFavouriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavouriteCreateManyUserInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput> | OutfitInDigitalClosetCreateWithoutUserInput[] | OutfitInDigitalClosetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitInDigitalClosetCreateOrConnectWithoutUserInput | OutfitInDigitalClosetCreateOrConnectWithoutUserInput[]
    createMany?: OutfitInDigitalClosetCreateManyUserInputEnvelope
    connect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type UserUpdatecolorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPrivacyLevelFieldUpdateOperationsInput = {
    set?: $Enums.PrivacyLevel
  }

  export type UserBodyTypeUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserBodyTypeCreateOrConnectWithoutUserInput
    upsert?: UserBodyTypeUpsertWithoutUserInput
    disconnect?: UserBodyTypeWhereInput | boolean
    delete?: UserBodyTypeWhereInput | boolean
    connect?: UserBodyTypeWhereUniqueInput
    update?: XOR<XOR<UserBodyTypeUpdateToOneWithWhereWithoutUserInput, UserBodyTypeUpdateWithoutUserInput>, UserBodyTypeUncheckedUpdateWithoutUserInput>
  }

  export type UserAccessoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput> | UserAccessoryCreateWithoutUserInput[] | UserAccessoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessoryCreateOrConnectWithoutUserInput | UserAccessoryCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessoryUpsertWithWhereUniqueWithoutUserInput | UserAccessoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessoryCreateManyUserInputEnvelope
    set?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    disconnect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    delete?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    connect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    update?: UserAccessoryUpdateWithWhereUniqueWithoutUserInput | UserAccessoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessoryUpdateManyWithWhereWithoutUserInput | UserAccessoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessoryScalarWhereInput | UserAccessoryScalarWhereInput[]
  }

  export type UserFashionStyleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput> | UserFashionStyleCreateWithoutUserInput[] | UserFashionStyleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFashionStyleCreateOrConnectWithoutUserInput | UserFashionStyleCreateOrConnectWithoutUserInput[]
    upsert?: UserFashionStyleUpsertWithWhereUniqueWithoutUserInput | UserFashionStyleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFashionStyleCreateManyUserInputEnvelope
    set?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    disconnect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    delete?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    connect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    update?: UserFashionStyleUpdateWithWhereUniqueWithoutUserInput | UserFashionStyleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFashionStyleUpdateManyWithWhereWithoutUserInput | UserFashionStyleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFashionStyleScalarWhereInput | UserFashionStyleScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserFavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput> | UserFavouriteCreateWithoutUserInput[] | UserFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutUserInput | UserFavouriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutUserInput | UserFavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavouriteCreateManyUserInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutUserInput | UserFavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutUserInput | UserFavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type OutfitInDigitalClosetUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput> | OutfitInDigitalClosetCreateWithoutUserInput[] | OutfitInDigitalClosetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitInDigitalClosetCreateOrConnectWithoutUserInput | OutfitInDigitalClosetCreateOrConnectWithoutUserInput[]
    upsert?: OutfitInDigitalClosetUpsertWithWhereUniqueWithoutUserInput | OutfitInDigitalClosetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitInDigitalClosetCreateManyUserInputEnvelope
    set?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    disconnect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    delete?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    connect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    update?: OutfitInDigitalClosetUpdateWithWhereUniqueWithoutUserInput | OutfitInDigitalClosetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitInDigitalClosetUpdateManyWithWhereWithoutUserInput | OutfitInDigitalClosetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitInDigitalClosetScalarWhereInput | OutfitInDigitalClosetScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserBodyTypeCreateOrConnectWithoutUserInput
    upsert?: UserBodyTypeUpsertWithoutUserInput
    disconnect?: UserBodyTypeWhereInput | boolean
    delete?: UserBodyTypeWhereInput | boolean
    connect?: UserBodyTypeWhereUniqueInput
    update?: XOR<XOR<UserBodyTypeUpdateToOneWithWhereWithoutUserInput, UserBodyTypeUpdateWithoutUserInput>, UserBodyTypeUncheckedUpdateWithoutUserInput>
  }

  export type UserAccessoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput> | UserAccessoryCreateWithoutUserInput[] | UserAccessoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessoryCreateOrConnectWithoutUserInput | UserAccessoryCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessoryUpsertWithWhereUniqueWithoutUserInput | UserAccessoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessoryCreateManyUserInputEnvelope
    set?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    disconnect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    delete?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    connect?: UserAccessoryWhereUniqueInput | UserAccessoryWhereUniqueInput[]
    update?: UserAccessoryUpdateWithWhereUniqueWithoutUserInput | UserAccessoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessoryUpdateManyWithWhereWithoutUserInput | UserAccessoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessoryScalarWhereInput | UserAccessoryScalarWhereInput[]
  }

  export type UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput> | UserFashionStyleCreateWithoutUserInput[] | UserFashionStyleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFashionStyleCreateOrConnectWithoutUserInput | UserFashionStyleCreateOrConnectWithoutUserInput[]
    upsert?: UserFashionStyleUpsertWithWhereUniqueWithoutUserInput | UserFashionStyleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFashionStyleCreateManyUserInputEnvelope
    set?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    disconnect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    delete?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    connect?: UserFashionStyleWhereUniqueInput | UserFashionStyleWhereUniqueInput[]
    update?: UserFashionStyleUpdateWithWhereUniqueWithoutUserInput | UserFashionStyleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFashionStyleUpdateManyWithWhereWithoutUserInput | UserFashionStyleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFashionStyleScalarWhereInput | UserFashionStyleScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserFavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput> | UserFavouriteCreateWithoutUserInput[] | UserFavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutUserInput | UserFavouriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutUserInput | UserFavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavouriteCreateManyUserInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutUserInput | UserFavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutUserInput | UserFavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput> | OutfitInDigitalClosetCreateWithoutUserInput[] | OutfitInDigitalClosetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OutfitInDigitalClosetCreateOrConnectWithoutUserInput | OutfitInDigitalClosetCreateOrConnectWithoutUserInput[]
    upsert?: OutfitInDigitalClosetUpsertWithWhereUniqueWithoutUserInput | OutfitInDigitalClosetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OutfitInDigitalClosetCreateManyUserInputEnvelope
    set?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    disconnect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    delete?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    connect?: OutfitInDigitalClosetWhereUniqueInput | OutfitInDigitalClosetWhereUniqueInput[]
    update?: OutfitInDigitalClosetUpdateWithWhereUniqueWithoutUserInput | OutfitInDigitalClosetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OutfitInDigitalClosetUpdateManyWithWhereWithoutUserInput | OutfitInDigitalClosetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OutfitInDigitalClosetScalarWhereInput | OutfitInDigitalClosetScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBodyTypeInput = {
    create?: XOR<UserCreateWithoutBodyTypeInput, UserUncheckedCreateWithoutBodyTypeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyTypeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBodyTypeNestedInput = {
    create?: XOR<UserCreateWithoutBodyTypeInput, UserUncheckedCreateWithoutBodyTypeInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyTypeInput
    upsert?: UserUpsertWithoutBodyTypeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBodyTypeInput, UserUpdateWithoutBodyTypeInput>, UserUncheckedUpdateWithoutBodyTypeInput>
  }

  export type UserCreateNestedOneWithoutAccessoriesInput = {
    create?: XOR<UserCreateWithoutAccessoriesInput, UserUncheckedCreateWithoutAccessoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccessoriesNestedInput = {
    create?: XOR<UserCreateWithoutAccessoriesInput, UserUncheckedCreateWithoutAccessoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessoriesInput
    upsert?: UserUpsertWithoutAccessoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessoriesInput, UserUpdateWithoutAccessoriesInput>, UserUncheckedUpdateWithoutAccessoriesInput>
  }

  export type UserCreateNestedOneWithoutFashionStylesInput = {
    create?: XOR<UserCreateWithoutFashionStylesInput, UserUncheckedCreateWithoutFashionStylesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFashionStylesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFashionStylesNestedInput = {
    create?: XOR<UserCreateWithoutFashionStylesInput, UserUncheckedCreateWithoutFashionStylesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFashionStylesInput
    upsert?: UserUpsertWithoutFashionStylesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFashionStylesInput, UserUpdateWithoutFashionStylesInput>, UserUncheckedUpdateWithoutFashionStylesInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OutfitElementsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput> | OutfitElementsCreateWithoutCategoryInput[] | OutfitElementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutCategoryInput | OutfitElementsCreateOrConnectWithoutCategoryInput[]
    createMany?: OutfitElementsCreateManyCategoryInputEnvelope
    connect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
  }

  export type OutfitElementsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput> | OutfitElementsCreateWithoutCategoryInput[] | OutfitElementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutCategoryInput | OutfitElementsCreateOrConnectWithoutCategoryInput[]
    createMany?: OutfitElementsCreateManyCategoryInputEnvelope
    connect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
  }

  export type OutfitElementsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput> | OutfitElementsCreateWithoutCategoryInput[] | OutfitElementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutCategoryInput | OutfitElementsCreateOrConnectWithoutCategoryInput[]
    upsert?: OutfitElementsUpsertWithWhereUniqueWithoutCategoryInput | OutfitElementsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OutfitElementsCreateManyCategoryInputEnvelope
    set?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    disconnect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    delete?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    connect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    update?: OutfitElementsUpdateWithWhereUniqueWithoutCategoryInput | OutfitElementsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OutfitElementsUpdateManyWithWhereWithoutCategoryInput | OutfitElementsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OutfitElementsScalarWhereInput | OutfitElementsScalarWhereInput[]
  }

  export type OutfitElementsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput> | OutfitElementsCreateWithoutCategoryInput[] | OutfitElementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutCategoryInput | OutfitElementsCreateOrConnectWithoutCategoryInput[]
    upsert?: OutfitElementsUpsertWithWhereUniqueWithoutCategoryInput | OutfitElementsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: OutfitElementsCreateManyCategoryInputEnvelope
    set?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    disconnect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    delete?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    connect?: OutfitElementsWhereUniqueInput | OutfitElementsWhereUniqueInput[]
    update?: OutfitElementsUpdateWithWhereUniqueWithoutCategoryInput | OutfitElementsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: OutfitElementsUpdateManyWithWhereWithoutCategoryInput | OutfitElementsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: OutfitElementsScalarWhereInput | OutfitElementsScalarWhereInput[]
  }

  export type OutfitElementsCreateseasonSuitabilityInput = {
    set: string[]
  }

  export type OutfitCategoryCreateNestedOneWithoutElementsInput = {
    create?: XOR<OutfitCategoryCreateWithoutElementsInput, OutfitCategoryUncheckedCreateWithoutElementsInput>
    connectOrCreate?: OutfitCategoryCreateOrConnectWithoutElementsInput
    connect?: OutfitCategoryWhereUniqueInput
  }

  export type UserFavouriteCreateNestedManyWithoutOutfitElementInput = {
    create?: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput> | UserFavouriteCreateWithoutOutfitElementInput[] | UserFavouriteUncheckedCreateWithoutOutfitElementInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutOutfitElementInput | UserFavouriteCreateOrConnectWithoutOutfitElementInput[]
    createMany?: UserFavouriteCreateManyOutfitElementInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type UserFavouriteUncheckedCreateNestedManyWithoutOutfitElementInput = {
    create?: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput> | UserFavouriteCreateWithoutOutfitElementInput[] | UserFavouriteUncheckedCreateWithoutOutfitElementInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutOutfitElementInput | UserFavouriteCreateOrConnectWithoutOutfitElementInput[]
    createMany?: UserFavouriteCreateManyOutfitElementInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableEnumPriceRangeFieldUpdateOperationsInput = {
    set?: $Enums.PriceRange | null
  }

  export type OutfitElementsUpdateseasonSuitabilityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OutfitCategoryUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<OutfitCategoryCreateWithoutElementsInput, OutfitCategoryUncheckedCreateWithoutElementsInput>
    connectOrCreate?: OutfitCategoryCreateOrConnectWithoutElementsInput
    upsert?: OutfitCategoryUpsertWithoutElementsInput
    connect?: OutfitCategoryWhereUniqueInput
    update?: XOR<XOR<OutfitCategoryUpdateToOneWithWhereWithoutElementsInput, OutfitCategoryUpdateWithoutElementsInput>, OutfitCategoryUncheckedUpdateWithoutElementsInput>
  }

  export type UserFavouriteUpdateManyWithoutOutfitElementNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput> | UserFavouriteCreateWithoutOutfitElementInput[] | UserFavouriteUncheckedCreateWithoutOutfitElementInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutOutfitElementInput | UserFavouriteCreateOrConnectWithoutOutfitElementInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutOutfitElementInput | UserFavouriteUpsertWithWhereUniqueWithoutOutfitElementInput[]
    createMany?: UserFavouriteCreateManyOutfitElementInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutOutfitElementInput | UserFavouriteUpdateWithWhereUniqueWithoutOutfitElementInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutOutfitElementInput | UserFavouriteUpdateManyWithWhereWithoutOutfitElementInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type UserFavouriteUncheckedUpdateManyWithoutOutfitElementNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput> | UserFavouriteCreateWithoutOutfitElementInput[] | UserFavouriteUncheckedCreateWithoutOutfitElementInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutOutfitElementInput | UserFavouriteCreateOrConnectWithoutOutfitElementInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutOutfitElementInput | UserFavouriteUpsertWithWhereUniqueWithoutOutfitElementInput[]
    createMany?: UserFavouriteCreateManyOutfitElementInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutOutfitElementInput | UserFavouriteUpdateWithWhereUniqueWithoutOutfitElementInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutOutfitElementInput | UserFavouriteUpdateManyWithWhereWithoutOutfitElementInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type UserFavouriteCreateNestedManyWithoutWeatherConditionInput = {
    create?: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput> | UserFavouriteCreateWithoutWeatherConditionInput[] | UserFavouriteUncheckedCreateWithoutWeatherConditionInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutWeatherConditionInput | UserFavouriteCreateOrConnectWithoutWeatherConditionInput[]
    createMany?: UserFavouriteCreateManyWeatherConditionInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type UserFavouriteUncheckedCreateNestedManyWithoutWeatherConditionInput = {
    create?: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput> | UserFavouriteCreateWithoutWeatherConditionInput[] | UserFavouriteUncheckedCreateWithoutWeatherConditionInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutWeatherConditionInput | UserFavouriteCreateOrConnectWithoutWeatherConditionInput[]
    createMany?: UserFavouriteCreateManyWeatherConditionInputEnvelope
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
  }

  export type UserFavouriteUpdateManyWithoutWeatherConditionNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput> | UserFavouriteCreateWithoutWeatherConditionInput[] | UserFavouriteUncheckedCreateWithoutWeatherConditionInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutWeatherConditionInput | UserFavouriteCreateOrConnectWithoutWeatherConditionInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutWeatherConditionInput | UserFavouriteUpsertWithWhereUniqueWithoutWeatherConditionInput[]
    createMany?: UserFavouriteCreateManyWeatherConditionInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutWeatherConditionInput | UserFavouriteUpdateWithWhereUniqueWithoutWeatherConditionInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutWeatherConditionInput | UserFavouriteUpdateManyWithWhereWithoutWeatherConditionInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type UserFavouriteUncheckedUpdateManyWithoutWeatherConditionNestedInput = {
    create?: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput> | UserFavouriteCreateWithoutWeatherConditionInput[] | UserFavouriteUncheckedCreateWithoutWeatherConditionInput[]
    connectOrCreate?: UserFavouriteCreateOrConnectWithoutWeatherConditionInput | UserFavouriteCreateOrConnectWithoutWeatherConditionInput[]
    upsert?: UserFavouriteUpsertWithWhereUniqueWithoutWeatherConditionInput | UserFavouriteUpsertWithWhereUniqueWithoutWeatherConditionInput[]
    createMany?: UserFavouriteCreateManyWeatherConditionInputEnvelope
    set?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    disconnect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    delete?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    connect?: UserFavouriteWhereUniqueInput | UserFavouriteWhereUniqueInput[]
    update?: UserFavouriteUpdateWithWhereUniqueWithoutWeatherConditionInput | UserFavouriteUpdateWithWhereUniqueWithoutWeatherConditionInput[]
    updateMany?: UserFavouriteUpdateManyWithWhereWithoutWeatherConditionInput | UserFavouriteUpdateManyWithWhereWithoutWeatherConditionInput[]
    deleteMany?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
  }

  export type UserPreferenceCreatefavoriteColorsInput = {
    set: number[]
  }

  export type UserPreferenceCreatefavoriteStylesInput = {
    set: number[]
  }

  export type UserPreferenceCreatepreferredBrandsInput = {
    set: string[]
  }

  export type UserPreferenceCreatepreferredWeatherTypesInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserPreferenceUpdatefavoriteColorsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserPreferenceUpdatefavoriteStylesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EnumBudgetRangeFieldUpdateOperationsInput = {
    set?: $Enums.BudgetRange
  }

  export type UserPreferenceUpdatepreferredBrandsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferenceUpdatepreferredWeatherTypesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type OutfitElementsCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<OutfitElementsCreateWithoutFavouritesInput, OutfitElementsUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutFavouritesInput
    connect?: OutfitElementsWhereUniqueInput
  }

  export type WeatherTypeCreateNestedOneWithoutUserFavouriteInput = {
    create?: XOR<WeatherTypeCreateWithoutUserFavouriteInput, WeatherTypeUncheckedCreateWithoutUserFavouriteInput>
    connectOrCreate?: WeatherTypeCreateOrConnectWithoutUserFavouriteInput
    connect?: WeatherTypeWhereUniqueInput
  }

  export type NullableEnumSelectionReasonFieldUpdateOperationsInput = {
    set?: $Enums.SelectionReason | null
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type OutfitElementsUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<OutfitElementsCreateWithoutFavouritesInput, OutfitElementsUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: OutfitElementsCreateOrConnectWithoutFavouritesInput
    upsert?: OutfitElementsUpsertWithoutFavouritesInput
    connect?: OutfitElementsWhereUniqueInput
    update?: XOR<XOR<OutfitElementsUpdateToOneWithWhereWithoutFavouritesInput, OutfitElementsUpdateWithoutFavouritesInput>, OutfitElementsUncheckedUpdateWithoutFavouritesInput>
  }

  export type WeatherTypeUpdateOneWithoutUserFavouriteNestedInput = {
    create?: XOR<WeatherTypeCreateWithoutUserFavouriteInput, WeatherTypeUncheckedCreateWithoutUserFavouriteInput>
    connectOrCreate?: WeatherTypeCreateOrConnectWithoutUserFavouriteInput
    upsert?: WeatherTypeUpsertWithoutUserFavouriteInput
    disconnect?: WeatherTypeWhereInput | boolean
    delete?: WeatherTypeWhereInput | boolean
    connect?: WeatherTypeWhereUniqueInput
    update?: XOR<XOR<WeatherTypeUpdateToOneWithWhereWithoutUserFavouriteInput, WeatherTypeUpdateWithoutUserFavouriteInput>, WeatherTypeUncheckedUpdateWithoutUserFavouriteInput>
  }

  export type OutfitInDigitalClosetCreatedominantColorsInput = {
    set: number[]
  }

  export type OutfitInDigitalClosetCreatestyleTagsInput = {
    set: string[]
  }

  export type OutfitInDigitalClosetCreatesuitableOccasionsInput = {
    set: string[]
  }

  export type OutfitInDigitalClosetCreatesuitableWeatherInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutDigitalClosetsInput = {
    create?: XOR<UserCreateWithoutDigitalClosetsInput, UserUncheckedCreateWithoutDigitalClosetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDigitalClosetsInput
    connect?: UserWhereUniqueInput
  }

  export type OutfitInDigitalClosetUpdatedominantColorsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type OutfitInDigitalClosetUpdatestyleTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OutfitInDigitalClosetUpdatesuitableOccasionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OutfitInDigitalClosetUpdatesuitableWeatherInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutDigitalClosetsNestedInput = {
    create?: XOR<UserCreateWithoutDigitalClosetsInput, UserUncheckedCreateWithoutDigitalClosetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDigitalClosetsInput
    upsert?: UserUpsertWithoutDigitalClosetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDigitalClosetsInput, UserUpdateWithoutDigitalClosetsInput>, UserUncheckedUpdateWithoutDigitalClosetsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumPrivacyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelFilter<$PrismaModel> | $Enums.PrivacyLevel
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivacyLevel | EnumPrivacyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivacyLevel[] | ListEnumPrivacyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivacyLevelWithAggregatesFilter<$PrismaModel> | $Enums.PrivacyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivacyLevelFilter<$PrismaModel>
    _max?: NestedEnumPrivacyLevelFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumPriceRangeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriceRangeNullableFilter<$PrismaModel> | $Enums.PriceRange | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumPriceRangeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceRange | EnumPriceRangeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PriceRange[] | ListEnumPriceRangeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriceRangeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PriceRange | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriceRangeNullableFilter<$PrismaModel>
    _max?: NestedEnumPriceRangeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBudgetRangeFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetRange | EnumBudgetRangeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetRangeFilter<$PrismaModel> | $Enums.BudgetRange
  }

  export type NestedEnumBudgetRangeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetRange | EnumBudgetRangeFieldRefInput<$PrismaModel>
    in?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BudgetRange[] | ListEnumBudgetRangeFieldRefInput<$PrismaModel>
    not?: NestedEnumBudgetRangeWithAggregatesFilter<$PrismaModel> | $Enums.BudgetRange
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBudgetRangeFilter<$PrismaModel>
    _max?: NestedEnumBudgetRangeFilter<$PrismaModel>
  }

  export type NestedEnumSelectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionReason | EnumSelectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSelectionReasonNullableFilter<$PrismaModel> | $Enums.SelectionReason | null
  }

  export type NestedEnumSelectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionReason | EnumSelectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SelectionReason[] | ListEnumSelectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSelectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.SelectionReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSelectionReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumSelectionReasonNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserBodyTypeCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBodyTypeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBodyTypeCreateOrConnectWithoutUserInput = {
    where: UserBodyTypeWhereUniqueInput
    create: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
  }

  export type UserAccessoryCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAccessoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAccessoryCreateOrConnectWithoutUserInput = {
    where: UserAccessoryWhereUniqueInput
    create: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput>
  }

  export type UserAccessoryCreateManyUserInputEnvelope = {
    data: UserAccessoryCreateManyUserInput | UserAccessoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFashionStyleCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFashionStyleUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFashionStyleCreateOrConnectWithoutUserInput = {
    where: UserFashionStyleWhereUniqueInput
    create: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput>
  }

  export type UserFashionStyleCreateManyUserInputEnvelope = {
    data: UserFashionStyleCreateManyUserInput | UserFashionStyleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    favoriteColors?: UserPreferenceCreatefavoriteColorsInput | number[]
    bodyTypeId?: number | null
    favoriteStyles?: UserPreferenceCreatefavoriteStylesInput | number[]
    budgetRange?: $Enums.BudgetRange
    preferredBrands?: UserPreferenceCreatepreferredBrandsInput | string[]
    styleConfidenceLevel?: number | null
    preferredWeatherTypes?: UserPreferenceCreatepreferredWeatherTypesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: number
    favoriteColors?: UserPreferenceCreatefavoriteColorsInput | number[]
    bodyTypeId?: number | null
    favoriteStyles?: UserPreferenceCreatefavoriteStylesInput | number[]
    budgetRange?: $Enums.BudgetRange
    preferredBrands?: UserPreferenceCreatepreferredBrandsInput | string[]
    styleConfidenceLevel?: number | null
    preferredWeatherTypes?: UserPreferenceCreatepreferredWeatherTypesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserFavouriteCreateWithoutUserInput = {
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
    outfitElement: OutfitElementsCreateNestedOneWithoutFavouritesInput
    weatherCondition?: WeatherTypeCreateNestedOneWithoutUserFavouriteInput
  }

  export type UserFavouriteUncheckedCreateWithoutUserInput = {
    id?: number
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteCreateOrConnectWithoutUserInput = {
    where: UserFavouriteWhereUniqueInput
    create: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavouriteCreateManyUserInputEnvelope = {
    data: UserFavouriteCreateManyUserInput | UserFavouriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OutfitInDigitalClosetCreateWithoutUserInput = {
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUncheckedCreateWithoutUserInput = {
    id?: number
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetCreateOrConnectWithoutUserInput = {
    where: OutfitInDigitalClosetWhereUniqueInput
    create: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput>
  }

  export type OutfitInDigitalClosetCreateManyUserInputEnvelope = {
    data: OutfitInDigitalClosetCreateManyUserInput | OutfitInDigitalClosetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBodyTypeUpsertWithoutUserInput = {
    update: XOR<UserBodyTypeUpdateWithoutUserInput, UserBodyTypeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBodyTypeCreateWithoutUserInput, UserBodyTypeUncheckedCreateWithoutUserInput>
    where?: UserBodyTypeWhereInput
  }

  export type UserBodyTypeUpdateToOneWithWhereWithoutUserInput = {
    where?: UserBodyTypeWhereInput
    data: XOR<UserBodyTypeUpdateWithoutUserInput, UserBodyTypeUncheckedUpdateWithoutUserInput>
  }

  export type UserBodyTypeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBodyTypeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAccessoryWhereUniqueInput
    update: XOR<UserAccessoryUpdateWithoutUserInput, UserAccessoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserAccessoryCreateWithoutUserInput, UserAccessoryUncheckedCreateWithoutUserInput>
  }

  export type UserAccessoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAccessoryWhereUniqueInput
    data: XOR<UserAccessoryUpdateWithoutUserInput, UserAccessoryUncheckedUpdateWithoutUserInput>
  }

  export type UserAccessoryUpdateManyWithWhereWithoutUserInput = {
    where: UserAccessoryScalarWhereInput
    data: XOR<UserAccessoryUpdateManyMutationInput, UserAccessoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAccessoryScalarWhereInput = {
    AND?: UserAccessoryScalarWhereInput | UserAccessoryScalarWhereInput[]
    OR?: UserAccessoryScalarWhereInput[]
    NOT?: UserAccessoryScalarWhereInput | UserAccessoryScalarWhereInput[]
    id?: StringFilter<"UserAccessory"> | string
    userId?: StringFilter<"UserAccessory"> | string
    name?: StringFilter<"UserAccessory"> | string
    description?: StringFilter<"UserAccessory"> | string
    createdAt?: DateTimeFilter<"UserAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"UserAccessory"> | Date | string
  }

  export type UserFashionStyleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFashionStyleWhereUniqueInput
    update: XOR<UserFashionStyleUpdateWithoutUserInput, UserFashionStyleUncheckedUpdateWithoutUserInput>
    create: XOR<UserFashionStyleCreateWithoutUserInput, UserFashionStyleUncheckedCreateWithoutUserInput>
  }

  export type UserFashionStyleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFashionStyleWhereUniqueInput
    data: XOR<UserFashionStyleUpdateWithoutUserInput, UserFashionStyleUncheckedUpdateWithoutUserInput>
  }

  export type UserFashionStyleUpdateManyWithWhereWithoutUserInput = {
    where: UserFashionStyleScalarWhereInput
    data: XOR<UserFashionStyleUpdateManyMutationInput, UserFashionStyleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFashionStyleScalarWhereInput = {
    AND?: UserFashionStyleScalarWhereInput | UserFashionStyleScalarWhereInput[]
    OR?: UserFashionStyleScalarWhereInput[]
    NOT?: UserFashionStyleScalarWhereInput | UserFashionStyleScalarWhereInput[]
    id?: StringFilter<"UserFashionStyle"> | string
    userId?: StringFilter<"UserFashionStyle"> | string
    name?: StringFilter<"UserFashionStyle"> | string
    description?: StringFilter<"UserFashionStyle"> | string
    createdAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
    updatedAt?: DateTimeFilter<"UserFashionStyle"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    where?: UserPreferenceWhereInput
  }

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    favoriteColors?: UserPreferenceUpdatefavoriteColorsInput | number[]
    bodyTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    favoriteStyles?: UserPreferenceUpdatefavoriteStylesInput | number[]
    budgetRange?: EnumBudgetRangeFieldUpdateOperationsInput | $Enums.BudgetRange
    preferredBrands?: UserPreferenceUpdatepreferredBrandsInput | string[]
    styleConfidenceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    preferredWeatherTypes?: UserPreferenceUpdatepreferredWeatherTypesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavouriteWhereUniqueInput
    update: XOR<UserFavouriteUpdateWithoutUserInput, UserFavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavouriteCreateWithoutUserInput, UserFavouriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavouriteWhereUniqueInput
    data: XOR<UserFavouriteUpdateWithoutUserInput, UserFavouriteUncheckedUpdateWithoutUserInput>
  }

  export type UserFavouriteUpdateManyWithWhereWithoutUserInput = {
    where: UserFavouriteScalarWhereInput
    data: XOR<UserFavouriteUpdateManyMutationInput, UserFavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavouriteScalarWhereInput = {
    AND?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
    OR?: UserFavouriteScalarWhereInput[]
    NOT?: UserFavouriteScalarWhereInput | UserFavouriteScalarWhereInput[]
    id?: IntFilter<"UserFavourite"> | number
    userId?: StringFilter<"UserFavourite"> | string
    outfitElementsId?: IntFilter<"UserFavourite"> | number
    selectionReason?: EnumSelectionReasonNullableFilter<"UserFavourite"> | $Enums.SelectionReason | null
    occasion?: StringNullableFilter<"UserFavourite"> | string | null
    weatherConditionId?: IntNullableFilter<"UserFavourite"> | number | null
    userRating?: IntNullableFilter<"UserFavourite"> | number | null
    feedbackNotes?: StringNullableFilter<"UserFavourite"> | string | null
    selectedAt?: DateTimeFilter<"UserFavourite"> | Date | string
  }

  export type OutfitInDigitalClosetUpsertWithWhereUniqueWithoutUserInput = {
    where: OutfitInDigitalClosetWhereUniqueInput
    update: XOR<OutfitInDigitalClosetUpdateWithoutUserInput, OutfitInDigitalClosetUncheckedUpdateWithoutUserInput>
    create: XOR<OutfitInDigitalClosetCreateWithoutUserInput, OutfitInDigitalClosetUncheckedCreateWithoutUserInput>
  }

  export type OutfitInDigitalClosetUpdateWithWhereUniqueWithoutUserInput = {
    where: OutfitInDigitalClosetWhereUniqueInput
    data: XOR<OutfitInDigitalClosetUpdateWithoutUserInput, OutfitInDigitalClosetUncheckedUpdateWithoutUserInput>
  }

  export type OutfitInDigitalClosetUpdateManyWithWhereWithoutUserInput = {
    where: OutfitInDigitalClosetScalarWhereInput
    data: XOR<OutfitInDigitalClosetUpdateManyMutationInput, OutfitInDigitalClosetUncheckedUpdateManyWithoutUserInput>
  }

  export type OutfitInDigitalClosetScalarWhereInput = {
    AND?: OutfitInDigitalClosetScalarWhereInput | OutfitInDigitalClosetScalarWhereInput[]
    OR?: OutfitInDigitalClosetScalarWhereInput[]
    NOT?: OutfitInDigitalClosetScalarWhereInput | OutfitInDigitalClosetScalarWhereInput[]
    id?: IntFilter<"OutfitInDigitalCloset"> | number
    userId?: StringFilter<"OutfitInDigitalCloset"> | string
    outfitComposition?: JsonFilter<"OutfitInDigitalCloset">
    outfitName?: StringFilter<"OutfitInDigitalCloset"> | string
    dominantColors?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleTags?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableOccasions?: StringNullableListFilter<"OutfitInDigitalCloset">
    suitableWeather?: IntNullableListFilter<"OutfitInDigitalCloset">
    styleDescription?: StringNullableFilter<"OutfitInDigitalCloset"> | string | null
    isFavorite?: BoolFilter<"OutfitInDigitalCloset"> | boolean
    suggestedAt?: DateTimeFilter<"OutfitInDigitalCloset"> | Date | string
    seasonRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFilter<"OutfitInDigitalCloset"> | Decimal | DecimalJsLike | number | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
  }

  export type UserCreateWithoutBodyTypeInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBodyTypeInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBodyTypeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBodyTypeInput, UserUncheckedCreateWithoutBodyTypeInput>
  }

  export type UserUpsertWithoutBodyTypeInput = {
    update: XOR<UserUpdateWithoutBodyTypeInput, UserUncheckedUpdateWithoutBodyTypeInput>
    create: XOR<UserCreateWithoutBodyTypeInput, UserUncheckedCreateWithoutBodyTypeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBodyTypeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBodyTypeInput, UserUncheckedUpdateWithoutBodyTypeInput>
  }

  export type UserUpdateWithoutBodyTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBodyTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccessoriesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessoriesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessoriesInput, UserUncheckedCreateWithoutAccessoriesInput>
  }

  export type UserUpsertWithoutAccessoriesInput = {
    update: XOR<UserUpdateWithoutAccessoriesInput, UserUncheckedUpdateWithoutAccessoriesInput>
    create: XOR<UserCreateWithoutAccessoriesInput, UserUncheckedCreateWithoutAccessoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessoriesInput, UserUncheckedUpdateWithoutAccessoriesInput>
  }

  export type UserUpdateWithoutAccessoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFashionStylesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFashionStylesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFashionStylesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFashionStylesInput, UserUncheckedCreateWithoutFashionStylesInput>
  }

  export type UserUpsertWithoutFashionStylesInput = {
    update: XOR<UserUpdateWithoutFashionStylesInput, UserUncheckedUpdateWithoutFashionStylesInput>
    create: XOR<UserCreateWithoutFashionStylesInput, UserUncheckedCreateWithoutFashionStylesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFashionStylesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFashionStylesInput, UserUncheckedUpdateWithoutFashionStylesInput>
  }

  export type UserUpdateWithoutFashionStylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFashionStylesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutfitElementsCreateWithoutCategoryInput = {
    gender?: $Enums.Gender
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
    favourites?: UserFavouriteCreateNestedManyWithoutOutfitElementInput
  }

  export type OutfitElementsUncheckedCreateWithoutCategoryInput = {
    id?: number
    gender?: $Enums.Gender
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutOutfitElementInput
  }

  export type OutfitElementsCreateOrConnectWithoutCategoryInput = {
    where: OutfitElementsWhereUniqueInput
    create: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput>
  }

  export type OutfitElementsCreateManyCategoryInputEnvelope = {
    data: OutfitElementsCreateManyCategoryInput | OutfitElementsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type OutfitElementsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: OutfitElementsWhereUniqueInput
    update: XOR<OutfitElementsUpdateWithoutCategoryInput, OutfitElementsUncheckedUpdateWithoutCategoryInput>
    create: XOR<OutfitElementsCreateWithoutCategoryInput, OutfitElementsUncheckedCreateWithoutCategoryInput>
  }

  export type OutfitElementsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: OutfitElementsWhereUniqueInput
    data: XOR<OutfitElementsUpdateWithoutCategoryInput, OutfitElementsUncheckedUpdateWithoutCategoryInput>
  }

  export type OutfitElementsUpdateManyWithWhereWithoutCategoryInput = {
    where: OutfitElementsScalarWhereInput
    data: XOR<OutfitElementsUpdateManyMutationInput, OutfitElementsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type OutfitElementsScalarWhereInput = {
    AND?: OutfitElementsScalarWhereInput | OutfitElementsScalarWhereInput[]
    OR?: OutfitElementsScalarWhereInput[]
    NOT?: OutfitElementsScalarWhereInput | OutfitElementsScalarWhereInput[]
    id?: IntFilter<"OutfitElements"> | number
    gender?: EnumGenderFilter<"OutfitElements"> | $Enums.Gender
    categoryId?: IntFilter<"OutfitElements"> | number
    elementName?: StringFilter<"OutfitElements"> | string
    brandName?: StringNullableFilter<"OutfitElements"> | string | null
    priceRange?: EnumPriceRangeNullableFilter<"OutfitElements"> | $Enums.PriceRange | null
    materialType?: StringNullableFilter<"OutfitElements"> | string | null
    careInstructions?: StringNullableFilter<"OutfitElements"> | string | null
    seasonSuitability?: StringNullableListFilter<"OutfitElements">
    formalityLevel?: IntFilter<"OutfitElements"> | number
    createdAt?: DateTimeFilter<"OutfitElements"> | Date | string
    isActive?: BoolFilter<"OutfitElements"> | boolean
  }

  export type OutfitCategoryCreateWithoutElementsInput = {
    categoryName: string
    description?: string | null
    displayOrder?: number
  }

  export type OutfitCategoryUncheckedCreateWithoutElementsInput = {
    id?: number
    categoryName: string
    description?: string | null
    displayOrder?: number
  }

  export type OutfitCategoryCreateOrConnectWithoutElementsInput = {
    where: OutfitCategoryWhereUniqueInput
    create: XOR<OutfitCategoryCreateWithoutElementsInput, OutfitCategoryUncheckedCreateWithoutElementsInput>
  }

  export type UserFavouriteCreateWithoutOutfitElementInput = {
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
    weatherCondition?: WeatherTypeCreateNestedOneWithoutUserFavouriteInput
  }

  export type UserFavouriteUncheckedCreateWithoutOutfitElementInput = {
    id?: number
    userId: string
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteCreateOrConnectWithoutOutfitElementInput = {
    where: UserFavouriteWhereUniqueInput
    create: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput>
  }

  export type UserFavouriteCreateManyOutfitElementInputEnvelope = {
    data: UserFavouriteCreateManyOutfitElementInput | UserFavouriteCreateManyOutfitElementInput[]
    skipDuplicates?: boolean
  }

  export type OutfitCategoryUpsertWithoutElementsInput = {
    update: XOR<OutfitCategoryUpdateWithoutElementsInput, OutfitCategoryUncheckedUpdateWithoutElementsInput>
    create: XOR<OutfitCategoryCreateWithoutElementsInput, OutfitCategoryUncheckedCreateWithoutElementsInput>
    where?: OutfitCategoryWhereInput
  }

  export type OutfitCategoryUpdateToOneWithWhereWithoutElementsInput = {
    where?: OutfitCategoryWhereInput
    data: XOR<OutfitCategoryUpdateWithoutElementsInput, OutfitCategoryUncheckedUpdateWithoutElementsInput>
  }

  export type OutfitCategoryUpdateWithoutElementsInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OutfitCategoryUncheckedUpdateWithoutElementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavouriteUpsertWithWhereUniqueWithoutOutfitElementInput = {
    where: UserFavouriteWhereUniqueInput
    update: XOR<UserFavouriteUpdateWithoutOutfitElementInput, UserFavouriteUncheckedUpdateWithoutOutfitElementInput>
    create: XOR<UserFavouriteCreateWithoutOutfitElementInput, UserFavouriteUncheckedCreateWithoutOutfitElementInput>
  }

  export type UserFavouriteUpdateWithWhereUniqueWithoutOutfitElementInput = {
    where: UserFavouriteWhereUniqueInput
    data: XOR<UserFavouriteUpdateWithoutOutfitElementInput, UserFavouriteUncheckedUpdateWithoutOutfitElementInput>
  }

  export type UserFavouriteUpdateManyWithWhereWithoutOutfitElementInput = {
    where: UserFavouriteScalarWhereInput
    data: XOR<UserFavouriteUpdateManyMutationInput, UserFavouriteUncheckedUpdateManyWithoutOutfitElementInput>
  }

  export type UserFavouriteCreateWithoutWeatherConditionInput = {
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
    outfitElement: OutfitElementsCreateNestedOneWithoutFavouritesInput
  }

  export type UserFavouriteUncheckedCreateWithoutWeatherConditionInput = {
    id?: number
    userId: string
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteCreateOrConnectWithoutWeatherConditionInput = {
    where: UserFavouriteWhereUniqueInput
    create: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput>
  }

  export type UserFavouriteCreateManyWeatherConditionInputEnvelope = {
    data: UserFavouriteCreateManyWeatherConditionInput | UserFavouriteCreateManyWeatherConditionInput[]
    skipDuplicates?: boolean
  }

  export type UserFavouriteUpsertWithWhereUniqueWithoutWeatherConditionInput = {
    where: UserFavouriteWhereUniqueInput
    update: XOR<UserFavouriteUpdateWithoutWeatherConditionInput, UserFavouriteUncheckedUpdateWithoutWeatherConditionInput>
    create: XOR<UserFavouriteCreateWithoutWeatherConditionInput, UserFavouriteUncheckedCreateWithoutWeatherConditionInput>
  }

  export type UserFavouriteUpdateWithWhereUniqueWithoutWeatherConditionInput = {
    where: UserFavouriteWhereUniqueInput
    data: XOR<UserFavouriteUpdateWithoutWeatherConditionInput, UserFavouriteUncheckedUpdateWithoutWeatherConditionInput>
  }

  export type UserFavouriteUpdateManyWithWhereWithoutWeatherConditionInput = {
    where: UserFavouriteScalarWhereInput
    data: XOR<UserFavouriteUpdateManyMutationInput, UserFavouriteUncheckedUpdateManyWithoutWeatherConditionInput>
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavouritesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    digitalClosets?: OutfitInDigitalClosetUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type OutfitElementsCreateWithoutFavouritesInput = {
    gender?: $Enums.Gender
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
    category: OutfitCategoryCreateNestedOneWithoutElementsInput
  }

  export type OutfitElementsUncheckedCreateWithoutFavouritesInput = {
    id?: number
    gender?: $Enums.Gender
    categoryId: number
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
  }

  export type OutfitElementsCreateOrConnectWithoutFavouritesInput = {
    where: OutfitElementsWhereUniqueInput
    create: XOR<OutfitElementsCreateWithoutFavouritesInput, OutfitElementsUncheckedCreateWithoutFavouritesInput>
  }

  export type WeatherTypeCreateWithoutUserFavouriteInput = {
    weatherName: string
    description: string
  }

  export type WeatherTypeUncheckedCreateWithoutUserFavouriteInput = {
    id?: number
    weatherName: string
    description: string
  }

  export type WeatherTypeCreateOrConnectWithoutUserFavouriteInput = {
    where: WeatherTypeWhereUniqueInput
    create: XOR<WeatherTypeCreateWithoutUserFavouriteInput, WeatherTypeUncheckedCreateWithoutUserFavouriteInput>
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    digitalClosets?: OutfitInDigitalClosetUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OutfitElementsUpsertWithoutFavouritesInput = {
    update: XOR<OutfitElementsUpdateWithoutFavouritesInput, OutfitElementsUncheckedUpdateWithoutFavouritesInput>
    create: XOR<OutfitElementsCreateWithoutFavouritesInput, OutfitElementsUncheckedCreateWithoutFavouritesInput>
    where?: OutfitElementsWhereInput
  }

  export type OutfitElementsUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: OutfitElementsWhereInput
    data: XOR<OutfitElementsUpdateWithoutFavouritesInput, OutfitElementsUncheckedUpdateWithoutFavouritesInput>
  }

  export type OutfitElementsUpdateWithoutFavouritesInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    category?: OutfitCategoryUpdateOneRequiredWithoutElementsNestedInput
  }

  export type OutfitElementsUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    categoryId?: IntFieldUpdateOperationsInput | number
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeatherTypeUpsertWithoutUserFavouriteInput = {
    update: XOR<WeatherTypeUpdateWithoutUserFavouriteInput, WeatherTypeUncheckedUpdateWithoutUserFavouriteInput>
    create: XOR<WeatherTypeCreateWithoutUserFavouriteInput, WeatherTypeUncheckedCreateWithoutUserFavouriteInput>
    where?: WeatherTypeWhereInput
  }

  export type WeatherTypeUpdateToOneWithWhereWithoutUserFavouriteInput = {
    where?: WeatherTypeWhereInput
    data: XOR<WeatherTypeUpdateWithoutUserFavouriteInput, WeatherTypeUncheckedUpdateWithoutUserFavouriteInput>
  }

  export type WeatherTypeUpdateWithoutUserFavouriteInput = {
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WeatherTypeUncheckedUpdateWithoutUserFavouriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutDigitalClosetsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDigitalClosetsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    height?: number | null
    weight?: number | null
    birthday?: Date | string | null
    gender?: $Enums.Gender | null
    color?: UserCreatecolorInput | string[]
    isActive?: boolean
    onboardingCompleted?: boolean
    privacyLevel?: $Enums.PrivacyLevel
    timezone?: string
    bodyType?: UserBodyTypeUncheckedCreateNestedOneWithoutUserInput
    accessories?: UserAccessoryUncheckedCreateNestedManyWithoutUserInput
    fashionStyles?: UserFashionStyleUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    favourites?: UserFavouriteUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDigitalClosetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDigitalClosetsInput, UserUncheckedCreateWithoutDigitalClosetsInput>
  }

  export type UserUpsertWithoutDigitalClosetsInput = {
    update: XOR<UserUpdateWithoutDigitalClosetsInput, UserUncheckedUpdateWithoutDigitalClosetsInput>
    create: XOR<UserCreateWithoutDigitalClosetsInput, UserUncheckedCreateWithoutDigitalClosetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDigitalClosetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDigitalClosetsInput, UserUncheckedUpdateWithoutDigitalClosetsInput>
  }

  export type UserUpdateWithoutDigitalClosetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDigitalClosetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    color?: UserUpdatecolorInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    privacyLevel?: EnumPrivacyLevelFieldUpdateOperationsInput | $Enums.PrivacyLevel
    timezone?: StringFieldUpdateOperationsInput | string
    bodyType?: UserBodyTypeUncheckedUpdateOneWithoutUserNestedInput
    accessories?: UserAccessoryUncheckedUpdateManyWithoutUserNestedInput
    fashionStyles?: UserFashionStyleUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    favourites?: UserFavouriteUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAccessoryCreateManyUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFashionStyleCreateManyUserInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavouriteCreateManyUserInput = {
    id?: number
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type OutfitInDigitalClosetCreateManyUserInput = {
    id?: number
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName: string
    dominantColors?: OutfitInDigitalClosetCreatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetCreatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetCreatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetCreatesuitableWeatherInput | number[]
    styleDescription?: string | null
    isFavorite?: boolean
    suggestedAt?: Date | string
    seasonRelevance?: Decimal | DecimalJsLike | number | string
    trendRelevance?: Decimal | DecimalJsLike | number | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserAccessoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFashionStyleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUpdateWithoutUserInput = {
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outfitElement?: OutfitElementsUpdateOneRequiredWithoutFavouritesNestedInput
    weatherCondition?: WeatherTypeUpdateOneWithoutUserFavouriteNestedInput
  }

  export type UserFavouriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutfitInDigitalClosetUpdateWithoutUserInput = {
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OutfitInDigitalClosetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    outfitComposition?: JsonNullValueInput | InputJsonValue
    outfitName?: StringFieldUpdateOperationsInput | string
    dominantColors?: OutfitInDigitalClosetUpdatedominantColorsInput | number[]
    styleTags?: OutfitInDigitalClosetUpdatestyleTagsInput | string[]
    suitableOccasions?: OutfitInDigitalClosetUpdatesuitableOccasionsInput | string[]
    suitableWeather?: OutfitInDigitalClosetUpdatesuitableWeatherInput | number[]
    styleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    suggestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trendRelevance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutfitElementsCreateManyCategoryInput = {
    id?: number
    gender?: $Enums.Gender
    elementName: string
    brandName?: string | null
    priceRange?: $Enums.PriceRange | null
    materialType?: string | null
    careInstructions?: string | null
    seasonSuitability?: OutfitElementsCreateseasonSuitabilityInput | string[]
    formalityLevel: number
    createdAt?: Date | string
    isActive?: boolean
  }

  export type OutfitElementsUpdateWithoutCategoryInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    favourites?: UserFavouriteUpdateManyWithoutOutfitElementNestedInput
  }

  export type OutfitElementsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    favourites?: UserFavouriteUncheckedUpdateManyWithoutOutfitElementNestedInput
  }

  export type OutfitElementsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    elementName?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableEnumPriceRangeFieldUpdateOperationsInput | $Enums.PriceRange | null
    materialType?: NullableStringFieldUpdateOperationsInput | string | null
    careInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    seasonSuitability?: OutfitElementsUpdateseasonSuitabilityInput | string[]
    formalityLevel?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFavouriteCreateManyOutfitElementInput = {
    id?: number
    userId: string
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    weatherConditionId?: number | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteUpdateWithoutOutfitElementInput = {
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    weatherCondition?: WeatherTypeUpdateOneWithoutUserFavouriteNestedInput
  }

  export type UserFavouriteUncheckedUpdateWithoutOutfitElementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUncheckedUpdateManyWithoutOutfitElementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditionId?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteCreateManyWeatherConditionInput = {
    id?: number
    userId: string
    outfitElementsId: number
    selectionReason?: $Enums.SelectionReason | null
    occasion?: string | null
    userRating?: number | null
    feedbackNotes?: string | null
    selectedAt?: Date | string
  }

  export type UserFavouriteUpdateWithoutWeatherConditionInput = {
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    outfitElement?: OutfitElementsUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type UserFavouriteUncheckedUpdateWithoutWeatherConditionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavouriteUncheckedUpdateManyWithoutWeatherConditionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    outfitElementsId?: IntFieldUpdateOperationsInput | number
    selectionReason?: NullableEnumSelectionReasonFieldUpdateOperationsInput | $Enums.SelectionReason | null
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackNotes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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