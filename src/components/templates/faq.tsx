import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";
import { FaqDropdown } from "../molecules/FaqDropdown/FaqDropdown";

export function FaqScreen() {
  const sampleFaq = [
    {
      question: "O que é PKU?",
      answer:
        "Fenilcetonúria (PKU, na sigla em inglês) é uma doença decorrente de um erro inato do metabolismo de aminoácidos, que ocorre por herança autossômica recessiva. Isso significa que a criança precisa receber um gene alterado da mãe e outro do pai para desenvolver o distúrbio. Com essa condição, a pessoa deve ter diversos cuidados especiais com sua saúde quando o assunto é comida e os tipos de alimentos ingeridos, que são bastante restritos em variedade e quantidade.",
    },
    {
      question: "De onde vêm as imagens? Elas são reais?",
      answer:
        "As imagens são meramente ilustrativas e vêm do site www.unsplash.com. Elas são uma forma de ilustrar as receitas, porém, não perfeitamente igual ao resultado final. Elas podem ser usadas como sugestão de preparo, por exemplo. Mas nunca se esqueça: sempre coloque seu toque pessoal à apresentação dos pratos e bebidas.",
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
