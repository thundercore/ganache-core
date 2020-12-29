import * as Ethereum from "@ganache/ethereum";
import * as Filecoin from "@ganache/filecoin";
// import {TezosConnector} from "@ganache/tezos";

export const DefaultFlavor = Ethereum.FlavorName;

export type ConnectorsByName = {
  [Ethereum.FlavorName]: Ethereum.Connector;
  [Filecoin.FlavorName]: Filecoin.Connector;
  // [Tezos.FlavorName]: Tezos.Connector
};

export const ConnectorsByName = {
  [Ethereum.FlavorName]: Ethereum.Connector,
  [Filecoin.FlavorName]: Filecoin.Connector
  // [Tezos.FlavorName]: Tezos.Connector
};

export type Connectors = {
  [K in keyof ConnectorsByName]: ConnectorsByName[K];
}[keyof ConnectorsByName];

export type Providers =
  | Ethereum.Provider
  | Filecoin.Provider /*| Tezos.Provider */;

type FlavorType =
  | typeof Ethereum.FlavorName
  | typeof Filecoin.FlavorName /*| Tezos.FlavorName*/;
type ProviderOptions =
  | Ethereum.ProviderOptions
  | Filecoin.ProviderOptions /*| Tezos.ProviderOptions*/;

export type Options = {
  flavor?: FlavorType;
} & ProviderOptions;
