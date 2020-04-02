//KNOWN BUGS:
//if you move a champ from the board to off the board (into no mans land) and then move a new champ from the list to a hex,
//the champ from no mans land will move to said hex instead of the new champ from the list

import React from 'react';
import './App.css';
import championArrayData from './championArray.js'
import itemArrayData from './itemArray.js'
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      championArray: championArrayData,
      itemArray: itemArrayData,
      costFilter: '',
      classFilter: '',
      originFilter: '',
      synergyList: [],
      synergyCount: {},
      hexList: [],
      areWeMovingItem: false,
      indexOfHexWithMovingChampion: null,
      rightContainerState: 'champion',
    }
  }

  componentWillMount() {
    this.clearAll()
  }

  clearAll = () => {
    let newHexList = []
    let freshChampionArray = this.state.championArray

    for (let i = 0; i < 29; i++) {
      newHexList.push({
        id: i,
        currentChampion: null,
        currentItems: []
      })
    }

    freshChampionArray.forEach((champion) => {
      champion.draggable = 'yes'
    })

    this.setState({championArray: freshChampionArray})
    this.setState({synergyList: []})
    this.setState({synergyCount: {}})
    this.setState({hexList: newHexList})
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }


  clearFilters = () => {
    this.setState({costFilter: ''})
    this.setState({classFilter: ''})
    this.setState({originFilter: ''})
  }


  handleDragStart = (e, championName) => {
    e.dataTransfer.setData('championName', championName)
  }


  handleDragFromHexWithChampion = (e) => {
    this.setState({indexOfHexWithMovingChampion: e.target.id})
  }


  handleDragFromItemList = (e, itemName) => {
    e.dataTransfer.setData('itemName', itemName)
    this.setState({areWeMovingItem: true})
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

    newHexList[this.state.indexOfHexWithMovingChampion].currentItems = []

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
    //champion list data
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
    //item list data
    const itemNameFromItemList = e.dataTransfer.getData('itemName')
    const itemToAddFromItemList = this.state.itemArray.filter(item => {
      return item.name === itemNameFromItemList
    })
    
    //adding items
    if (this.state.areWeMovingItem) {
      if (newHexList[e.target.id].currentItems.length < 3 && this.state.hexList[e.target.id].currentChampion) {
        newHexList[e.target.id].currentItems.push(itemToAddFromItemList[0])
        this.setState({hexList: newHexList})
      }
    } else {
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

        //when replacing a champ on an active hex with a champ from the list
        if (newHexList[e.target.id].currentChampion) {
          console.log(newHexList[e.target.id])
          newHexList[e.target.id].currentChampion.draggable = 'yes'
          newChampionArray[indexOfChampion(newHexList[e.target.id].currentChampion)] = newHexList[e.target.id].currentChampion
          this.setState({championArray: newChampionArray})
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
        const itemsToMoveFromHex = newHexList[this.state.indexOfHexWithMovingChampion].currentItems
        //exchange champs
        newHexList[this.state.indexOfHexWithMovingChampion].currentChampion = newHexList[e.target.id].currentChampion
        newHexList[e.target.id].currentChampion = championToMoveFromHex
        //exchange items
        newHexList[this.state.indexOfHexWithMovingChampion].currentItems = newHexList[e.target.id].currentItems
        newHexList[e.target.id].currentItems = itemsToMoveFromHex
        this.setState({hexList: newHexList})
      }
    }

    this.setState({indexOfHexWithMovingChampion: null})
    this.setState({areWeMovingItem: false})
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
                      id={index}
                      style={
                        this.state.hexList[index].currentItems[0]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index].currentItems[0].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index}
                      style={
                        this.state.hexList[index].currentItems[1]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index].currentItems[1].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index}
                      style={
                        this.state.hexList[index].currentItems[2]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index].currentItems[2].imgSrc})`,
                        }
                        :
                        {}
                      }
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
                      <div 
                      className='hex-item-icon'
                      id={index + 7}
                      style={
                        this.state.hexList[index + 7].currentItems[0]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 7].currentItems[0].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 7}
                      style={
                        this.state.hexList[index + 7].currentItems[1]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 7].currentItems[1].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 7}
                      style={
                        this.state.hexList[index + 7].currentItems[2]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 7].currentItems[2].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
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
                      <div 
                      className='hex-item-icon'
                      id={index + 14}
                      style={
                        this.state.hexList[index + 14].currentItems[0]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 14].currentItems[0].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 14}
                      style={
                        this.state.hexList[index + 14].currentItems[1]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 14].currentItems[1].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 14}
                      style={
                        this.state.hexList[index + 14].currentItems[2]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 14].currentItems[2].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
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
                      <div 
                      className='hex-item-icon'
                      id={index + 21}
                      style={
                        this.state.hexList[index + 21].currentItems[0]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 21].currentItems[0].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 21}
                      style={
                        this.state.hexList[index + 21].currentItems[1]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 21].currentItems[1].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
                      <div 
                      className='hex-item-icon'
                      id={index + 21}
                      style={
                        this.state.hexList[index + 21].currentItems[2]
                        ?
                        {
                          backgroundImage: `url(${this.state.hexList[index + 21].currentItems[2].imgSrc})`,
                        }
                        :
                        {}
                      }
                      />
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
                <div>
                  <button 
                  className='clear'
                  onClick={this.clearFilters}
                  >
                    Clear Filters
                  </button>
                  <button 
                  className='clear'
                  onClick={this.clearAll}
                  >
                    Clear Board
                  </button>
                </div>
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
              onDrop={this.handleDropOnChampionList}
              onDragOver={this.handleDragOver}
              >
                {this.state.itemArray.map((item, i) => {
                  return (
                    <div className='item-list-box' key={i}>
                      <img 
                      className='item-list-box-image' src={item.imgSrc}
                      alt=''
                      onDragStart={(e) => this.handleDragFromItemList(e, item.name)}
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