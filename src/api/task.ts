import axios, { AxiosResponse } from "axios";
import { TaskCategory } from "../types/task";

export function getTasks(): Promise<AxiosResponse<TaskCategory[]>> {
  return axios.get(
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress"
  );
}
