const { TemplateGenerator } = require('../dist/basic/generator');
const { basicTemplate } = require('../dist/basic/templates');

async function generateBasic() {
  try {
    await TemplateGenerator.createProject('basic', basicTemplate, './examples/basic');
    console.log('✅ Basic example generated successfully!');
  } catch (error) {
    console.error('❌ Error generating basic example:', error);
    process.exit(1);
  }
}

generateBasic();
