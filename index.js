const chalk = require('chalk');
const _ = require('lodash');
const logs = require('./data/logs');

_.each(logs, log => {
    switch (log.level) {
	case 'error': console.log(chalk.red(log.message));
	case 'warning': console.log(chalk.yellow(log.message));
	case 'info': console.log(chalk.blue(log.message));
    }
});
