const vscode = require('vscode');

class Remover{
    removeComments(){
        const editor = vscode.window.activeTextEditor;
        if(!editor){
            vscode.window.showErrorMessage('No open project for flutter');
            return;
        }

        const doc = editor.document;
        const text = doc.getText();
        // console.log(text);
        const regex = /\/\/.*/; // removes comments
        let ne = text.split(regex).join('').toString(); 
        // const kegex = /\s*$(?:\r\n?|\n)/;
        const kegex = /\s*\r/; // remove white space
        let ke = ne.split(kegex).join('');
        // console.log(ke);
        const ed = vscode.window.activeTextEditor;
        ed.edit(function(editbuilder){
            editbuilder.replace(new vscode.Range(0,0,text.length,0), ke );
        });
    }
}

module.exports = Remover;