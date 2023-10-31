import { SelectedPage, ClasseType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import muayThai from "@/assets/muay-thai.jpg";
import image3 from "@/assets/image3.png";
import image5 from "@/assets/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Classe from "./Class";

const classes: Array<ClasseType> = [
  {
    name: "Musculação",
    description:
      "A musculação é uma atividade física que estimula todo o sistema muscular. É um conjunto de exercícios baseados na repetição de cargas progressivas. Os movimentos são feitos com equipamentos específicos, como máquinas, pesos livres, borrachas, cabos  e acessórios diversos.",
    image: image1,
  },
  {
    name: "Aulas de Muay Thai",
    image: muayThai,
  },
  {
    name: "Danças",
    description:
      "A dança ajuda no condicionamento fisico e na liberação de endorfina.",
    image: image3,
  },
  {
    name: "Treinos Funcionais",
    image: image5,
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="nossasaulas"
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HText>NOSSAS AULAS</HText>
            <p className="py-5">
              Pra quem curte puxar ferro, contamos com aulas de musculação.
              Já pra vocẽ que curte dançar, temos aulas de dança.
              Pra quem gosta de se movimentar, contamos com os treinos funcionais, e
              pra quem curte esportes de combate, temos o Muay Thai.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[1400px] whitespace-nowrap">
            {classes.map((item: ClasseType, index) => (
              <Classe
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;