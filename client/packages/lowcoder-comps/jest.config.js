import config from "../../config/test/jest.config.js";

export default {
  ...config,
  setupFiles: [...config.setupFiles],
};
