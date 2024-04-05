import React from 'react';
import './App.scss';
import avator from './assets/images/my_avator.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avator} alt="Avator" className="my-avator" />

        <section className='Head'>
          <h1>TakakiMoriguchi</h1>
          <p>🇯🇵&nbsp;🇺🇸&nbsp;🇪🇸</p>
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

        <section className="Skill">
          <h4>Interests</h4>
          <ul>
            <li>・Clean Architecture</li>
            <li>・Functional Programming</li>
            <li>・Atomic Design</li>
            <li>・GitFlow</li>
            <li>・DDD</li>
            <li>・SDD</li>
          </ul>
          <h4>Poor Skills</h4>
          <ul>
            <li>・Security</li>
            <li>・Infrastructure</li>
            <li>・DevOps</li>
          </ul>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2024.2-</span>
          </div>

          <div className="body">
            <h3>金融系システム構築</h3>
            <div className="item">
              <h4>役割</h4>
              <p>フロントエンド（開発4名）</p>
            </div>
            <div className="item">
              <h4>使用言語</h4>
              <p>PHP(laravel) </p>
              <p>TypeScript(react/Next.js)</p>
            </div>
            <div className="item">
              <h4>要件</h4>
              <p>プラント系管理システムの保守開発</p>
            </div>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2021.11-2024.1</span>
          </div>

          <div className="body">
            <h3>金融系システム構築</h3>
            <div className="item">
              <h4>役割</h4>
              <p>フルスタック・PL（開発5名）</p>
            </div>
            <div className="item">
              <h4>使用言語</h4>
              <p>Python(django) </p>
              <p>TypeScript(react/Next.js)</p>
            </div>
            <div className="item">
              <h4>要件</h4>
              <p>金融系システム(php)のリプレイス</p>
            </div>
            <div className="item">
              <h4>ライブラリ等</h4>
              <p>django rest framework, pycryptodome, cryptography, reportlab</p>
              <p>react-hook-form, react-select, react-hot-toast, chart-js, bootstrap, i18next, scss</p>
            </div>
            <div className="item">
              <h4>環境</h4>
              <p>On-premiss, AlmaLinux, nginx, git-lab</p>
            </div>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2023.5-</span>
          </div>

          <div className="body">
            <h3>運送系システム構築</h3>
            <div className="item">
              <h4>役割</h4>
              <p>フルスタック（開発2名）</p>
            </div>
            <div className="item">
              <h4>使用言語</h4>
              <p>TypeScript(Next.js)</p>
            </div>
            <div className="item">
              <h4>要件</h4>
              <p>既存運送管理システム(VB)のリプレイス引継ぎ。</p>
            </div>
            <div className="item">
              <h4>ライブラリ等</h4>
              <p>prisma, scss, pdfmake, excellJS, MUI, react-hook-form, react-hot-toast</p>
            </div>
            <div className="item">
              <h4>環境</h4>
              <p>On-premiss, AlmaLinux, nginx, git-hub</p>
            </div>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2019-2021</span>
          </div>

          <div className="body">
            <h3>遊びのコンシェルジュ(個人開発)</h3>
            <div className="item">
              <h4>役割</h4>
              <p>フルスタック（開発4名）</p>
            </div>
            <div className="item">
              <h4>使用言語</h4>
              <p>PHP(Laravel)</p>
              <p>JavaScript(Vue.js)</p>
            </div>
            <div className="item">
              <h4>要件</h4>
              <p>観光系キュレーションサイト新規開発</p>
            </div>
            <div className="item">
              <h4>環境</h4>
              <p>AWS, AlmaLinux, nginx, git-hub</p>
            </div>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2019-2024</span>
          </div>

          <div className="body">
            <h3>スマホ修理店開業・フリーランス再開</h3>

            <div className="item">
              <p>スマホ修理屋店経営 - HPはMicroCMSとNuxt.jsのJAMStack構成で作成</p>
            </div>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2012-2019</span>
          </div>

          <div className="body">
            <ul>
              <li>寿司店勤務</li>
              <li>
                大手漫画喫茶グループ勤務（人事・広報・運営・販促）<br />
                └ phpで面接受付〜採用管理システム構築<br />
                └ ドローン空撮<br />
                └ デザイン業務（POP・WEB・看板制作）<br />
              </li>
              <li>業界新聞社勤務（記者・WEB制作）</li>
              <li></li>
            </ul>
          </div>
        </section>

        <section className="Keireki">
          <div className="head">
            <span className="year">2010-2012</span>
          </div>

          <div className="body">
            <h3>フリーランスとして活動</h3>
            <ul>
              <li>WEBサイト制作（wordpress・HMTL5/CSS）</li>
              <li>グラフィックデザイン</li>
              <li>イラストレーション</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
