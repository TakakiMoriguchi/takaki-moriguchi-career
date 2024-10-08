export const data = [
  {
    "id": 1,
    "business_category": "観光",
    "project_title": "遊びのコンシェルジュ",
    "project_detail": {
      "overview": `
        個人開発として観光・体験・イベントを検索できるサービスを発足した。¥n
        ワイヤーフレーム設計¥nデータベース設計（ERD）¥n
        デザイン¥n
        AWS設定（EC2, Route53, Cloud9, S3, RDS, ELB）¥n
        フロントエンド開発¥n
        バックエンド開発¥n
        掲載用の観光コンテンツ作成¥n
        仲間集めの営業
      `,
      "task_responsibilities": "企画・デザイン・プロジェクト管理・データ収集・環境構築・開発",
      "achievements": "リリース前まで開発したが、自分以外のメンバー脱退・コロナ・次の案件受注の為、断念した。",
      "team_structure": "自分+バックエンド１名¥nフロント１名（常時入れ替わり）",
      "tools_technologies_used": [
        "AWS",
        "LucidChart",
        "illustrator",
        "photoshop"
      ],
      "git_repository": "github"
    },
    "employment_status": "",
    "start_date": "2019年1月頃",
    "end_date": "2021年12月頃",
    "role": "",
    "member_count": 4,
    "programming_language": [
      "JavaScript",
      "PHP"
    ],
    "framework": [
      "Vue2",
      "Laravel6"
    ],
    "db": "MySQL",
    "server": "centos7",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": true,
    "pe_basic_design": true,
    "pe_detailed_design": true,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 2,
    "business_category": "金融",
    "project_title": "クロスボーダー決済システム（Phase1）",
    "project_detail": {
      "overview": `
        前述の遊びのコンシェルジュ開発途中に引き受けた案件¥n
        既存のAPIに対する決済送信・売上グラフの描画を行うviewer作成¥n
        但し、既存のAPIの仕様がなかったためリバースエンジニアリングして解析¥n
        要件定義・デザイン（sketch）・開発
      `,
      "task_responsibilities": "要件定義・開発・デザイン",
      "achievements": "リリース済",
      "team_structure": "自分+バックエンド 各１人（２ヶ月目より1人で開発）",
      "tools_technologies_used": [
        "LucidChart",
        "Sketch",
        "illustrator"
      ],
      "git_repository": "github"
    },
    "employment_status": "請負契約",
    "start_date": "2021年9月頃",
    "end_date": "2022年6月頃",
    "role": "PL",
    "member_count": 3,
    "programming_language": [
      "JavaScript",
      "PHP"
    ],
    "framework": [
      "Vue2",
      "Laravel6",
      "Bootstrap"
    ],
    "db": "PostgreSQL",
    "server": "centos5",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": true,
    "pe_basic_design": true,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 3,
    "business_category": "FX",
    "project_title": "FXサービスのUIデザイン",
    "project_detail": {
      "overview": "FXサービスのリニューアルの為のUIデザイン",
      "task_responsibilities": "UIデザイン",
      "achievements": "",
      "team_structure": "",
      "tools_technologies_used": [
        "Sketch",
        "illustrator"
      ],
      "git_repository": ""
    },
    "employment_status": "準委任契約",
    "start_date": "2022年7月頃",
    "end_date": "2022年8月頃",
    "role": "Designer",
    "member_count": 1,
    "programming_language": [
      "-"
    ],
    "framework": [
      "-"
    ],
    "db": "",
    "server": "",
    "pe_investigation_analysis": false,
    "pe_requirement_definition": false,
    "pe_basic_design": false,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": false,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 4,
    "business_category": "FX",
    "project_title": "KYC認証システム",
    "project_detail": {
      "overview": `
        KYC認証システム用の画像アップロードサービス設計¥n
        外注選定・管理¥n
        疎通テスト用にreactにて簡易的なフロント作成
      `,
      "task_responsibilities": "設計・外注管理",
      "achievements": "リリース済",
      "team_structure": "自分+外注1人",
      "tools_technologies_used": [
        ""
      ],
      "git_repository": ""
    },
    "employment_status": "準委任契約",
    "start_date": "2022年9月頃",
    "end_date": "2022年9月頃",
    "role": "PL",
    "member_count": 1,
    "programming_language": [
      "JavaScript",
      "PHP"
    ],
    "framework": [
      "Laravel9",
      "React"
    ],
    "db": "MySQL",
    "server": "AlmaLinux",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": false,
    "pe_basic_design": false,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": false,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 5,
    "business_category": "金融",
    "project_title": "クロスボーダー決済システム（Phase2）",
    "project_detail": {
      "overview": `
        既存システム（決済・アフィリエイト）から決済部分だけのリプレイス案件。¥n
        USにて既存担当者との打ち合わせ¥n
        USにてDB担当者とのDB設計・ERD製図¥n
        USにてデータセンター視察¥n
        USにてインフラ用のクラウドサービス打ち合わせ（Zadara）¥n
        PH既存担当者と打ち合わせ¥n
        エンドユーザー（事務員）ヒアリング¥n
        ワイヤーフレーム設計¥n
        グランドデザイン（sketch）¥n
        フロントエンド開発（Next.js/SSR）¥n
        グラフ描画（Chart.js）、多言語化対応（react-i18-next）、CSSフレームワーク（SCSS、Bootstrap5）¥n
        バックエンド開発（DjangoRestFramework）¥n
        決済用外部API接続、暗号化対応（cryptography, pycryptodome）、PDF出力（reportlab）、リファクタ、パフォーマンスチューニング¥n
        フロント用のnginx設定¥n
        フロント用のCI設定¥n基本設計¥n
        外注管理¥n
        各サービス打ち合わせ¥n
      `,
      "task_responsibilities": "PL",
      "achievements": "リリース済",
      "team_structure": "自分+フロント1名、バックエンド1名、インフラ1名、DB1名、PM1名、外注2名",
      "tools_technologies_used": [
        "LucidChart",
        "Sketch",
        "AWS",
        "M4u"
      ],
      "git_repository": "gitlab"
    },
    "employment_status": "準委任契約",
    "start_date": "2022年8月頃",
    "end_date": "2024年1月末",
    "role": "PL",
    "member_count": 5,
    "programming_language": [
      "TypeScript",
      "Python"
    ],
    "framework": [
      "React",
      "Next.js",
      "Django"
    ],
    "db": "MySQL",
    "server": "AlmaLinux/Nginx",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": true,
    "pe_basic_design": true,
    "pe_detailed_design": true,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 6,
    "business_category": "物流",
    "project_title": "配送管理システムリプレイス",
    "project_detail": {
      "overview": `
        既存システム（VisualBasic）のリプレイスの引き継ぎ案件。¥n
        途中まで進めてあったLaravel/Vue3のコードが要件に合っておらず、リバースエンジニアリングしてNext.jsに移行¥n
        要件が曖昧で拡張希望が多かったため、週次での打ち合わせを行い、要件定義を進めた。¥n
        DB設計し直し（ERD製図）¥n
        ワイヤーフレーム設計¥nFE/BEをNext.jsで完結させるため、prismaにてマイグレーション¥n
        エクセルの帳票作成（ExcelJS）¥n
        KeyDownによる操作
      `,
      "task_responsibilities": "設計・デザイン・開発",
      "achievements": "１次受けの開発費不足で再契約できず、プロジェクト終了",
      "team_structure": "自分+フルスタック1名",
      "tools_technologies_used": [
        "LucidChart",
        "Sketch",
        "ExcelJS"
      ],
      "git_repository": "github, bitbucket"
    },
    "employment_status": "準委任契約",
    "start_date": "2023年5月頃",
    "end_date": "2024年12月頃",
    "role": "PL",
    "member_count": 2,
    "programming_language": [
      "TypeScript"
    ],
    "framework": [
      "Next.js"
    ],
    "db": "MySQL",
    "server": "AlmaLinux/Nginx",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": true,
    "pe_basic_design": true,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 7,
    "business_category": "LLM",
    "project_title": "LlamaIndexによるLLM-API開発",
    "project_detail": {
      "overview": `
        LlamaIndexを使用して、検索拡張生成 (RAG)したAPI開発¥n
        LineWorksとphpアプリ（外部）がアクセスしてくるAPIのエンドポイントを作成¥n
        フロントも欲しいということになり、React（SPA）にて作成¥n
        docker定義¥nデータベース関連（sqlalchemy）¥n
        マイグレーション管理（alembic）¥n
        テスト（pytest）¥n
        プロジェクト管理（github）¥n
        zabbixによる監視の導入
      `,
      "task_responsibilities": "開発",
      "achievements": "現在進行中",
      "team_structure": "自分1名",
      "tools_technologies_used": [
        "mermaid"
      ],
      "git_repository": "github"
    },
    "employment_status": "準委任契約",
    "start_date": "2023年1月末頃",
    "end_date": "継続中（空いている時間で開発）",
    "role": "PG",
    "member_count": 1,
    "programming_language": [
      "TypeScript",
      "Python"
    ],
    "framework": [
      "React",
      "FastAPI"
    ],
    "db": "MySQL",
    "server": "nginx",
    "pe_investigation_analysis": true,
    "pe_requirement_definition": true,
    "pe_basic_design": true,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": true,
    "pe_maintenance_operation": false
  },
  {
    "id": 8,
    "business_category": "プラント",
    "project_title": "保全管理システムの追加開発",
    "project_detail": {
      "overview": `
        SESを利用して参画¥n
        Laravel/jqueryのシステムをNext.jsにするリプレイス要件¥n
        Materi-UIを使用してコンポーネントの細かい修正¥n
        追加開発したい要件の定義¥n
        FE側の新規画面作成¥n
        軽微なバグ修正¥n
        FigmaのReデザイン¥n
      `,
      "task_responsibilities": "開発",
      "achievements": "契約終了",
      "team_structure": "自分+フルスタック3名+フロント1名",
      "tools_technologies_used": [
        "Figma",
        "SWR",
        "MaterialUI"
      ],
      "git_repository": "github"
    },
    "employment_status": "SES",
    "start_date": "2024年2月",
    "end_date": "2024年5月末",
    "role": "PG",
    "member_count": 5,
    "programming_language": [
      "TypeScript"
    ],
    "framework": [
      "Next.js"
    ],
    "db": "MySQL",
    "server": "AWS",
    "pe_investigation_analysis": false,
    "pe_requirement_definition": true,
    "pe_basic_design": false,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 9,
    "business_category": "医療",
    "project_title": "医療viewerの追加開発",
    "project_detail": {
      "overview": `
        SESを利用して参画¥n
        リリース前の修正・リリース後の追加開発¥n
        バグ修正・新機能開発¥n
        Figmaデザインに対してのデザイン調整¥n
        複雑な計算や条件式はFE側で処理する方針¥n
        強い型定義・DOM操作など¥n
      `,
      "task_responsibilities": "開発",
      "achievements": "10月末で契約終了",
      "team_structure": "自分+フロント2名+バックエンド1名+PM1名+PL1名",
      "tools_technologies_used": [
        "Figma",
        "SWR",
        "MaterialUI"
      ],
      "git_repository": "github"
    },
    "employment_status": "SES",
    "start_date": "2024年6月",
    "end_date": "2024年10月",
    "role": "PG",
    "member_count": 6,
    "programming_language": [
      "TypeScript"
    ],
    "framework": [
      "React"
    ],
    "db": "Firebase",
    "server": "",
    "pe_investigation_analysis": false,
    "pe_requirement_definition": false,
    "pe_basic_design": false,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  },
  {
    "id": 10,
    "business_category": "食品",
    "project_title": "某チェーン店の在庫管理システムViewer",
    "project_detail": {
      "overview": `
        前回の案件で契約の関係上、スライドして当案件に参画。
        旧システムからのリプレイスで、Next.js(SSR)でフロントを作成する。
        全体的なコンポーネント基盤や設定を作成。
      `,
      "task_responsibilities": "開発",
      "achievements": "10月末で契約終了",
      "team_structure": "自分+フロント4名+PM1名+PL1名",
      "tools_technologies_used": [　
        "Figma",
        "MaterialUI"
      ],
      "git_repository": "github"
    },
    "employment_status": "SES",
    "start_date": "2024年9月",
    "end_date": "2024年10月",
    "role": "PG",
    "member_count": 6,
    "programming_language": [
      "TypeScript"
    ],
    "framework": [
      "React",
      "Next.js"
    ],
    "db": "",
    "server": "",
    "pe_investigation_analysis": false,
    "pe_requirement_definition": false,
    "pe_basic_design": false,
    "pe_detailed_design": false,
    "pe_implementation_unit_testing": true,
    "pe_testing": false,
    "pe_maintenance_operation": false
  }
]
