import { AddressPresenter } from "@/presenter/AddressPresenter";
import axios from "axios";

export interface ViaCepDtoOutput {
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
}

export class CepApi {
  static async getAddressByCep(cep: string) {
    const { data } = await axios.get<ViaCepDtoOutput>(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    return new AddressPresenter(data).getData();
  }
}
