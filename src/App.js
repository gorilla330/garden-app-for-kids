import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSeason, setActiveSeason] = useState('spring');
  const [activeSection, setActiveSection] = useState('overview');

  // 季節ごとの色設定
  const seasonColors = {
    spring: {
      primary: '#F9A8D4', // ピンク
      secondary: '#FBCFE8',
      accent: '#DB2777'
    },
    summer: {
      primary: '#4ADE80', // 緑
      secondary: '#BBF7D0',
      accent: '#16A34A'
    },
    autumn: {
      primary: '#FB923C', // オレンジ
      secondary: '#FDBA74',
      accent: '#EA580C'
    },
    winter: {
      primary: '#93C5FD', // 青
      secondary: '#BFDBFE',
      accent: '#2563EB'
    }
  };

  // 現在の季節の色を取得
  const currentColor = seasonColors[activeSeason];

  // 季節切り替えハンドラー
  const handleSeasonChange = (season) => {
    setActiveSeason(season);
  };

  // セクション切り替えハンドラー
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // 季節ごとのおすすめ野菜データ
  const seasonalVegetables = {
    spring: [
      { name: 'にんじん', icon: '🥕', description: '春に種まきして初夏〜夏に収穫。ふかふか土が好き！' },
      { name: 'ほうれん草', icon: '🍃', description: '寒さに強いよ。5〜6月に収穫できるよ！' },
      { name: 'じゃがいも', icon: '🥔', description: '4月下旬から植えられるよ。放っておいても育つよ！' },
      { name: 'レタス', icon: '🥬', description: '涼しい春に育てるとおいしいレタスができるよ！' },
      { name: 'パセリ', icon: '🌿', description: 'ハーブの王様！春まきで長く収穫できるよ！サラダやスープに！' },
      { name: 'ミント', icon: '🌿', description: '春に苗を植えると、どんどん広がるよ！お茶やデザートに使えるよ！' },
    ],
    summer: [
      { name: 'トマト', icon: '🍅', description: '5月に苗を植えて7〜9月に収穫。水やりが少なくても大丈夫！' },
      { name: 'きゅうり', icon: '🥒', description: '5月に植えると、夏にたくさん実がなるよ！' },
      { name: 'ピーマン', icon: '🫑', description: '丈夫で育てやすい！夏の暑さに強いよ！' },
      { name: 'ズッキーニ', icon: '🥬', description: '成長が早くて、たくさん収穫できるよ！' },
      { name: 'バジル', icon: '🌿', description: '夏が旬のハーブ！トマトと相性抜群！太陽の光が大好き！' },
      { name: 'ローズマリー', icon: '🌿', description: '暑さに強くて丈夫！肉料理やポテトに合うよ！' },
    ],
    autumn: [
      { name: '大根', icon: '📏', description: '8月下旬〜9月に種をまくと、11〜12月に収穫できるよ！' },
      { name: 'ブロッコリー', icon: '🥦', description: '8〜9月に定植すると、秋から冬に収穫できるよ！' },
      { name: 'キャベツ', icon: '🥬', description: '秋に植えると、冬まで育つよ！霜に当たると甘くなるよ！' },
      { name: '小松菜', icon: '🍃', description: '9月頃に種をまくと、10〜11月に収穫できるよ！' },
      { name: 'タイム', icon: '🌿', description: '秋植えでも育つハーブ！寒さに強くて手間いらず！' },
      { name: 'セージ', icon: '🌿', description: '多年草のハーブ！秋に植えると翌年も楽しめるよ！' },
    ],
    winter: [
      { name: 'ほうれん草', icon: '🍃', description: '秋に種まきして冬に収穫。寒さで甘くなるよ！' },
      { name: 'ターサイ', icon: '🥬', description: '霜にあたると甘みが増すよ！' },
      { name: '水菜', icon: '🥬', description: '冬越し栽培に向いているよ！鍋にもぴったり！' },
      { name: '白菜', icon: '🥬', description: '寒くなるほど甘みが増すよ！' },
      { name: 'クミン', icon: '🌱', description: '室内のプランターで育てられるスパイス！カレーにぴったり！' },
      { name: 'ディル', icon: '🌿', description: '寒さに強いハーブ！魚料理に合うよ！温室で育てるとベスト！' },
    ]
  };

  // 各セクションのコンテンツ
  const sectionContent = {
    overview: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">📝</span>
          鳴沢村の家庭菜園ってなに？
        </h3>
        <p className="mb-4">
          鳴沢村は富士山のふもとにある冷涼な気候の村だよ！ここでは、四季折々の野菜を育てることができるんだ。
          家庭菜園は、自分たちで野菜を育てて、収穫する楽しさを体験できるよ！
        </p>
        <div className="flex justify-center my-4">
          <div className="handdrawn-box p-3 mx-2 text-center" style={{borderColor: currentColor.primary}}>
            <span className="block text-2xl mb-1">🌡️</span>
            <span className="block font-bold">冷涼な気候</span>
            <span className="text-sm">夏は涼しく、冬は寒い</span>
          </div>
          <div className="handdrawn-box p-3 mx-2 text-center" style={{borderColor: currentColor.primary}}>
            <span className="block text-2xl mb-1">⛰️</span>
            <span className="block font-bold">富士山麓</span>
            <span className="text-sm">きれいな空気と水</span>
          </div>
          <div className="handdrawn-box p-3 mx-2 text-center" style={{borderColor: currentColor.primary}}>
            <span className="block text-2xl mb-1">🌱</span>
            <span className="block font-bold">野菜づくり</span>
            <span className="text-sm">季節に合わせた栽培</span>
          </div>
        </div>
      </div>
    ),
    vegetables: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">🥕</span>
          {activeSeason === 'spring' ? '春' : activeSeason === 'summer' ? '夏' : activeSeason === 'autumn' ? '秋' : '冬'}のおすすめ野菜とハーブ
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {seasonalVegetables[activeSeason].map((vegetable, index) => (
            <div key={index} className="handdrawn-box p-3" style={{borderColor: currentColor.primary}}>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{vegetable.icon}</span>
                <h4 className="font-bold text-lg">{vegetable.name}</h4>
              </div>
              <p className="text-sm">{vegetable.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    preparation: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">🌱</span>
          畑づくりと土づくり
        </h3>
        <div className="relative">
          <div className="handdrawn-step p-3 mb-4" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="handdrawn-circle mr-2 flex items-center justify-center" style={{backgroundColor: currentColor.primary}}>1</span>
              日当たりのよい場所を選ぼう！
            </h4>
            <p className="text-sm ml-8">野菜は太陽の光が大好き！水はけのよい場所がベストだよ！</p>
          </div>
          <div className="handdrawn-arrow mx-auto my-1" style={{borderColor: currentColor.accent}}></div>
          <div className="handdrawn-step p-3 mb-4" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="handdrawn-circle mr-2 flex items-center justify-center" style={{backgroundColor: currentColor.primary}}>2</span>
              雑草を取り除こう！
            </h4>
            <p className="text-sm ml-8">スコップやクワで雑草や草皮を取り除いてね。石やゴミも拾っておこう！</p>
          </div>
          <div className="handdrawn-arrow mx-auto my-1" style={{borderColor: currentColor.accent}}></div>
          <div className="handdrawn-step p-3 mb-4" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="handdrawn-circle mr-2 flex items-center justify-center" style={{backgroundColor: currentColor.primary}}>3</span>
              土を耕そう！
            </h4>
            <p className="text-sm ml-8">スコップで20〜30cmくらいの深さまで掘り起こそう。土をフカフカにするよ！</p>
          </div>
          <div className="handdrawn-arrow mx-auto my-1" style={{borderColor: currentColor.accent}}></div>
          <div className="handdrawn-step p-3" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="handdrawn-circle mr-2 flex items-center justify-center" style={{backgroundColor: currentColor.primary}}>4</span>
              堆肥（たいひ）を混ぜよう！
            </h4>
            <p className="text-sm ml-8">堆肥や腐葉土を入れて土と混ぜると、野菜がすくすく育つよ！</p>
          </div>
        </div>
      </div>
    ),
    animals: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">🦌</span>
          野生動物から野菜を守ろう！
        </h3>
        <div className="flex flex-col">
          <div className="handdrawn-box p-3 mb-4" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="text-xl mr-2">🔎</span>
              どんな動物がいるの？
            </h4>
            <div className="flex justify-around mt-2">
              <div className="text-center">
                <span className="text-2xl block">🦌</span>
                <span className="text-sm">シカ</span>
              </div>
              <div className="text-center">
                <span className="text-2xl block">🐗</span>
                <span className="text-sm">イノシシ</span>
              </div>
              <div className="text-center">
                <span className="text-2xl block">🦝</span>
                <span className="text-sm">アライグマ</span>
              </div>
              <div className="text-center">
                <span className="text-2xl block">🐦</span>
                <span className="text-sm">鳥</span>
              </div>
            </div>
          </div>
          <div className="handdrawn-box p-3" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold flex items-center">
              <span className="text-xl mr-2">🛡️</span>
              守り方を学ぼう！
            </h4>
            <ul className="list-disc ml-6 mt-2">
              <li className="mb-1 text-sm"><span className="font-bold">防獣ネット</span>：野菜の周りに高さ1.8m以上のネットを張ろう！</li>
              <li className="mb-1 text-sm"><span className="font-bold">トンネル</span>：小さな野菜はネットのトンネルで囲おう！</li>
              <li className="mb-1 text-sm"><span className="font-bold">定期チェック</span>：ネットに穴が開いていないか確認しよう！</li>
              <li className="text-sm"><span className="font-bold">収穫忘れずに</span>：熟した野菜はすぐに収穫しよう！</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    tips: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">💡</span>
          やさいづくりのコツ
        </h3>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-2">
            <div className="handdrawn-box p-3 h-full" style={{borderColor: currentColor.primary}}>
              <h4 className="font-bold flex items-center">
                <span className="text-xl mr-2">🌱</span>
                育てやすい野菜を選ぼう！
              </h4>
              <p className="text-sm mt-2">初めてなら、育てやすいトマトやじゃがいもから始めよう。サツマイモも手間がかからないよ！</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="handdrawn-box p-3 h-full" style={{borderColor: currentColor.primary}}>
              <h4 className="font-bold flex items-center">
                <span className="text-xl mr-2">💧</span>
                水やりのタイミング
              </h4>
              <p className="text-sm mt-2">朝か夕方に水をあげよう！土の表面が乾いたら水をあげるタイミングだよ。</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="handdrawn-box p-3 h-full" style={{borderColor: currentColor.primary}}>
              <h4 className="font-bold flex items-center">
                <span className="text-xl mr-2">🐕</span>
                犬にも安全な野菜とハーブ
              </h4>
              <p className="text-sm mt-2">にんじん、トマト、きゅうり、かぼちゃは犬も食べられるよ！パセリやバジルも少量なら大丈夫！ネギ類は与えちゃダメ！</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="handdrawn-box p-3 h-full" style={{borderColor: currentColor.primary}}>
              <h4 className="font-bold flex items-center">
                <span className="text-xl mr-2">📅</span>
                月に2〜3回でもOK！
              </h4>
              <p className="text-sm mt-2">週末だけでも育つ野菜がたくさんあるよ！マルチシートを敷くと雑草対策になるよ！</p>
            </div>
          </div>
        </div>
      </div>
    ),
    calendar: (
      <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 flex items-center" style={{color: currentColor.accent}}>
          <span className="mr-2">📅</span>
          {activeSeason === 'spring' ? '春' : activeSeason === 'summer' ? '夏' : activeSeason === 'autumn' ? '秋' : '冬'}の作業カレンダー
        </h3>
        <div className="handdrawn-box p-3" style={{borderColor: currentColor.primary}}>
          {activeSeason === 'spring' && (
            <div>
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-xl mr-2">🌸</span>
                春（3〜5月）の作業
              </h4>
              <ul className="list-disc ml-6">
                <li className="mb-1 text-sm"><span className="font-bold">4月上旬</span>：畑の土づくりと畝立て</li>
                <li className="mb-1 text-sm"><span className="font-bold">4月中旬〜下旬</span>：春まき野菜の種まき（にんじん、ほうれん草など）</li>
                <li className="mb-1 text-sm"><span className="font-bold">4月下旬</span>：じゃがいもの植え付け</li>
                <li className="mb-1 text-sm"><span className="font-bold">5月上旬</span>：トマトやピーマンの苗植え</li>
                <li className="text-sm"><span className="font-bold">5月中旬以降</span>：キュウリ、ナス、サツマイモの苗の植え付け</li>
              </ul>
            </div>
          )}
          {activeSeason === 'summer' && (
            <div>
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-xl mr-2">☀️</span>
                夏（6〜8月）の作業
              </h4>
              <ul className="list-disc ml-6">
                <li className="mb-1 text-sm"><span className="font-bold">6月〜8月</span>：水やり・追肥・収穫が中心</li>
                <li className="mb-1 text-sm"><span className="font-bold">6月（梅雨時）</span>：雨が少ない場合は水やり</li>
                <li className="mb-1 text-sm"><span className="font-bold">6月下旬〜</span>：枝豆やキュウリの収穫開始</li>
                <li className="mb-1 text-sm"><span className="font-bold">7月〜8月</span>：トマト、ナス、オクラなどの収穫</li>
                <li className="text-sm"><span className="font-bold">8月下旬</span>：秋まき野菜の準備</li>
              </ul>
            </div>
          )}
          {activeSeason === 'autumn' && (
            <div>
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-xl mr-2">🍂</span>
                秋（9〜11月）の作業
              </h4>
              <ul className="list-disc ml-6">
                <li className="mb-1 text-sm"><span className="font-bold">9月上旬</span>：夏野菜の片付け、秋まき野菜の種まき</li>
                <li className="mb-1 text-sm"><span className="font-bold">9月中旬</span>：発芽の確認、間引き・水やり</li>
                <li className="mb-1 text-sm"><span className="font-bold">10月</span>：追肥、土寄せ、シカ対策の強化</li>
                <li className="mb-1 text-sm"><span className="font-bold">11月</span>：初霜に注意、サツマイモなどの収穫</li>
                <li className="text-sm"><span className="font-bold">11月下旬</span>：落ち葉を集めて土づくり</li>
              </ul>
            </div>
          )}
          {activeSeason === 'winter' && (
            <div>
              <h4 className="font-bold flex items-center mb-2">
                <span className="text-xl mr-2">❄️</span>
                冬（12〜2月）の作業
              </h4>
              <ul className="list-disc ml-6">
                <li className="mb-1 text-sm"><span className="font-bold">12月〜2月</span>：月1回程度の見回り</li>
                <li className="mb-1 text-sm"><span className="font-bold">冬野菜</span>：ほうれん草などの収穫</li>
                <li className="mb-1 text-sm"><span className="font-bold">防獣ネット</span>：補修・点検</li>
                <li className="mb-1 text-sm"><span className="font-bold">積雪時</span>：野菜の上の雪を払う</li>
                <li className="text-sm"><span className="font-bold">2月頃〜</span>：春に向けての準備開始</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  };

  return (
    <div className="font-handwriting min-h-screen" style={{
      background: `linear-gradient(135deg, ${currentColor.secondary} 0%, #f0f9ff 100%)`,
    }}>
      {/* ヘッダー */}
      <header className="p-4 border-b-2 border-gray-200" style={{borderColor: currentColor.accent}}>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center" style={{
            background: `linear-gradient(135deg, ${currentColor.accent} 0%, #6366f1 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            鳴沢村の家庭菜園アドベンチャー
          </h1>
          <h2 className="text-lg text-center text-gray-600">〜小学5年生のための野菜づくり図鑑〜</h2>
        </div>
      </header>
      
      {/* メインコンテンツ */}
      <main className="container mx-auto p-4">
        {/* ハーブガーデン追加説明 */}
        <div className="mb-6 bg-white bg-opacity-80 p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">🌿</span>
            <h3 className="text-xl font-bold" style={{color: currentColor.accent}}>小さなハーブガーデンも作ってみよう！</h3>
          </div>
          <p className="mb-3">野菜だけでなく、ハーブも育ててみよう！ハーブは小さな場所でも育てられるし、料理に使うと新しい味が楽しめるよ！</p>
          <div className="handdrawn-box p-3" style={{borderColor: currentColor.primary}}>
            <h4 className="font-bold mb-2">ハーブを育てるコツ</h4>
            <ul className="list-disc ml-6">
              <li className="mb-1 text-sm">日当たりの良い場所を選ぼう</li>
              <li className="mb-1 text-sm">水はけの良い土を使おう</li>
              <li className="mb-1 text-sm">摘み取るとよく育つよ！使いたいときに少しずつ収穫しよう</li>
              <li className="text-sm">プランターや小さな鉢でも育てられるよ</li>
            </ul>
          </div>
        </div>
        {/* 季節選択ボタン */}
        <div className="flex justify-center mb-6 flex-wrap">
          <button 
            className={`season-btn m-2 px-4 py-2 flex items-center ${activeSeason === 'spring' ? 'active-btn' : ''}`}
            style={{
              borderColor: seasonColors.spring.accent,
              backgroundColor: activeSeason === 'spring' ? seasonColors.spring.primary : 'white',
            }}
            onClick={() => handleSeasonChange('spring')}
          >
            <span className="text-xl mr-2">🌸</span> 春
          </button>
          <button 
            className={`season-btn m-2 px-4 py-2 flex items-center ${activeSeason === 'summer' ? 'active-btn' : ''}`}
            style={{
              borderColor: seasonColors.summer.accent,
              backgroundColor: activeSeason === 'summer' ? seasonColors.summer.primary : 'white',
            }}
            onClick={() => handleSeasonChange('summer')}
          >
            <span className="text-xl mr-2">☀️</span> 夏
          </button>
          <button 
            className={`season-btn m-2 px-4 py-2 flex items-center ${activeSeason === 'autumn' ? 'active-btn' : ''}`}
            style={{
              borderColor: seasonColors.autumn.accent,
              backgroundColor: activeSeason === 'autumn' ? seasonColors.autumn.primary : 'white',
            }}
            onClick={() => handleSeasonChange('autumn')}
          >
            <span className="text-xl mr-2">🍂</span> 秋
          </button>
          <button 
            className={`season-btn m-2 px-4 py-2 flex items-center ${activeSeason === 'winter' ? 'active-btn' : ''}`}
            style={{
              borderColor: seasonColors.winter.accent,
              backgroundColor: activeSeason === 'winter' ? seasonColors.winter.primary : 'white',
            }}
            onClick={() => handleSeasonChange('winter')}
          >
            <span className="text-xl mr-2">❄️</span> 冬
          </button>
        </div>
        
        {/* セクション選択ボタン */}
        <div className="flex justify-center mb-6 flex-wrap">
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'overview' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'overview' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('overview')}
          >
            <span className="mr-1">📝</span> 概要
          </button>
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'vegetables' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'vegetables' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('vegetables')}
          >
            <span className="mr-1">🥕</span> おすすめ野菜とハーブ
          </button>
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'preparation' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'preparation' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('preparation')}
          >
            <span className="mr-1">🌱</span> 畑づくり
          </button>
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'animals' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'animals' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('animals')}
          >
            <span className="mr-1">🦌</span> 動物対策
          </button>
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'tips' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'tips' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('tips')}
          >
            <span className="mr-1">💡</span> コツ
          </button>
          <button 
            className={`section-btn m-1 px-3 py-1 text-sm flex items-center ${activeSection === 'calendar' ? 'active-btn' : ''}`}
            style={{
              borderColor: currentColor.accent,
              backgroundColor: activeSection === 'calendar' ? currentColor.primary : 'white',
            }}
            onClick={() => handleSectionChange('calendar')}
          >
            <span className="mr-1">📅</span> カレンダー
          </button>
        </div>
        
        {/* セクションコンテンツの表示 */}
        {sectionContent[activeSection]}
        
        {/* 吹き出しメッセージ */}
        <div className="handdrawn-box p-4 mt-6 relative" style={{
          borderColor: currentColor.accent,
          backgroundColor: 'white'
        }}>
          <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: currentColor.primary}}>
            <span className="text-xl">💬</span>
          </div>
          <p className="text-center">
            {activeSeason === 'spring' ? 
              '春は野菜づくりの始まりだよ！種まきや苗植えを楽しもう！' : 
              activeSeason === 'summer' ? 
              '夏はトマトやキュウリがたくさん実る季節！収穫が楽しいよ！' : 
              activeSeason === 'autumn' ? 
              '秋は涼しくなって、大根やキャベツを育てるのにぴったり！' : 
              '冬は寒いけど、寒さで甘くなる野菜もあるよ！春の準備も始めよう！'}
          </p>
        </div>
      </main>
      
      {/* フッター */}
      <footer className="p-4 mt-6 text-center text-sm text-gray-600 border-t-2 border-gray-200" style={{borderColor: currentColor.accent}}>
        <p>鳴沢村の家庭菜園アドベンチャー 〜小学5年生のための野菜づくり図鑑〜</p>
        <p className="mt-1">© 2025 富士山麓菜園クラブ</p>
      </footer>
    </div>
  );
}

export default App;