import axiosClient from './axiosClient';
import * as payloads from './payloads';
import { buildPayloadWithFilters } from './payloads/buildPayloadWithFilters';

const apiRoute = import.meta.env.VITE_API_ROUTE;

const postChart = async (basePayload, appliedFilters, disibledFilters = []) => {
  const finalPayload = appliedFilters
    ? buildPayloadWithFilters(basePayload, appliedFilters, disibledFilters)
    : basePayload;

  try {
    const userId = sessionStorage.getItem('user_id');
    const requestBody = {
      ...finalPayload,
      user_id: userId
    };
    return await axiosClient.post(apiRoute, requestBody);
  } catch (error) {
    return { data: {} };
  }
};

export const AvgHealthScore = (appliedFilters) =>
  postChart(payloads.AvgHealthScore, appliedFilters, ['programFilters', 'dateFilters']);

export const AvgRetentionRate = (appliedFilters) =>
  postChart(payloads.AvgRetentionRate, appliedFilters, ['programFilters', 'dateFilters']);

export const AvgReturnViewerRate = (appliedFilters) =>
  postChart(payloads.AvgReturnViewerRate, appliedFilters, ['programFilters', 'dateFilters']);

export const programATRISK = (appliedFilters) =>
  postChart(payloads.programATRISK, appliedFilters, ['programFilters', 'dateFilters']);

export const ProgramHealthScorecard = (appliedFilters) =>
  postChart(payloads.ProgramHealthScorecard, appliedFilters, ['programFilters', 'dateFilters']);

export const programSTRENGTHEN = (appliedFilters) =>
  postChart(payloads.programSTRENGTHEN, appliedFilters, ['programFilters', 'dateFilters']);

export const MorningBlock06h3009h00 = (appliedFilters) =>
  postChart(payloads.MorningBlock06h3009h00, appliedFilters, ['programFilters', 'weekFilters']);

export const PrimeTimeChain19h0022h30 = (appliedFilters) =>
  postChart(payloads.PrimeTimeChain19h0022h30, appliedFilters, ['programFilters', 'weekFilters']);

export const AudienceFullChannel = (appliedFilters) =>
  postChart(payloads.AudienceFullChannel, appliedFilters, ['programFilters', 'weekFilters']);

export const ProgramInfor = (appliedFilters) =>
  postChart(payloads.ProgramInfor, appliedFilters, ['weekFilters']);

export const AverageDropOffByMinute = (appliedFilters) =>
  postChart(payloads.AverageDropOffByMinute, appliedFilters, ['weekFilters']);

export const WatchTimeEfficiencyLast8Weeks = (appliedFilters) =>
  postChart(payloads.WatchTimeEfficiencyLast8Weeks, appliedFilters, ['weekFilters', 'dateFilters']);

export const DropOffCurve = (appliedFilters) =>
  postChart(payloads.DropOffCurve, appliedFilters, ['weekFilters']);

export const filterProgram = (appliedFilters) =>
  postChart(payloads.filterProgram, appliedFilters, ['weekFilters', 'dateFilters', 'programFilters']);