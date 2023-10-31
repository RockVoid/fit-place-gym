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
          <h4 className="font-bold">
            Links
          </h4>
          <p className="my-5">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/roque-souza-costa-6aa8171ba/">LinkedIn</a>
          </p>
          <p className="my-5">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/RockVoid">GitHub</a>
          </p>
          <p><a rel="noopener noreferrer" target="_blank" href="https://nextjs-blog-tau-flame-79.vercel.app/">Portifolio</a></p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-16">
          <h4 className="font-bold">Contato</h4>
          <p className="my-5">Deseja ter sua própria versão?</p>
          <p>(85) 98542-9284</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;