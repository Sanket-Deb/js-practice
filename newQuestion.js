// newQuestion.js (ESM)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    '❌ Provide a question title: npm run new -- "Your Question Title"'
  );
  process.exit(1);
}

const questionName = args.join(" ").trim();
const folder = path.join(__dirname, "questions");
if (!fs.existsSync(folder)) fs.mkdirSync(folder);

const files = fs
  .readdirSync(folder)
  .filter((f) => f.startsWith("Q") && f.endsWith(".js"));
const qnum = files.length + 1;

const kebab = questionName
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "");
const baseName = `Q${qnum}_${kebab}`;
const jsPath = path.join(folder, `${baseName}.js`);
const mdPath = path.join(folder, `${baseName}.md`);

const funcName = `q${qnum}_${kebab.replace(/-/g, "_")}`;

const jsTemplate = `// ${baseName}.js
// Boilerplate for: ${questionName}

const ${funcName} = (input) => {
  // TODO: implement solution
  return input;
};

console.log(${funcName}('example input'));

export default ${funcName};
`;

const mdTemplate = `### ${baseName}: ${questionName}

**Prompt:**  
Describe the problem statement here.

**Example:**  
\`\`\`
Input: 
Output:
\`\`\`

**Approach:**  
Explain your thought process here.
`;

fs.writeFileSync(jsPath, jsTemplate);
fs.writeFileSync(mdPath, mdTemplate);

console.log(`✅ Created boilerplates:
- ${path.relative(__dirname, jsPath)}
- ${path.relative(__dirname, mdPath)}`);
