Задание 4. Е4.4

function Device(power, plugIn){
  this.typeDevice = 'Beauty',
  this.powerConsumption =  power 
  this.getPlugIn = function (){
    console.log(`Power source: ${plugIn}`)
  }
}




function Hairdryer(power, plugIn, speed, heat, attachments){
  this.hairTypes = 'All hair types',
  this.powerConsumption =  power,
  this.getPlugIn = function (){
    console.log(`Power source: ${plugIn}`)
  },
  this.speedSettings = speed,
  this.heatSettings = heat,
  this.getAttachmentsHairdryer = function(){
    console.log(`${attachments} attachments to style different hair types`)
  }
}
  
  

function Curling(power, plugIn, temperature, diameter, coated){
  this.powerConsumption =  power,
  this.getPlugIn = function (){
    console.log(`Power source: ${plugIn}`)
  },
  this.hairTexture = 'Fine, Medium, and Thick',
  this.getMaxTemp = function(){
    console.log(`Preset to ${temperature}°F for optimal styling without extreme heat`)
  },
  this.diameterCurl = diameter,
  this.coatedCurl = coated
}

Hairdryer.prototype = new Device()

Curling.prototype = new Device()



const tefal = new Hairdryer(1850, 'Corded Electric', 2, 2, 5)

const revlon = new Hairdryer(1600, 'Corded Electric', 3, 2, 3)

const dyson = new Curling(90, 'Battery Powered', 350, 32, 'ceramic')

const babyliss = new Curling(64, 'Corded Electric', 210, 38, 'titanium')


console.log(tefal)

console.log(revlon)

console.log(dyson)

console.log(babyliss)


