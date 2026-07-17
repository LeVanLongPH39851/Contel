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
  postChart(payloads.AvgHealthScore, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const AvgRetentionRate = (appliedFilters) =>
  postChart(payloads.AvgRetentionRate, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const AvgReturnViewerRate = (appliedFilters) =>
  postChart(payloads.AvgReturnViewerRate, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const programATRISK = (appliedFilters) =>
  postChart(payloads.programATRISK, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const ProgramHealthScorecard = (appliedFilters) =>
  postChart(payloads.ProgramHealthScorecard, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const programSTRENGTHEN = (appliedFilters) =>
  postChart(payloads.programSTRENGTHEN, appliedFilters, ['programFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const MorningBlock06h3009h00 = (appliedFilters) =>
  postChart(payloads.MorningBlock06h3009h00, appliedFilters, ['programFilters', 'weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const PrimeTimeChain19h0022h30 = (appliedFilters) =>
  postChart(payloads.PrimeTimeChain19h0022h30, appliedFilters, ['programFilters', 'weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const AudienceFullChannel = (appliedFilters) =>
  postChart(payloads.AudienceFullChannel, appliedFilters, ['programFilters', 'weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const ProgramInfor = (appliedFilters) =>
  postChart(payloads.ProgramInfor, appliedFilters, ['weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const AverageDropOffByMinute = (appliedFilters) =>
  postChart(payloads.AverageDropOffByMinute, appliedFilters, ['weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const WatchTimeEfficiencyLast8Weeks = (appliedFilters) =>
  postChart(payloads.WatchTimeEfficiencyLast8Weeks, appliedFilters, ['weekFilters', 'dateFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const DropOffCurve = (appliedFilters) =>
  postChart(payloads.DropOffCurve, appliedFilters, ['weekFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const filterProgram = (appliedFilters) =>
  postChart(payloads.filterProgram, appliedFilters, ['weekFilters', 'dateFilters', 'programFilters', 'programMultipleFilters', 'channelMultipleFilters', 'dateMultipleFilters']);

export const ContentHealthScoreReport = (appliedFilters) =>
  postChart(payloads.ContentHealthScoreReport, appliedFilters, ['weekFilters', 'dateFilters', 'programFilters']);