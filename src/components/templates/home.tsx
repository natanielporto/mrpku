import { Recipe } from "../screens/recipe";
import { TemplateWrapper } from "../atoms/TemplateWrapper/TemplateWrapper";

export function HomeScreen() {
  return (
    <TemplateWrapper>
      <Recipe />
    </TemplateWrapper>
  );
}
