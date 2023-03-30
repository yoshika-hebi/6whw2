(()=>{
    // タブ
    // ここに命令を書く
    const $doc = document ;
    const $tab = $doc.getElementById('js-kinds');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]')
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    console.log($nav)

    // 初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    //クリックしたらおこるイベント
    const handleClick = (e) => {
        e.preventDefault();

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //対象外のnab,content全て一旦リセットする
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++
        }

        console.log('targetVal', targetVal)

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    // 全nav要素に対して関数を適応・発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    };


    //クラス
    class Accordion {
        // 初期化
        constructor(obj){

            console.log('obj', obj.hookName);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const $triggerLen = $trigger.length;
            let index = 0;
            while (index< $triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++
            }
        }

            //クリックされたら実行される処理
        clickHandler(e){
            e.preventDefault();

            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;


            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }

        }

    }

    // インスタンス
    const bbbAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'p'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'p'
    });

})()