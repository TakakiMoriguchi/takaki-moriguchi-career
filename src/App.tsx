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
                              __html: item.project_detail.overview.replaceAll('¥n', '<br />'),
                            }}
                            mb="sm"
                          />
                          <Text>契約形態：{item.employment_status}</Text>
                          <Text>
                            役割：{item.role}（{item.member_count}/人）
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
