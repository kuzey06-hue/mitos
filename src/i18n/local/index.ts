const modules = import.meta.glob('./*/*.ts', { eager: true });

const messages: Record<string, Record<string, Record<string, unknown>>> = {};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang, ns] = match;
    const module = modules[path] as { default?: Record<string, unknown> };

    if (!messages[lang]) {
      messages[lang] = {};
    }

    if (module.default) {
      messages[lang][ns] = module.default;
    }
  }
});

export default messages;