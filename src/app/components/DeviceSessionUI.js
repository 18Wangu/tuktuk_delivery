import {
    DeviceSessionStateType,
    DeviceStatus,
  } from "@ledgerhq/device-management-kit";
  //import { DeviceSessionState } from "@ledgerhq/device-management-kit/lib/cjs/index.js";
  
  export const DeviceSessionUI = ({ deviceSessionId, deviceSessionState }) => {
    if (!deviceSessionId) {
      return (
        <div></div>
        /*<p>
          No active session. First discover and connect via USB a Ledger device.
        </p>*/
      );
    }
  
    const { currentApp, firmwareVersion, deviceStatus } =
      deviceSessionState?.sessionStateType ===
      DeviceSessionStateType.ReadyWithoutSecureChannel
        ? deviceSessionState
        : {};
  
    let backgroundColor = "lightgray";
    switch (deviceStatus) {
      case DeviceStatus.CONNECTED:
        backgroundColor = "lightgreen";
        break;
      case DeviceStatus.NOT_CONNECTED:
        backgroundColor = "lightcoral";
        break;
      case DeviceStatus.LOCKED:
        backgroundColor = "orange";
        break;
      case DeviceStatus.BUSY:
        backgroundColor = "lightyellow";
        break;
    }
  
    return (
      <div
        style={{
          backgroundColor: "#F8F9E9",
          color: "black",
          borderRadius: 5,
          padding: 10,
        }}
      >
        {/*<p>SessionId: {deviceSessionId}</p>*/}
        <p>
          Ledger : {" "}
          <b style={{ padding: 3, borderRadius: 3, backgroundColor }}>
            {deviceSessionState?.deviceStatus ?? "loading"}
          </b>
        </p>
        {/*
        {firmwareVersion ? <p>Firmware version: {firmwareVersion.os}</p> : null}
        {currentApp ? (
          <p>
            Current app:{" "}
            <b>
              {currentApp.name}, v{currentApp.version}
            </b>
          </p>
        ) : null}
         */}
      </div>
    );
  };
  