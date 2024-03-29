/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IPoolFactoryInterface extends utils.Interface {
  functions: {
    "createPool(bytes)": FunctionFragment;
    "getDeployData()": FunctionFragment;
    "master()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createPool" | "getDeployData" | "master"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPool",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployData",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;

  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeployData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;

  events: {};
}

export interface IPoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPoolFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPool(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeployData(overrides?: CallOverrides): Promise<[string]>;

    master(overrides?: CallOverrides): Promise<[string]>;
  };

  createPool(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeployData(overrides?: CallOverrides): Promise<string>;

  master(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createPool(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployData(overrides?: CallOverrides): Promise<string>;

    master(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createPool(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeployData(overrides?: CallOverrides): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createPool(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeployData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    master(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
