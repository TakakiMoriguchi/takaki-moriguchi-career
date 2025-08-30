type employmentStatus = ['請負契約', '準委任契約'];
type roleType = ['PM', 'PL', 'PG', 'Designer'];

type profectDetail = {
  overview: string; // 概要
  task_responsibilities: string; // 担当業務
  achievements: string; // 成果
  team_structure: string; // チーム構成
  tools_technologies_used: string[]; // 使用したツールや技術
  git_repository: string; // gitリポジトリ
};

export type DataType = {
  id: number; // key用
  business_category: string; // 業種
  project_title: string; // プロジェクト名
  project_detail: profectDetail; // プロジェクト詳細（後で拡張）
  profect_url: string; // プロジェクトURL
  employment_status: employmentStatus | ''; // 雇用形態
  start_date: string; // 契約開始日
  end_date: string; // 契約終了日
  role: roleType; // 役割
  member_count: number; // メンバー数
  programming_language: string[]; // 使用言語
  framework: string[]; // 使用フレームワーク
  db: string; // 使用DB
  server: string; // サーバー
  pe_investigation_analysis: boolean; // 調査分析
  pe_requirement_definition: boolean; // 要件定義
  pe_basic_design: boolean; // 基本設計
  pe_detailed_design: boolean; // 詳細設計
  pe_implementation_unit_testing: boolean; // 実装・単体
  pe_testing: boolean; // テスト
  pe_maintenance_operation: boolean; // 保守・運用
};
