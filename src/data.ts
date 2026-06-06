export const data = [
  {
    id: 1,
    business_category: '観光',
    project_title: '遊びのコンシェルジュ',
    project_detail: {
      overview: `
        個人開発として観光・体験・イベントを検索できるサービスを発足した。
        ワイヤーフレーム設計データベース設計（ERD）
        デザイン
        AWS設定（EC2, Route53, Cloud9, S3, RDS, ELB）
        フロントエンド開発
        バックエンド開発
        掲載用の観光コンテンツ作成
        仲間集めの営業
      `,
      task_responsibilities: '企画・デザイン・プロジェクト管理・データ収集・環境構築・開発',
      achievements:
        'リリース前まで開発したが、自分以外のメンバー脱退・コロナ・次の案件受注の為、断念した。',
      team_structure: '自分+バックエンド１名フロント１名（常時入れ替わり）',
      tools_technologies_used: ['AWS', 'LucidChart', 'illustrator', 'photoshop'],
      git_repository: 'github',
    },
    employment_status: '',
    start_date: '2019年1月頃',
    end_date: '2021年12月頃',
    role: '',
    member_count: 4,
    programming_language: ['JavaScript', 'PHP'],
    framework: ['Vue2', 'Laravel6'],
    db: 'MySQL',
    server: 'centos7',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: true,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 2,
    business_category: '金融',
    project_title: 'クロスボーダー決済システム（Phase1）',
    project_detail: {
      overview: `
        前述の遊びのコンシェルジュ開発途中に引き受けた案件
        既存のAPIに対する決済送信・売上グラフの描画を行うviewer作成
        但し、既存のAPIの仕様がなかったためリバースエンジニアリングして解析
        要件定義・デザイン（sketch）・開発
      `,
      task_responsibilities: '要件定義・開発・デザイン',
      achievements: 'リリース済',
      team_structure: '自分+バックエンド 各１人（２ヶ月目より1人で開発）',
      tools_technologies_used: ['LucidChart', 'Sketch', 'illustrator'],
      git_repository: 'github',
    },
    employment_status: '請負契約',
    start_date: '2021年9月頃',
    end_date: '2022年6月頃',
    role: 'PL',
    member_count: 3,
    programming_language: ['JavaScript', 'PHP'],
    framework: ['Vue2', 'Laravel6', 'Bootstrap'],
    db: 'PostgreSQL',
    server: 'centos5',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 3,
    business_category: 'FX',
    project_title: 'FXサービスのUIデザイン',
    project_detail: {
      overview: 'FXサービスのリニューアルの為のUIデザイン',
      task_responsibilities: 'UIデザイン',
      achievements: '',
      team_structure: '',
      tools_technologies_used: ['Sketch', 'illustrator'],
      git_repository: '',
    },
    employment_status: '準委任契約',
    start_date: '2022年7月頃',
    end_date: '2022年8月頃',
    role: 'Designer',
    member_count: 1,
    programming_language: ['-'],
    framework: ['-'],
    db: '',
    server: '',
    pe_investigation_analysis: false,
    pe_requirement_definition: false,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: false,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 4,
    business_category: 'FX',
    project_title: 'KYC認証システム',
    project_detail: {
      overview: `
        KYC認証システム用の画像アップロードサービスを設計
        グループ会社がKYC認証用に、ユーザーが画像をアップロードして、保存するサービスを作りたいという要望があったため、要件定義から設計、デザイン、開発まで担当した。
        【担当領域】
        要件定義・簡単な設計・デザイン・レビュー業務・フロントエンド開発
        【課題と対策】
        人的リソースが不足していたため、上流工程のみ担当し、開発は外注に任せることになった。
        社内にphpを扱える人材が多かったこともあり、最終的には内製化して保守することを見据えて、laravelを選択。
        laravelとは別口で、疎通テストを行いたい要望があったので、急遽React（SPA）にて簡易的なフロント作成しクライアントに提供した。
      `,
      task_responsibilities: '設計・外注管理',
      achievements: 'リリース済',
      team_structure: '自分+外注1人',
      tools_technologies_used: [''],
      git_repository: '',
    },
    employment_status: '準委任契約',
    start_date: '2022年9月頃',
    end_date: '2022年9月頃',
    role: 'PM',
    member_count: 1,
    programming_language: ['JavaScript', 'PHP'],
    framework: ['Laravel9', 'React'],
    db: 'MySQL',
    server: 'AlmaLinux',
    pe_investigation_analysis: true,
    pe_requirement_definition: false,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: false,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 5,
    business_category: '金融',
    project_title: 'クロスボーダー決済システム（Phase2）',
    project_detail: {
      overview: `
        既存システム（決済・アフィリエイト）から決済部分だけのリプレイス案件。
        【担当領域】
        全工程
        USにて既存担当者との打ち合わせ
        USにてDB担当者とのDB設計・ERD製図
        USにてデータセンター視察
        USにてインフラ用のクラウドサービス打ち合わせ（Zadara）
        PH既存担当者と打ち合わせ
        エンドユーザー（事務員）ヒアリング
        ワイヤーフレーム設計
        グランドデザイン（sketch）
        フロントエンド開発（Next.js/SSR）
        グラフ描画（Chart.js）、多言語化対応（react-i18-next）、CSSフレームワーク（SCSS、Bootstrap5）
        バックエンド開発（Django/DjangoRestFramework）
        決済用外部API接続、暗号化対応（cryptography, pycryptodome）、PDF出力（reportlab）、リファクタ、パフォーマンスチューニング
        フロント用のnginx設定
        フロント用のCI設定基本設計
        外注管理
        SMS認証など、各サービス打ち合わせ
        【課題と対策】
        APIにはtypescript、goなども検討していたが、古参のインフラ担当者を説得するのが難しいと判断したため、pythonを選択した。
        pythonはパフォーマンス面において課題があると認識していたが、トランザクション数などを考えるとギリギリ問題ないと判断したが、個人的には不安が残った。
        フロントエンドは技術を選べる状態で、typescriptを採用したかったため、Vue(Nuxt.js)よりも先んじて導入されていて、将来性も感じられるということでReact(Next.js)で開発することにした。
        フォームの入力状態によって、出し方を変えるUIが多かったためreact-hook-formを導入したが、当時の技術力不足もあって、実装に苦戦した。
        インフラをAWS互換のクラウドサーバーを使用するということで、nginxの設定などwebサーバーの設定を行なった。
        希望した人員の半分しか確保できず、確保した人員も途中で抜けたり、別業務を兼任することになったりと、人的リソースの確保が非常に難しかった。
        pythonの担当者を外注で確保したが、開発開始半年くらいで抜けてしまったため、急遽自分がバックエンドも並行開発することになった。
        apiとクライアントの結合時、人的リソースが不足していたため、さらに外注で要員補充し、協力してバグ改修を行なった。
        使用するカード会社は基本的に英語圏の会社であり、APIドキュメントなどを読んだり、フィリピンの担当者とやりとりすることで実装した。
        その際、セキュリティ要件をクリアする必要があるなどで、追加の暗号化対応を行なった。
        【得られた知見】
        全工程を担当させてもらうことができたため、プロジェクト全体の流れを把握することができた。
        技術面では、DB担当者（元オラクルのDBA）にDB設計に関して問題ないと評価をいただいたため、自身に繋がった。
      `,
      task_responsibilities: 'PMO/PL/PG',
      achievements: 'リリース済',
      team_structure: '自分+フロント1名、バックエンド1名、インフラ1名、DB1名、PM1名、外注2名',
      tools_technologies_used: ['LucidChart', 'Sketch', 'Zadara', 'M4u'],
      git_repository: 'gitlab',
    },
    employment_status: '準委任契約',
    start_date: '2022年8月頃',
    end_date: '2024年1月末',
    role: 'PL',
    member_count: 5,
    programming_language: ['TypeScript', 'Python'],
    framework: ['React', 'Next.js', 'Django'],
    db: 'MySQL',
    server: 'AlmaLinux/Nginx',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: true,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 6,
    business_category: '物流',
    project_title: '配送管理システムリプレイス',
    project_detail: {
      overview: `
        既存システム（VisualBasic）のリプレイスの炎上案件。
        【担当領域】
        全工程
        【課題と対策】
        最終のクラウアントが要件を出してこない、正しくヒアリングできていないことが原因で要件が不透明で納期が１年以上遅れていた。
        PM3人、PG1人という体制で伝言ゲームになっていたことも遅れの原因。
        クライアントと週１で打ち合わせを行い、まずは要件定義を進めた。
        その時に存在していたLaravel/Vue3のアプリが見た目や操作感重視の要件に合ってない上、スパゲティコードで解読不可能だったため、単一でAPIもフロントも実装できるNext.jsで新規に開発することにした。
        DB設計をやり直し、ORMとして、prismaを採用。
        エクセルの帳票作成（ExcelJS）
        KeyDownによる操作が多かったため、キーボードイベントの最適化を行い、ユーザー体験の向上に成功した。
        crowdworksにて人材を募集し、フルスタックエンジニアを採用して、一緒に開発を進めた。
      `,
      task_responsibilities: '設計・デザイン・開発',
      achievements: '１次受けの開発費不足で再契約できず、プロジェクト終了',
      team_structure: '自分+フルスタック1名',
      tools_technologies_used: ['LucidChart', 'Sketch', 'ExcelJS'],
      git_repository: 'github, bitbucket',
    },
    employment_status: '準委任契約',
    start_date: '2023年5月頃',
    end_date: '2024年12月頃',
    role: 'PL',
    member_count: 2,
    programming_language: ['TypeScript'],
    framework: ['Next.js'],
    db: 'MySQL',
    server: 'AlmaLinux/Nginx',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 7,
    business_category: 'LLM',
    project_title: 'LlamaIndexによるAIチャットボット開発とサポート業務',
    project_detail: {
      overview: `
        某企業にコンサルティングを行っている方のサポート業務と、LlamaIndexを使用したAIチャットボットの開発を行う案件。
        サポート業務としては、AI関連の情報を収集し、毎週最新情報やプロンプトの手法を報告すること。
        開発はLlamaIndexを使用して、入力された文章に対して社内のナレッジを検索拡張生成 (RAG)したAPI開発（FastAPI）
        そのナレッジに対して、LineWorksとphpアプリ（外部）がアクセスしてくる、APIエンドポイントを作成。
        後に、直接社員がチャット形式にて使用できる、フロントも欲しいということになり、React（SPA）にて作成。
        さらに自前でアプリケーションを構築するよりも、difyというLLMアプリ構築プラットフォームを使用した方が良いのではと提案し、difyに移行。
        先行して使い方などを調査し、使い方などを支援する業務を行った。
        【担当領域】
        全工程
        【課題と対策】
        llamaindexを使用するにあたって、typescriptとpythonが選べたが、AI関連はpythonの方がライブラリも充実しているため、pythonを選択した。
        langchainは機能は充実しているが、開発スピードが早く安定稼働が難しいと判断したため、比較的安定しているLlamaIndexを選択した。
        FastAPIは非常に薄いフレームワークでありながら、Flaskと比べるとある程度お作法も整っているのもあって選択。
        自由に開発させてもらえる環境であったため、以下のようなことも行った。
        ORMとして、sqlalchemy
        マイグレーション管理は、alembic
        テストは、pytest
        プロジェクト管理は、github
        zabbixによる監視の導入
        【得た知見】
        生成AI出始めであったため、情報収集の段階から、生成AIに関する最新の情報を追い続けることができた。
        各LLMの特徴や、プロンプトの手法なども実践で使用することができた。（当時は日本語にするのも一苦労だった）
      `,
      task_responsibilities: '開発',
      achievements: '開発終了',
      team_structure: '自分1名',
      tools_technologies_used: ['mermaid'],
      git_repository: 'github',
    },
    employment_status: '準委任契約',
    start_date: '2023年1月末頃',
    end_date: '2025年2月頃',
    role: 'PG',
    member_count: 1,
    programming_language: ['TypeScript', 'Python'],
    framework: ['React', 'FastAPI'],
    db: 'MySQL',
    server: 'nginx',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: true,
    pe_maintenance_operation: false,
  },
  {
    id: 8,
    business_category: 'プラント',
    project_title: '保全管理システムのリプレイス要件',
    project_detail: {
      overview: `
        Laravel/jqueryの旧システムをNext.js/Reactにリプレイスする案件。
        【担当領域】
        フロントエンド開発・デザイン
        【課題と対策】
        Materi-UIを使用し、コンポーネントの細かい修正などを担当。
        追加開発したい要件の定義、フロント側の新規画面作成など。
        プロジェクト前半は、SES初案件であったこと、レビューがチーム内でたらい回しになっており、最長で１週間待たされるなど、上手くバリューを出せなかった。
        エンジニア同士での思想も十分に共有されていなかったこともあり、ページによって実装の方針が異なっていたり、コードの品質も安定していない状況であったが、それを改善するような動きはできなかった。
        またすべての要件を社長自らが決めているが、多忙により指示が出せないなど、プロジェクト全体のマネジメントがうまくいっていない状況であった。
        プロジェクト後半からは、新規ページのFigmaデザインや、顧客に提案するためのプロトタイプデザインの作成など、フロントエンド以外の領域も担当させてもらうことができた。
      `,
      task_responsibilities: '開発',
      achievements: '契約終了',
      team_structure: '自分+フルスタック3名+フロント1名',
      tools_technologies_used: ['Figma', 'SWR', 'MaterialUI'],
      git_repository: 'github',
    },
    employment_status: 'SES',
    start_date: '2024年2月',
    end_date: '2024年5月末',
    role: 'PG',
    member_count: 5,
    programming_language: ['TypeScript'],
    framework: ['Next.js'],
    db: 'MySQL',
    server: 'AWS',
    pe_investigation_analysis: false,
    pe_requirement_definition: true,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 9,
    business_category: '医療',
    project_title: '医療viewerの追加開発',
    project_detail: {
      overview: `
        toB向け医療viewerの追加開発案件。
        リリース前の修正・リリース後の追加開発。
        【担当領域】
        フロントエンド開発
        【課題と対策】
        既存で見つかっているバグの修正・新機能開発
        一番のボトルネックはスクロール位置により状態を変更するという複雑な計算処理があり、パフォーマンス面での課題があったため、スクロールイベントの最適化や、計算処理の見直しを行い、パフォーマンスの向上に成功した。
        本来サーバー側で実装すべき計算や条件式なども、フロントエンドで処理する方針であったため、メモ化やDOM操作などを駆使して、実装の品質向上に貢献した。
        Figmaデザインに対してのデザイン調整。
        【得た知見】
        useRef, useMemo, useCallbackなど、使い所の限られているReactのフックを、実践で使用することができた。
      `,
      task_responsibilities: '開発',
      achievements: '10月末で契約終了',
      team_structure: '自分+フロント2名+バックエンド1名+PM1名+PL1名',
      tools_technologies_used: ['Figma', 'SWR', 'MaterialUI'],
      git_repository: 'github',
    },
    employment_status: 'SES',
    start_date: '2024年6月',
    end_date: '2024年10月',
    role: 'PG',
    member_count: 6,
    programming_language: ['TypeScript'],
    framework: ['React'],
    db: 'Firebase',
    server: '',
    pe_investigation_analysis: false,
    pe_requirement_definition: false,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: false,
    pe_maintenance_operation: false,
  },
  {
    id: 10,
    business_category: '食品',
    project_title: '某チェーン店の在庫管理システムViewer',
    project_detail: {
      overview: `
        前回の案件から契約関係で、当案件にスライドして参画。
        旧システム（VB）からのリプレイス。
        社内にNext.jsの知見のある人がいなかったため、導入補助という意味で参画。
        【担当領域】
        フロントエンド開発
        【課題と対策】
        プロジェクトができたばかりの状態であったため、react-queryの導入など、最低限の実装基盤や設定を用意した。
        恐らく曽孫受けで、既存システムの仕様が不明、next.jsの知見もなしで、何をつくるか全く見通しのたたない状況だったため、プロジェクト自体をやり直しすることになり離脱。
        【得た知見】
        特になし
      `,
      task_responsibilities: '開発',
      achievements: '10月末で契約終了',
      team_structure: '自分+フロント4名+PM1名+PL1名',
      tools_technologies_used: ['Figma', 'MaterialUI'],
      git_repository: 'github',
    },
    employment_status: 'SES',
    start_date: '2024年9月',
    end_date: '2024年10月',
    role: 'PG',
    member_count: 6,
    programming_language: ['TypeScript'],
    framework: ['React', 'Next.js'],
    db: '',
    server: '',
    pe_investigation_analysis: false,
    pe_requirement_definition: false,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: true,
    pe_maintenance_operation: true,
  },
  {
    id: 11,
    business_category: '交通',
    project_title: '鉄道会社のWEBページ, 入力CMSページ作成',
    project_detail: {
      overview: `
        鉄道会社向けのWEBページリプレイス案件。

        【担当領域】
        基本設計・詳細設計・openAPI更新・スケジュール管理・フロントエンド開発・チームビルディング・バッチ修正
        【課題と対策】
        基本設計段階では、レビューに時間がかかっていたこともあって納期が遅れ気味であった。ボトムアップで改善サイクルの提案を行い、実施してもらうことによって１ヶ月遅れくらいで実装に入ることができた。
        チームビルディングを行なっていた前任者が抜けるタイミングで、それを引き継ぎ、BPの立場ではあるがチームビルディングの実施を行った。
        開発初期では、リードエンジニアとライブラリなどの選定を行い、どんなライブラリを使用するのが適切なのか選定。その理由についてARDを記載。
        フロントエンド開発では、アトミックデザインの考え方を取り入れたかったので、デザインから必要なコンポーネントを全て洗い出し、完璧なコンポーネント設計を行えたことにより、１つも重複することなく責務を分けることができた。
        その結果、その責務に沿って実装するだけで、全ての画面を作成することができた。
        またそれらの実装コストなどを可視化して、精度の高いスケジュール管理も行うことができた。
        フロントエンド開発が落ち着いた段階で、バックエンドの開発が遅れていたので、Go言語のキャッチアップを行いつつ、既存のバッチ修正を行なった。
        バックエンドは開発基盤が脆弱で、バッチの実行環境がなかったため、完全にエアプロというのが大変だった。
        【得た知見】
        playwright、vitestなどのテストコードを実践で使用することができた。
        チームビルディングの重要性を実感した。
        それによって、他のエンジニアがどんなことを考えながら仕事をしているのか、詳細な指示出しもできた。
        PGで入ったが、PMO/PLレベルの仕事を自由にさせてもらったので、スケジュールやタスク管理も担当し、期限内に完了できた。
        リードエンジニアの方が社内トップクラスの技術力を持っていらっしゃったので、開発に対して非常に多くのことを学ぶことができた。
      `,
      task_responsibilities: '開発',
      achievements: '開発終了',
      team_structure: '全体で30-40名（フロントは8名）',
      tools_technologies_used: ['Figma', 'Figjam'],
      git_repository: 'github',
    },
    employment_status: 'SES',
    start_date: '2024年11月',
    end_date: '2026年2月',
    role: 'PG',
    member_count: 8,
    programming_language: ['TypeScript', 'Go'],
    framework: ['React19', 'Next.js15'],
    db: 'postgresql',
    server: 'aws',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: true,
    pe_maintenance_operation: false,
  },
  {
    id: 12,
    business_category: '交通',
    project_title: '鉄道会社の抽選ページ, CMS',
    project_detail: {
      overview: `
        鉄道会社のWEBページ作成案件。
        炎上案件に参画。

        【担当領域】
        フロントエンド開発・設計書作成・チームビルディング
        【課題と対策】
        既存コードをReactの原理原則に反していたり、状態管理が複雑であったため、全体的にリファクタリングを行い、品質向上に貢献した。
        チェックインやふりかえりミーティングを提案し、チームが安定して機能することを確保した。
        fetchでのAPI通信が多く、エラー処理も不十分であったため、react-queryに変更してユーザー体験を向上させた。
        【得た知見】
        copilot（claude）を使用して実装及び、リバースエンジニアリングで既存コードの解析を行って、要件定義や設計の更新に活かした。
        さらにgoのコードを解析することによって、実プロジェクトでのディレクトリ構成などを理解することができた。
      `,
      task_responsibilities: '開発',
      achievements: '開発終了',
      team_structure: '全体で20-30名（フロントは5-7名程度）',
      tools_technologies_used: ['Figma', 'Figjam'],
      git_repository: 'github',
    },
    employment_status: 'SES',
    start_date: '2026年2月',
    end_date: '2026年6月',
    role: 'PG',
    member_count: 5,
    programming_language: ['TypeScript', 'Go'],
    framework: ['React19', 'Next.js15'],
    db: 'mysql',
    server: '',
    pe_investigation_analysis: false,
    pe_requirement_definition: false,
    pe_basic_design: false,
    pe_detailed_design: false,
    pe_implementation_unit_testing: true,
    pe_testing: true,
    pe_maintenance_operation: false,
  },
  {
    id: 13,
    business_category: 'サービス',
    project_title: 'ふりかえりツール開発',
    project_detail: {
      overview: `
        ふりかえりミーティングのためのWEBアプリ開発。
        2026年6月リリース予定
      `,
      task_responsibilities: '全工程',
      achievements: '継続開発中',
      team_structure: '2名',
      tools_technologies_used: ['Figjam', 'stripe'],
      git_repository: 'github',
    },
    employment_status: '準委任契約',
    start_date: '2025年2月',
    end_date: '-',
    role: 'PG/PM',
    member_count: 1,
    programming_language: ['TypeScript', 'Go'],
    framework: ['React19', 'Next.js15'],
    db: 'supabase',
    server: '',
    pe_investigation_analysis: true,
    pe_requirement_definition: true,
    pe_basic_design: true,
    pe_detailed_design: true,
    pe_implementation_unit_testing: true,
    pe_testing: true,
    pe_maintenance_operation: false,
  },
];
