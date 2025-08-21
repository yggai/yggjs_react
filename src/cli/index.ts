#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { basicTemplate } from '../basic/templates';
import { TemplateGenerator } from '../basic/generator';

const program = new Command();

program
  .name('yggjs_react')
  .description('专为React快速开发打造的脚手架工具')
  .version('1.0.0');

program
  .command('create')
  .description('创建一个新的React项目')
  .argument('[project-name]', '项目名称')
  .option('-t, --template <template>', '模板类型', 'basic')
  .action(async (projectName, options) => {
    try {
      // 如果没有提供项目名称，询问用户
      if (!projectName) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: '请输入项目名称:',
            validate: (input) => {
              if (!input.trim()) {
                return '项目名称不能为空';
              }
              if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
                return '项目名称只能包含字母、数字、连字符和下划线';
              }
              return true;
            }
          }
        ]);
        projectName = answers.projectName;
      }

      // 选择模板
      const templateAnswers = await inquirer.prompt([
        {
          type: 'list',
          name: 'template',
          message: '请选择项目模板:',
          choices: [
            {
              name: 'Basic - Vite + React + TypeScript + Zustand + React Router',
              value: 'basic'
            }
          ],
          default: options.template
        }
      ]);

      const selectedTemplate = templateAnswers.template;
      let template;

      switch (selectedTemplate) {
        case 'basic':
          template = basicTemplate;
          break;
        default:
          throw new Error(`未知的模板类型: ${selectedTemplate}`);
      }

      console.log(chalk.blue(`\n🚀 正在创建项目 "${projectName}"...`));
      console.log(chalk.gray(`模板: ${template.description}`));

      const spinner = ora('正在生成项目文件...').start();

      try {
        await TemplateGenerator.createProject(projectName, template);
        spinner.succeed(chalk.green('项目创建成功!'));
        
        console.log(chalk.yellow('\n📦 接下来请运行以下命令:'));
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan('  pnpm install --registry=https://registry.npmmirror.com'));
        console.log(chalk.cyan('  pnpm dev'));
        
      } catch (error) {
        spinner.fail(chalk.red('项目创建失败'));
        throw error;
      }

    } catch (error) {
      console.error(chalk.red('错误:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program
  .command('list')
  .description('列出所有可用的模板')
  .action(() => {
    console.log(chalk.blue('\n📋 可用模板:'));
    console.log(chalk.green('  basic') + chalk.gray(' - Vite + React + TypeScript + Zustand + React Router'));
  });

// 如果没有提供命令，显示帮助信息
if (process.argv.length <= 2) {
  program.help();
}

program.parse();

export { program };
