import { useEffect, useState } from "react";
import { DeviceSdk } from "@ledgerhq/device-management-kit";

export function useDeviceSessionState(sdk, deviceSessionId) {
  const [deviceSessionState, setDeviceSessionState] = useState();

  useEffect(() => {
    if (!deviceSessionId || !sdk) {
      setDeviceSessionState(undefined);
      return;
    }
    const subscription = sdk
      .getDeviceSessionState({ sessionId: deviceSessionId })
      .subscribe(setDeviceSessionState);

    return () => subscription.unsubscribe(); // Nettoyage pour éviter des abonnements multiples
  }, [deviceSessionId, sdk]);

  return deviceSessionState;
}
