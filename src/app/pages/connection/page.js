"use client";

import React, { useState } from "react";
import {
  DeviceActionStatus,
  DeviceSdkBuilder,
} from "@ledgerhq/device-management-kit";
import {
  KeyringEthBuilder,
} from "@ledgerhq/device-signer-kit-ethereum";
import { ethers } from "ethers";
import { firstValueFrom } from "rxjs";
import { UI } from "@/app/components/UI";
import { exampleRawTransactionHex } from "./exampleRawTransactionHex";

const Solution = () => {
  const [sdk] = useState(new DeviceSdkBuilder().build());

  const [deviceSessionId, setSessionId] = useState();
  const [connectionError, setConnectionError] = useState();
  const [derivationPath, setDerivationPath] = useState("44'/60'/0'/0");
  const [rawTransactionHex, setRawTransactionHex] = useState(exampleRawTransactionHex);
  const [getAddressOutput, setGetAddressOutput] = useState();
  const [getAddressError, setGetAddressError] = useState();
  const [getAddressState, setGetAddressState] = useState();

  const [signTransactionOutput, setSignTransactionOutput] = useState();
  const [signTransactionError, setSignTransactionError] = useState();
  const [signTransactionState, setSignTransactionState] = useState();

  const onClickDiscoverDevices = async () => {
    try {
      setSessionId(undefined);
      const discoveredDevice = await firstValueFrom(sdk.startDiscovering());
      const sessionId = await sdk.connect({ deviceId: discoveredDevice.id });
      setConnectionError(undefined);
      setSessionId(sessionId);
    } catch (e) {
      setConnectionError(e);
    }
  };

  const keyringEth = deviceSessionId
    ? new KeyringEthBuilder({
        sdk,
        sessionId: deviceSessionId,
      }).build()
    : undefined;

  const onClickGetEthereumAddress = async () => {
    if (!keyringEth || !derivationPath) return;
    setGetAddressOutput(undefined);
    setGetAddressError(undefined);
    setGetAddressState(undefined);
    keyringEth
      .getAddress(derivationPath)
      .observable.subscribe((getAddressDAState) => {
        setGetAddressState(getAddressDAState);
        switch (getAddressDAState.status) {
          case DeviceActionStatus.Completed:
            setGetAddressOutput(getAddressDAState.output);
            break;
          case DeviceActionStatus.Error:
            setGetAddressError(getAddressDAState.error);
            break;
          default:
            break;
        }
      });
  };

  const onClickSignTransaction = async () => {
    if (!keyringEth || !derivationPath || !rawTransactionHex) return;
    setSignTransactionOutput(undefined);
    setSignTransactionError(undefined);
    setSignTransactionState(undefined);
    let transaction;
    try {
      transaction = ethers.utils.parseTransaction(rawTransactionHex);
    } catch (e) {
      setSignTransactionError(e);
      return;
    }

    keyringEth
      .signTransaction(derivationPath, transaction)
      .observable.subscribe((signTransactionDAState) => {
        setSignTransactionState(signTransactionDAState);
        switch (signTransactionDAState.status) {
          case DeviceActionStatus.Completed:
            setSignTransactionOutput(signTransactionDAState.output);
            break;
          case DeviceActionStatus.Error:
            setSignTransactionError(signTransactionDAState.error);
            break;
          default:
            break;
        }
      });
  };

  return (
    <UI
      {...{
        deviceSdk: sdk,
        ethereumSigner: keyringEth,
        onClickDiscoverDevices,
        connectionError,
        deviceSessionId,
        derivationPath,
        setDerivationPath,
        onClickGetEthereumAddress,
        getAddressOutput,
        getAddressError,
        getAddressState,
        rawTransactionHex,
        setRawTransactionHex,
        onClickSignTransaction,
        signTransactionOutput,
        signTransactionError,
        signTransactionState,
      }}
    />
  );
};

export default Solution;
