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
//item component imports
import bfsword from './assets/item-components/BFSword.png'
import chainvest from './assets/item-components/ChainVest.png'
import giantsbelt from './assets/item-components/GiantsBelt.png'
import needlessslylargerod from './assets/item-components/NeedlesslyLargeRod.png'
import negatroncloak from './assets/item-components/NegatronCloak.png'
import recurvebow from './assets/item-components/RecurveBow.png'
import sparringgloves from './assets/item-components/SparringGloves.png'
import spatula from './assets/item-components/Spatula.png'
import tearofthegoddess from './assets/item-components/TearoftheGoddess.png'

const itemArray = [
    {
      name: 'Blade Of The Ruined King',
      imgSrc: blademasterSpat,
      recipeImgSrces: [bfsword, spatula]
    },
    {
      name: 'Bloodthirster',
      imgSrc: bloodthirster,
      recipeImgSrces: [bfsword, negatroncloak]
    },
    {
      name: 'Bramble Vest',
      imgSrc: brambleVest,
      recipeImgSrces: [chainvest, chainvest]
    },
    {
      name: 'Celestial Orb',
      imgSrc: celestialOrb,
      recipeImgSrces: [negatroncloak, spatula]
    },
    {
      name: 'Chalice Of Favor',
      imgSrc: chaliceOfFavor,
      recipeImgSrces: [negatroncloak, tearofthegoddess]
    },
    {
      name: 'Dark Stars Heart',
      imgSrc: darkStarsHeart,
      recipeImgSrces: [sparringgloves, spatula]
    },
    {
      name: 'Deathblade',
      imgSrc: deathblade,
      recipeImgSrces: [bfsword, bfsword]
    },
    {
      name: 'Demolitionists Charge',
      imgSrc: demolitionistsCharge,
      recipeImgSrces: [needlessslylargerod, spatula]
    },
    {
      name: 'Dragons Claw',
      imgSrc: dragonsClaw,
      recipeImgSrces: [negatroncloak, negatroncloak]
    },
    {
      name: 'Force Of Nature',
      imgSrc: forceOfNature,
      recipeImgSrces: [spatula, spatula]
    },
    {
      name: 'Frozen Heart',
      imgSrc: frozenHeart,
      recipeImgSrces: [chainvest, tearofthegoddess]
    },
    {
      name: 'Giant Slayer',
      imgSrc: giantSlayer,
      recipeImgSrces: [bfsword, recurvebow]
    },
    {
      name: 'Guardian Angel',
      imgSrc: guardianAngel,
      recipeImgSrces: [bfsword, chainvest]
    },
    {
      name: 'Guinsoos Rageblade',
      imgSrc: guinsoosRageblade,
      recipeImgSrces: [recurvebow, needlessslylargerod]
    },
    {
      name: 'Hand Of Justice',
      imgSrc: handOfJustice,
      recipeImgSrces: [sparringgloves, tearofthegoddess]
    },
    {
      name: 'Hextech Gunblade',
      imgSrc: hextechGunblade,
      recipeImgSrces: [bfsword, needlessslylargerod]
    },
    {
      name: 'Infiltrators Talons',
      imgSrc: infiltratorsTalons,
      recipeImgSrces: [recurvebow, spatula]
    },
    {
      name: 'Infinity Edge',
      imgSrc: infinityEdge,
      recipeImgSrces: [bfsword, sparringgloves]
    },
    {
      name: 'Ionic Spark',
      imgSrc: ionicSpark,
      recipeImgSrces: [negatroncloak, needlessslylargerod]
    },
    {
      name: 'Jeweled Gauntlet',
      imgSrc: jeweledGauntlet,
      recipeImgSrces: [sparringgloves, needlessslylargerod]
    },
    {
      name: 'Last Whisper',
      imgSrc: lastWhisper,
      recipeImgSrces: [recurvebow, sparringgloves]
    },
    {
      name: 'Locket Of The Iron Solari',
      imgSrc: locketOfTheIronSolari,
      recipeImgSrces: [chainvest, needlessslylargerod]
    },
    {
      name: 'Ludens Echo',
      imgSrc: ludensEcho,
      recipeImgSrces: [needlessslylargerod, tearofthegoddess]
    },
    {
      name: 'Morellonomicon',
      imgSrc: morellonomicon,
      recipeImgSrces: [needlessslylargerod, giantsbelt]
    },
    {
      name: 'Protectors Chestguard',
      imgSrc: protectorsChestguard,
      recipeImgSrces: [giantsbelt, spatula]
    },
    {
      name: 'Quicksilver',
      imgSrc: quicksilver,
      recipeImgSrces: [sparringgloves, negatroncloak]
    },
    {
      name: 'Rabadons Deathcap',
      imgSrc: rabadonsDeathcap,
      recipeImgSrces: [needlessslylargerod, needlessslylargerod]
    },
    {
      name: 'Rapidfire Cannon',
      imgSrc: rapidfireCannon,
      recipeImgSrces: [recurvebow, recurvebow]
    },
    {
      name: 'Rebel Medal',
      imgSrc: rebelMedal,
      recipeImgSrces: [chainvest, spatula]
    },
    {
      name: 'Red Buff',
      imgSrc: redBuff,
      recipeImgSrces: [giantsbelt, chainvest]
    },
    {
      name: 'Redemption',
      imgSrc: redemption,
      recipeImgSrces: [giantsbelt, tearofthegoddess]
    },
    {
      name: 'Runaans Hurricane',
      imgSrc: runaansHurricane,
      recipeImgSrces: [recurvebow, negatroncloak]
    },
    {
      name: 'Seraphs Embrace',
      imgSrc: seraphsEmbrace,
      recipeImgSrces: [tearofthegoddess, tearofthegoddess]
    },
    {
      name: 'Shroud of Stillness',
      imgSrc: shroudOfStillness,
      recipeImgSrces: [chainvest, sparringgloves]
    },
    {
      name: 'Spear Of Shojin',
      imgSrc: spearOfShojin,
      recipeImgSrces: [bfsword, tearofthegoddess]
    },
    {
      name: 'Star Guardians Charm',
      imgSrc: starGuardiansCharm,
      recipeImgSrces: [tearofthegoddess, spatula]
    },
    {
      name: 'Statikk Shiv',
      imgSrc: statikkShiv,
      recipeImgSrces: [recurvebow, tearofthegoddess]
    },
    {
      name: 'Sword Breaker',
      imgSrc: swordBreaker,
      recipeImgSrces: [chainvest, negatroncloak]
    },
    {
      name: 'Thiefs Glove',
      imgSrc: thiefsGlove,
      recipeImgSrces: [sparringgloves, sparringgloves]
    },
    {
      name: 'Titans Resolve',
      imgSrc: titansResolve,
      recipeImgSrces: [recurvebow, chainvest]
    },
    {
      name: 'Trap Claw',
      imgSrc: trapClaw,
      recipeImgSrces: [giantsbelt, sparringgloves]
    },
    {
      name: 'Warmogs Armor',
      imgSrc: warmogsArmor,
      recipeImgSrces: [giantsbelt, giantsbelt]
    },
    {
      name: 'Zekes Herald',
      imgSrc: zekesHerald,
      recipeImgSrces: [giantsbelt, bfsword]
    },
    {
      name: 'Zephyr',
      imgSrc: zephyr,
      recipeImgSrces: [giantsbelt, negatroncloak]
    },
    {
      name: 'Zzrot Portal',
      imgSrc: zzrotPortal,
      recipeImgSrces: [recurvebow, giantsbelt]
    },
  ]

  export default itemArray