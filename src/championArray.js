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

const championArray = [
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
      traits: ['Dark Star', 'Protector'],
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
  ]

  export default championArray;