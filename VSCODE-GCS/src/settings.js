const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.disableTabReplace', () => {
        const configuration = vscode.workspace.getConfiguration();

        // Remplacez 'votreExtension' par l'extension de fichier appropriée
        configuration.update('editor.insertSpaces', false, vscode.ConfigurationTarget.Workspace);

        vscode.window.showInformationMessage('Le remplacement des tabulations est désactivé pour ce fichier.');
    });

    context.subscriptions.push(disposable);

    // Exemple de détection d'ouverture de fichier
    vscode.workspace.onDidOpenTextDocument((document) => {
        // Remplacez 'votreExtension' par l'extension de fichier appropriée
        if (document.fileName.endsWith('.gcs')) {
            vscode.commands.executeCommand('extension.disableTabReplace');
        }
    });
}

exports.activate = activate;

// Cette méthode est appelée lorsque l'extension est désactivée
function deactivate() {}
exports.deactivate = deactivate;
