function interpret(code) {
  // Fix function declarations FIRST
  code = code.replace(
    /kam (\w+)\(([^)]*)\) {([\s\S]+?)}/g,
    "function $1($2) {$3}"
  );

  // Fix return statements
  code = code.replace(/firotja (.+)/g, "return $1;");

  // Fix variable declarations (`dororeba`)
  code = code.replace(/dororeba (\w+) = "(.+)"/g, 'let $1 = "$2";');
  code = code.replace(/dororeba (\w+) = (\d+)/g, "let $1 = $2;");
  code = code.replace(/dororeba (\w+) = \[(.+)\]/g, "let $1 = [$2];");
  code = code.replace(/dororeba (\w+) = \{([\w\s,]+)\}/g, "let $1 = {$2};"); // Object assignment

  // Fix print (`dekareba`)
  code = code.replace(/dekareba\((.+)\)/g, "console.log($1);");

  // Fix for loop (`barbar`)
  code = code.replace(
    /barbar\s*\(\s*dororeba\s+(\w+)\s*=\s*(\d+)\s*;\s*([^;]+)\s*;\s*(\w+\s*=\s*\w+\s*[\+\-]\s*\d+)\s*\)\s*{([\s\S]+?)}/g,
    "for (let $1 = $2; $3; $1 = $1 + 1) {$5}"
  );

  // Fix conditionals (`jodi`, `naile`)
  code = code.replace(
    /jodi \((.+)\) {([\s\S]+?)} naile {([\s\S]+?)}/g,
    "if ($1) {$2} else {$3}"
  );
  // Additional check for simple if without `else`
  code = code.replace(/jodi \((.+)\) {([\s\S]+?)}/g, "if ($1) {$2}");

  // Fix while loop (`dumse`)
  code = code.replace(/dumse \((.+)\) {([\s\S]+?)}/g, "while ($1) {$2}");

  // Fix else if (`ar naile`)
  code = code.replace(/ar naile \((.+)\) {(.+)}/g, "else if ($1) {$2}");

  // Fix break and continue (`ubabeta`, `salaiyaja`)
  code = code.replace(/ubabeta/g, "break;");
  code = code.replace(/salaiyaja/g, "continue;");

  // Fix try-catch (`suru kor` and `vul dor`)
  code = code.replace(
    /suru kor {([\s\S]+?)} vul dor \((.+)\) {([\s\S]+?)}/g,
    "try {$1} catch ($2) {$3}"
  );

  // Fix switch-case (`mile` and `naile`)
  code = code.replace(/mile \((.+)\) {([\s\S]+?)}/g, "switch ($1) {$2}");
  code = code.replace(/"(.+)" {([\s\S]+?)}/g, 'case "$1": $2 break;');
  code = code.replace(/naile/g, "default:");

  // Add support for function expressions (e.g., `kam x = (a, b) => a + b;`)
  code = code.replace(
    /kam (\w+)\s*=\s*\(([^)]*)\)\s*=>\s*([\s\S]+?);/g,
    "const $1 = ($2) => {$3};"
  );

  return code;
}

module.exports = interpret;
