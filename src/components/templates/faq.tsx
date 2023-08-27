import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";
import { FaqDropdown } from "../molecules/FaqDropdown/FaqDropdown";
import { useMemo } from "react";

export function FaqScreen() {
  const fakeFaq = [
    {
      question: "O que é PKU? 1",
      answer:
        "Fenilcetonúria (PKU, na sigla em inglês) é uma doença decorrente de um erro inato do metabolismo de aminoácidos, que ocorre por herança autossômica recessiva. Isso significa que a criança precisa receber um gene alterado da mãe e outro do pai para desenvolver o distúrbio.",
    },
    {
      question: "O que é PKU? 2",
      answer:
        "Fenilcetonúria (PKU, na sigla em inglês) é uma doença decorrente de um erro inato do metabolismo de aminoácidos, que ocorre por herança autossômica recessiva. Isso significa que a criança precisa receber um gene alterado da mãe e outro do pai para desenvolver o distúrbio.",
    },
    {
      question: "O que é PKU? 3",
      answer:
        "Fenilcetonúria (PKU, na sigla em inglês) é uma doença decorrente de um erro inato do metabolismo de aminoácidos, que ocorre por herança autossômica recessiva. Isso significa que a criança precisa receber um gene alterado da mãe e outro do pai para desenvolver o distúrbio.",
    },
  ];

  const renderQuestions = useMemo(
    () => fakeFaq.map((faq) => <FaqDropdown key={faq.question} {...faq} />),
    []
  );

  return <TemplateWrapper>{renderQuestions}</TemplateWrapper>;
}
