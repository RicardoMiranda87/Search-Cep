import Head from "next/head";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { TextField } from "@/components/commons/form/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { CepApi } from "@/api/CepApi";
import Swal from 'sweetalert2';

interface CepValues {
  cep: string;
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
  number: string;
  complement: string;
}

const SearchCep = () => {
  const form = useForm<CepValues>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const cepValue = watch("cep");

  const fetchCepData = useCallback(
    async (cep: string) => {
      try {
        const address = await CepApi.getAddressByCep(cep);
        setValue("uf", address.uf);
        setValue("localidade", address.localidade);
        setValue("bairro", address.bairro);
        setValue("logradouro", address.logradouro);
      } catch (error) {
        console.log("Erro ao buscar o CEP:", error);
      }
    },
    [setValue]
  );

  useEffect(() => {
    if (cepValue?.length === 8) {
      fetchCepData(cepValue);
    }
  }, [cepValue, fetchCepData]);

  const onSubmit: SubmitHandler<CepValues> = (data) => {
    Swal.fire({
      title: 'Sucesso!',
      text: 'Endereço validado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Buscar CEP | NextJS Form</title>
      </Head>
      <main className="flex items-center justify-center p-8">
        <FormProvider {...form}>
          <form
            className="h-120 w-128 p-8 bg-gray-900 text-white rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6">
              <TextField name="cep" label="CEP" />
            </div>

            <div className="mb-6">
              <TextField name="uf" label="Estado" />
            </div>

            <div className="mb-6">
              <TextField name="localidade" label="Cidade" />
            </div>

            <div className="mb-6">
              <TextField name="bairro" label="Bairro" />
            </div>

            <div className="mb-6">
              <TextField name="logradouro" label="Rua" />
            </div>

            <div className="mb-6">
              <TextField name="number" label="Número" />
            </div>

            <div className="mb-6">
              <TextField name="complement" label="Complemento" />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-white text-black p-1 border-b rounded-sm"
              >
                Enviar
              </button>
            </div>
          </form>
        </FormProvider>
      </main>
    </>
  );
};

export default SearchCep;
