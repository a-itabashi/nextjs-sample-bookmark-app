//パスに関わる処理をしたいため、pathモジュールを読み込み
const path = require('path');

//buildEslintCommandは、lint-stagedに実行させたいコマンド
//を生成する関数（アロー関数式）
//filenamesは、引数で配列で渡される。
const buildEslintCommand = (filenames) =>
  //`文字列${式}`のテンプレートリテラル構文
  //fは、filenamesの１要素（１ファイルのパス）
  //process.cwd()は、カレントディレクトリ
  //path.relative(process.cwd(), f)でfの相対パスを取得
  //.join(' --file ')は、--file 2番目のファイル --file 3番目のファイル
  //のように --file で連結する意味
  //--fixでESLintの自動修正機能が有効
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

//設定したいことの本体
module.exports = {
  //*.{js,jsx,ts,tsx}にマッチするファイルに対して、buildEslintCommand関数を実行
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  //右側のコマンドは、[複数コマンド]とできるけど、今回は、buildEslintCommandのみ。
};
