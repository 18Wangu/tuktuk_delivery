import {
    DeviceSessionState,
    DeviceStatus,
    DeviceSdk,
  } from "@ledgerhq/device-management-kit";
  import {
    GetAddressDAOutput,
    GetAddressDAError,
    GetAddressDAIntermediateValue,
    SignTransactionDAOutput,
    SignTransactionDAError,
    SignTransactionDAIntermediateValue,
    KeyringEth,
  } from "@ledgerhq/device-signer-kit-ethereum";
  import { DeviceSessionUI } from "./DeviceSessionUI";
  import { Divider } from "./Divider";
  import { LabelizedInput } from "./LabelizedInput";
  import { LabelizedJSON } from "./LabelizedJSON";
  import { SectionContainer } from "./SectionContainer";
  import { useDeviceSessionState } from "../helpers";
  import { DeviceSession } from "@ledgerhq/device-management-kit/src/internal/device-session/model/DeviceSession.js";
import TopBar from "./top-bar";
import Navbar from "./navbar";
  //import { DeviceSessionStateType } from "@ledgerhq/device-management-kit/lib/cjs/index.js";

  
  export const UI = ({
    deviceSdk,
    ethereumSigner,
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
  }) => {
    const deviceSessionState = useDeviceSessionState(deviceSdk, deviceSessionId);
  
    const getAddressLoading = Boolean(
      getAddressState && !getAddressOutput && !getAddressError
    );
    const signTransactionLoading = Boolean(
      signTransactionState && !signTransactionOutput && !signTransactionError
    );
  
    const buttonsDisabled =
      getAddressLoading ||
      signTransactionLoading ||
      !deviceSessionId ||
      deviceSessionState?.deviceStatus !== DeviceStatus.CONNECTED;
  
    return (
      <div className="bg-[#F8F9E9]">
        <div className="card px-5">
          <TopBar />
          {deviceSdk ? (
            <>
              <SectionContainer>
                {/*<h3>Device Management Kit: Device Connection</h3>*/}
                <button className="bg-black text-white rounded-3xl py-2 px-3 mt-20" onClick={onClickDiscoverDevices}>
                  Connect to Ledger
                </button>
                {connectionError ? (
                  <LabelizedJSON label="Connection error" value={connectionError} />
                ) : (
                  <DeviceSessionUI
                    deviceSessionId={deviceSessionId}
                    deviceSessionState={deviceSessionState}
                  />
                )}
              </SectionContainer>
              {/*
              <Divider />
              {ethereumSigner ? (
                <>
                  <SectionContainer>
                    <LabelizedInput
                      label="Derivation path"
                      value={derivationPath}
                      disabled={buttonsDisabled}
                      onChange={(e) => setDerivationPath(e.target.value)}
                    />
                    <button
                      disabled={buttonsDisabled}
                      onClick={onClickGetEthereumAddress}
                    >
                      Get Ethereum address {getAddressLoading ? "(loading)" : ""}
                    </button>
                  </SectionContainer>
                  {getAddressError ? (
                    <LabelizedJSON
                      label="Get address error"
                      value={getAddressError}
                    />
                  ) : (
                    <>
                      <LabelizedJSON
                        label="Get address device action state"
                        value={getAddressState}
                      />
                      <LabelizedJSON
                        label="Get address device action output"
                        value={getAddressOutput}
                      />
                    </>
                  )}
                  <Divider />
                </>
              ) : (
                <p></p>
              )}
              */}
            </>
          ) : (
            <p>Device SDK not instantiated</p>
          )}
        </div>
        <Navbar />
      </div>
    );
  };
  