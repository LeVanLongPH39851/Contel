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
  postChart(payloads.AvgHealthScore, appliedFilters);

export const AvgRetentionRate = (appliedFilters) =>
  postChart(payloads.AvgRetentionRate, appliedFilters);

export const AvgReturnViewerRate = (appliedFilters) =>
  postChart(payloads.AvgReturnViewerRate, appliedFilters);

export const programATRISK = (appliedFilters) =>
  postChart(payloads.programATRISK, appliedFilters);

export const ProgramHealthScorecard = (appliedFilters) =>
  postChart(payloads.ProgramHealthScorecard, appliedFilters);

export const programSTRENGTHEN = (appliedFilters) =>
  postChart(payloads.programSTRENGTHEN, appliedFilters);

export const MorningBlock06h3009h00 = (appliedFilters) =>
  postChart(payloads.MorningBlock06h3009h00, appliedFilters);

export const PrimeTimeChain19h0022h30 = (appliedFilters) =>
  postChart(payloads.PrimeTimeChain19h0022h30, appliedFilters);

export const AudienceFullChannel = (appliedFilters) =>
  postChart(payloads.AudienceFullChannel, appliedFilters);