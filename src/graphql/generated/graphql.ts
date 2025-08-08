/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: { input: any; output: any; }
};

export type CoreQuery = {
  __typename?: 'CoreQuery';
  me?: Maybe<UserType>;
  siteConfig?: Maybe<SiteConfigurationType>;
};

export type CreateDriverInput = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDriverMutation = {
  __typename?: 'CreateDriverMutation';
  driver?: Maybe<DriverType>;
};

export type CreateExpenseCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateExpenseCategoryMutation = {
  __typename?: 'CreateExpenseCategoryMutation';
  expenseCategory?: Maybe<ExpenseCategoryType>;
};

export type CreateParty = {
  __typename?: 'CreateParty';
  party?: Maybe<PartyType>;
};

export type CreatePartyInput = {
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateVehicleBrandInput = {
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
};

export type CreateVehicleBrandMutation = {
  __typename?: 'CreateVehicleBrandMutation';
  vehicleBrand?: Maybe<VehicleBrandType>;
};

export type CreateVehicleExpenseInput = {
  amount: Scalars['Decimal']['input'];
  category?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  vehicle: Scalars['ID']['input'];
};

export type CreateVehicleExpenseMutation = {
  __typename?: 'CreateVehicleExpenseMutation';
  vehicleExpense?: Maybe<VehicleExpenseType>;
};

export type CreateVehicleInput = {
  brand: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  registrationNumber: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};

export type CreateVehicleMutation = {
  __typename?: 'CreateVehicleMutation';
  vehicle?: Maybe<VehicleType>;
};

export type DeleteDriverMutation = {
  __typename?: 'DeleteDriverMutation';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteExpenseCategoryMutation = {
  __typename?: 'DeleteExpenseCategoryMutation';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteParty = {
  __typename?: 'DeleteParty';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteVehicleBrandMutation = {
  __typename?: 'DeleteVehicleBrandMutation';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteVehicleExpenseMutation = {
  __typename?: 'DeleteVehicleExpenseMutation';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteVehicleMutation = {
  __typename?: 'DeleteVehicleMutation';
  deletedId?: Maybe<Scalars['ID']['output']>;
  deletedInputId?: Maybe<Scalars['ID']['output']>;
  deletedRawId?: Maybe<Scalars['ID']['output']>;
  found?: Maybe<Scalars['Boolean']['output']>;
};

export type DriverQuery = {
  __typename?: 'DriverQuery';
  allDrivers?: Maybe<Array<Maybe<DriverType>>>;
  driver?: Maybe<DriverType>;
};


export type DriverQueryDriverArgs = {
  id: Scalars['Int']['input'];
};

export type DriverType = {
  __typename?: 'DriverType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type ExpenseCategoryType = {
  __typename?: 'ExpenseCategoryType';
  emoji: Scalars['String']['output'];
  expenses: VehicleExpenseTypeConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type ExpenseCategoryTypeExpensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  vehicleId?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDriver?: Maybe<CreateDriverMutation>;
  createExpenseCategory?: Maybe<CreateExpenseCategoryMutation>;
  createParty?: Maybe<CreateParty>;
  createVehicle?: Maybe<CreateVehicleMutation>;
  createVehicleBrand?: Maybe<CreateVehicleBrandMutation>;
  createVehicleExpense?: Maybe<CreateVehicleExpenseMutation>;
  deleteDriver?: Maybe<DeleteDriverMutation>;
  deleteExpenseCategory?: Maybe<DeleteExpenseCategoryMutation>;
  deleteParty?: Maybe<DeleteParty>;
  deleteVehicle?: Maybe<DeleteVehicleMutation>;
  deleteVehicleBrand?: Maybe<DeleteVehicleBrandMutation>;
  deleteVehicleExpense?: Maybe<DeleteVehicleExpenseMutation>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateDriver?: Maybe<UpdateDriverMutation>;
  updateExpenseCategory?: Maybe<UpdateExpenseCategoryMutation>;
  updateParty?: Maybe<UpdateParty>;
  updateSiteConfiguration?: Maybe<UpdateSiteConfiguration>;
  updateVehicle?: Maybe<UpdateVehicleMutation>;
  updateVehicleBrand?: Maybe<UpdateVehicleBrandMutation>;
  updateVehicleExpense?: Maybe<UpdateVehicleExpenseMutation>;
  verifyToken?: Maybe<Verify>;
};


export type MutationCreateDriverArgs = {
  input: CreateDriverInput;
};


export type MutationCreateExpenseCategoryArgs = {
  input: CreateExpenseCategoryInput;
};


export type MutationCreatePartyArgs = {
  input: CreatePartyInput;
};


export type MutationCreateVehicleArgs = {
  input: CreateVehicleInput;
};


export type MutationCreateVehicleBrandArgs = {
  input: CreateVehicleBrandInput;
};


export type MutationCreateVehicleExpenseArgs = {
  input: CreateVehicleExpenseInput;
};


export type MutationDeleteDriverArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExpenseCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePartyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVehicleBrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVehicleExpenseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenAuthArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateDriverArgs = {
  id: Scalars['ID']['input'];
  input: UpdateDriverInput;
};


export type MutationUpdateExpenseCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateExpenseCategoryInput;
};


export type MutationUpdatePartyArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePartyInput;
};


export type MutationUpdateSiteConfigurationArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  siteLogo?: InputMaybe<Scalars['Upload']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateVehicleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVehicleInput;
};


export type MutationUpdateVehicleBrandArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVehicleBrandInput;
};


export type MutationUpdateVehicleExpenseArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVehicleExpenseInput;
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PartyQuery = {
  __typename?: 'PartyQuery';
  parties?: Maybe<PartyTypeConnection>;
  party?: Maybe<PartyType>;
};


export type PartyQueryPartiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Range?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  gstNumber_Icontains?: InputMaybe<Scalars['String']['input']>;
  gstNumber_Istartswith?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  phone_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type PartyQueryPartyArgs = {
  id: Scalars['ID']['input'];
};

export type PartyType = Node & {
  __typename?: 'PartyType';
  createdAt: Scalars['DateTime']['output'];
  gstNumber?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type PartyTypeConnection = {
  __typename?: 'PartyTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PartyTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PartyType` and its cursor. */
export type PartyTypeEdge = {
  __typename?: 'PartyTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PartyType>;
};

export type Query = {
  __typename?: 'Query';
  core?: Maybe<CoreQuery>;
  driver?: Maybe<DriverQuery>;
  party?: Maybe<PartyQuery>;
  vehicle?: Maybe<VehicleQuery>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type SiteConfigurationType = {
  __typename?: 'SiteConfigurationType';
  /** Address of the organization */
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Primary contact number */
  phone1: Scalars['String']['output'];
  /** Secondary contact number */
  phone2: Scalars['String']['output'];
  /** Site logo image (recommended size: 200x60px) */
  siteLogo?: Maybe<Scalars['String']['output']>;
  /** The name of the website displayed to users */
  siteName: Scalars['String']['output'];
};

export type UpdateDriverInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDriverMutation = {
  __typename?: 'UpdateDriverMutation';
  driver?: Maybe<DriverType>;
};

export type UpdateExpenseCategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExpenseCategoryMutation = {
  __typename?: 'UpdateExpenseCategoryMutation';
  expenseCategory?: Maybe<ExpenseCategoryType>;
};

export type UpdateParty = {
  __typename?: 'UpdateParty';
  party?: Maybe<PartyType>;
};

export type UpdatePartyInput = {
  gstNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type UpdateSiteConfiguration = {
  __typename?: 'UpdateSiteConfiguration';
  siteConfig?: Maybe<SiteConfigurationType>;
};

export type UpdateVehicleBrandInput = {
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVehicleBrandMutation = {
  __typename?: 'UpdateVehicleBrandMutation';
  vehicleBrand?: Maybe<VehicleBrandType>;
};

export type UpdateVehicleExpenseInput = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  vehicle?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateVehicleExpenseMutation = {
  __typename?: 'UpdateVehicleExpenseMutation';
  vehicleExpense?: Maybe<VehicleExpenseType>;
};

export type UpdateVehicleInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateVehicleMutation = {
  __typename?: 'UpdateVehicleMutation';
  vehicle?: Maybe<VehicleType>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};

export type VehicleBrandType = {
  __typename?: 'VehicleBrandType';
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  vehicles: Array<VehicleType>;
};

export type VehicleExpenseType = Node & {
  __typename?: 'VehicleExpenseType';
  amount: Scalars['Decimal']['output'];
  category?: Maybe<ExpenseCategoryType>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['Date']['output'];
  /** Optional description of the expense */
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vehicle: VehicleType;
};

export type VehicleExpenseTypeConnection = {
  __typename?: 'VehicleExpenseTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VehicleExpenseTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VehicleExpenseType` and its cursor. */
export type VehicleExpenseTypeEdge = {
  __typename?: 'VehicleExpenseTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VehicleExpenseType>;
};

export type VehicleQuery = {
  __typename?: 'VehicleQuery';
  allExpenseCategories?: Maybe<Array<Maybe<ExpenseCategoryType>>>;
  allVehicleBrands?: Maybe<Array<Maybe<VehicleBrandType>>>;
  allVehicleExpenses?: Maybe<Array<Maybe<VehicleExpenseType>>>;
  allVehicles?: Maybe<Array<Maybe<VehicleType>>>;
  expenseCategory?: Maybe<ExpenseCategoryType>;
  expenses?: Maybe<VehicleExpenseTypeConnection>;
  vehicle?: Maybe<VehicleType>;
  vehicleBrand?: Maybe<VehicleBrandType>;
  vehicleExpense?: Maybe<VehicleExpenseType>;
  vehiclesByBrand?: Maybe<Array<Maybe<VehicleType>>>;
};


export type VehicleQueryExpenseCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type VehicleQueryExpensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  vehicleId?: InputMaybe<Scalars['ID']['input']>;
};


export type VehicleQueryVehicleArgs = {
  id: Scalars['Int']['input'];
};


export type VehicleQueryVehicleBrandArgs = {
  id: Scalars['Int']['input'];
};


export type VehicleQueryVehicleExpenseArgs = {
  id: Scalars['Int']['input'];
};


export type VehicleQueryVehiclesByBrandArgs = {
  brandId: Scalars['Int']['input'];
};

export type VehicleType = {
  __typename?: 'VehicleType';
  brand: VehicleBrandType;
  expenses: VehicleExpenseTypeConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Unique registration number (e.g., TN 01 AT 1234) */
  registrationNumber: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};


export type VehicleTypeExpensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  vehicleId?: InputMaybe<Scalars['ID']['input']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type GetAllDriversQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDriversQuery = { __typename?: 'Query', driver?: { __typename?: 'DriverQuery', allDrivers?: Array<{ __typename?: 'DriverType', id: string, name: string, phone?: string | null } | null> | null } | null };

export type GetDriverQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetDriverQuery = { __typename?: 'Query', driver?: { __typename?: 'DriverQuery', driver?: { __typename?: 'DriverType', id: string, name: string, phone?: string | null } | null } | null };

export type CreateNewDriverMutationVariables = Exact<{
  input: CreateDriverInput;
}>;


export type CreateNewDriverMutation = { __typename?: 'Mutation', createDriver?: { __typename?: 'CreateDriverMutation', driver?: { __typename?: 'DriverType', id: string } | null } | null };

export type SiteConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteConfigQuery = { __typename?: 'Query', core?: { __typename?: 'CoreQuery', siteConfig?: { __typename?: 'SiteConfigurationType', id: string, address: string, phone1: string, phone2: string, siteName: string, siteLogo?: string | null } | null } | null };


export const GetAllDriversDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDrivers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"driver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDrivers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllDriversQuery, GetAllDriversQueryVariables>;
export const GetDriverDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDriver"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"driver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"driver"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]} as unknown as DocumentNode<GetDriverQuery, GetDriverQueryVariables>;
export const CreateNewDriverDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewDriver"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDriverInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDriver"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"driver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateNewDriverMutation, CreateNewDriverMutationVariables>;
export const SiteConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SiteConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"core"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"siteConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phone1"}},{"kind":"Field","name":{"kind":"Name","value":"phone2"}},{"kind":"Field","name":{"kind":"Name","value":"siteName"}},{"kind":"Field","name":{"kind":"Name","value":"siteLogo"}}]}}]}}]}}]} as unknown as DocumentNode<SiteConfigQuery, SiteConfigQueryVariables>;