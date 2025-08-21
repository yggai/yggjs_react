const { basicTemplate } = require('../dist/basic/index.js');
const { TemplateGenerator } = require('../dist/basic/index.js');

async function generateBasicExample() {
  try {
    console.log('🚀 正在生成basic示例项目...');
    
    await TemplateGenerator.createProject('basic', basicTemplate, './basic');
    
    console.log('✅ 示例项目生成完成！');
  } catch (error) {
    console.error('❌ 生成失败:', error.message);
  }
}

generateBasicExample();
