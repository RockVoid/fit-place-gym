import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const container = {
  hidden: {},
  visible: {
    transition: {
      transition: {
        staggerChildren: 0.2
      },
    }
  }
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Onde o esforço acontece!",
    description:
      "Independente do horário de treino, o importante é vir e fazer.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Aulas 100% diversificadas",
    description:
      "Musculação, dança, luta ou funcional. Por aqui temos!.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Treinadores 100% profissionais",
    description:
      "Treinadores e instrutores com formação e experiência comprovada.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>Mais do que uma academia.</HText>
          <p className="my-5 text-sm">
            Cuidamos de cada um dos nosso membros com a devida atenção.
            Trabalhamos apenas com estrutura e profissionais corretos, que
            buscam o melhor resultado para você.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={BenefitsPageGraphic} 
            alt="benefits-page-graphic" 
            className="mx-auto" 
          />

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <HText>
                    Milhares de membros estão ficando no{" "}
                    <span className="text-primary-500">SHAPE</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
'             <p className="my-5">
                Sabemos que para ter resultados. É preciso um treino de qualidade, 
                aliado a uma boa alimentação e uma constância diária. Para isso oferecemos
                personais e recomendações de nutricionistas. Assim possibilitando 
                nossos clientes a alcançarem sua melhor forma!
              </p>
              <p className="mb-5">
                É importante que tenhamos a sensação de segurança ao estar
                executando qualquer tipo de treino, somente com profissional e 
                estrutura correta podemos ter a certeza de estarmos executando 
                as atividades corretas. E é isso que a EvoGym trás para você! 
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Fazer Parte!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default Benefits;