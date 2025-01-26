import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Início | NextJS Form</title>
        <meta name="description" content="Validação de CEP para estudos utilizando NextJS, Typescript, Tailwindcss, ReactHook e Tanstack Query"/>
      </Head>
      <div className="flex justify-center flex-col items-center mt-custom px-3">
        <h1 className="mb-4 text-xl text-center">Projeto para estudos:</h1>
        <p className="text-center">Formulário para busca de endereço através do cep utilizando <b>NextJS</b>, <b>Typescript</b>, <b>TailwindCSS</b>, <b>ReactHookForm</b> e <b>Tanstack Query</b></p>
      </div>
    </>
  );
}

export default Home;