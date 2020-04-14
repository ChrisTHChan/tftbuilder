//THINGS I WANT TO ADD:
//sharing comps:
//encode the stringified json object into a url, and when the comp is saved, create a object property that saves that encodement
//and when the comp is brought up again, u can do it via taking the url and decoding it back into an object and display that.
//add information divs on hover for items and champions

import React from 'react';
import './App.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import championArrayData from './championArray.js'
import itemArrayData from './itemArray.js'
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
  documentData;
  constructor() {
    super()
    this.state = {
      championArray: championArrayData,
      itemArray: itemArrayData,
      savedComps: [],
      hexList: [],
      notesList: [],
      synergyList: [],
      synergyCount: {},
      uniqueItemList: [],
      costFilter: '',
      classFilter: '',
      originFilter: '',
      areWeMovingItem: false,
      indexesOfItemMovingOffOfHex: [],
      indexOfHexWithMovingChampion: null,
      rightContainerState: 'champion',
      noteBoxValue: '',
      compName: '',
      showHelpDialog: false,
      helpDialogTab: 0,
    }
  }

  componentWillMount() {
    this.clearAll()
  }


  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('savedComps'))
    if (localStorage.getItem('savedComps')) {
      this.setState({savedComps: this.documentData})
    }
  }


  saveComp = () => {
    let newSavedComps = [...this.state.savedComps]
    const nameUsed = newSavedComps.find(comp => {
      return comp.compName === this.state.compName
    })

    if (!nameUsed) {
      newSavedComps.push({
        compName: this.state.compName,
        hexList: this.state.hexList,
        notesList: this.state.notesList,
        synergyList: this.state.synergyList,
        synergyCount: this.state.synergyCount,
        uniqueItemList: this.state.uniqueItemList
      })
      
      localStorage.setItem('savedComps', JSON.stringify(newSavedComps))
      this.setState({savedComps: newSavedComps})
      this.setState({compName: ''})
      this.clearAll()
    } else {
      alert('Please use unique names for different comps.')
    }
  }


  displaySavedComp = (e) => {
    const newChampionArray = this.state.championArray
    const newSavedComps = [...this.state.savedComps]
    const spreadHexList = []
    const indexOfDesiredComp = newSavedComps.findIndex(comp => {
      return comp.compName === e.target.id
    })
    const desiredComp = newSavedComps[indexOfDesiredComp]

    this.clearAll()

      desiredComp.hexList.forEach(hex => {
      if (hex.currentChampion) {
        const index = newChampionArray.findIndex(champion => {
          return hex.currentChampion.name === champion.name
        })
        newChampionArray[index].draggable = 'no'
      }
    })

    desiredComp.hexList.forEach((hex, i) => {
      if (hex.currentChampion) {
        spreadHexList.push({
          id: i,
          currentChampion: {...hex.currentChampion},
          currentItems: [...hex.currentItems]
        })
      } else {
        spreadHexList.push({
          id: i,
          currentChampion: null,
          currentItems: [...hex.currentItems]
        })
      }
    })

    this.setState({championArray: newChampionArray})
    this.setState({notesList: [...desiredComp.notesList]})
    this.setState({synergyList: [...desiredComp.synergyList]})
    this.setState({synergyCount: {...desiredComp.synergyCount}})
    this.setState({hexList: spreadHexList})
    this.setState({uniqueItemList: [...desiredComp.uniqueItemList]})
  }


  deleteSavedComp = (e) => {
    const newSavedComps = this.state.savedComps
    const indexOfDesiredComp = newSavedComps.findIndex(comp => {
      return comp.compName === e.target.id
    })
    this.documentData = JSON.parse(localStorage.getItem('savedComps'))
    
    const deleteCheck = window.confirm('Do you really want to delete this comp?') 

    if (deleteCheck) {
      newSavedComps.splice(indexOfDesiredComp, 1)
      if (localStorage.getItem('savedComps')) {
        localStorage.setItem('savedComps', JSON.stringify(newSavedComps))
      }
      this.setState({savedComps: newSavedComps})
      this.clearAll()
    } else {
      return
    }
  }


  clearAll = () => {
    let newHexList = []
    let freshChampionArray = this.state.championArray

    for (let i = 0; i < 28; i++) {
      newHexList.push({
        id: i,
        currentChampion: null,
        currentItems: [],
        draggedOver: false,
      })
    }

    freshChampionArray.forEach((champion) => {
      champion.draggable = 'yes'
    })

    this.setState({championArray: freshChampionArray})
    this.setState({synergyList: []})
    this.setState({synergyCount: {}})
    this.setState({hexList: newHexList})
    this.setState({notesList: []})
    this.setState({uniqueItemList: []})
  }


  clearFilters = () => {
    this.setState({costFilter: ''})
    this.setState({classFilter: ''})
    this.setState({originFilter: ''})
  }


  clearItems = () => {
    let newHexList = this.state.hexList
    newHexList.forEach(hex => {
      hex.currentItems = []
    })
    this.setState({hexList: newHexList})
    this.setState({uniqueItemList: []})
  }


  handleDragOver = (e) => {
    e.preventDefault()
    const newHexList = this.state.hexList
    if (newHexList[e.target.id]) {
      if (!newHexList[e.target.id].draggedOver) {
        newHexList[e.target.id].draggedOver = true
        this.setState({hexList: newHexList})
      }
    }
  }


  handleDragLeave = (e) => {
    const newHexList = this.state.hexList
    if (newHexList[e.target.id].draggedOver) {
      newHexList[e.target.id].draggedOver = false
      this.setState({hexList: newHexList})
    }
  }


  handleDragStart = (e, championName) => {
    e.dataTransfer.setData('championName', championName)
  }


  endDragFromHexWithChampion = () => {
    this.setState({indexOfHexWithMovingChampion: null})
  }

  
  endDragFromItemList = () => {
    this.setState({areWeMovingItem: null})
  }


  dragItemOffOfChampion = (e, i) => {
    const indexesOfItemMovingOffOfHex = this.state.indexesOfItemMovingOffOfHex
    indexesOfItemMovingOffOfHex.push(e.target.id)
    indexesOfItemMovingOffOfHex.push(i)
    this.setState({indexesOfItemMovingOffOfHex: indexesOfItemMovingOffOfHex})
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
    const newUniqueItemList = this.state.uniqueItemList

    if (newHexList[this.state.indexOfHexWithMovingChampion]) {
      if (this.state.indexesOfItemMovingOffOfHex.length > 0) {
        //THIS IS NOT WORKING
        newUniqueItemList.splice(newUniqueItemList.findIndex(item => {
          return item.name === newHexList[this.state.indexesOfItemMovingOffOfHex[0]].currentItems[this.state.indexesOfItemMovingOffOfHex[1]].name
        }), 1)
        this.setState({uniqueItemList: newUniqueItemList})
        //THIS IS NOT WORKING
        newHexList[this.state.indexesOfItemMovingOffOfHex[0]].currentItems.splice(this.state.indexesOfItemMovingOffOfHex[1], 1)
      } else {
        newHexList[this.state.indexOfHexWithMovingChampion].currentChampion.draggable = 'yes'
        newChampionArray[indexOfChampion(newHexList[this.state.indexOfHexWithMovingChampion].currentChampion)] = newHexList[this.state.indexOfHexWithMovingChampion].currentChampion
        this.setState({championArray: newChampionArray})
        newHexList[this.state.indexOfHexWithMovingChampion].currentItems.forEach(item => {
          newUniqueItemList.splice(newUniqueItemList.findIndex(uniqueListItem => {
            return uniqueListItem.name === item.name
          }), 1)
        })
        this.setState({uniqueItemList: newUniqueItemList})
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
      }
    } else {
      return
    }

    this.setState({hexList: newHexList})

    this.setState({indexOfHexWithMovingChampion: null})
    this.setState({indexesOfItemMovingOffOfHex: []})
  }


  handleDropOnHex = (e) => {
    //champion list data
    const newSynergyCount = {...this.state.synergyCount}
    const newSynergyList = [...this.state.synergyList]
    const newChampionArray = [...this.state.championArray]
    const newHexList = [...this.state.hexList]
    const championNameFromChampionList = e.dataTransfer.getData('championName')
    const championToAddFromChampionList = newChampionArray.filter(champion => {
      return champion.name === championNameFromChampionList
    })
    const indexOfChampion = (championToFind) =>
      newChampionArray.findIndex(champion => {
      return championToFind.name === champion.name
    })
    //item list data
    const itemNameFromItemList = e.dataTransfer.getData('itemName')
    const itemToAddFromItemList = this.state.itemArray.filter(item => {
      return item.name === itemNameFromItemList
    })
    const newUniqueItemList = this.state.uniqueItemList
    //util function
    const arrayMove = (arr, fromIndex, toIndex) => {
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }
    
    //moving items from one champ to another
    if (this.state.indexesOfItemMovingOffOfHex.length > 0) {
      if (newHexList[e.target.id].currentItems.length < 3 && newHexList[e.target.id].currentChampion) {
        newHexList[e.target.id].currentItems.push(newHexList[this.state.indexesOfItemMovingOffOfHex[0]].currentItems[this.state.indexesOfItemMovingOffOfHex[1]])
        newHexList[this.state.indexesOfItemMovingOffOfHex[0]].currentItems.splice(this.state.indexesOfItemMovingOffOfHex[1], 1)
      }
    } else {
      //adding items
      if (this.state.areWeMovingItem) {
        newHexList[e.target.id].draggedOver = false
        if (newHexList[e.target.id].currentItems.length < 3 && newHexList[e.target.id].currentChampion) {
          newHexList[e.target.id].currentItems.push(itemToAddFromItemList[0])
          newUniqueItemList.push(itemToAddFromItemList[0])
          this.setState({uniqueItemList: newUniqueItemList})
        } else if (newHexList[e.target.id].currentItems.length === 3) {
          alert('Champions can only carry up to 3 items.')
        } else if (!newHexList[e.target.id].currentChampion) {
          alert('Items can only be added to a champion.')
        }
      } else {
        if (!this.state.indexOfHexWithMovingChampion) {
          //dragging from champion list
          championToAddFromChampionList[0].traits.forEach(trait => {
            if (newSynergyList.includes(trait)) {
              newSynergyCount[trait] = newSynergyCount[trait] + 1
              arrayMove(newSynergyList, newSynergyList.indexOf(trait), 0)
            } else {
              newSynergyList.push(trait)
              newSynergyCount[trait] = 1
            }
          });
          this.setState({synergyList: newSynergyList})
          this.setState({synergyCount: newSynergyCount})

          //when replacing a champ on an active hex with a champ from the list
          if (newHexList[e.target.id].currentChampion) {
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
            newHexList[e.target.id].currentItems = []
          }
    
          championToAddFromChampionList[0].draggable = 'no'
          newChampionArray[indexOfChampion(championToAddFromChampionList[0])] = championToAddFromChampionList[0]
          this.setState({championArray: newChampionArray})
      
          newHexList[e.target.id].currentChampion = championToAddFromChampionList[0]
          newHexList[e.target.id].draggedOver = false
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
    }

    this.setState({indexOfHexWithMovingChampion: null})
    this.setState({areWeMovingItem: false})
    this.setState({indexesOfItemMovingOffOfHex: []})
  }


  setCostFilter = (e) => {
    this.setState({costFilter: e.target.value})
  }


  setOriginFilter = (e) => {
    if (e.target.id) {
      this.setState({originFilter: e.target.id})
    } else {
      this.setState({originFilter: e.target.value})
    }
  }


  setClassFilter = (e) => {
    if (e.target.id) {
      this.setState({classFilter: e.target.id})
    } else {
      this.setState({classFilter: e.target.value})
    }
  }


  handleNoteBoxChange = (e) => {
    this.setState({noteBoxValue: e.target.value})
  }

  appendNote = () => {
    let newNotesList = this.state.notesList
    if (this.state.noteBoxValue) {
      newNotesList.push(this.state.noteBoxValue)
      this.setState({noteBoxValue: ''})
      this.setState({notesList: newNotesList})
    }
  }
  

  displayChampionList = () => {
    this.setState({rightContainerState: 'champion'})
  }


  displayItemsList = () => {
    this.setState({rightContainerState: 'item'})
  }

  displayNotes = () => {
    this.setState({rightContainerState: 'notes'})
  }

  displayComps = () => {
    this.setState({rightContainerState: 'comps'})
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
        <div className='middle-container'>
          <div className='team-info-container'>
            {
              this.state.synergyList.length === 0 
              ?
              <p className='team-info-header'>Active synergies will show here</p>
              :
              null
            }
            <div>
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
                  } else if (synergy === 'Mercenary') {
                    iconImgSrc = mercenary
                    threshold = 1
                    level = 'gold'
                  } else {
                    iconImgSrc = starShip
                    threshold = 1
                    level = 'gold'
                  }
                  return (
                    <div 
                    className={`team-info-synergy-name ${level}`}
                    id={synergy}
                    onClick={
                      synergy === 'celestial' ||
                      synergy === 'Chrono' ||
                      synergy === 'cybernetic' ||
                      synergy === 'Dark Star' ||
                      synergy === 'Mech Pilot' ||
                      synergy === 'Rebel' ||
                      synergy === 'Space Pirate' ||
                      synergy === 'Star Guardian' ||
                      synergy === 'Valkyrie' ||
                      synergy === 'Void' 
                      ? 
                      this.setOriginFilter
                      :
                      this.setClassFilter
                    }
                    >
                      <img className='team-info-synergy-icon' src={iconImgSrc} alt=''/> {synergy} {this.state.synergyCount[synergy]} {`/ ${threshold}`}
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='team-info-container'>
            {
              this.state.uniqueItemList.length === 0 
              ?
              <p className='team-info-header'>Item recipes will show here</p>
              :
              null
            }
            <div>
              {
                this.state.uniqueItemList.map(item => {
                  return (
                    <div>
                      <div className='item-recipe-header-text'>
                        {item.name}
                      </div>
                      <div>
                        <div className='item-recipe-sub-text'>
                          <img src={item.imgSrc} className='item-recipe-icons'/> = <img src={item.recipeImgSrces[0]} className='item-recipe-icons'/> + <img src={item.recipeImgSrces[1]} className='item-recipe-icons'/>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='left-container'>
          <div className='hex-grid'>
            <div className='hex-grid-row'>
              {
                hexGridLoopArray.map((index) => {
                  return (
                    <div className={`hexagon ${this.state.hexList[index].draggedOver ? 'dragged-over' : ''}`} 
                    onDragOver={this.handleDragOver}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDropOnHex}
                    onDragStart={
                      this.state.hexList[index].currentChampion
                      ? 
                      this.handleDragFromHexWithChampion
                      :
                      (e) => {e.preventDefault()}
                    }
                    onDragEnd={this.endDragFromHexWithChampion}
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
                    key={index}
                    > 
                      {
                        this.state.hexList[index].currentItems.map((item, i) => {
                          return (
                            <div
                            className='hex-item-icon'
                            onDragStart={(e) => this.dragItemOffOfChampion(e, i)}
                            id={index}
                            style={
                              this.state.hexList[index].currentItems[i]
                              ?
                              {
                                backgroundImage: `url(${item.imgSrc})`,
                                border: '0.5px solid black'
                              }
                              :
                              {}
                            }
                            draggable
                            />
                          )
                        })
                      }
                      <div className="hexTop" id={index}></div>
                      <div className="hexBottom" id={index}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row even'>
            {
                hexGridLoopArray.map((index) => {
                  return (
                    <div className={`hexagon ${this.state.hexList[index + 7].draggedOver ? 'dragged-over' : ''}`}
                    onDragOver={this.handleDragOver}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDropOnHex}
                    onDragStart={
                      this.state.hexList[index + 7].currentChampion 
                      ? 
                      this.handleDragFromHexWithChampion 
                      :
                      (e) => {e.preventDefault()}
                    }
                    onDragEnd={this.endDragFromHexWithChampion}
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
                    key={index + 7}
                    >
                      {
                        this.state.hexList[index + 7].currentItems.map((item, i) => {
                          return (
                            <div 
                            onDragStart={(e) => this.dragItemOffOfChampion(e, i)}
                            className='hex-item-icon'
                            id={index + 7}
                            style={
                              this.state.hexList[index + 7].currentItems[i]
                              ?
                              {
                                backgroundImage: `url(${item.imgSrc})`,
                                border: '0.5px solid black'
                              }
                              :
                              {}
                            }
                            draggable
                            />
                          )
                        })
                      }
                      <div className="hexTop" id={index + 7}></div>
                      <div className="hexBottom" id={index + 7}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row'>
            {
                hexGridLoopArray.map((index) => {
                  return (
                    <div className={`hexagon ${this.state.hexList[index + 14].draggedOver ? 'dragged-over' : ''}`}
                    onDragOver={this.handleDragOver}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDropOnHex}
                    onDragStart={
                      this.state.hexList[index + 14].currentChampion 
                      ? 
                      this.handleDragFromHexWithChampion 
                      :
                      (e) => {e.preventDefault()}
                    }
                    onDragEnd={this.endDragFromHexWithChampion}
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
                    key={index + 14}
                    >
                      {
                        this.state.hexList[index + 14].currentItems.map((item, i) => {
                          return (
                            <div 
                            onDragStart={(e) => this.dragItemOffOfChampion(e, i)}
                            className='hex-item-icon'
                            id={index + 14}
                            style={
                              this.state.hexList[index + 14].currentItems[i]
                              ?
                              {
                                backgroundImage: `url(${item.imgSrc})`,
                                border: '0.5px solid black'
                              }
                              :
                              {}
                            }
                            draggable
                            />
                          )
                        })
                      }
                      
                      <div className="hexTop" id={index + 14}></div>
                      <div className="hexBottom" id={index + 14}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className='hex-grid-row even'>
            {
                hexGridLoopArray.map((index) => {
                  return (
                    <div className={`hexagon ${this.state.hexList[index + 21].draggedOver ? 'dragged-over' : ''}`}
                    onDragOver={this.handleDragOver}
                    onDragLeave={this.handleDragLeave}
                    onDrop={this.handleDropOnHex}
                    onDragStart={
                      this.state.hexList[index + 21].currentChampion 
                      ? 
                      this.handleDragFromHexWithChampion 
                      :
                      (e) => {e.preventDefault()}
                    }
                    onDragEnd={this.endDragFromHexWithChampion}
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
                    key={index + 21}
                    >
                      {
                        this.state.hexList[index + 21].currentItems.map((item, i) => {
                          return (
                            <div 
                            onDragStart={(e) => this.dragItemOffOfChampion(e, i)}
                            className='hex-item-icon'
                            id={index + 21}
                            style={
                              this.state.hexList[index + 21].currentItems[i]
                              ?
                              {
                                backgroundImage: `url(${item.imgSrc})`,
                                border: '0.5px solid black'
                              }
                              :
                              {}
                            }
                            draggable
                            />
                          )
                        })
                      }
                      <div className="hexTop" id={index + 21}></div>
                      <div className="hexBottom" id={index + 21}></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='notes-container'>
            <p className='notes-container-header'>Notes for this Comp:</p>
            <ol>
              {this.state.notesList.map(note => {
                return <li className='notes-container-note'>{note}</li>
              })}
            </ol>
          </div>
        </div>
        <div className='right-container'>
          <div className='tab-container'>
            <button className={`right-container-tab ${this.state.rightContainerState === 'champion' ? 'active' : 'null'}`} onClick={this.displayChampionList}>Champions</button>
            <button className={`right-container-tab ${this.state.rightContainerState === 'item' ? 'active' : 'null'}`} onClick={this.displayItemsList}>Items</button>
            <button className={`right-container-tab ${this.state.rightContainerState === 'notes' ? 'active' : 'null'}`} onClick={this.displayNotes}>Notes</button>
            <button className={`right-container-tab ${this.state.rightContainerState === 'comps' ? 'active' : 'null'}`} onClick={this.displayComps}>Comps</button>
            <button 
            className='right-container-info-tab'
            onClick={() => {this.setState({showHelpDialog: true})}}
            >i</button>
            <Dialog
            //change this dialog to a standardized height
            open={this.state.showHelpDialog}
            onClose={() => {this.setState({showHelpDialog: false})}}
            >
              <div className='help-dialog-tab-container'>
                <button 
                onClick={() => {this.setState({helpDialogTab: 0})}}
                className={`help-dialog-tab-button ${this.state.helpDialogTab === 0 ? 'active' : null}`}>
                  Instructions
                </button>
                <button 
                onClick={() => {this.setState({helpDialogTab: 1})}}
                className={`help-dialog-tab-button ${this.state.helpDialogTab === 1 ? 'active' : null}`}>
                  Latest Release Notes
                </button>
              </div>
              {
                this.state.helpDialogTab === 0 
                ?
                <DialogContent>
                  <DialogTitle>
                    How to use TFTbuilder:
                  </DialogTitle>
                  <DialogContent>
                    You can add items and champions by dragging the respective image of what you want over to the
                    hex you want it in. You can also remove champions by moving them from the hex their currently
                    residing in to the list on the right.
                  </DialogContent>
                  <DialogContent>
                    Under the notes section you can look to add specific informative tid-bits about the team composition
                    you are creating, so that when you get into game you can remind yourself about what you
                    need to do to succeed.
                  </DialogContent>
                  <DialogContent>
                    Once you are done, you can go to the comps tab to save your current composition, as well as view and delete
                    other compositions you have already built. Your comps will still be here even when you leave the site,
                    so don't worry about losing them!
                  </DialogContent>
                  <DialogContent>
                    This tool can be used to consolidate all the information you find on other sites about all the
                    current meta compositions, so that you can have all the information you need during your game in one 
                    convenient spot, no matter what items or champions you're given. You can also build upon comps that you've
                    already saved! Please enjoy this tool, and I hope you find great use with it!
                  </DialogContent>
                </DialogContent>
                :
                <DialogContent>
                  <DialogTitle>
                    Latest Feature Updates:
                  </DialogTitle>
                  <DialogContent>
                    - You can now filter by way of clicking on your current synergies.
                  </DialogContent>
                  <DialogContent>
                    - Item Recipes are here! You can see the recipe of every item on your board now.
                  </DialogContent>
                  <DialogContent>
                    - You can now move items off and to and from hexes.
                  </DialogContent>
                  <DialogContent>
                    Please make note that some of these changes will only be applied to new comps you create, so
                    if you have any current comps, you will have to remake them to receive some of these changes.
                  </DialogContent>
                </DialogContent>
              }
            </Dialog>
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
                      <div className={`champion-list-box ${champion.draggable === 'no' ? '' : 'draggable-item'}`} key={champion.name}>
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
            null
          }
          {
            this.state.rightContainerState === 'item'
            ?
            (
              <div>
                <div>
                  <button 
                  className='clear-items'
                  onClick={this.clearItems}
                  >
                    Clear Items
                  </button>
                </div>
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
                        onDragEnd={this.endDragFromItemList}
                        />
                        <div className='item-list-box-tag'>
                          <div>{item.name}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              )
              :
              null
          }
          {
            this.state.rightContainerState === 'notes' 
            ?
            (
              <div
              onDrop={this.handleDropOnChampionList}
              onDragOver={this.handleDragOver}
              >
                <textarea 
                className='add-note-box' 
                value={this.state.noteBoxValue}
                onChange={this.handleNoteBoxChange}
                ></textarea>
                <button 
                className='add-note-button'
                onClick={this.appendNote}
                >Add Note</button>
                <button className='add-note-button'
                onClick={() => {this.setState({notesList: []})}}
                >
                  Clear All Notes
                </button>
              </div>
            )
            :
            null
          }
          {
            this.state.rightContainerState === 'comps'
            ?
            (
              <div
              onDrop={this.handleDropOnChampionList}
              onDragOver={this.handleDragOver}
              >
                <input
                className='save-comp-name-input'
                placeholder='Enter your comps name'
                value={this.state.compName}
                onChange={(e) => {this.setState({compName: e.target.value})}}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' && this.state.compName) {
                    this.saveComp()
                  }
                }}
                />
                <button
                className={!this.state.compName ? 'save-comp-button-inactive' : 'save-comp-button-active'}
                onClick={this.saveComp}
                disabled={
                  !this.state.compName ? true : false
                }
                >
                  Save Current Comp
                </button>
                {this.state.savedComps.length === 0 
                ?
                <div
                className='comp-list-empty-message'
                >
                  You currently have no saved comps.
                </div>
                :
                this.state.savedComps.map(comp => {
                  return (
                    <div
                    className='comp-list-comp-container'
                    key={comp.compName}
                    >
                      <div 
                      id={comp.compName}
                      onClick={this.displaySavedComp}
                      className='comp-list-comp'
                      > 
                        {comp.compName}
                      </div>
                      <button
                      className='comp-list-delete-button'
                      onClick={this.deleteSavedComp}
                      id={comp.compName}
                      >
                        Delete
                      </button>
                    </div>
                  )
                })
                }
              </div>
            )
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default App