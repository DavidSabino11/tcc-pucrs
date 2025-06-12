import Button from "@/components/Button";

export default function Home() {
  return (
    <section className="text-center space-y-9 py-10">
      <h1 className="text-5xl font-extrabold tracking-tight">Bem-vindo</h1>
      <p className="text-lg text-gray-400 max-w-xl mx-auto">
        Para ver mais projetos sobre o TCC, acesse o meu perfil no GitHub:
      </p>
      <div>
        <Button href="https://github.com/DavidSabino11/tcc-pucrs">Acessar GitHub</Button>
      </div>
    </section>
  );
}