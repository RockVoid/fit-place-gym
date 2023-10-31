import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo}/>
          <p className="my-5">
            Projetado e Desenvolvido por Roque Costa,
            Evogym é um prototipo modelo para landing
            pages de academias.
          </p>
          <p>© Todos os direitos reservados.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">LinkedIn</p>
          <p className="my-5">GitHub</p>
          <p>Instagram</p>
        </div>
        <div className="mt-16 basis-1/4">
          <h4 className="font-bold">Contato</h4>
          <p className="my-5">Deseja ter sua própria versão?</p>
          <p>(85) 98542-9284</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;