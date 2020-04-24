const vscode = require('vscode');
const remover = require('./remover');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// console.log('Congratulations, your extension "remover" is now active!');

	let rcomment = new remover();

	let disposable = vscode.commands.registerCommand('remover.frm', function () {
		vscode.window.showInformationMessage('Default Flutter Project Comment Remover');
		rcomment.removeComments();
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
