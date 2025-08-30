import ExcelJS from 'exceljs';
import { data } from './data';

export const downloadResume = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Resume');
  const age = new Date().getFullYear() - 1989;
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
  worksheet.getCell('B1').value = '兵庫県西宮市';

  worksheet.getCell('D1').value = '最寄り駅';
  worksheet.getCell('D1').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('D1').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };

  worksheet.mergeCells('E1:G1');
  worksheet.getCell('E1').value = 'JR 芦屋駅 / 阪急 苦楽園口駅';

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
  worksheet.getCell('C2').value = 'typescript / python / go';

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
  worksheet.getCell('C3').value = 'react / next.js / django / FastAPI';

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
  worksheet.getCell('C4').value = 'mysql / postgresql / docker';

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
  worksheet.getCell('C5').value = 'mac';

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
  worksheet.getCell('C6').value = 'sketch / figma / photoshop / illustrator';

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
  worksheet.getCell('C7').value = '';

  // 自己PR
  worksheet.mergeCells('A8:B12');
  worksheet.getCell('A8').value = '自己PR';
  worksheet.getCell('A8').font = { bold: true, color: { argb: 'FF777777' } };
  worksheet.getCell('A8').fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFEEEEEE' },
  };

  worksheet.mergeCells('C8:P12');
  worksheet.getCell('C8').value =
    '受託の機会が多くあり、幅広い知識があります。\n' +
    'SESではリモートワークということもあり、頻繁にコミュニケーションを取るようにしています。\n' +
    '要件定義フェーズ: ヒアリングからの要件定義を沢山経験したので、得意としています。\n' +
    '実装フェーズ: 疎結合になりすぎず、薄くて理解しやすいコードや命名を心がけています。';
  worksheet.getCell('C8').alignment = {
    vertical: 'top',
    horizontal: 'left',
    wrapText: true,
  };

  // 経歴の開始位置(SR: start row)
  let SR = 13;

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
