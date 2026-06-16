import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SuperpowersPlugin = async () => {
  const superpowersSkillsDir = path.resolve(__dirname, "../../skills");

  return {
    // 只注册 skills，让你可以手动 use skill tool to load ...
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];

      if (!config.skills.paths.includes(superpowersSkillsDir)) {
        config.skills.paths.push(superpowersSkillsDir);
      }
    },

    // 不再注入 using-superpowers bootstrap
    // 不再添加 experimental.chat.messages.transform
  };
};
