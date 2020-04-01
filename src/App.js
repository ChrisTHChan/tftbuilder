import React from 'react';
import './App.css';
//champion portrait imports
import ahri from './assets/champions/Ahri.png'
import annie from './assets/champions/Annie.png'
import ashe from './assets/champions/Ashe.png'
import aurelionSol from './assets/champions/AurelionSol.png'
import blitzcrank from './assets/champions/Blitzcrank.png'
import caitlyn from './assets/champions/Caitlyn.png'
import chogath from './assets/champions/Chogath.png'
import darius from './assets/champions/Darius.png'
import ekko from './assets/champions/Ekko.png'
import ezreal from './assets/champions/Ezreal.png'
import fiora from './assets/champions/Fiora.png'
import fizz from './assets/champions/Fizz.png'
import gangplank from './assets/champions/Gangplank.png'
import graves from './assets/champions/Graves.png'
import irelia from './assets/champions/Irelia.png'
import jarvanIV from './assets/champions/JarvanIV.png'
import jayce from './assets/champions/Jayce.png'
import jhin from './assets/champions/Jhin.png'
import jinx from './assets/champions/Jinx.png'
import kaisa from './assets/champions/Kaisa.png'
import karma from './assets/champions/Karma.png'
import kassadin from './assets/champions/Kassadin.png'
import kayle from './assets/champions/Kayle.png'
import khazix from './assets/champions/Khazix.png'
import leona from './assets/champions/Leona.png'
import lucian from './assets/champions/Lucian.png'
import lulu from './assets/champions/Lulu.png'
import lux from './assets/champions/Lux.png'
import malphite from './assets/champions/Malphite.png'
import masterYi from './assets/champions/MasterYi.png'
import missFortune from './assets/champions/MissFortune.png'
import mordekaiser from './assets/champions/Mordekaiser.png'
import neeko from './assets/champions/Neeko.png'
import poppy from './assets/champions/Poppy.png'
import rakan from './assets/champions/Rakan.png'
import rumble from './assets/champions/Rumble.png'
import shaco from './assets/champions/Shaco.png'
import shen from './assets/champions/Shen.png'
import sona from './assets/champions/Sona.png'
import soraka from './assets/champions/Soraka.png'
import syndra from './assets/champions/Syndra.png'
import thresh from './assets/champions/Thresh.png'
import twistsedFate from './assets/champions/TwistedFate.png'
import velkoz from './assets/champions/Velkoz.png'
import vi from './assets/champions/Vi.png'
import wukong from './assets/champions/Wukong.png'
import xayah from './assets/champions/Xayah.png'
import xinZhao from './assets/champions/XinZhao.png'
import yasuo from './assets/champions/Yasuo.png'
import ziggs from './assets/champions/Ziggs.png'
import zoe from './assets/champions/Zoe.png'
//class icon imports
import starGuardian from './assets/classes/starguardian.png'
import sorcerer from './assets/classes/sorcerer.png'
import blademaster from './assets/classes/blademaster.png'
import blaster from './assets/classes/blaster.png'
import brawler from './assets/classes/brawler.png'
import celestial from './assets/classes/celestial.png'
import chrono from './assets/classes/chrono.png'
import cybernetic from './assets/classes/cybernetic.png'
import darkStar from './assets/classes/darkstar.png'
import demolitionist from './assets/classes/demolitionist.png'
import infiltrator from './assets/classes/infiltrator.png'
import manaReaver from './assets/classes/mana-reaver.png'
import mechPilot from './assets/classes/mechpilot.png'
import mercenary from './assets/classes/mercenary.png'
import mystic from './assets/classes/mystic.png'
import protector from './assets/classes/protector.png'
import rebel from './assets/classes/rebel.png'
import sniper from './assets/classes/sniper.png'
import spacePirate from './assets/classes/spacepirate.png'
import starShip from './assets/classes/starship.png'
import valkyrie from './assets/classes/valkyrie.png'
import vanguard from './assets/classes/vanguard.png'
import void1 from './assets/classes/void.png'
//item icon imports 
import blademasterSpat from './assets/items/blademaster.png' 
import bloodthirster from './assets/items/bloodthirster.png'
import brambleVest from './assets/items/brambleVest.png'
import celestialOrb from './assets/items/celestialOrb.png'
import chaliceOfFavor from './assets/items/chaliceOfFavor.png'
import darkStarsHeart from './assets/items/darkStarsHeart.png'
import deathblade from './assets/items/deathblade.png'
import demolitionistsCharge from './assets/items/demolitionistsCharge.png'
import dragonsClaw from './assets/items/dragonsClaw.png'
import forceOfNature from './assets/items/forceOfNature.png'
import frozenHeart from './assets/items/frozenHeart.png'
import giantSlayer from './assets/items/giantSlayer.png'
import guardianAngel from './assets/items/guardianAngel.png'
import guinsoosRageblade from './assets/items/guinsoosRageblade.png'
import handOfJustice from './assets/items/handOfJustice.png'
import hextechGunblade from './assets/items/hextechGunblade.png'
import infiltratorsTalons from './assets/items/infiltratorsTalons.png'
import infinityEdge from './assets/items/infinityEdge.png'
import ionicSpark from './assets/items/ionicSpark.png'
import jeweledGauntlet from './assets/items/jeweledGauntlet.png'
import lastWhisper from './assets/items/lastWhisper.png'
import locketOfTheIronSolari from './assets/items/locketOfTheIronSolari.png'
import ludensEcho from './assets/items/ludensEcho.png'
import morellonomicon from './assets/items/morellonomicon.png'
import protectorsChestguard from './assets/items/protectorsChestguard.png'
import quicksilver from './assets/items/quicksilver.png'
import rabadonsDeathcap from './assets/items/rabadonsDeathcap.png'
import rapidfireCannon from './assets/items/rapidfireCannon.png'
import rebelMedal from './assets/items/rebelMedal.png'
import redBuff from './assets/items/redBuff.png'
import redemption from './assets/items/redemption.png'
import runaansHurricane from './assets/items/runaansHurricane.png'
import seraphsEmbrace from './assets/items/seraphsEmbrace.png'
import shroudOfStillness from './assets/items/shroudOfStillness.png'
import spearOfShojin from './assets/items/spearOfShojin.png'
import starGuardiansCharm from './assets/items/starGuardiansCharm.png'
import statikkShiv from './assets/items/statikkShiv.png'
import swordBreaker from './assets/items/swordBreaker.png'
import thiefsGlove from './assets/items/thiefsGlove.png'
import titansResolve from './assets/items/titansResolve.png'
import trapClaw from './assets/items/trapClaw.png'
import warmogsArmor from './assets/items/warmogsArmor.png'
import zekesHerald from './assets/items/zekesHerald.png'
import zephyr from './assets/items/zephyr.png'
import zzrotPortal from './assets/items/zzrotPortal.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      championArray: [
        {
          name: 'Ahri',
          cost: 'two',
          traits: ['Star Guardian', 'Sorcerer'],
          originIcon: starGuardian,
          classIcon: sorcerer,
          imgSrc: ahri,
        },
        {
          name: 'Annie',
          cost: 'two',
          traits: ['Mech Pilot', 'Sorcerer'],
          originIcon: mechPilot,
          classIcon: sorcerer,
          imgSrc: annie,
        },
        {
          name: 'Ashe',
          cost: 'three',
          traits: ['Celestial', 'Sniper'],
          originIcon: celestial,
          classIcon: sniper,
          imgSrc: ashe,
        },
        {
          name: 'Aurelion Sol',
          cost: 'five',
          traits: ['Rebel', 'Starship'],
          originIcon: rebel,
          classIcon: starShip,
          imgSrc: aurelionSol,
        },
        {
          name: 'Blitzcrank',
          cost: 'two',
          traits: ['Chrono', 'Brawler'],
          originIcon: chrono,
          classIcon: brawler,
          imgSrc: blitzcrank,
        },
        {
          name: 'Caitlyn',
          cost: 'one',
          traits: ['Chrono', 'Sniper'],
          originIcon: chrono,
          classIcon: sniper,
          imgSrc: caitlyn,
        },
        {
          name: 'chogath',
          cost: 'four',
          traits: ['Void', 'Brawler'],
          originIcon: void1,
          classIcon: brawler,
          imgSrc: chogath,
        },
        {
          name: 'Darius',
          cost: 'two',
          traits: ['Space Pirate', 'Mana Reaver'],
          originIcon: spacePirate,
          classIcon: manaReaver,
          imgSrc: darius,
        },
        {
          name: 'Ekko',
          cost: 'five',
          traits: ['Cybernetic', 'Infiltrator'],
          originIcon: cybernetic,
          classIcon: infiltrator,
          imgSrc: ekko,
        },
        {
          name: 'Ezreal',
          cost: 'three',
          traits: ['Chrono', 'Blaster'],
          originIcon: chrono,
          classIcon: blaster,
          imgSrc: ezreal,
        },
        {
          name: 'Fiora',
          cost: 'one',
          traits: ['Cybernetic', 'Blademaster'],
          originIcon: cybernetic,
          classIcon: blademaster,
          imgSrc: fiora,
        },
        {
          name: 'Fizz',
          cost: 'four',
          traits: ['Mech Pilot', 'Infiltrator'],
          originIcon: mechPilot,
          classIcon: infiltrator,
          imgSrc: fizz,
        },
        {
          name: 'Gangplank',
          cost: 'five',
          traits: ['Space Pirate', 'Demolitionist', 'Mercenary'],
          originIcon: spacePirate,
          classIcon: demolitionist,
          class2Icon: mercenary,
          imgSrc: gangplank,
        },
        {
          name: 'Graves',
          cost: 'one',
          traits: ['Space Pirate', 'Blaster'],
          originIcon: spacePirate,
          classIcon: blaster,
          imgSrc: graves,
        },
        {
          name: 'Irelia',
          cost: 'four',
          traits: ['Cybernetic', 'Mana Reaver', 'Blademaster'],
          originIcon: cybernetic,
          classIcon: manaReaver,
          class2Icon: blademaster,
          imgSrc: irelia,
        },
        {
          name: 'JarvanIV',
          cost: 'one',
          traits: ['Darkstar', 'Protector'],
          originIcon: darkStar,
          classIcon: protector,
          imgSrc: jarvanIV,
        },
        {
          name: 'Jayce',
          cost: 'three',
          traits: ['Space Pirate', 'Vanguard'],
          originIcon: spacePirate,
          classIcon: vanguard,
          imgSrc: jayce,
        },
        {
          name: 'Jhin',
          cost: 'four',
          traits: ['Dark Star', 'Sniper'],
          originIcon: darkStar,
          classIcon: sniper,
          imgSrc: jhin,
        },
        {
          name: 'Jinx',
          cost: 'four',
          traits: ['Rebel', 'Blaster'],
          originIcon: rebel,
          classIcon: blaster,
          imgSrc: jinx,
        },
        {
          name: 'Kaisa',
          cost: 'two',
          traits: ['Valkyrie', 'Infiltrator'],
          originIcon: valkyrie,
          classIcon: infiltrator,
          imgSrc: kaisa,
        },
        {
          name: 'Karma',
          cost: 'three',
          traits: ['Dark Star', 'Mystic'],
          originIcon: darkStar,
          classIcon: mystic,
          imgSrc: karma,
        },
        {
          name: 'Kassadin',
          cost: 'three',
          traits: ['Celestial', 'Mana Reaver'],
          originIcon: celestial,
          classIcon: manaReaver,
          imgSrc: kassadin,
        },
        {
          name: 'Kayle',
          cost: 'four',
          traits: ['Valkyrie', 'Blademaster'],
          originIcon: valkyrie,
          classIcon: blademaster,
          imgSrc: kayle,
        },
        {
          name: 'Khazix',
          cost: 'one',
          traits: ['Void', 'Infiltrator'],
          originIcon: void1,
          classIcon: infiltrator,
          imgSrc: khazix,
        },
        {
          name: 'Leona',
          cost: 'one',
          traits: ['Cybernetic', 'Vanguard'],
          originIcon: cybernetic,
          classIcon: vanguard,
          imgSrc: leona,
        },
        {
          name: 'Lucian',
          cost: 'two',
          traits: ['Cybernetic', 'Blaster'],
          originIcon: cybernetic,
          classIcon: blaster,
          imgSrc: lucian,
        },
        {
          name: 'Lulu',
          cost: 'five',
          traits: ['Celestial', 'Mystic'],
          originIcon: celestial,
          classIcon: mystic,
          imgSrc: lulu,
        },
        {
          name: 'Lux',
          cost: 'three',
          traits: ['Dark Star', 'Sorcerer'],
          originIcon: darkStar,
          classIcon: sorcerer,
          imgSrc: lux,
        },
        {
          name: 'Malphite',
          cost: 'one',
          traits: ['Rebel', 'Brawler'],
          originIcon: rebel,
          classIcon: brawler,
          imgSrc: malphite,
        },
        {
          name: 'Master Yi',
          cost: 'three',
          traits: ['Rebel', 'Blademaster'],
          originIcon: rebel,
          classIcon: blademaster,
          imgSrc: masterYi,
        },
        {
          name: 'Miss Fortune',
          cost: 'five',
          traits: ['Valkyrie', 'Mercenary', 'Blaster'],
          originIcon: valkyrie,
          classIcon: mercenary,
          class2Icon: blaster,
          imgSrc: missFortune,
        },
        {
          name: 'Mordekaiser',
          cost: 'two',
          traits: ['Dark Star', 'Vanguard'],
          originIcon: darkStar,
          classIcon: vanguard,
          imgSrc: mordekaiser,
        },
        {
          name: 'Neeko',
          cost: 'three',
          traits: ['Star Guardian', 'Protector'],
          originIcon: starGuardian,
          classIcon: protector,
          imgSrc: neeko,
        },
        {
          name: 'Poppy',
          cost: 'one',
          traits: ['Star Guardian', 'Vanguard'],
          originIcon: starGuardian,
          classIcon: vanguard,
          imgSrc: poppy,
        },
        {
          name: 'Rakan',
          cost: 'two',
          traits: ['Celestial', 'Protector'],
          originIcon: celestial,
          classIcon: protector,
          imgSrc: rakan,
        },
        {
          name: 'Rumble',
          cost: 'three',
          traits: ['Mech Pilot', 'Demolitionist'],
          originIcon: mechPilot,
          classIcon: demolitionist,
          imgSrc: rumble,
        },
        {
          name: 'Shaco',
          cost: 'three',
          traits: ['Dark Star', 'Infiltrator'],
          originIcon: darkStar,
          classIcon: infiltrator,
          imgSrc: shaco,
        },
        {
          name: 'Shen',
          cost: 'two',
          traits: ['Chrono', 'Blademaster'],
          originIcon: chrono,
          classIcon: blademaster,
          imgSrc: shen,
        },
        {
          name: 'Sona',
          cost: 'two',
          traits: ['Rebel', 'Mystic'],
          originIcon: rebel,
          classIcon: mystic,
          imgSrc: sona,
        },
        {
          name: 'Soraka',
          cost: 'four',
          traits: ['Star Guardian', 'Mystic'],
          originIcon: starGuardian,
          classIcon: mystic,
          imgSrc: soraka,
        },
        {
          name: 'Syndra',
          cost: 'three',
          traits: ['Star Guardian', 'Sorcerer'],
          originIcon: starGuardian,
          classIcon: sorcerer,
          imgSrc: syndra,
        },
        {
          name: 'Thresh',
          cost: 'five',
          traits: ['Chrono', 'Mana Reaver'],
          originIcon: chrono,
          classIcon: manaReaver,
          imgSrc: thresh,
        },
        {
          name: 'Twisted Fate',
          cost: 'one',
          traits: ['Chrono', 'Sorcerer'],
          originIcon: chrono,
          classIcon: sorcerer,
          imgSrc: twistsedFate,
        },
        {
          name: 'VelKoz',
          cost: 'four',
          traits: ['Void', 'Sorcerer'],
          originIcon: void1,
          classIcon: sorcerer,
          imgSrc: velkoz,
        },
        {
          name: 'Vi',
          cost: 'three',
          traits: ['Cybernetic', 'Brawler'],
          originIcon: cybernetic,
          classIcon: brawler,
          imgSrc: vi,
        },
        {
          name: 'Wukong',
          cost: 'four',
          traits: ['Chrono', 'Vanguard'],
          originIcon: chrono,
          classIcon: vanguard,
          imgSrc: wukong,
        },
        {
          name: 'Xayah',
          cost: 'one',
          traits: ['Celestial', 'Blademaster'],
          originIcon: celestial,
          classIcon: blademaster,
          imgSrc: xayah,
        },
        {
          name: 'Xin Zhao',
          cost: 'two',
          traits: ['Celestial', 'Protector'],
          originIcon: celestial,
          classIcon: protector,
          imgSrc: xinZhao,
        },
        {
          name: 'Yasuo',
          cost: 'two',
          traits: ['Rebel', 'Blademaster'],
          originIcon: rebel,
          classIcon: blademaster,
          imgSrc: yasuo,
        },
        {
          name: 'Ziggs',
          cost: 'one',
          traits: ['Rebel', 'Demolitionist'],
          originIcon: rebel,
          classIcon: demolitionist,
          imgSrc: ziggs,
        },
        {
          name: 'Zoe',
          cost: 'one',
          traits: ['Star Guardian', 'Sorcerer'],
          originIcon: starGuardian,
          classIcon: sorcerer,
          imgSrc: zoe,
        },
      ],
      itemArray: [
        {
          name: 'Blade Of The Ruined King',
          imgSrc: blademasterSpat,
        },
        {
          name: 'Bloodthirster',
          imgSrc: bloodthirster,
        },
        {
          name: 'Bramble Vest',
          imgSrc: brambleVest,
        },
        {
          name: 'Celestial Orb',
          imgSrc: celestialOrb,
        },
        {
          name: 'Chalice Of Favor',
          imgSrc: chaliceOfFavor,
        },
        {
          name: 'Dark Stars Heart',
          imgSrc: darkStarsHeart,
        },
        {
          name: 'Deathblade',
          imgSrc: deathblade,
        },
        {
          name: 'Demolitionists Charge',
          imgSrc: demolitionistsCharge,
        },
        {
          name: 'Dragons Claw',
          imgSrc: dragonsClaw,
        },
        {
          name: 'Force Of Nature',
          imgSrc: forceOfNature,
        },
        {
          name: 'Frozen Heart',
          imgSrc: frozenHeart,
        },
        {
          name: 'Giant Slayer',
          imgSrc: giantSlayer,
        },
        {
          name: 'Guardian Angel',
          imgSrc: guardianAngel,
        },
        {
          name: 'Guinsoos Rageblade',
          imgSrc: guinsoosRageblade,
        },
        {
          name: 'Hand Of Justice',
          imgSrc: handOfJustice,
        },
        {
          name: 'Hextech Gunblade',
          imgSrc: hextechGunblade,
        },
        {
          name: 'Infiltrators Talons',
          imgSrc: infiltratorsTalons,
        },
        {
          name: 'Infinity Edge',
          imgSrc: infinityEdge,
        },
        {
          name: 'Ionic Spark',
          imgSrc: ionicSpark,
        },
        {
          name: 'Jeweled Gauntlet',
          imgSrc: jeweledGauntlet,
        },
        {
          name: 'Last Whisper',
          imgSrc: lastWhisper,
        },
        {
          name: 'Locket Of The Iron Solari',
          imgSrc: locketOfTheIronSolari,
        },
        {
          name: 'Ludens Echo',
          imgSrc: ludensEcho,
        },
        {
          name: 'Morellonomicon',
          imgSrc: morellonomicon,
        },
        {
          name: 'Protectors Chestguard',
          imgSrc: protectorsChestguard,
        },
        {
          name: 'Quicksilver',
          imgSrc: quicksilver,
        },
        {
          name: 'Rabadons Deathcap',
          imgSrc: rabadonsDeathcap,
        },
        {
          name: 'Rapidfire Cannon',
          imgSrc: rapidfireCannon,
        },
        {
          name: 'Rebel Medal',
          imgSrc: rebelMedal,
        },
        {
          name: 'Red Buff',
          imgSrc: redBuff,
        },
        {
          name: 'Redemption',
          imgSrc: redemption,
        },
        {
          name: 'Runaans Hurricane',
          imgSrc: runaansHurricane,
        },
        {
          name: 'Seraphs Embrace',
          imgSrc: seraphsEmbrace,
        },
        {
          name: 'Shroud of Stillness',
          imgSrc: shroudOfStillness,
        },
        {
          name: 'Spear Of Shojin',
          imgSrc: spearOfShojin,
        },
        {
          name: 'Star Guardians Charm',
          imgSrc: starGuardiansCharm,
        },
        {
          name: 'Statikk Shiv',
          imgSrc: statikkShiv,
        },
        {
          name: 'Sword Breaker',
          imgSrc: swordBreaker,
        },
        {
          name: 'Thiefs Glove',
          imgSrc: thiefsGlove,
        },
        {
          name: 'Titans Resolve',
          imgSrc: titansResolve,
        },
        {
          name: 'Trap Claw',
          imgSrc: trapClaw,
        },
        {
          name: 'Warmogs Armor',
          imgSrc: warmogsArmor,
        },
        {
          name: 'Zekes Herald',
          imgSrc: zekesHerald,
        },
        {
          name: 'Zephyr',
          imgSrc: zephyr,
        },
        {
          name: 'Zzrot Portal',
          imgSrc: zzrotPortal,
        },
      ],
      costFilter: '',
      classFilter: '',
      originFilter: '',
      synergyList: [],
      synergyCount: {},
      hexList: [
        {
          id: 0,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 1,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 2,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 3,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 4,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 5,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 6,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 7,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 8,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 9,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 10,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 11,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 12,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 13,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 14,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 15,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 16,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 17,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 18,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 19,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 20,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 21,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 22,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 23,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 24,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 25,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 26,
          currentChampion: null,
          currentItems: []
        },
        {
          id: 27,
          currentChampion: null,
          currentItems: []
        },
      ],
      indexOfHexWithMovingChampion: null,
      rightContainerState: 'champion',
    }
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  handleDragStart = (e, championName) => {
    e.dataTransfer.setData('championName', championName)
  }

  handleDragFromHexWithChampion = (e) => {
    this.setState({indexOfHexWithMovingChampion: e.target.id})
  }

  handleDropOnChampionList = () => {
    const newHexList = this.state.hexList
    const newChampionArray = this.state.championArray
    const newSynergyCount = this.state.synergyCount
    const newSynergyList = this.state.synergyList
    const indexOfChampion = (championToFind) => 
      newChampionArray.findIndex(champion => {
      return championToFind === champion
    })

    newHexList[this.state.indexOfHexWithMovingChampion].currentChampion.draggable = 'yes'
    newChampionArray[indexOfChampion(newHexList[this.state.indexOfHexWithMovingChampion].currentChampion)] = newHexList[this.state.indexOfHexWithMovingChampion].currentChampion
    this.setState({championArray: newChampionArray})

    if (newHexList[this.state.indexOfHexWithMovingChampion].currentChampion.traits) {
      newHexList[this.state.indexOfHexWithMovingChampion].currentChampion.traits.forEach(trait => {
        const indexOfTrait = newSynergyList.indexOf(trait)
        if (newSynergyList.includes(trait)) {
          newSynergyCount[trait] = newSynergyCount[trait] -1
          if (newSynergyCount[trait] === 0) {
            if (indexOfTrait > -1) {
              newSynergyList.splice(indexOfTrait, 1)
            }
          }
        }
      })
      this.setState({synergyList: newSynergyList})
      this.setState({synergyCount: newSynergyCount})
    }

    newHexList[this.state.indexOfHexWithMovingChampion].currentChampion = null
    this.setState({hexList: newHexList})

    this.setState({indexOfHexWithMovingChampion: null})
  }

  handleDropOnHex = (e) => {
    const newSynergyCount = this.state.synergyCount
    const newSynergyList = this.state.synergyList
    const newChampionArray = this.state.championArray
    const newHexList = this.state.hexList
    const championNameFromChampionList = e.dataTransfer.getData('championName')
    const championToAddFromChampionList = newChampionArray.filter(champion => {
      return champion.name === championNameFromChampionList
    })
    const indexOfChampion = (championToFind) => 
      newChampionArray.findIndex(champion => {
      return championToFind === champion
    })

    if (!this.state.indexOfHexWithMovingChampion) {
      //dragging from champion list
      championToAddFromChampionList[0].traits.forEach(trait => {
        if (newSynergyList.includes(trait)) {
          newSynergyCount[trait] = newSynergyCount[trait] + 1
        } else {
          newSynergyList.push(trait)
          newSynergyCount[trait] = 1
        }
      });
      this.setState({synergyList: newSynergyList})
      this.setState({synergyCount: newSynergyCount})

      if (newHexList[e.target.id].currentChampion) {
        newHexList[e.target.id].currentChampion.draggable = 'yes'
        newChampionArray[indexOfChampion(newHexList[e.target.id].currentChampion)] = newHexList[e.target.id].currentChampion
        this.setState({championArray: newChampionArray})
        //remove synergies of replaced champion
        if (newHexList[e.target.id].currentChampion.traits) {
          newHexList[e.target.id].currentChampion.traits.forEach(trait => {
            const indexOfTrait = newSynergyList.indexOf(trait)
            if (newSynergyList.includes(trait)) {
              newSynergyCount[trait] = newSynergyCount[trait] -1
              if (newSynergyCount[trait] === 0) {
                if (indexOfTrait > -1) {
                  newSynergyList.splice(indexOfTrait, 1)
                }
              }
            }
          })
          this.setState({synergyList: newSynergyList})
          this.setState({synergyCount: newSynergyCount})
        }
      }

      championToAddFromChampionList[0].draggable = 'no'
      newChampionArray[indexOfChampion(championToAddFromChampionList[0])] = championToAddFromChampionList[0]
      this.setState({championArray: newChampionArray})
  
      newHexList[e.target.id].currentChampion = championToAddFromChampionList[0]
      this.setState({hexList: newHexList})
      
    } else if (this.state.indexOfHexWithMovingChampion) {
      //dragging from an active hex
      const championToMoveFromHex = newHexList[this.state.indexOfHexWithMovingChampion].currentChampion
      newHexList[this.state.indexOfHexWithMovingChampion].currentChampion = newHexList[e.target.id].currentChampion
      newHexList[e.target.id].currentChampion = championToMoveFromHex
      this.setState({hexList: newHexList})
    }

    this.setState({indexOfHexWithMovingChampion: null})
  }

  setCostFilter = (e) => {
    this.setState({costFilter: e.target.value}, () => {console.log(this.state.costFilter)})
  }

  setOriginFilter = (e) => {
    this.setState({originFilter: e.target.value}, () => {console.log(this.state.originFilter)})
  }

  setClassFilter = (e) => {
    this.setState({classFilter: e.target.value}, () => {console.log(this.state.classFilter)})
  }
  
  displayChampionList = () => {
    this.setState({rightContainerState: 'champion'})
  }

  displayItemsList = () => {
    this.setState({rightContainerState: 'item'})
  }

  render() {
    const hexGridLoopArray = [0, 1, 2, 3, 4, 5, 6]
    let filteredChampionArray = this.state.championArray
    filteredChampionArray = filteredChampionArray.filter((champion) => {
      if (this.state.costFilter === '' && this.state.originFilter === '' && this.state.classFilter === '') {
        return this.state.championArray
      } else if (this.state.costFilter !== '' && this.state.originFilter === '' && this.state.classFilter === '') {
        return champion.cost === this.state.costFilter
      } else if (this.state.costFilter === '' && this.state.originFilter !== '' && this.state.classFilter === '') {
        return champion.traits[0] === this.state.originFilter
      } else if (this.state.costFilter === '' && this.state.originFilter === '' && this.state.classFilter !== '') {
        return champion.traits[1] === this.state.classFilter || champion.traits[2] === this.state.classFilter
      } else if (this.state.costFilter !== '' && this.state.originFilter !== '' && this.state.classFilter === '') {
        return champion.cost === this.state.costFilter && champion.traits[0] === this.state.originFilter 
      } else if (this.state.costFilter !== '' && this.state.originFilter === '' && this.state.classFilter !== '') {
        return champion.cost === this.state.costFilter && (this.state.classFilter === champion.traits[1] || this.state.classFilter === champion.traits[2])
      } else if (this.state.costFilter === '' && this.state.originFilter !== '' && this.state.classFilter !== '') {
        return champion.traits[0] === this.state.originFilter && (this.state.classFilter === champion.traits[1] || this.state.classFilter === champion.traits[2])
      } else {
        return champion.cost === this.state.costFilter && champion.traits[0] === this.state.originFilter && (this.state.classFilter === champion.traits[1] || this.state.classFilter === champion.traits[2])
      }
    })
    return (
      <div className='top-level-container'>
        <div className='left-container'>
          <div className='hex-grid'>
            <div className='hex-grid-row'>
              {
                hexGridLoopArray.map((index) => {
                  return (
                    <div class="hexagon"
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDropOnHex}
                    onDragStart={this.handleDragFromHexWithChampion}
                    id={index}
                    style={
                      this.state.hexList[index].currentChampion
                      ? 
                      {
                        backgroundImage: `url(${this.state.hexList[index].currentChampion.imgSrc})`,
                      }
                      :
                      {}
                    }
                    draggable
                    >
                      <div 
                      className='hex-item-icon'
                      style={{
                        backgroundImage: `url(${''})`
                      }}
                      />
                      <div 
                      className='hex-item-icon'
                      style={{
                        backgroundImage: `url(${''})`
                      }}
                      />
                      <div 
                      className='hex-item-icon'
                      style={{
                        backgroundImage: `url(${''})`
                      }}
                      />
                      <div class="hexTop" id={index}></div>
                      <div class="hexBottom" id={index}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row even'>
              {
                hexGridLoopArray.map((index) => {
                  return (
                    <div class="hexagon"
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDropOnHex}
                    onDragStart={this.handleDragFromHexWithChampion}
                    id={index + 7}
                    style={
                      this.state.hexList[index + 7].currentChampion
                      ? 
                      {
                        backgroundImage: `url(${this.state.hexList[index + 7].currentChampion.imgSrc})`,
                      }
                      :
                      {}
                    }
                    draggable
                    >
                      <div class="hexTop" id={index + 7}></div>
                      <div class="hexBottom" id={index + 7}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row'>
              {
                hexGridLoopArray.map((index) => {
                  return (
                    <div class="hexagon"
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDropOnHex}
                    onDragStart={this.handleDragFromHexWithChampion}
                    id={index + 14}
                    style={
                      this.state.hexList[index + 14].currentChampion
                      ? 
                      {
                        backgroundImage: `url(${this.state.hexList[index + 14].currentChampion.imgSrc})`,
                      }
                      :
                      {}
                    }
                    draggable
                    >
                      <div class="hexTop" id={index + 14}></div>
                      <div class="hexBottom" id={index + 14}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row even'>
              {
                hexGridLoopArray.map((index) => {
                  return (
                    <div class="hexagon"
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDropOnHex}
                    onDragStart={this.handleDragFromHexWithChampion}
                    id={index + 21}
                    style={
                      this.state.hexList[index + 21].currentChampion
                      ? 
                      {
                        backgroundImage: `url(${this.state.hexList[index + 21].currentChampion.imgSrc})`,
                      }
                      :
                      {}
                    }
                    draggable
                    >
                      <div class="hexTop" id={index + 21}></div>
                      <div class="hexBottom" id={index + 21}></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='team-info-container'>
            <p className='team-info-header'>Your Current Synergies:</p>
            <div className='team-info-member-container'>
              {
                this.state.synergyList.map(synergy => {
                  let threshold, level, iconImgSrc
                  if (synergy === 'Celestial' || synergy === 'Chrono' || synergy === 'Sorcerer') {
                    if (synergy === 'Celestial') {
                      iconImgSrc = celestial
                    } else if (synergy === 'Chrono') {
                      iconImgSrc = chrono
                    } else {
                      iconImgSrc = sorcerer
                    }
                    if (this.state.synergyCount[synergy] <= 2) {
                      threshold = 2
                      if (this.state.synergyCount[synergy] === 2) {
                        level = 'bronze'
                      }
                    } else if (this.state.synergyCount[synergy] <= 4) {
                      threshold = 4
                      if (this.state.synergyCount[synergy] === 3) {
                        level = 'bronze'
                      } else if (this.state.synergyCount[synergy] === 4) {
                        level = 'silver'
                      }
                    } else {
                      threshold = 6
                      if (this.state.synergyCount[synergy] === 5) {
                        level = 'silver'
                      } else {
                        level = 'gold'
                      }
                    }
                  } else if (synergy === 'Cybernetic' || synergy === 'Blademaster' || synergy === 'Dark Star' || synergy === 'Rebel' || synergy === 'Star Guardian' ) {
                    if (synergy === 'Cybernetic') {
                      iconImgSrc = cybernetic
                    } else if (synergy === 'Blademaster') {
                      iconImgSrc = blademaster
                    } else if (synergy === 'Dark Star') {
                      iconImgSrc = darkStar
                    } else if (synergy === 'Rebel') {
                      iconImgSrc = rebel 
                    } else {
                      iconImgSrc = starGuardian
                    }
                    if (this.state.synergyCount[synergy] <= 3) {
                      threshold = 3
                      if (this.state.synergyCount[synergy] === 3) {
                        level = 'bronze'
                      }
                    } else {
                      threshold = 6
                      if (this.state.synergyCount[synergy] <= 5) {
                        level = 'bronze'
                      } else {
                        level = 'gold'
                      }
                    }
                  } else if (synergy === 'Blaster' || synergy === 'Brawler' || synergy === 'Infiltrator' || synergy === 'Mana Reaver' || synergy === 'Space Pirate' || synergy === 'Mystic' || synergy === 'Protector' || synergy === 'Vanguard') {
                    if (synergy === 'Blaster') {
                      iconImgSrc = blaster
                    } else if (synergy === 'Brawler') {
                      iconImgSrc = brawler
                    } else if (synergy === 'Infiltrator') {
                      iconImgSrc = infiltrator
                    } else if (synergy === 'Mana Reaver') {
                      iconImgSrc = manaReaver
                    } else if (synergy === 'Space Pirate') {
                      iconImgSrc = spacePirate
                    } else if (synergy === 'Mystic') {
                      iconImgSrc = mystic
                    } else if (synergy === 'Protector') {
                      iconImgSrc = protector
                    } else {
                      iconImgSrc = vanguard
                    }
                    if (this.state.synergyCount[synergy] <= 2) {
                      threshold = 2
                      if (this.state.synergyCount[synergy] === 2) {
                        level = 'bronze'
                      }
                    } else {
                      threshold = 4
                      if (this.state.synergyCount[synergy] === 3) {
                        level = 'bronze'
                      } else {
                        level = 'gold'
                      }
                    }
                  } else if (synergy === 'Demolitionist' || synergy === 'Sniper' || synergy === 'Valkyrie') {
                    if (synergy === 'Demolitionist') {
                      iconImgSrc = demolitionist
                    } else if (synergy === 'Sniper') {
                      iconImgSrc = sniper
                    } else {
                      iconImgSrc = valkyrie
                    }
                    threshold = 2
                    if (this.state.synergyCount[synergy] >= 2) {
                      level = 'gold'
                    }
                  } else if (synergy === 'Void' || synergy === 'Mech Pilot') {
                    if (synergy === 'Void') {
                      iconImgSrc = void1
                    } else {
                      iconImgSrc = mechPilot
                    }
                    threshold = 3
                    if (this.state.synergyCount[synergy] >= 3) {
                      level = 'gold'
                    }
                  } else {
                    iconImgSrc = mercenary
                    threshold = 1
                    level = 'gold'
                  }
                  return (
                    <div className={`team-info-synergy-name ${level}`}>
                      <img className='team-info-synergy-icon' src={iconImgSrc} alt=''/> {synergy} {this.state.synergyCount[synergy]} {`/ ${threshold}`}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='right-container'>
          <div className='tab-container'>
            <button className='right-container-tab' onClick={this.displayChampionList}>Champions</button>
            <button className='right-container-tab' onClick={this.displayItemsList}>Items</button>
          </div>
          {
            this.state.rightContainerState === 'champion' 
            ? 
            (
              <div>
                <select className='champion-list-filter first' value={this.state.costFilter} onChange={this.setCostFilter}>
                  <option value=''></option>
                  <option value="one">1-Cost</option>
                  <option value="two">2-Cost</option>
                  <option value="three">3-Cost</option>
                  <option value="four">4-Cost</option>
                  <option value="five">5-Cost</option>
                </select>
                <select className='champion-list-filter ' value={this.state.originFilter} onChange={this.setOriginFilter}>
                  <option value=''></option>
                  <option value="Celestial">Celestial (2/4/6)</option>
                  <option value="Chrono">Chrono (2/4/6)</option>
                  <option value="Cybernetic">Cybernetic (3/6)</option>
                  <option value="Dark Star">Dark Star (3/6)</option>
                  <option value="Mech Pilot">Mech-Pilot (3)</option>
                  <option value="Rebel">Rebel (3/6)</option>
                  <option value="Space Pirate">Space Pirate (2/4</option>
                  <option value="Star Guardian">Star Guardian (3/6)</option>
                  <option value="Valkyrie">Valkyrie (2)</option>
                  <option value="Void">Void (3)</option>
                </select>
                <select className='champion-list-filter' value={this.state.classFilter} onChange={this.setClassFilter}>
                  <option value=''></option>
                  <option value="Blademaster">Blademaster (3/6)</option>
                  <option value="Blaster">Blaster (2/4)</option>
                  <option value="Brawler">Brawler (2/4)</option>
                  <option value="Demolitionist">Demolitionist (2)</option>
                  <option value="Infiltrator">Infiltrator (2/4)</option>
                  <option value="Mana Reaver">Mana-Reaver (2/4)</option>
                  <option value="Mercenary">Mercenary (1)</option>
                  <option value="Mystic">Mystic (2/4)</option>
                  <option value="Protector">Protector (2/4)</option>
                  <option value="Sniper">Sniper (2/4)</option>
                  <option value="Sorcerer">Sorcerer (2/4/6)</option>
                  <option value="Starship">Starship (1)</option>
                  <option value="Vanguard">Vanguard (2/4)</option>
                </select>
                <div 
                className='champion-list' 
                onDrop={this.handleDropOnChampionList} 
                onDragOver={this.handleDragOver}
                >
                  {filteredChampionArray.map(champion => {
                    return (
                      <div className='champion-list-box' key={champion.name}>
                        <img 
                        className={`champion-list-box-image ${champion.cost} ${champion.draggable === 'no' ? 'opaque' : ''}`} src={champion.imgSrc}
                        alt=''
                        draggable={champion.draggable === 'no' ? false : true}
                        onDragStart={(e) => this.handleDragStart(e, champion.name)}
                        />
                        <div className='champion-list-box-tag'>
                          <div>{champion.name}</div>
                          <div>
                            <img draggable={false} className='origin-icon' src={champion.originIcon} alt=''/>
                            <img draggable={false} className='origin-icon' src={champion.classIcon} alt=''/>
                            <img draggable={false} className='origin-icon' src={champion.class2Icon} alt=''/>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
            :
            (
              <div 
              className='item-list' 
              // onDrop={this.handleDropOnChampionList} 
              // onDragOver={this.handleDragOver}
              >
                {this.state.itemArray.map((item, i) => {
                  return (
                    <div className='item-list-box' key={i}>
                      <img 
                      className='item-list-box-image' src={item.imgSrc}
                      alt=''
                      // onDragStart={(e) => this.handleDragStart(e, champion.name)}
                      />
                      <div className='item-list-box-tag'>
                        <div>{item.name}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default App