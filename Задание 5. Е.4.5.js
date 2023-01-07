Задание 5. Е4.5


class Device {
  constructor(power, plugIn) {
  this.typeDevice = 'Beauty';
  this.power = power;
  this.plugIn = plugIn
  
  }
  getPlugIn(){
    console.log(`Power source: ${this.plugIn}`)
  }
}


class Hairdryer extends Device {
  constructor(speed, heat, attachments, power, plugIn) {
  super(power, plugIn);
  super.getPlugIn();
  this.hairTypes = 'All hair types';
  this.speedSettings = speed;
  this.heatSettings = heat;
  this.attachments = attachments
  
  }
  getAttachmentsHairdryer(){
    console.log(`${this.attachments} attachments to style different hair types`)
  }
  
}
   
class Curling extends Device {
  constructor(temperature, diameter, coated, power, plugIn) {
  super(power, plugIn);
  super.getPlugIn();
  this.hairTexture = 'Fine, Medium, and Thick';
  this.diameterCurl = diameter;
  this.coatedCurl = coated;
  this.temperature = temperature
  
  }
  getMaxTemp(){
    console.log(`Preset to ${this.temperature}°F for optimal styling without extreme heat`)
  }
}


const tefal = new Hairdryer(2, 2, 5, 1850, 'Corded Electric')

const revlon = new Hairdryer( 3, 2, 3, 1600, 'Corded Electric')

const dyson = new Curling(350, 32, 'ceramic', 90, 'Battery Powered')

const babyliss = new Curling(210, 38, 'titanium', 63, 'Corded Electric')


console.log(tefal)

console.log(revlon)

console.log(dyson)

console.log(babyliss)









