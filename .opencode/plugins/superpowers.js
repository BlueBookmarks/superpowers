import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SuperpowersPlugin = async () => {
  const superpowersSkillsDir = path.resolve(__dirname, "../../skills");

  return {
    config: async (config) => {
      const enabled =
        process.env.SUPERPOWERS === "1" ||
        process.env.SUPERPOWERS === "true" ||
        process.env.SUPER === "1" ||
        process.env.SUPER === "true";

      if (!enabled) {
        return;
      }

      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];

      if (!config.skills.paths.includes(superpowersSkillsDir)) {
        config.skills.paths.push(superpowersSkillsDir);
      }
    },
  };
};
