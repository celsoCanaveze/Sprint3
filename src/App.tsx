import { Header } from "./components/header"
import { useAuth } from "./context/userContext"
import { CallMechanicModal } from "./components/modal/call-mechanic"
import { CardIntegrantes } from "./components/card-integrantes"

function App() {
  const {user, userIsLogged} = useAuth()

  return (
      <main className="text-white">
        <Header />
        <section id="initial" className="flex flex-col items-center gap-6 p-5 h-full">
          <h1 className="text-sky-500 text-4xl font-bold mt-10">Porto Seguro</h1>
          <p className="lg:w-[600px] text-center text-lg">Porto Seguro é uma das maiores seguradoras do Brasil, oferecendo uma ampla gama de produtos e serviços, como seguros de automóveis, residenciais, empresariais, de saúde, e previdência. Fundada em 1945, a empresa é reconhecida por sua solidez, inovação e compromisso com o cliente. Além de seguros, a Porto Seguro também atua em áreas como consórcios, financiamentos, e soluções para mobilidade urbana, buscando sempre proporcionar segurança e tranquilidade aos seus clientes, com uma forte presença em todo o território nacional.</p>
        </section>

        {userIsLogged 
        ? 
        <> 
          <section id="call" className="flex flex-col items-center gap-6 p-5 mt-10">
            <h1 className="text-sky-500 text-4xl font-bold">Chamar Mecanico</h1>
            <p>Está precisando de um mecanico ? Clique no botão abaixo e chame um</p>
            <CallMechanicModal />
          </section>

          <section className="flex items-center flex-col mt-10 text-lg pb-10">
           <img src={user?.carImg} alt="" />
           <h1>Carro: {user?.car}</h1>
           <h1>Ano: {user?.year}</h1>
           <h1>Modelo: {user?.model}</h1>
           <h1>Seguro: {user?.security}</h1>
          </section>
        </>

        :
        <></>
      }
      <section id="integrantes" className="flex flex-col items-center gap-6 p-5 h-full">
        <h1 className="text-sky-500 text-4xl font-bold mt-10">Integrantes</h1>
        <CardIntegrantes name={"Tiago Augusto Desiderato Ferro"} github={"https://github.com/Ferro333"} imagem={"/Tiago.png"} rm={"558485"} />
        <CardIntegrantes name={"Celso Canaveze Teixeira Pinto"} github={"https://github.com/celsoCanaveze"} imagem={"/Celso.png"} rm={"556118"} />
      </section>
      </main>

  )
}

export default App
