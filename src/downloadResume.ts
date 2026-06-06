import ExcelJS from 'exceljs';
import { data } from './data';
import { profile } from './config';

export const downloadResume = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Resume');

  worksheet.columns = [
    { width: 10 }, // A
    { width: 14 }, // B
    { width: 14 }, // C
    { width: 14 }, // D
    { width: 14 }, // E
    { width: 14 }, // F
    { width: 14 }, // G
    { width: 14 }, // H
    { width: 14 }, // I
    { width: 18 }, // J
    { width: 18 }, // K
    { width: 8 }, // L
    { width: 8 }, // M
    { width: 8 }, // N
    { width: 8 }, // O
    { width: 8 }, // P
  ];

  const age = new Date().getFullYear() - profile.birthYear;
  const exportYearMonth = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
  });

  // Gridレイアウトを参考に、以下のようにセルを配置する
  // ABCD EFGH IJKL MNOP
  // no, period, title
  // summary, role, languages, tools, others

  // 基本情報
  worksheet.getCell('A1').value = '居住地';
  worksheet.getCell('A1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.mergeCells('B1:C1');
  worksheet.getCell('B1').value = profile.location;

  worksheet.getCell('D1').value = '最寄り駅';
  worksheet.getCell('D1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('D1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };

  worksheet.mergeCells('E1:G1');
  worksheet.getCell('E1').value = profile.nearestStation;

  worksheet.getCell('H1').value = '年齢';
  worksheet.getCell('H1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('H1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.mergeCells('I1:J1');
  worksheet.getCell('I1').value = `${age}歳`;

  worksheet.getCell('K1').value = '性別';
  worksheet.getCell('K1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('K1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.mergeCells('L1:M1');
  worksheet.getCell('L1').value = '男';
  worksheet.getCell('N1').value = '出力日';
  worksheet.getCell('N1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('N1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.mergeCells('O1:P1');
  worksheet.getCell('O1').value = exportYearMonth;

  // 言語
  worksheet.mergeCells('A2:B2');
  worksheet.mergeCells('C2:P2');
  worksheet.getCell('A2').value = '言語';
  worksheet.getCell('A2').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A2').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C2').value = profile.resume.languages;

  // FW
  worksheet.mergeCells('A3:B3');
  worksheet.mergeCells('C3:P3');
  worksheet.getCell('A3').value = 'FW';
  worksheet.getCell('A3').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A3').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C3').value = profile.resume.frameworks;

  // DB/MW
  worksheet.mergeCells('A4:B4');
  worksheet.mergeCells('C4:P4');
  worksheet.getCell('A4').value = 'DB/MW';
  worksheet.getCell('A4').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A4').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C4').value = profile.resume.db;

  // OS
  worksheet.mergeCells('A5:B5');
  worksheet.mergeCells('C5:P5');
  worksheet.getCell('A5').value = 'OS';
  worksheet.getCell('A5').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A5').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C5').value = profile.resume.os;

  // ツールその他
  worksheet.mergeCells('A6:B6');
  worksheet.mergeCells('C6:P6');
  worksheet.getCell('A6').value = 'ツールその他';
  worksheet.getCell('A6').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A6').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C6').value = profile.resume.tools;

  // 資格
  worksheet.mergeCells('A7:B7');
  worksheet.mergeCells('C7:P7');
  worksheet.getCell('A7').value = '資格';
  worksheet.getCell('A7').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A7').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };
  worksheet.getCell('C7').value = profile.qualifications;

  // 自己PR
  worksheet.mergeCells('A8:B17');
  worksheet.getCell('A8').value = '自己PR';
  worksheet.getCell('A8').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A8').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };

  worksheet.mergeCells('C8:P17');
  worksheet.getCell('C8').value =
    '29歳のときに、デザイナー職からエンジニア職へキャリアコンバートしました。\n' +
    '社会経験が豊富で、デザイナーとしてのバックグラウンドを活かしながら、エンジニアリングのスキルを磨いています。\n' +
    'リモートワークでは、規則正しい生活・仕事のための環境・生活習慣を整えることで、自分が一番パフォーマンスを出せる状態を作ることを意識しています。\n' +
    '\n' +
    '転向以前は、フリーランスデザイナーとして活動しながら、東京の企業にてWebデザイン・グラフィックデザイン・店舗営業・人事（面接・新人研修など）を経験しました。\n' +
    'デザイナーとしては、心理学や認知バイアスの原則をベースに、シンプルかつ直感的なUIを重視しています。\n' +
    'エンジニアとしては、言語仕様やアーキテクチャへの関心が高く、技術選定においては「なぜその技術を選ぶか」という根拠を重視します。\n' +
    'オブジェクト指向よりも関数型寄りの設計を好み、可読性・疎結合・再利用性を意識した設計を心がけています。\n' +
    'また、一時的なパッチ対応よりも根本原因の特定と改善を優先するアプローチが自分のスタイルです。\n' +
    '\n' +
    'チームビルディングにも力を入れており、カンファレンスや集まりへ積極的に参加しています。\n' +
    '可能であれば自身がファシリテーションを行い、チーム全体のモチベーションアップによってプロジェクトに影響力を与えることを目指しています。\n' +
    'PMへの負荷集中による自身へのパフォーマンス低下を防ぐため、PGポジションであってもボトムアップで提案・行動することを意識しています。\n' +
    '\n' +
    'SESという形態を選んでいる理由のひとつは、特定の技術に固執せず、さまざまなドメイン・スタックを横断して経験を積むことで、より実践的な技術理解を深められると考えているためです。\n' +
    '今後のキャリアでは、react/goを軸に、経験の乏しいインフラ領域への理解も深めていきたいと考えています。\n' +
    '\n' +
    '【生成AIを使用した開発について】\n' +
    'claudeを主に使用しており、プロンプトの工夫によって適切なコードを生成できると思っていますが、全幅の信用はしていません。\n' +
    '一度に大量のコードを生成すると設計思想から逸脱した実装になりやすく、会話コンテキストが蓄積するにつれて期待しない出力が増えてくる傾向があります。\n' +
    'そのため、基本的には1機能・1ファイルずつに分割して生成・レビューを繰り返す運用にしています。';
  worksheet.getCell('C8').alignment = {
    vertical: 'top',
    horizontal: 'left',
    wrapText: true,
  };

  for (let i = 8; i <= 17; i++) {
    worksheet.getRow(i).height = 35;
  }

  // 経歴の開始位置(SR: start row)
  let SR = 18;

  // データを日付順に並び替え（新しい順）
  const sortedData = [...data].sort((a, b) => {
    return b.id - a.id;
  });

  // ABCDE FG HI JK LMNOP
  // summary, role, languages, tools, others
  // データ展開
  sortedData.forEach((item) => {
    worksheet.getCell('A' + SR).value = '期間';
    worksheet.getCell('A' + SR).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell('A' + SR).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells('B' + SR + ':D' + SR);
    worksheet.getCell('B' + SR).value = item.start_date + ' - ' + item.end_date;
    worksheet.getCell('E' + SR).value = '業種';
    worksheet.getCell('E' + SR).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell('E' + SR).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells('F' + SR + ':G' + SR);
    worksheet.getCell('F' + SR).value = item.business_category;
    worksheet.mergeCells('H' + SR + ':I' + SR);
    worksheet.getCell('H' + SR).value = 'プロジェクト名';
    worksheet.getCell('H' + SR).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell('H' + SR).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells('J' + SR + ':P' + SR);
    worksheet.getCell('J' + SR).value = item.project_title;

    worksheet.mergeCells(`A${SR + 1}:E${SR + 1}`);
    worksheet.getCell(`A${SR + 1}`).value = '概要';
    worksheet.getCell(`A${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`A${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`A${SR + 2}:E${SR + 6}`);
    worksheet.getCell(`A${SR + 2}`).value = item.project_detail.overview.replace(/¥n/g, '');
    worksheet.getCell(`A${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
      indent: 0,
    };

    worksheet.mergeCells(`F${SR + 1}:G${SR + 1}`);
    worksheet.getCell(`F${SR + 1}`).value = '役割';
    worksheet.getCell(`F${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`F${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`F${SR + 2}:G${SR + 6}`);
    worksheet.getCell(`F${SR + 2}`).value = item.role;
    worksheet.getCell(`F${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.mergeCells(`H${SR + 1}:I${SR + 1}`);
    worksheet.getCell(`H${SR + 1}`).value = '言語';
    worksheet.getCell(`H${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`H${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`H${SR + 2}:I${SR + 6}`);
    worksheet.getCell(`H${SR + 2}`).value = item.programming_language.join(', ');
    worksheet.getCell(`H${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.mergeCells(`J${SR + 1}:K${SR + 1}`);
    worksheet.getCell(`J${SR + 1}`).value = 'ツール';
    worksheet.getCell(`J${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`J${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`J${SR + 2}:K${SR + 6}`);
    worksheet.getCell(`J${SR + 2}`).value = item.framework.join(', ');
    worksheet.getCell(`J${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell(`L${SR + 1}`).value = '要件定義';
    worksheet.getCell(`L${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`L${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`L${SR + 2}:L${SR + 6}`);
    worksheet.getCell(`L${SR + 2}`).value = item.pe_requirement_definition ? '◯' : '-';
    worksheet.getCell(`L${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell(`M${SR + 1}`).value = '基本設計';
    worksheet.getCell(`M${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`M${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`M${SR + 2}:M${SR + 6}`);
    worksheet.getCell(`M${SR + 2}`).value = item.pe_basic_design ? '◯' : '-';
    worksheet.getCell(`M${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell(`N${SR + 1}`).value = '詳細設計';
    worksheet.getCell(`N${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`N${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`N${SR + 2}:N${SR + 6}`);
    worksheet.getCell(`N${SR + 2}`).value = item.pe_detailed_design ? '◯' : '-';
    worksheet.getCell(`N${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell(`O${SR + 1}`).value = '実装';
    worksheet.getCell(`O${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`O${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`O${SR + 2}:O${SR + 6}`);
    worksheet.getCell(`O${SR + 2}`).value = item.pe_implementation_unit_testing ? '◯' : '-';
    worksheet.getCell(`O${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell(`P${SR + 1}`).value = 'テスト';
    worksheet.getCell(`P${SR + 1}`).font = { bold: true, color: { argb: 'FF777777' } };
    worksheet.getCell(`P${SR + 1}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' },
    };
    worksheet.mergeCells(`P${SR + 2}:P${SR + 6}`);
    worksheet.getCell(`P${SR + 2}`).value = item.pe_testing ? '◯' : '-';
    worksheet.getCell(`P${SR + 2}`).alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    for (let i = SR + 2; i <= SR + 6; i++) {
      worksheet.getRow(i).height = 50;
    }

    SR += 7;
  });

  // エクセルファイルをダウンロード
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.xlsx';
  a.click();
  window.URL.revokeObjectURL(url);
};
