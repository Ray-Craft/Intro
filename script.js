
let introTxt = [
  {
    para1: 'We claim to be the most special site design and store building company and we have many reasons for this claim. Simply we work as hard as we can.',
    hide: '&#10112;',
    para2: " ندعي أننا الأكثر خصوصية لتصميم المواقع , ولدينا العديد من الأسباب لهذا الادعاء.",
    hide2: '&#10112;'
  },
  {
    para1: "A wide range of corporate, companies and small business and private website and personal website design clients, numerous examples of work in all fields, including corporate portals, corporate website design, online store systems, sales cooperation systems, online and click advertising systems, online customer relationship management systems, Sales cycle management systems, store builder, financial management and online warehousing, office automation and tourism portal are only part of the activities of Tamim web design processing.",
    hide: '&#10113;',
    para2: " مجموعة واسعة من عملاء تصميم مواقع الويب الخاصة بالشركات والمصنع  والموقع الشخصية، والعديد من الأمثلة على العمل في جميع المجالات ، بما في ذلك بوابات الشركات ، وتصميم مواقع الويب للشركات ، وأنظمة المتاجر عبر الإنترنت ، وأنظمة التعاون في المبيعات ، وأنظمة الإعلان عبر الإنترنت، وأنظمة إدارة علاقات العملاء عبر الإنترنت ، أنظمة إدارة الدورة ، وبناء المتاجر ، والإدارة المالية والتخزين عبر الإنترنت ، وأتمتة المكاتب ، وبوابة السياحة جزءًا فقط من أنشطة شركة تميم لمعالجة المعلومات.",
    hide2: '&#10113;'

  },
  {
    para1: "Satisfied and lasting customers, young and expert workforce, work experience in all areas of the web, cooperation with major world sites, stability in the field of specialized website design activities, completely exclusive design and programming according to customer needs, systems with a security factor very high and stable, compliance with optimization standards for search engines (SEO), compliance with graphic design methods and user experience, application of the latest programming methods.",
    hide: '&#10114;',
    para2: " عملاء راضون ، قوى عاملة شابة وخبيرة ، خبرة عملية في جميع مجالات الويب ، التعاون مع المواقع العالمي الكبرى ، استقرار في مجال أنشطة تصميم مواقع الويب المتخصصة ، تصميم وبرمجة حصريين تمامًا وفقًا لاحتياجات العملاء ، أنظمة ذات عامل أمان عالية جدًا ومستقرة ، والامتثال لمعايير التحسين لمحركات البحث (SEO) ، والامتثال لأساليب التصميم الجرافيكي وتجربة المستخدم ، وتطبيق أحدث طرق البرمجة ، وتصميم وبرمجة  نظام بناء متجر عالمية بالكامل، باللغتين العربية والانجليزية. ",
    hide2: '&#10114;'
  },
  {
    para1: "Designing and programming worldwide web store building system in Arabic and English languages. And finally relying on the slogan that 'WE DON'T SAY NO TO THE CUSTOMER!' is one of the most special advantages of our company.",
    hide: '&#10115;',
    para2: ' شهادات الشكر من العملاء، هي فهمنى للعميل وإسواق الإنترنت، وشعارنا  "لا نقول لا للعميل!".',
    hide2: '&#10115;'
  },
];

let enList = document.querySelector('.english-list');
let arList = document.querySelector('.arabic-list');

const introApp = () => {
  introTxt.forEach((value) => {

    let liThree = document.createElement('li');
    liThree.classList.add("list");
    liThree.innerHTML = `
    <div class="paragraph">
      <div class="hidden">${value.hide}</div>
      <p>${value.para1}</p>
    </div>
    `;

    let liFour = document.createElement('li');
    liFour.classList.add("list");
    liFour.innerHTML = `
    <div class="paragraph" dir="rtl">
      <div class="hidden">${value.hide2}</div>
      <p>${value.para2}</p>
    </div>
    `;

    enList.appendChild(liThree);
    arList.appendChild(liFour);
  });
}

introApp();

/* toggle function */
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const langBox = document.querySelector("[data-lang-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(langBox);
  });
}