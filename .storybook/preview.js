import "../style/output.css";
import { Kaze } from "../src/components/providers/Kaze";
import theme from "../style/kaze/index";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Kaze theme={theme}>
      <Story />
    </Kaze>
  )
]