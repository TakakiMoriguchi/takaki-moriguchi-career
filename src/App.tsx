import './App.scss';
import avator from './assets/images/my_avator.png';
import { data } from './data';
import {
  Timeline,
  Text,
  Box,
  Title,
  Stack,
  Grid,
  Divider,
  Badge,
  Group,
  Space,
  Paper,
  Button,
} from '@mantine/core';
import download from './assets/images/download.svg';
import { downloadResume } from './downloadResume';

function App() {
  const age = new Date().getFullYear() - 1989;

  return (
    <div className="App">
      <header className="App-header">
        <section className="Download">
          <Button
            leftSection={<img src={download} alt="Download" />}
            variant="outline"
            color="gray"
            radius="xl"
            size="md"
            onClick={downloadResume}
          >
            Download Resume
          </Button>
        </section>

        <img src={avator} alt="Avator" className="my-avator" />

        <section className="Head">
          <h1>ENTJ ♂({age})</h1>
          <p>🇯🇵&nbsp;🇺🇸&nbsp;🇨🇳</p>
          <p>
            Generalist | <s>Specialist</s>
          </p>
        </section>

        <section className="Career">
          <div className="body">
            <h3>
              💻&nbsp;&nbsp;IT Engineer<span className="colon-space">: </span>
              <br className="sp-br" />
              8th year
            </h3>
            <div className="skill">
              <p>TypeScript(React), Python, Go</p>
              <p>SQL, Docker</p>
            </div>
          </div>

          <div className="body">
            <h3>
              🎨&nbsp;&nbsp;Designer<span className="colon-space">: </span>
              <br className="sp-br" />
              10y over
            </h3>
            <div className="skill">
              <p>photoshop, illustrator, affinity</p>
              <p>sketch, figma</p>
            </div>
          </div>
        </section>
      </header>

      <main className="App-body">
        <Grid>
          <Grid.Col span={12}>
            <Paper radius="md" shadow="xs" p="xl" h="100%" withBorder>
              <Title order={5}>📊&nbsp;Skill Range</Title>
              <Box mt="md" className="skill-range-wrapper">
                <div className="skill-labels">
                  <Text size="sm" fw={500}>
                    Business / Plannning
                  </Text>
                  <Text size="sm" fw={500}>
                    Design
                  </Text>
                  <Text size="sm" fw={500}>
                    System Design
                  </Text>
                  <Text size="sm" fw={500}>
                    FrontEnd
                  </Text>
                  <Text size="sm" fw={500}>
                    BackEnd
                  </Text>
                  <Text size="sm" fw={500}>
                    Infrastructure / DevOps
                  </Text>
                </div>
                <div className="skill-bar" />
              </Box>
            </Paper>
          </Grid.Col>

          <Grid.Col span={12}>
            <Paper radius="md" shadow="xs" p="xl" h="100%" withBorder>
              <Title order={5}>👍&nbsp;Interests</Title>
              <Group mt="md" gap="sm">
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  クリーンアーキテクチャ
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  関数型プログラミング
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  アトミックデザイン（コンポーネント設計）
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  パフォーマンスチューニング
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  GitFlow
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  行動心理学
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  単体テスト
                </Badge>
                <Badge radius="xl" color="gray" variant="light" style={{ color: 'black' }}>
                  ふりかえりMTG
                </Badge>
              </Group>
            </Paper>
          </Grid.Col>

          <Grid.Col span={12}>
            <Paper radius="md" shadow="xs" p="xl" h="100%" withBorder>
              <Title order={5}>🙋&nbsp;PR</Title>
              <Stack mt="md" gap="sm">
                <Text size="sm">
                  29歳のときに、デザイナー職からエンジニア職へキャリアコンバートしました。
                  <br />
                  社会経験が豊富で、デザイナーとしてのバックグラウンドを活かしながら、エンジニアリングのスキルを磨いています。
                  <br />
                  リモートワークでは、規則正しい生活・仕事のための環境・生活習慣を整えることで、自分が一番パフォーマンスを出せる状態を作ることを意識しています。
                </Text>
                <Space h="md" />
                <Text size="sm">
                  転向以前は、フリーランスデザイナーとして活動しながら、東京の企業にてWebデザイン・グラフィックデザイン・店舗営業・人事（面接・新人研修など）を経験しました。
                  <br />
                  デザイナーとしては、心理学や認知バイアスの原則をベースに、シンプルかつ直感的なUIを重視しています。
                </Text>
                <Text size="sm">
                  エンジニアとしては、言語仕様やアーキテクチャへの関心が高く、技術選定においては「なぜその技術を選ぶか」という根拠を重視します。
                  <br />
                  オブジェクト指向よりも関数型寄りの設計を好み、可読性・疎結合・再利用性を意識した設計を心がけています。
                  <br />
                  また、一時的なパッチ対応よりも根本原因の特定と改善を優先するアプローチが自分のスタイルです。
                </Text>

                <Text size="sm">
                  レビュー観点としては、意味の伝わらない・英語的な表現からズレた命名、タイポなどの軽微なミス、コードスタイルの不統一、何度も呼び出されてパフォーマンスに影響するような実装、関数・コンポーネントの責務が不明、コメントの不備により実装者しか意味がわからない、コミットメッセージが雑である、言語使用にそぐわない様な実装、チームの決め事に反しているなどに注意しています。
                </Text>

                <Text size="sm">
                  チームビルディングにも力を入れており、カンファレンスや集まりへ積極的に参加しています。
                  <br />
                  可能であれば、自身がファシリテーションを行い、自分１人の力だけではなく、チーム全体のモチベーションアップによって、プロジェクトに影響力を与えることを目指しています。
                  <br />
                  PMへの負荷集中による自身へのパフォーマンス低下を防ぐため、PGポジションであってもボトムアップで提案・行動することを意識しています。
                </Text>
                <Text size="sm">
                  SESという形態を選んでいる理由のひとつは、特定の技術に固執せず、さまざまなドメイン・スタックを横断して経験を積むことで、より実践的な技術理解を深められると考えているためです。
                  <br />
                  今後のキャリアでは、react/go
                  を軸に、経験の乏しいインフラ領域への理解も深めていきたいと考えています。
                </Text>
                <Space h="md" />
                <Text size="sm">
                  ※ 生成AIを使用した開発について
                  <br />
                  claudeを主に使用しており、プロンプトの工夫によって適切なコードを生成できると思っていますが、全幅の信用はしていません。
                  <br />
                  プロンプトを準備していても、一度に大量のコードを生成すると設計思想から逸脱した実装になりやすく、会話コンテキストが蓄積するにつれて期待しない出力が増えてくる傾向があります。
                  <br />
                  そのため、基本的には1機能・1ファイルずつに分割して生成・レビューを繰り返す運用にしています。
                  <br />
                  またコミットを分けて、不要な変更が入らないようにも注意しています。
                  <br />
                  コードが簡単に生成できるようになった分は、なぜそのコードが必要なのかの理由をキャッチボールしたり、手書きでは時間的に書ききれなかったテストコードの生成、誰が見ても意味が理解できそうなリアリティのあるダミーデータの用意なども生成するようにしています。
                </Text>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>

        <Space h="xl" />

        <Timeline active={2} bulletSize={24} lineWidth={2}>
          {data
            .slice()
            .reverse()
            .map((item, index) => {
              const titleArea = (
                <Box py={3}>
                  <Text size="xs">
                    {item.start_date} ~ {item.end_date}
                  </Text>
                  <Text fw={700}>
                    【{item.business_category}】{item.project_title}
                  </Text>
                  <Divider my="md" color="#099cff" />
                </Box>
              );
              return (
                <Timeline.Item title={titleArea} key={index}>
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Stack gap="md">
                        <Box>
                          <Title order={6}>概要</Title>
                          <Text
                            dangerouslySetInnerHTML={{
                              __html: item.project_detail.overview
                                .replaceAll('¥n', '\n')
                                .trim()
                                .split('\n')
                                .map((line) => line.trim())
                                .join('<br />'),
                            }}
                            mb="sm"
                          />
                        </Box>

                        <Box>
                          <Title order={6}>契約形態</Title>
                          <Text>{item.employment_status}</Text>
                        </Box>

                        <Box>
                          <Title order={6}>役割</Title>
                          <Text>
                            {item.role}（{item.member_count}/人）
                          </Text>
                        </Box>

                        <Box>
                          <Title order={6}>言語</Title>
                          <Text>{item.programming_language.join(', ')}</Text>
                        </Box>

                        <Box>
                          <Title order={6}>FW</Title>
                          <Text>{item.framework.join(', ')}</Text>
                        </Box>
                      </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Stack>
                        <Title order={6}>詳細</Title>

                        <Box>
                          <Text size="xs">担当業務</Text>
                          {item.project_detail.task_responsibilities}
                        </Box>

                        <Box>
                          <Text size="xs">成果</Text>
                          {item.project_detail.achievements}
                        </Box>

                        <Box>
                          <Text size="xs">チーム構成</Text>
                          {item.project_detail.team_structure}
                        </Box>

                        <Box>
                          <Text size="xs">使用したツールや技術</Text>
                          {item.project_detail.tools_technologies_used.join(', ')}
                        </Box>

                        <Box>
                          <Text size="xs">gitリポジトリ</Text>
                          {item.project_detail.git_repository}
                        </Box>

                        <table className="simpleTable">
                          <thead>
                            <tr>
                              <th>要件定義</th>
                              <th>基本設計</th>
                              <th>詳細設計</th>
                              <th>実装</th>
                              <th>テスト</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.pe_requirement_definition ? '◯' : '-'}</td>
                              <td>{item.pe_basic_design ? '◯' : '-'}</td>
                              <td>{item.pe_detailed_design ? '◯' : '-'}</td>
                              <td>{item.pe_implementation_unit_testing ? '◯' : '-'}</td>
                              <td>{item.pe_testing ? '◯' : '-'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Timeline.Item>
              );
            })}
        </Timeline>
      </main>
    </div>
  );
}

export default App;
