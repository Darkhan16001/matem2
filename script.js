
"use strict";

// =============================================
// MATH LAB PRO — БІРІНШІ ТАҚЫРЫП
// =============================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Алғашқы функция және анықталмаған интеграл",
  chapter: "I тарау. Алғашқы функция және интеграл",
  page: 5,
  goal:
    "Алғашқы функция ұғымын түсіну, анықталмаған интегралдың формулаларын меңгеру және есептердің шешу жолдарын үйрену."
};

// =============================================
// ТЕОРИЯ — 5 БЕТ
// =============================================

const theory = [
  {
    title: "Алғашқы функция дегеніміз не?",
    definition:
      "Алғашқы функция — туындысы берілген функцияға тең болатын функция. Мысалы, x² функциясының туындысы 2x. Сондықтан x² функциясы 2x үшін алғашқы функция болып табылады.",
    explanation:
      "Туынды табуда біз функциядан оның өзгеру жылдамдығын анықтаймыз. Ал алғашқы функцияны табуда керісінше, туындысы белгілі функцияның өзін іздейміз.",
    warning:
      "Бір функцияның алғашқы функциясы жалғыз болмайды. Оған кез келген тұрақты санды қосуға болады.",
    formula: M`F'(x)=f(x)`
  },
  {
    title: "Алғашқы функциялар жиыны",
    definition:
      "Бір функцияның әртүрлі алғашқы функциялары болуы мүмкін. Олардың арасындағы айырмашылық тек тұрақты саннан тұрады.",
    explanation:
      "Мысалы, x², x²+5 және x²−10 функцияларының туындысы бірдей: 2x. Себебі тұрақты сандардың туындысы нөл.",
    warning:
      "Тұрақты C саны нақты санның кез келген мәнін қабылдай алады.",
    formula: M`F(x)+C`
  },
  {
    title: "Анықталмаған интеграл",
    definition:
      "Анықталмаған интеграл — берілген функцияның барлық алғашқы функцияларының жиыны.",
    explanation:
      "Интеграл ∫ таңбасымен белгіленеді. f(x) — интегралданатын функция, dx — интегралдау айнымалысын көрсететін белгі, C — тұрақты сан.",
    warning:
      "Анықталмаған интегралдың нәтижесі бір ғана сан емес, функциялар жиыны болады.",
    formula: M`\int f(x)\,dx=F(x)+C`
  },
  {
    title: "Дәрежелік функцияны интегралдау",
    definition:
      "Дәрежелік функция — айнымалы белгілі бір дәрежеге шығарылған функция. Мысалы: x², x³, x⁴.",
    explanation:
      "Алдымен дәреже көрсеткішіне бір қосамыз. Содан кейін шыққан көрсеткішке бөлеміз. Соңында C тұрақтысын қосамыз.",
    warning:
      "Дәреже көрсеткіші −1 болғанда бұл формуланы қолдануға болмайды. Ол үшін логарифмдік формула пайдаланылады.",
    formula: M`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`
  },
  {
    title: "Интеграл нәтижесін тексеру",
    definition:
      "Интегралды дұрыс есептегенімізді анықтау үшін табылған алғашқы функциядан туынды аламыз.",
    explanation:
      "Егер туынды бастапқы интеграл астындағы функцияға тең болса, онда есеп дұрыс шығарылған. Бұл — интегралдауды тексерудің негізгі тәсілі.",
    warning:
      "Тексеру кезінде C тұрақтысының туындысы нөл екенін ұмытпаңдар.",
    formula: M`\frac{d}{dx}\left(\frac{x^3}{3}+C\right)=x^2`
  }
];

// =============================================
// КОНСПЕКТ — 10 БЕТ
// =============================================

const notes = [
  {
    title: "Алғашқы функция",
    text:
      "Егер F(x) функциясының туындысы f(x) функциясына тең болса, F(x) функциясы f(x) функциясының алғашқы функциясы деп аталады.",
    formula: M`F'(x)=f(x)`
  },
  {
    title: "Алғашқы функцияға мысал",
    text:
      "x² функциясының туындысы 2x. Демек, 2x функциясының алғашқы функцияларының бірі x² болады.",
    formula: M`(x^2)'=2x`
  },
  {
    title: "Тұрақты сан",
    text:
      "Тұрақты санның туындысы нөлге тең. Сондықтан алғашқы функцияға кез келген тұрақты санды қосуға болады.",
    formula: M`(F(x)+C)'=f(x)`
  },
  {
    title: "Анықталмаған интеграл",
    text:
      "Берілген функцияның барлық алғашқы функцияларының жиыны анықталмаған интеграл деп аталады.",
    formula: M`\int f(x)\,dx=F(x)+C`
  },
  {
    title: "Тұрақты санның интегралы",
    text:
      "Тұрақты санды интегралдағанда сол санды x айнымалысына көбейтеміз және C тұрақтысын қосамыз.",
    formula: M`\int a\,dx=ax+C`
  },
  {
    title: "Дәрежелік функция",
    text:
      "Дәрежелік функцияны интегралдағанда дәреже көрсеткішіне бір қосып, жаңа көрсеткішке бөлеміз.",
    formula: M`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C`
  },
  {
    title: "Тұрақты көбейткіш",
    text:
      "Интеграл астындағы тұрақты көбейткішті интеграл таңбасының алдына шығаруға болады.",
    formula: M`\int af(x)\,dx=a\int f(x)\,dx`
  },
  {
    title: "Қосындыны интегралдау",
    text:
      "Екі функция қосындысының интегралы олардың жеке интегралдарының қосындысына тең.",
    formula: M`\int(f(x)+g(x))\,dx=\int f(x)\,dx+\int g(x)\,dx`
  },
  {
    title: "Айырманы интегралдау",
    text:
      "Екі функция айырмасының интегралын әр функцияны жеке интегралдау арқылы табамыз.",
    formula: M`\int(f(x)-g(x))\,dx=\int f(x)\,dx-\int g(x)\,dx`
  },
  {
    title: "Интеграл нәтижесін тексеру",
    text:
      "Табылған алғашқы функцияның туындысы бастапқы интеграл астындағы функцияға тең болуы тиіс.",
    formula: M`(F(x)+C)'=f(x)`
  }
];

// =============================================
// НЕГІЗГІ ФОРМУЛАЛАР
// =============================================

const formulas = [
  {
    name: "Анықталмаған интеграл",
    math: M`\int f(x)\,dx=F(x)+C`
  },
  {
    name: "Дәрежелік функция",
    math: M`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`
  },
  {
    name: "Тұрақты сан",
    math: M`\int a\,dx=ax+C`
  },
  {
    name: "Тұрақты көбейткіш",
    math: M`\int af(x)\,dx=a\int f(x)\,dx`
  },
  {
    name: "Қосынды",
    math: M`\int(f+g)\,dx=\int f\,dx+\int g\,dx`
  },
  {
    name: "Логарифмдік ерекше жағдай",
    math: M`\int\frac1x\,dx=\ln|x|+C,\quad x\ne0`
  }
];

// =============================================
// ШЫҒАРЫЛҒАН 4 ЕСЕП
// =============================================

const examples = [
  {
    title: "1-есеп. Қарапайым интеграл",
    question: M`\int6x^2\,dx`,
    explanation:
      "Дәреже көрсеткішін бірге арттырамыз. Одан кейін коэффициентті жаңа көрсеткішке бөлеміз.",
    steps: [
      M`6\cdot\frac{x^3}{3}+C`,
      M`2x^3+C`
    ],
    check: M`(2x^3+C)'=6x^2`
  },
  {
    title: "2-есеп. Тұрақты көбейткіш",
    question: M`\int12x^3\,dx`,
    explanation:
      "12 — тұрақты коэффициент. x³ функциясын интегралдап, нәтижені 12-ге көбейтеміз.",
    steps: [
      M`12\cdot\frac{x^4}{4}+C`,
      M`3x^4+C`
    ],
    check: M`(3x^4+C)'=12x^3`
  },
  {
    title: "3-есеп. Қосынды",
    question: M`\int(4x+6)\,dx`,
    explanation:
      "Қосындының әрбір мүшесін жеке интегралдаймыз. Содан кейін нәтижелерді қосамыз.",
    steps: [
      M`\frac{4x^2}{2}+6x+C`,
      M`2x^2+6x+C`
    ],
    check: M`(2x^2+6x+C)'=4x+6`
  },
  {
    title: "4-есеп. Көпмүшелік",
    question: M`\int(3x^2-4x+5)\,dx`,
    explanation:
      "Көпмүшеліктегі барлық мүшелерді жеке интегралдап, ортақ өрнекке біріктіреміз.",
    steps: [
      M`\frac{3x^3}{3}-\frac{4x^2}{2}+5x+C`,
      M`x^3-2x^2+5x+C`
    ],
    check: M`(x^3-2x^2+5x+C)'=3x^2-4x+5`
  }
];

// =============================================
// ЖЕКЕ ТАПСЫРМАЛАР — 6 ЕСЕП
// =============================================

const tasks = [
  {
    level: "Жеңіл",
    question: M`\int8x^3\,dx`,
    hint: "Көрсеткішке 1 қосып, 8 санын 4-ке бөліңдер.",
    answer: M`2x^4+C`
  },
  {
    level: "Жеңіл",
    question: M`\int15x^2\,dx`,
    hint: "Көрсеткіш 3 болады. Коэффициентті 3-ке бөліңдер.",
    answer: M`5x^3+C`
  },
  {
    level: "Орташа",
    question: M`\int(6x+8)\,dx`,
    hint: "Екі мүшені бөлек интегралдаңдар.",
    answer: M`3x^2+8x+C`
  },
  {
    level: "Орташа",
    question: M`\int(4x^3-6x)\,dx`,
    hint: "Әрбір мүшенің дәреже көрсеткішін арттырыңдар.",
    answer: M`x^4-3x^2+C`
  },
  {
    level: "Қиын",
    question: M`\int(5x^4+3x^2-7)\,dx`,
    hint: "Үш мүшені жеке интегралдап, нәтижелерді біріктіріңдер.",
    answer: M`x^5+x^3-7x+C`
  },
  {
    level: "Қиын",
    question: M`\int(12x^5-8x^3+10x)\,dx`,
    hint: "Әр мүшенің интегралын есептеп, жауабын туынды арқылы тексеріңдер.",
    answer: M`2x^6-2x^4+5x^2+C`
  }
];

// =============================================
// 3 ТОП — 15 СҰРАҚ
// =============================================

const quiz = [
  {
    question:"Алғашқы функция қандай амалға кері?",
    answers:["Туынды табу","Көбейту","Бөлу","Түбір табу"],
    correct:0
  },
  {
    question:"x² функциясының туындысы қандай?",
    answers:["x³","2x","x","2"],
    correct:1
  },
  {
    question:"∫2x dx нәтижесі қандай?",
    answers:["2x²+C","2x+C","x²+C","1"],
    correct:2
  },
  {
    question:"Тұрақты санның туындысы қандай?",
    answers:["1","x","C","0"],
    correct:3
  },
  {
    question:"∫5dx нәтижесі?",
    answers:["5x+C","x⁵+C","5+C","0"],
    correct:0
  },
  {
    question:"∫x²dx нәтижесі?",
    answers:["x³+C","x³/3+C","3x²+C","x²/2+C"],
    correct:1
  },
  {
    question:"(x⁴)′ нәтижесі?",
    answers:["x⁵","x³","4x³","4x⁴"],
    correct:2
  },
  {
    question:"∫6x dx нәтижесі?",
    answers:["6x²+C","6+C","x³+C","3x²+C"],
    correct:3
  },
  {
    question:"∫x³dx нәтижесі?",
    answers:["x⁴/4+C","x⁴+C","3x²+C","x³/3+C"],
    correct:0
  },
  {
    question:"Интегралдағы C нені білдіреді?",
    answers:["Айнымалыны","Кез келген тұрақтыны","Дәрежені","Туындыны"],
    correct:1
  },
  {
    question:"∫4x³ dx нәтижесі?",
    answers:["4x⁴+C","4x³+C","x⁴+C","12x²+C"],
    correct:2
  },
  {
    question:"∫(2x+3)dx нәтижесі?",
    answers:["2x²+3+C","x²+C","2x+3","x²+3x+C"],
    correct:3
  },
  {
    question:"(5x²+C)′ нәтижесі?",
    answers:["10x","5x","10x²","5"],
    correct:0
  },
  {
    question:"∫10x⁴ dx нәтижесі?",
    answers:["10x⁵+C","2x⁵+C","5x⁵+C","40x³+C"],
    correct:1
  },
  {
    question:"Интегралдың жауабын қалай тексереміз?",
    answers:["Қосамыз","Түбір аламыз","Туынды аламыз","Бөлеміз"],
    correct:2
  }
];

// =============================================
// ҮЙ ЖҰМЫСЫ
// =============================================

const homework = [
  {
    title:"1-тапсырма. Интегралдарды есептеу",
    text:"Үш интегралды дәптерге толық шығарыңдар.",
    formulas:[
      M`\int7x^6\,dx`,
      M`\int(9x^2-4x+1)\,dx`,
      M`\int(6x^5+8x^3-12x)\,dx`
    ]
  },
  {
    title:"2-тапсырма. Туынды арқылы тексеру",
    text:"Берілген алғашқы функцияның туындысын табыңдар және оның қай функцияның алғашқы функциясы болатынын түсіндіріңдер.",
    formulas:[
      M`F(x)=3x^4-2x^2+5x+C`
    ]
  },
  {
    title:"3-тапсырма. Теориялық жауап",
    text:"«Алғашқы функция дегеніміз не?» тақырыбында 5–6 сөйлем жазыңдар. Бір математикалық мысал келтіріңдер.",
    formulas:[]
  }
];

// =============================================
// СЛАЙДТАРДЫ АВТОМАТТЫ ҚҰРАСТЫРУ
// =============================================

const slides = [
  {type:"intro",name:"Кіріспе"}
];

theory.forEach((item,index)=>{
  slides.push({
    type:"theory",
    index,
    name:"Түсіндірме "+(index+1)
  });
});

notes.forEach((item,index)=>{
  slides.push({
    type:"note",
    index,
    name:"Конспект "+(index+1)
  });
});

slides.push({
  type:"formulas",
  name:"Негізгі формулалар"
});

examples.forEach((item,index)=>{
  slides.push({
    type:"example",
    index,
    name:"Үлгі есеп "+(index+1)
  });
});

tasks.forEach((item,index)=>{
  slides.push({
    type:"task",
    index,
    name:"Тапсырма "+(index+1)
  });
});

quiz.forEach((item,index)=>{
  slides.push({
    type:"game",
    index,
    name:"Ойын "+(index+1)
  });
});

slides.push({
  type:"homework",
  name:"Үй жұмысы"
});

slides.push({
  type:"finish",
  name:"Қорытынды"
});

// =============================================
// САЙТТЫҢ КҮЙІ
// =============================================

let currentPage = 0;
let scores = [0,0,0];
let answered = new Map();

let remainingSeconds = 80*60;
let timerInterval = null;
let timerEndAt = null;

function safe(text) {
  return String(text).replace(/[&<>"']/g,char=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[char]));
}

function math(tex) {
  return "\\[" + tex + "\\]";
}

function mathCard(tex) {
  return `<div class="math-box">${math(tex)}</div>`;
}

function card(color,title,body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

// =============================================
// СЛАЙДТЫ КӨРСЕТУ
// =============================================

function render() {
  const slide = slides[currentPage];

  $("pageCount").textContent =
    `${currentPage+1} / ${slides.length}`;

  $("pageName").textContent = slide.name;

  $("pageProgress").style.width =
    ((currentPage+1)/slides.length*100)+"%";

  $("totalScore").textContent =
    scores.reduce((a,b)=>a+b,0);

  let html = `
    <div class="slide">
      <div class="eyebrow">
        ${safe(lesson.chapter)} • ${lesson.page}-бет
      </div>
  `;

  if(slide.type==="intro") {
    html += `
      <h1 class="gradient">
        §1. ${safe(lesson.title)}
      </h1>

      ${card("blue","Сабақтың мақсаты",
        `<p>${safe(lesson.goal)}</p>`)}

      ${card("green","Бүгін нені үйренеміз?",`
        <p>Алғашқы функцияның мағынасын түсінеміз.</p>
        <p>Анықталмаған интегралды есептейміз.</p>
        <p>Есептерді туынды арқылы тексереміз.</p>
      `)}

      ${card("yellow","Сабақ жоспары",`
        <p>Түсіндірме → Конспект → Формулалар → Есептер → Топтық ойын → Үй жұмысы.</p>
        <p>Жалпы ұзақтығы: <b>80 минут</b>.</p>
      `)}
    `;
  }

  if(slide.type==="theory") {
    const item=theory[slide.index];

    html+=`<h2>📖 ${safe(item.title)}</h2>`;

    html+=card("blue","Анықтама",
      `<p>${safe(item.definition)}</p>`);

    html+=card("green","Қарапайым түсіндірме",
      `<p>${safe(item.explanation)}</p>`);

    html+=card("yellow","Негізгі формула",
      mathCard(item.formula));

    html+=card("red","Назар аударыңдар!",
      `<p>${safe(item.warning)}</p>`);
  }

  if(slide.type==="note") {
    const item=notes[slide.index];

    html+=`<h2>📝 Конспект — ${slide.index+1}</h2>`;

    html+=card("yellow",item.title,`
      <p class="blue-text">Дәптерге жазып алыңдар:</p>
      <div class="note-box">${safe(item.text)}</div>
      ${mathCard(item.formula)}
    `);

    html+=card("green","Түсіндіру",`
      <p>Осы ережені өз сөздеріңмен айтып, формуланың қалай қолданылатынын түсіндіріңдер.</p>
    `);
  }

  if(slide.type==="formulas") {
    html+=`<h2>∑ Негізгі интеграл формулалары</h2>`;

    formulas.forEach((f,i)=>{
      html+=card(
        i%2===0?"yellow":"blue",
        `${i+1}. ${f.name}`,
        mathCard(f.math)
      );
    });
  }

  if(slide.type==="example") {
    const e=examples[slide.index];

    html+=`<h2>✏️ ${safe(e.title)}</h2>`;

    html+=card("blue","Берілген есеп",
      mathCard(e.question));

    html+=card("green","Шешу әдісі",
      `<p>${safe(e.explanation)}</p>`);

    e.steps.forEach((step,i)=>{
      html+=card(
        "yellow",
        `${i+1}-қадам`,
        mathCard(step)
      );
    });

    html+=card(
      "purple",
      "Туынды арқылы тексеру",
      mathCard(e.check)
    );
  }

  if(slide.type==="task") {
    const t=tasks[slide.index];

    html+=`<h2>📐 ${slide.index+1}-тапсырма</h2>`;

    html+=card("blue",`Деңгейі: ${t.level}`,`
      ${mathCard(t.question)}
      <p>Есепті алдымен дәптерге шығарыңдар.</p>
    `);

    html+=card("purple","Көмек",`
      <button class="action" data-reveal="hint">
        Көмекті көрсету
      </button>
      <div id="hint" class="reveal">
        ${safe(t.hint)}
      </div>
    `);

    html+=card("green","Жауапты тексеру",`
      <button class="action" data-reveal="taskAnswer">
        Жауапты көрсету
      </button>
      <div id="taskAnswer" class="reveal">
        ${math(t.answer)}
      </div>
    `);
  }

  if(slide.type==="game") {
    const index=slide.index;
    const q=quiz[index];
    const team=index%3;
    const previous=answered.get(index);

    html+=`<h2>🏆 Топтық ойын</h2>`;

    html+=`
      <div class="scores">
        ${scores.map((s,i)=>`
          <div class="team ${i===team?"current":""}">
            ${i+1}-топ
            <strong>${s}</strong>
          </div>
        `).join("")}
      </div>
    `;

    html+=`
      <section class="card yellow">
        <h3>${index+1}-сұрақ / ${quiz.length}</h3>
        <p class="yellow-text">
          ${team+1}-топ жауап береді
        </p>
        <p>${safe(q.question)}</p>

        <div class="answers">
          ${q.answers.map((option,i)=>{
            let style="";

            if(previous!==undefined) {
              if(i===q.correct) style="correct";
              else if(i===previous) style="wrong";
            }

            return `
              <button
                class="${style}"
                data-answer="${i}"
                ${previous!==undefined?"disabled":""}>
                ${"ABCD"[i]}. ${safe(option)}
              </button>
            `;
          }).join("")}
        </div>

        <p id="gameMessage">
          ${previous===undefined
            ?"Бір дұрыс жауапты таңдаңдар."
            :previous===q.correct
              ?"✓ Дұрыс жауап! +10 ұпай."
              :"Дұрыс жауап: "+safe(q.answers[q.correct])
          }
        </p>
      </section>
    `;

    html+=card("blue","Ойын ережесі",`
      <p>Әр дұрыс жауапқа 10 ұпай беріледі.</p>
      <p>Топтар 1 → 2 → 3 ретімен кезектеседі.</p>
      <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
    `);
  }

  if(slide.type==="homework") {
    html+=`<h2>📚 Үй тапсырмасы</h2>`;

    homework.forEach((h,i)=>{
      html+=card(
        ["blue","yellow","green"][i],
        h.title,
        `<p>${safe(h.text)}</p>`+
        h.formulas.map(mathCard).join("")
      );
    });

    html+=card("red","Маңызды ескерту",`
      <p>Есептердің толық шешу жолын жазыңдар.</p>
      <p>Анықталмаған интегралда C тұрақтысын ұмытпаңдар.</p>
    `);
  }

  if(slide.type==="finish") {
    const maximum=Math.max(...scores);

    const winners=scores
      .map((s,i)=>s===maximum?`${i+1}-топ`:null)
      .filter(Boolean);

    html+=`
      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">
        ${scores.map((s,i)=>`
          <div class="team">
            ${i+1}-топ
            <strong>${s}</strong>
          </div>
        `).join("")}
      </div>
    `;

    html+=card("green","Ойын нәтижесі",`
      <p>${winners.join(", ")}
      ${winners.length===1
        ?" — жеңімпаз!"
        :" — бірдей ұпай жинады!"}</p>
    `);

    html+=card("blue","Сабақ қорытындысы",`
      <p>Алғашқы функцияны анықтауды үйрендік.</p>
      <p>Интеграл формулаларын пайдаландық.</p>
      <p>Алғашқы функцияларды туынды арқылы тексердік.</p>
    `);

    html+=card("yellow","Сау болыңыздар!",`
      <p>Сабаққа қатысқандарыңызға рақмет!</p>
    `);
  }

  $("content").innerHTML=html+"</div>";
  $("content").scrollTop=0;

  updateSidebar();
  refreshFormulas();
}

// =============================================
// ФОРМУЛАЛАРДЫ КӨРСЕТУ
// =============================================

let formulaRenderId=0;

function refreshFormulas() {
  const id=++formulaRenderId;

  if(!window.MathJax) return;

  const startup=MathJax.startup;

  if(!startup || !startup.promise) return;

  startup.promise.then(()=>{
    if(id!==formulaRenderId) return;

    if(typeof MathJax.typesetPromise==="function") {
      return MathJax.typesetPromise([$("content")]);
    }
  }).catch(error=>{
    console.warn("MathJax:",error);
  });
}

// =============================================
// СЛАЙДТАР АРАСЫНДА АУЫСУ
// =============================================

function nextPage() {
  if(currentPage<slides.length-1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if(currentPage>0) {
    currentPage--;
    render();
  }
}

function goSection(section) {
  const index=slides.findIndex(s=>s.type===section);

  if(index!==-1) {
    currentPage=index;
    render();
  }
}

function updateSidebar() {
  const current=slides[currentPage].type;

  document.querySelectorAll("[data-section]").forEach(button=>{
    button.classList.toggle(
      "active",
      button.dataset.section===current
    );
  });

  $("previousPage").disabled=currentPage===0;
  $("nextPage").disabled=currentPage===slides.length-1;
}

// =============================================
// КӨМЕК ПЕН ЖАУАПТАР
// =============================================

function toggleReveal(id) {
  const element=$(id);
  if(!element) return;

  const visible=getComputedStyle(element).display!=="none";

  element.style.display=visible?"none":"block";
}

$("content").addEventListener("click",event=>{
  const reveal=event.target.closest("[data-reveal]");

  if(reveal) {
    toggleReveal(reveal.dataset.reveal);
    return;
  }

  const answer=event.target.closest("[data-answer]");

  if(answer) {
    answerQuestion(Number(answer.dataset.answer));
  }
});

// =============================================
// 3 ТОПТЫҚ ОЙЫН
// =============================================

function answerQuestion(choice) {
  const slide=slides[currentPage];

  if(slide.type!=="game") return;

  const index=slide.index;
  if(answered.has(index)) return;

  const q=quiz[index];
  const team=index%3;

  answered.set(index,choice);

  if(choice===q.correct) {
    scores[team]+=10;
  }

  render();
}

function resetGame() {
  scores=[0,0,0];
  answered.clear();
  render();
}

// =============================================
// БАТЫРМАЛАР
// =============================================

document.querySelectorAll("[data-section]").forEach(button=>{
  button.addEventListener("click",()=>{
    goSection(button.dataset.section);
  });
});

$("previousPage").addEventListener("click",previousPage);
$("nextPage").addEventListener("click",nextPage);
$("resetGame").addEventListener("click",resetGame);

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран:",error);
  }
});

// =============================================
// 80 МИНУТТЫҚ ТАЙМЕР
// =============================================

function formatTime(seconds) {
  const minutes=Math.floor(seconds/60);
  const sec=seconds%60;

  return String(minutes).padStart(2,"0")+
    ":"+String(sec).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=formatTime(4800-remainingSeconds);

  $("timeProgress").style.width=
    ((4800-remainingSeconds)/4800*100)+"%";
}

function startTimer() {
  if(timerInterval!==null || remainingSeconds<=0)return;

  timerEndAt=Date.now()+remainingSeconds*1000;

  timerInterval=setInterval(()=>{
    remainingSeconds=Math.max(
      0,
      Math.ceil((timerEndAt-Date.now())/1000)
    );

    updateTimer();

    if(remainingSeconds===0)pauseTimer();
  },250);
}

function pauseTimer() {
  if(timerInterval!==null) {
    clearInterval(timerInterval);
    timerInterval=null;
  }
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=4800;
  updateTimer();
}

$("startTimer").addEventListener("click",startTimer);
$("pauseTimer").addEventListener("click",pauseTimer);
$("resetTimer").addEventListener("click",resetTimer);

// =============================================
// АЛМАТЫНЫҢ НАҚТЫ УАҚЫТЫ
// =============================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

// =============================================
// КАЛЬКУЛЯТОР — БАТЫРМАЛАР
// =============================================

const calculatorValues={
  basic:"",
  scientific:""
};

const calculatorButtons={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],

  scientific:[
    "C","⌫","(",")",
    "sin","cos","tan","√",
    "log","ln","π","e",
    "x²","xʸ","1/x","÷",
    "7","8","9","×",
    "4","5","6","−",
    "1","2","3","+",
    "%","0",".","="
  ]
};

const replacements={
  "×":"*",
  "÷":"/",
  "−":"-",
  "√":"sqrt(",
  "sin":"sin(",
  "cos":"cos(",
  "tan":"tan(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi",
  "x²":"^2",
  "xʸ":"^",
  "1/x":"1/("
};

function createCalculator(type) {
  const container=$(type+"Keys");

  calculatorButtons[type].forEach(key=>{
    const button=document.createElement("button");

    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if([
      "+","−","×","÷","%","√","sin",
      "cos","tan","log","ln","x²","xʸ","1/x"
    ].includes(key)) {
      button.classList.add("operator");
    }

    button.addEventListener("click",()=>{
      calculatorPress(type,key);
    });

    container.appendChild(button);
  });
}

function calculatorPress(type,key) {
  let value=calculatorValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value.slice(0,-1);
  } else if(key==="=") {
    try {
      const result=calculate(value);
      value=String(Number(result.toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=replacements[key]??key;
  }

  calculatorValues[type]=value;

  const display=$(type+"Display");
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =============================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// =============================================

function openCalculator(type) {
  const element=$(type+"Calculator");

  const opening=!element.classList.contains("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const other=type==="basic"?"scientific":"basic";
    $(other+"Calculator").classList.remove("visible");
  }
}

function closeCalculator(type) {
  $(type+"Calculator").classList.remove("visible");
}

$("openBasic").addEventListener("click",()=>{
  openCalculator("basic");
});

$("openScientific").addEventListener("click",()=>{
  openCalculator("scientific");
});

document.querySelectorAll("[data-close]").forEach(button=>{
  button.addEventListener("click",()=>{
    closeCalculator(button.dataset.close);
  });
});

// =============================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ
// =============================================

// Қауіпсіз парсер. eval() қолданылмайды.
// sin, cos және tan градуспен есептеледі.

function calculate(input) {
  const source=String(input).replace(/\s+/g,"");
  let position=0;

  const funcs={
    sin:x=>Math.sin(x*Math.PI/180),
    cos:x=>Math.cos(x*Math.PI/180),
    tan:x=>{
      const radians=x*Math.PI/180;
      if(Math.abs(Math.cos(radians))<1e-12) {
        throw new Error("Тангенс анықталмаған");
      }
      return Math.tan(radians);
    },
    sqrt:Math.sqrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(char) {
    if(source[position]===char) {
      position++;
      return true;
    }
    return false;
  }

  function primary() {
    if(take("(")) {
      const value=expression();
      if(!take(")"))throw new Error("Жақша");
      return value;
    }

    const rest=source.slice(position);

    const number=rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if(number) {
      position+=number[0].length;
      return Number(number[0]);
    }

    if(rest.startsWith("pi")) {
      position+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      position++;
      return Math.E;
    }

    for(const name of Object.keys(funcs)) {
      if(rest.startsWith(name+"(")) {
        position+=name.length+1;

        const argument=expression();

        if(!take(")")) {
          throw new Error("Жақша");
        }

        return funcs[name](argument);
      }
    }

    throw new Error("Өрнек");
  }

  function postfix() {
    let value=primary();

    while(take("%")) {
      value/=100;
    }

    return value;
  }

  function power() {
    let value=postfix();

    if(take("^")) {
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();

    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      } else if(take("/")) {
        value/=unary();
      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+")) {
        value+=term();
      } else if(take("-")) {
        value-=term();
      } else {
        break;
      }
    }

    return value;
  }

  if(!source)throw new Error("Бос өрнек");

  const result=expression();

  if(
    position!==source.length ||
    !Number.isFinite(result)
  ) {
    throw new Error("Есептеу қатесі");
  }

  return result;
}

// =============================================
// КАЛЬКУЛЯТОРДЫ БҮКІЛ КОРПУСЫНАН
// ҰСТАП ЖЫЛЖЫТУ
// =============================================

function makeDraggable(element) {
  let drag=null;
  let blockNextClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest(".calc-close"))return;
    if(event.button!==0 && event.pointerType==="mouse")return;

    const rect=element.getBoundingClientRect();

    drag={
      pointerId:event.pointerId,
      startX:event.clientX,
      startY:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };
  });

  window.addEventListener("pointermove",event=>{
    if(!drag || event.pointerId!==drag.pointerId)return;

    const dx=event.clientX-drag.startX;
    const dy=event.clientY-drag.startY;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(
      0,
      window.innerWidth-element.offsetWidth
    );

    const maxY=Math.max(
      0,
      window.innerHeight-element.offsetHeight
    );

    const x=Math.min(maxX,Math.max(0,drag.left+dx));
    const y=Math.min(maxY,Math.max(0,drag.top+dy));

    element.style.left=x+"px";
    element.style.top=y+"px";
  });

  window.addEventListener("pointerup",event=>{
    if(!drag || event.pointerId!==drag.pointerId)return;

    blockNextClick=drag.moved;
    element.classList.remove("dragging");
    drag=null;
  });

  window.addEventListener("pointercancel",event=>{
    if(!drag || event.pointerId!==drag.pointerId)return;
    element.classList.remove("dragging");
    drag=null;
  });

  // Сүйреген кезде батырманың саны жазылмайды.
  element.addEventListener("click",event=>{
    if(!blockNextClick)return;

    event.preventDefault();
    event.stopImmediatePropagation();
    blockNextClick=false;
  },true);
}

// =============================================
// ІСКЕ ҚОСУ
// =============================================

createCalculator("basic");
createCalculator("scientific");

makeDraggable($("basicCalculator"));
makeDraggable($("scientificCalculator"));

updateClock();
setInterval(updateClock,1000);

updateTimer();
render();
