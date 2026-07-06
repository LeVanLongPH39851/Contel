import { useEffect, useRef } from 'react';
import * as useCallApi from './useCallApi';

const HOOKS = [
  { hook: useCallApi.useAvgHealthScore, dataKey: 'AvgHealthScore' },
  { hook: useCallApi.useAvgRetentionRate, dataKey: 'AvgRetentionRate' },
  { hook: useCallApi.useAvgReturnViewerRate, dataKey: 'AvgReturnViewerRate' },
  { hook: useCallApi.useProgramATRISK, dataKey: 'programATRISK' },
  { hook: useCallApi.useProgramHealthScorecard, dataKey: 'ProgramHealthScorecard' },
  { hook: useCallApi.useProgramSTRENGTHEN, dataKey: 'programSTRENGTHEN' },
  { hook: useCallApi.useMorningBlock06h3009h00, dataKey: 'MorningBlock06h3009h00' },
  { hook: useCallApi.usePrimeTimeChain19h0022h30, dataKey: 'PrimeTimeChain19h0022h30' },
  { hook: useCallApi.useAudienceFullChannel, dataKey: 'AudienceFullChannel' },
  { hook: useCallApi.useProgramInfor, dataKey: 'ProgramInfor' },
  { hook: useCallApi.useAverageDropOffByMinute, dataKey: 'AverageDropOffByMinute' },
  { hook: useCallApi.useWatchTimeEfficiencyLast8Weeks, dataKey: 'WatchTimeEfficiencyLast8Weeks' },
  { hook: useCallApi.useDropOffCurve, dataKey: 'DropOffCurve' }
];

export const useDashboardData = () => {
  const hookResults = HOOKS.map(({ hook }) => hook());
  const hasLoggedRef = useRef(false);

  const data = {};
  const isLoading = {};
  const hasError = {};

  HOOKS.forEach(({ dataKey }, index) => {
    data[dataKey] = hookResults[index].data;
    isLoading[dataKey] = hookResults[index].loading;
    hasError[dataKey] = hookResults[index].error;
  });

  const anyLoading = Object.values(isLoading).some(Boolean);
  const allDataLoaded = Object.values(data).every(value => value != null);

  useEffect(() => {
    if (!hasLoggedRef.current && allDataLoaded && !anyLoading) {
      Object.entries(data).forEach(([key, value]) => {
        console.log(`${key}:`, value);
      });
      hasLoggedRef.current = true;
    }
  }, [allDataLoaded, anyLoading]);

  return {
    ...data,
    isLoading,
    hasError
  };
};