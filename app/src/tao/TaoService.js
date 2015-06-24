(function(){
  'use strict';

  angular.module('tao')
         .service('taoService', ['$q', TaoService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAllTao: Function}}
   * @constructor
   */
  function TaoService($q){
    var tao = [
      {
        chapter: 'Chapter One',
        avatar: 'svg-yin_yang',
        content: 'Tao (The Way) that can be spoken of is not the Constant Tao.\nThe name that can be named is not a Constant Name. Nameless, is the origin of Heaven and Earth;\nThe named is the Mother of all things.\nThus, the constant void enables one to observe the true essence.\nThe constant being enables one to see the outward manifestations.\nThese two come paired from the same origin.\nBut when the essence is manifested,\nIt has a different name.\nThis same origin is called “The Profound Mystery.”\nAs profound the mystery as It can be,\nIt is the Gate to the essence of all life. '
      },
      {
        chapter: 'Chapter Two',
        avatar: 'svg-yin_yang',
        content: 'As soon as beauty is known by the world as beautiful, it becomes ugly.\nAs soon as virtue is being known as something good, it becomes evil.\nTherefore being and non-being give birth to each other.\nDifficult and easy accomplish each other.\nLong and short form each other.\nHigh and low distinguish each other.\nSound and tone harmonize each other\nBefore and after follow each other as a sequence.\nRealizing this, the saint performs effortlessly according to the natural Way without personal\ndesire, and practices the wordless teaching thru one’s deeds.\nThe saint inspires the vitality of all lives, without holding back.\nHe nurtures all beings with no wish to take possession of.\nHe devotes all his energy but has no intention to hold on to the merit.\nWhen success is achieved, he seeks no recognition.\nBecause he does not claim for the credit, hence shall not lose it.'
      },
      {
        chapter: 'Chapter Three',
        avatar: 'svg-yin_yang',
        content: 'By not adoring the worthy, people will not fall into dispute.\nBy not valuing the hard to get objects, people will not become robbers.\nBy not seeing the desires of lust, one’s heart will not be confused.\nTherefore the governing of the saint is to empty one’s mind, substantiate one’s virtue, weaken\none’s worldly ambition and strengthen one’s essence.\nHe lets the people to be innocent of worldly knowledge and desire, and keeps the clever ones\nfrom making trouble with their wits.\nActs naturally without desire, then everything will be accomplished in its natural order.'
      },
      {
        chapter: 'Chapter Four',
        avatar: 'svg-yin_yang',
        content: 'Tao (The Way) can be infused into the nature and put to use without being exhausted.\nIt is so deep and subtle like an abyss that is the origin of all things.\nIt is complete and perfect as a wholeness that can\nRound off sharp edges;\nResolve confusion;\nHarmonize with the glory;\nAct in unity with the lowliness.\nTao is so profound and yet in invisible, It exists in everywhere and anywhere.\nI don not know whose Son It is, It existed before heaven and earth.'
      },
      {
        chapter: 'Chapter Five',
        avatar: 'svg-yin_yang',
        content: 'Nature nurtures all things with the wholeness of complete virtue.\nIt shows the greatest and perfect kindness by giving life to let all things grow and accomplish\nthem with the hastening of harvest.\nTherefore, according to ancient custom, nature may seem unkind to regard all beings as a\ntraditional straw dog for sacrifice.\nAnd likewise with a saint, he may seem unkind to regard people as a traditional straw dog for\nsacrifice.\nThe space between heaven and earth is like the bellows, it appears empty yet it gives a supply\nthat never fails;\nThe more it moves, the more it brings forth.\nMany words lead to exhaustion.\nIt is better to center on the true essence within.'
      }
    ];

    // Promise-based API
    return {
      loadAllTao : function() {
        // Simulate async nature of real remote calls
        return $q.when(tao);
      }
    };
  }

})();
