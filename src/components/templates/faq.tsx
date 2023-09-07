import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";
import { FaqDropdown } from "../molecules/FaqDropdown/FaqDropdown";

export function FaqScreen() {
  const sampleFaq = [
    {
      question: "O que é PKU?",
      answer:
        "Fenilcetonúria (PKU, na sigla em inglês) é uma doença decorrente de um erro inato do metabolismo de aminoácidos, que ocorre por herança autossômica recessiva. Isso significa que a criança precisa receber um gene alterado da mãe e outro do pai para desenvolver o distúrbio.",
    },
    {
      question: "De onde vêm as imagens? Elas são reais?",
      answer:
        "As imagens são meramente ilustrativas e vêm do site www.unsplash.com. Elas são uma forma de ilustrar, não perfeitamente, as receitas. Elas podem ser usadas como sugestão de preparo e como poderia ficar ao final da receita o produto. Mas nunca se esqueça: sempre coloque seu toque pessoal à apresentação dos pratos e bebidas.",
    },
    {
      question: "Sugestões e críticas?",
      answer:
        "Mande um e-mail com sua receita, o que você achou do app, se está sendo útil para você, ou seja o que você quiser para: xxxxx@gmail.com",
    },
  ];

  return (
    <TemplateWrapper>
      {sampleFaq.map((faq) => (
        <FaqDropdown key={faq.question} {...faq} />
      ))}
    </TemplateWrapper>
  );
}
