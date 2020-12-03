import { fisAxios } from "@/libs/axios";
import { RESOURCE } from "@/resource/resource";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

const api = RESOURCE.match;
@Module({
  namespaced: true,
  name: "match1n",
})
export default class MatchModule extends VuexModule {
  // State
  response = null;

  // Getters
  get getResponse() {
    return this.response;
  }

  // Mutations
  @Mutation
  setResponse(data: any): void {
    this.response = data;
  }

  // Actions
  @Action({ commit: "setResponse", rawError: true })
  async upload(data: any) {
    const response = await fisAxios.post(`${api}`, data);
    return response.data;
  }
}
