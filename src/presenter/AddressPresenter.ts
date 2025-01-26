import { ViaCepDtoOutput } from "@/api/CepApi";

interface AddressEntity {
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
}

export class AddressPresenter {
  constructor(private data: ViaCepDtoOutput) {}

  getData(): AddressEntity {
    return {
      bairro: this.data.bairro,
      uf: this.data.uf,
      logradouro: this.data.logradouro,
      localidade: this.data.localidade,
    };
  }
}
