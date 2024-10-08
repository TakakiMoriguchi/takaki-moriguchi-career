import './App.scss';
import avator from './assets/images/my_avator.png';
import { data } from './data';
import { Timeline, Text, Box, Title, Stack, Grid, Divider, List, Space, Paper } from '@mantine/core';

function App() {
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={avator} alt="Avator" className="my-avator" />

        <section className='Head'>
          <h1>TakakiMoriguchi</h1>
          <p>🇯🇵&nbsp;🇺🇸&nbsp;🇨🇳&nbsp;🇪🇸</p>
          <p>Generalist | <s>Specialist</s></p>
        </section>

        <section className="Career">
          <div className="body">
            <h3>💻 IT Engneer: 6th year</h3>
            <div className="skill">
              <p>TypeScript(React), Python, Rust</p>
              <p>SQL, Docker</p>
            </div>
          </div>

          <div className="body">
            <h3>🎨 Designer: 10 over</h3>
            <div className="skill">
              <p>photoshop, illustrator</p>
              <p>sketch, figma</p>
            </div>
          </div>
        </section>
      </header>

      <main className="App-body">

        <Grid>
          <Grid.Col span={6}>
            <Paper radius="md" shadow="xs" p="xl" h="100%" withBorder>
              <Title order={5}>👍&nbsp;Interests</Title>
              <List listStyleType="none">
                <List.Item>クリーンアーキテクチャ</List.Item>
                <List.Item>関数型プログラミング</List.Item>
                <List.Item>アトミックデザイン（コンポーネント設計）</List.Item>
                <List.Item>パフォーマンスチューニング</List.Item>
                <List.Item>GitFlow</List.Item>
                <List.Item>行動心理学</List.Item>
              </List>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius="md" shadow="xs" p="xl" h="100%" withBorder>
              <Title order={5}>👎&nbsp;Disinterest</Title>
              <List listStyleType="none">
                <List.Item><s>Security</s></List.Item>
                <List.Item>Infrastructure</List.Item>
                <List.Item>DevOps</List.Item>
              </List>
            </Paper>
          </Grid.Col>
        </Grid>

        <Space h="xl" />

        <Timeline active={2} bulletSize={24} lineWidth={2}>
          {data.slice().reverse().map((item, index) => {
            const titleArea = (
              <Box py={3}>
                <Text size="xs">{item.start_date} ~ {item.end_date}</Text>
                <Text fw={700}>【{item.business_category}】{item.project_title}</Text>
                <Divider my="md" color="#099cff" />
              </Box>
            )
            return (
              <Timeline.Item title={titleArea}>
                <Grid>
                  <Grid.Col span={6}>
                    <Stack gap="md">
                      <Box>
                        <Title order={6}>概要</Title>
                        <Text dangerouslySetInnerHTML={{ __html: item.project_detail.overview.replaceAll("¥n", "<br />") }} />
                        <Text>契約形態：{item.employment_status}</Text>
                        <Text>役割：{item.role}（{item.member_count}/人）</Text>
                      </Box>

                      <Box>
                        <Title order={6}>言語</Title>
                        <Text>{item.programming_language.join(", ")}</Text>
                      </Box>

                      <Box>
                        <Title order={6}>FW</Title>
                        <Text>{item.framework.join(", ")}</Text>
                      </Box>
                    </Stack>
                  </Grid.Col>

                  <Grid.Col span={6}>
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
                          {item.project_detail.tools_technologies_used.join(", ")}
                        </Box>

                        <Box>
                          <Text size="xs">gitリポジトリ</Text>
                          {item.project_detail.git_repository}
                        </Box>

                        <table className="simpleTable">
                          <thead>
                            <tr>
                              <th>調査分析</th>
                              <th>要件定義</th>
                              <th>基本設計</th>
                              <th>詳細設計</th>
                              <th>実装</th>
                              <th>テスト</th>
                              <th>保守・運用</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.pe_investigation_analysis ? "◯" : "-"}</td>
                              <td>{item.pe_requirement_definition ? "◯" : "-"}</td>
                              <td>{item.pe_basic_design ? "◯" : "-"}</td>
                              <td>{item.pe_detailed_design ? "◯" : "-"}</td>
                              <td>{item.pe_implementation_unit_testing ? "◯" : "-"}</td>
                              <td>{item.pe_testing ? "◯" : "-"}</td>
                              <td>{item.pe_maintenance_operation ? "◯" : "-"}</td>
                            </tr>
                          </tbody>
                        </table>

                    </Stack>
                  </Grid.Col>
                </Grid>
              </Timeline.Item>
            )
          })}
        </Timeline>

      </main>
    </div>
  );
}

export default App;
