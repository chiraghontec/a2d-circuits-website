# VS Code Workspace Settings

## Recommended Extensions

This project works best with the following VS Code extensions. Install them for the optimal development experience:

### Essential Extensions

1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
   - Provides useful React snippets and shortcuts

2. **TypeScript Importer** (`pmneo.tsimporter`)
   - Auto imports for TypeScript

3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Intelligent Tailwind CSS class suggestions

4. **ESLint** (`dbaeumer.vscode-eslint`)
   - JavaScript and TypeScript linting

5. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
   - Code formatting

6. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
   - Automatically rename paired HTML/JSX tags

7. **Bracket Pair Colorizer 2** (`coenraads.bracket-pair-colorizer-2`)
   - Colorize matching brackets

8. **GitLens** (`eamodio.gitlens`)
   - Enhanced Git capabilities

### Recommended Settings

Add these to your VS Code `settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## Installing Extensions

### Method 1: Command Palette
1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Extensions: Install Extensions"
4. Search for each extension by name and install

### Method 2: Extensions View
1. Click the Extensions icon in the sidebar (`Cmd+Shift+X`)
2. Search for each extension and click "Install"

### Method 3: Command Line
Run this in your terminal to install all recommended extensions:

```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension pmneo.tsimporter
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension coenraads.bracket-pair-colorizer-2
code --install-extension eamodio.gitlens
```

## Workspace Configuration

Create a `.vscode/settings.json` file in the project root with team-specific settings:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```
