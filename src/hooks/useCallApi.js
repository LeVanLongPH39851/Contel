import { useApi } from './useApi';
import * as getChart from '../api/dashboardApi';
import { useDashboardFilters } from '../context/DashboardFilterContext';

const createChartHook = (apiFn, keyMain = '') => () => {
  const { appliedFilters } = useDashboardFilters();
  // const { crossFilters } = useDashboardCrossFilters();

  // const shouldSkip = crossFilters?.skipNext === keyMain || (crossFilters?.main && keyMain === crossFilters.main);

  return useApi(
    apiFn,
    [appliedFilters]
    // [appliedFilters, crossFilters],
    // { shouldSkip }
  );
};

export const useAvgHealthScore = () =>
  createChartHook(getChart.AvgHealthScore)();

export const useAvgRetentionRate = () =>
  createChartHook(getChart.AvgRetentionRate)();

export const useAvgReturnViewerRate = () =>
  createChartHook(getChart.AvgReturnViewerRate)();

export const useProgramATRISK = () =>
  createChartHook(getChart.programATRISK)();

export const useProgramHealthScorecard = () =>
  createChartHook(getChart.ProgramHealthScorecard)();

export const useProgramSTRENGTHEN = () =>
  createChartHook(getChart.programSTRENGTHEN)();

export const useMorningBlock06h3009h00 = () =>
  createChartHook(getChart.MorningBlock06h3009h00)();

export const usePrimeTimeChain19h0022h30 = () =>
  createChartHook(getChart.PrimeTimeChain19h0022h30)();

export const useAudienceFullChannel = () =>
  createChartHook(getChart.AudienceFullChannel)();

export const useProgramInfor = () =>
  createChartHook(getChart.ProgramInfor)();

export const useAverageDropOffByMinute = () =>
  createChartHook(getChart.AverageDropOffByMinute)();

export const useWatchTimeEfficiencyLast8Weeks = () =>
  createChartHook(getChart.WatchTimeEfficiencyLast8Weeks)();

export const useDropOffCurve = () =>
  createChartHook(getChart.DropOffCurve)();

export const useFilterProgram = () =>
  createChartHook(getChart.filterProgram)();